"use client"

import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";

// Icons
import { Moon, Planet, Sun } from "@phosphor-icons/react/dist/ssr";

import { usePathname } from "next/navigation";

const Navbar: FunctionComponent = () => {
    const pathname = usePathname()
    const [darkTheme, setDarkTheme] = useState(true)

    useEffect(() => {
        const isDarkTheme = localStorage.getItem("dark-theme") === "true" ? true : false
        console.log(isDarkTheme)
        setDarkTheme(isDarkTheme)
    }, []);

    return (
        <nav className="h-8 flex justify-between w-full slide-in-top">
            {/* Nav Brand */}
            <Link href={"/"} className="flex gap-x-2 items-center">
                <Planet size={32} weight="bold" className="text-primary" />
                <h1 className="font-bold">Eben Vranken</h1>
            </Link>

            {/* Nav Links */}
            <ul className="flex gap-x-10 items-center">
                <Link href={"/"} className={`${pathname === "/" ? "text-primary font-bold border-b-2 border-primary" : "font-medium"} drop-shadow-md`}>Home</Link>
                <Link href={"/about"} className={`${pathname === "/about" ? "text-primary font-bold border-b-2 border-primary" : "font-medium"} drop-shadow-md`}>About Me</Link>
                <Link href={"/projects"} className={`${pathname === "/projects" ? "text-primary font-bold border-b-2 border-primary" : "font-medium"} drop-shadow-md`}>Projects</Link>
                <Link href={"/contact"} className={`${pathname === "/contact" ? "text-primary font-bold border-b-2 border-primary" : "font-medium"} drop-shadow-md `}>Contact</Link>
            </ul>

            {/* Theme Switch */}
            <section className="flex items-center text-primary cursor-pointer" onClick={() => {
                setDarkTheme(darkTheme ? false : true)
                localStorage.setItem("dark-theme", darkTheme.toString())
            }}>
                {
                    darkTheme ? <Sun size={25} weight="bold" /> : <Moon size={25} weight="bold" />
                }
            </section>
        </nav >
    )
}

export default Navbar
