import { workItems } from "../data/WorkItems"
import { getWork } from "../hook/useContext"
import WorkItem from "./WorkItem"


export default function WorkItems() {
    const { skillId } = getWork()

    return (
        <div className="w-full h-[320px] md:w-[65%] flex gap-5 overflow-auto pb-3 *:block *:h-[100%] *:min-w-[250px] *:bg-[#1a1a1ad3] *:p-5 *:rounded-md">
            {
                workItems[skillId - 1].name.map(item => {
                    return (
                        <WorkItem item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}