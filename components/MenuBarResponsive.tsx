import Link from "next/link"
import { useState } from "react"


const MenuBarResponsive = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <>
        <div
            onClick={() => setIsSidebarOpen(false)}
            className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
        />
        <div className={`fixed bg-white lg:translate-x-0 lg:static lg:inset-0 md:hidden ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"}`}>
            <div className="flex flex-col items-start">
                <Link href={"/"}>Trang chu</Link>
                <Link href={"/"}>Trang chu</Link>
                <Link href={"/"}>Trang chu</Link>
                <Link href={"/"}>Trang chu</Link>
                <Link href={"/"}>Trang chu</Link>
            </div>
        </div>
        </>
    )
}

export default MenuBarResponsive