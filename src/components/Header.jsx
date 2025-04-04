import { RiMenu2Fill } from "react-icons/ri";
import Nav from "./Nav";
import OffCanvas from "./OffCanvas";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="w-full h-[70px] md:h-20 fixed backdrop-blur-xl z-40">
            <div className="2xl:container mx-auto flex items-center justify-between px-6 lg:px-16 w-full h-full">
                <a href="#" className="text-light font-semibold text-lg lg:text-xl">Reza Geshani<span className="text-primary">.</span></a>
                <RiMenu2Fill onClick={() => setIsOpen(prev => !prev)} className="text-light text-2xl cursor-pointer md:hidden" />
                <Nav />
            </div>
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}