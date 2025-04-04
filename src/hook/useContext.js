import { useContext } from "react";
import { WorkContext } from "../context/WorkContext";

function getWork() {
    const { skillId, setSkillId } = useContext(WorkContext)
    return { skillId, setSkillId }
}

export { getWork }