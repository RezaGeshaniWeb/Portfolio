import { skillsList } from "../constants/skills";

export default function AboutSkill() {
    return (
        <div className="w-full md:w-1/2">
            <div className="flex items-center gap-6 mb-8">
                <h2 className="text-2xl font-semibold"><span className="text-primary">01. </span>About Me</h2>
                <span className="block w-20 h-0.5 rounded-2xl bg-primary"></span>
            </div>
            <p className="text-lg mb-8">
                Hello! My name is Reza Geshani and I enjoy creating things on the internet. I have been interested in front end development for a few years now and this interest continues and I am looking to learn more.
            </p>
            <p className="text-lg mb-10">
                Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="text-lg flex flex-col gap-4 h-52 flex-wrap list-disc list-inside marker:text-primary">
                {skillsList.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}