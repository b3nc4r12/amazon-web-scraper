import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className="text-3xl mt-2 text-black font-bold text-center">Welcome to the Amazon Web Scraper</h1>
    </div>
  )
}

export default Home