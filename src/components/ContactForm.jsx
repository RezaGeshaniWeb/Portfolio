import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
    const [userMessage, setUserMessage] = useState({
        id: '',
        name: '',
        email: '',
        message: ''
    })

    const handleChange = e => {
        const value = e.target.name
        const inputValue = e.target.value

        switch (value) {
            case 'name':
                setUserMessage(prev => ({ ...prev, name: inputValue }))
                break
            case 'email':
                setUserMessage(prev => ({ ...prev, email: inputValue }))
                break
            case 'message':
                setUserMessage(prev => ({ ...prev, message: inputValue }))
                break
        }
    }

    const sendUserMessage = () => {
        if (!userMessage.name || !userMessage.email || !userMessage.message) {
            toast.error("All inputs must be filled in.")
        } else {
            axios.post('https://67b6e6602bddacfb270cbdc6.mockapi.io/portfolio', userMessage)
                .then(() => toast.success('Your message was sent successfully.'))
                .catch(() => toast.error('Network error'))
                .finally(() => {
                    setUserMessage({
                        id: '',
                        name: '',
                        email: '',
                        message: ''
                    })
                })
        }
    }

    return (
        <div className="flex justify-start md:justify-center">
            <div className="w-[75%] md:w-[65%] lg:w-[55%] h-[85%] md:h-[60%] lg:h-[78%] border-b-4 border-primary outline-primary outline-offset-[6px] rounded-tl-4xl rounded-br-4xl flex flex-col gap-10 pb-8 md:pb-0">
                <input value={userMessage.name} onChange={(handleChange)} spellCheck='false' name="name" className="focus:border-primary p-3 border rounded-lg border-light outline-none" type="text" placeholder="Your Name" />
                <input value={userMessage.email} onChange={(handleChange)} spellCheck='false' name="email" className="focus:border-primary p-3 border rounded-lg border-light outline-none" type="text" placeholder="Email" />
                <textarea value={userMessage.message} onChange={(handleChange)} spellCheck='false' name="message" className="focus:border-primary resize-none p-3 border rounded-lg border-light outline-none" placeholder="Message" rows={5}></textarea>
                <button onClick={sendUserMessage} className="w-[60%] lg:w-[55%] p-3 flex items-center justify-center cursor-pointer bg-primary text-black font-semibold rounded-lg hover:text-white hover:bg-black transition-all duration-200 border border-primary">Send Message</button>
            </div>
        </div>
    )
}