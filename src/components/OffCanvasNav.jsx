import { listMenu } from "../constants/listMenu"

export default function OffCanvasNav() {
    return (
        <nav>
            <ul className="flex flex-col gap-10 text-light font-semibold text-lg">
                {
                    listMenu.map(item => {
                        return (
                            <li key={item.id}>
                                <a href={item.href} className="flex items-center hover:text-primary transition duration-150">
                                    <span className="text-primary">0{item.id}.</span>
                                    <span>{item.text}</span>
                                </a>
                            </li>
                        )
                    })
                }
                <li>
                    <a href="#" className='bg-primary px-5 py-2.5 rounded-sm text-black border-2 border-primary hover:bg-black hover:text-light transition duration-150'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}
