import { createContext, useState } from "react"

export const WorkContext = createContext()

export default function ContextProvider({ children }) {
    const [skillId, setSkillId] = useState(1)

    return (
        <WorkContext.Provider value={{ skillId, setSkillId }}>
            {children}
        </WorkContext.Provider>
    )
}