import "@styles/globals.css"
import Sidebar from "@components/Sidebar"
import Header from "@components/Header"
import ClientProvider from "@components/ClientProvider"

export const metadata = {
  title: "Amazon Web Scraper"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex bg-[#f7fbff] h-screen">
        <ClientProvider>
          <Sidebar />
          <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto">
            <Header />
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  )
}

export default RootLayout