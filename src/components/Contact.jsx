import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm";
import { Toaster } from "react-hot-toast";

export default function Contact() {
    return (
        <section id="contact" className="lg:h-screen">
            <Toaster />
            <div className="2xl:container mx-auto w-full h-full px-6 lg:px-16 text-light flex flex-col md:flex-row lg:pt-32 2xl:items-center *:w-full *:md:w-[50%]">
                <ContactDesc />
                <ContactForm />
            </div>
        </section>
    )
}