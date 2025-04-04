import { useState } from "react";
import WorkItems from "./WorkItems";
import WorkSkills from "./WorkSkills";
import ContextProvider from "../context/WorkContext";

export default function Work() {
    return (
        <ContextProvider>
            <section id="work" className="mb-44 md:mb-0 w-full min-h-screen bg-[url('assets/line.svg')] bg-center bg-no-repeat bg-cover">
                <div className="2xl:container mx-auto w-full h-full text-light px-6 lg:px-16 lg:pt-28 flex flex-col 2xl:justify-center">
                    <div className="flex items-center gap-6 mb-8">
                        <h2 className="text-2xl font-semibold"><span className="text-primary">02. </span>My Works</h2>
                        <span className="block w-32 md:w-56 h-0.5 rounded-2xl bg-primary"></span>
                    </div>
                    <div className="md:flex md:gap-10">
                        <WorkSkills />
                        <WorkItems />
                    </div>
                </div>
            </section>
        </ContextProvider>
    )
}