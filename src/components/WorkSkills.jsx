import { workSkills } from "../constants/workSkills";
import { getWork } from "../hook/useContext";

export default function WorkSkills() {
    const { setSkillId } = getWork()

    return (
        <ul className="w-full rounded-md overflow-hidden md:w-[35%] mb-10 *:w-full *:bg-[#1a1a1ad3] *:relative *:h-16 *:flex *:items-center *:px-5 *:cursor-pointer *:text-lg *:font-semibold *:after:flex *:after:absolute *:after:top-0 *:after:left-0 *:after:w-0 *:after:h-full *:after:bg-primary *:after:transition-all *:transition-all *:after:duration-700 *:duration-700 *:hover:after:w-full *:hover:text-[#000000] *:after:-z-10 *:z-10">
            {workSkills.map(item => <li onClick={() => setSkillId(item.id)} key={item.id}>{item.name}</li>)}
        </ul>
    )
}