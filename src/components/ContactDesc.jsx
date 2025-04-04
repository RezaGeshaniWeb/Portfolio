export default function ContactDesc() {
    return (
        <div className="mb-20 md:mb-0">
            <div className="flex items-center gap-6 mb-8">
                <h2 className="text-2xl font-semibold"><span className="text-primary">03. </span>Let's talk
                </h2>
                <span className="block w-20 lg:w-36 h-0.5 rounded-2xl bg-primary"></span>
            </div>
            <p className="text-xl w-[80%] mb-14">
                I am actively seeking new opportunities and my inbox is always open. Whether you have a question or simply want to say Hello , I will do my best to respond!
            </p>
            <a href="mailto:rezageshaniweb@gmail.com" className='bg-primary px-8 py-4 rounded-sm text-black border-2 border-primary hover:bg-black font-semibold text-lg hover:text-light transition duration-150'>Say Hi</a>
        </div>
    )
}