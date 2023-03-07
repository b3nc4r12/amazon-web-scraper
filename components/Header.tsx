"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"
import { FormEvent, useRef } from "react"
import toast from "react-hot-toast"

const Header = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const input = inputRef.current?.value

        if (!input) return

        const notification = toast.loading(`Starting a scraper for: ${input}`);

        inputRef.current.value = ""

        try {
            const res = await fetch("/api/activate-scraper", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ search: input })
            })

            const { collection_id, start_eta } = await res.json();

            toast.success(`Scraper started successfully!`, { id: notification });
            router.push(`/search/${collection_id}`);
        } catch (error) {
            toast.error("Whoops! Something went wrong!", { id: notification });
        }
    }

    return (
        <header>
            <form
                onSubmit={handleSearch}
                className="flex items-center justify-center space-x-2 mx-auto rounded-full py-2 px-4 bg-indigo-100 max-w-md"
            >
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-transparent outline-none text-indigo-400 placeholder:text-indigo-300"
                />
                <button
                    hidden
                    type="submit"
                >
                    Search
                </button>
                <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300" />
            </form>
        </header>
    )
}

export default Header