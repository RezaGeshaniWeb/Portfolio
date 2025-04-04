import { useEffect } from 'react';
import TypeIt from "typeit"
import ProfileImg from './ProfileImg';

export default function Profile() {
  useEffect(() => {
    new TypeIt("#simpleUsage", {
      strings: "Front End Developer",
      speed: 150,
      waitUntilVisible: true,
    }).go()
  }, [])

  return (
    <section className="w-full h-screen bg-[url('assets/bgProfile.svg')] pt-4 bg-cover bg-center bg-no-repeat flex items-center flex-col justify-center text-light shadow-myinset">
      <ProfileImg />
      <h1 className='text-3xl font-bold -translate-y-6 md:text-5xl lg:text-6xl lg:ml-8 lg:mb-2'>Hey, I'm Reza Geshani<span className="text-primary">.</span></h1>
      <h2 className='text-2xl font-bold md:text-5xl lg:text-6xl mb-4 lg:mb-7' id="simpleUsage"></h2>
      <p className='text-light text-lg lg:text-2xl text-center px-8'>I've been working as a Front End developer for some time. I live in Tehran.</p>
    </section>
  )
}