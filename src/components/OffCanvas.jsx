import { MdClose } from "react-icons/md";
import OffCanvasNav from "./OffCanvasNav";

export default function OffCanvas({ isOpen, setIsOpen }) {
    return (
        <div style={{transform: `translateX(${isOpen ? '0' : '280px'})`}} className="md:hidden w-[280px] h-screen absolute top-0 right-0 z-50 bg-black border-l border-gray-500 text-light py-8 px-10 transition-all duration-300">
            <span className="w-full flex justify-end mb-10">
                <button className="text-2xl cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                    <MdClose />
                </button>
            </span>
            <OffCanvasNav />
        </div>
    )
}
