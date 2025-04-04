import { FaCss3, FaJs, FaReact } from "react-icons/fa"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { FiExternalLink } from "react-icons/fi"
import { getWork } from "../hook/useContext"

export default function WorkItem({ item: { link, name, description } }) {
    const { skillId } = getWork()

    return (
        <a href={link} target={skillId === 3 ? '' : '_blank'} className="group *:transition-all *:duration-150">
            <div className="flex items-center justify-between mb-10 *:text-2xl">
                <span className="group-hover:text-primary">
                    {
                        skillId === 1 ? <FaJs /> :
                            skillId === 2 ? <FaReact /> :
                                skillId === 3 ? <RiNextjsLine /> :
                                    skillId === 4 ? <RiTailwindCssFill /> : <FaCss3 />
                    }
                </span>
                <span>{<FiExternalLink />}</span>
            </div>
            <h3 className="text-xl mb-6 font-semibold group-hover:text-primary">{name}</h3>
            <p className="font-semibold">{description}</p>
        </a>
    )
}