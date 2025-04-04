import { BsGithub, BsTelegram } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLink = [
    { id: 1, name: 'Linkedin', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/reza-geshani-web' },
    { id: 2, name: 'Email', icon: <MdEmail />, url: 'mailto:rezageshaniweb@gmail.com' },
    { id: 3, name: 'Telegram', icon: <BsTelegram />, url: 'https://t.me/rezageshani_web' },
    { id: 4, name: 'GitHub', icon: <BsGithub />, url: 'https://github.com/RezaGeshaniWeb/' },
    { id: 5, name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/rezageshani_web' },
]

export default function AboutSocial() {
    return (
        <div className="w-full md:w-1/2 md:pt-16">
            <h3 className="text-xl font-semibold mb-10">Stay in Touch with Me</h3>
            <div className="flex flex-col flex-wrap h-36 gap-6">
                {
                    socialLink.map(item => {
                        return (
                            <a href={item.url} key={item.id} className="flex items-center gap-3 hover:text-primary transition-all duration-150">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-lg">{item.name}</span>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}