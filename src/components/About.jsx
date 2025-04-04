import AboutSkill from "./AboutSkill";
import AboutSocial from "./AboutSocial";

export default function About() {
  return (
    <section id="about" className="w-full min-h-screen mb-44 md:mb-0">
      <div className="2xl:container mx-auto w-full h-full px-6 lg:px-16 text-light flex flex-col md:flex-row gap-20 lg:gap-36 lg:pt-32 md:justify-center 2xl:items-center">
        <AboutSkill />
        <AboutSocial />
      </div>
    </section>
  )
}