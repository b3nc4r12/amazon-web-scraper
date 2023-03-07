"use client"

import { db } from "@/firebase"
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { collection, orderBy, query } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import SidebarRow from "./SidebarRow"

const Sidebar = () => {
    const [snapshot, loading, error] = useCollection(
        query(collection(db, "searches"), orderBy("start_eta", "desc"))
    )

    return (
        <aside className="p-2 md:p-8 py-6 overflow-y-auto border-b border-indigo-500/50">
            <div className="flex flex-col items-center justify-center text-center mb-10">
                <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-indigo-600" />
                <h1 className="hidden md:inline text-3xl my-2 font-semibold">Web Scraper</h1>
                <h2 className="hidden md:inline text-xs italic">Scraping The Unscrapable</h2>
            </div>
            <ul className="flex flex-col gap-2 py-2">
                {snapshot?.docs.map((doc) => (
                    <SidebarRow key={doc.id} doc={doc} />
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar