import { Github, Linkedin, MailIcon, Twitter } from "lucide-react"

function Footer() {
    return (
        <section className="footer w-full py-6 bg-transparent text-white roboto">
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://github.com/akash-meher-78" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <Github size={28} />
                </a>
                <a href="https://x.com/_akashmeher_" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <Twitter size={28} />
                </a>
                <a href="https://www.linkedin.com/in/akash-meher" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <Linkedin size={28} />
                </a>
                <a href="mailto:akashmeher6635@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                    <MailIcon size={28} />
                </a>
            </div>
            <p className="text-center text-base">Want to chat? Just shoot me a dm with a direct question on {" "}
                <a
                    href="https://x.com/_akashmeher_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition-colors text-blue-800"
                >
                    twitter
                </a>{" "}
            </p>
        </section>
    )
}

export default Footer