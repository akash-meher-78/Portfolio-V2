import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItem = [
    { title: "Home", href: "#home" },
    { title: "Skills", href: "#skills" },
    { title: "Project", href: "#project" },
    { title: "Contact", href: "#contact" },
];

function Navbar() {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenu, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav
                className={cn(
                    "fixed w-full z-40 transition-all duration-300",
                    isScroll
                        ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
                        : "py-5"
                )}>
                <div className="container flex items-center justify-between gap-4 px-4 md:px-6">
                    {/* Left: Logo */}
                    <a
                        className="text-xl font-bold text-primary flex items-center"
                        href=""
                    >
                        <span className="relative z-10">
                            <span>&lt;</span>
                            <span className="text-glow text-foreground tracking-[3px]"> Akash </span>
                            <span>/&gt;</span>
                        </span>
                    </a>

                    {/* Center: Desktop Nav */}
                    <div className="hidden font-semibold md:flex space-x-8">
                        {navItem.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mr-7">

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="md:hidden p-2 ml-2 z-50 text-foreground"
                            aria-label={isMenu ? "Close Menu" : "Open Menu"}
                        >
                            {isMenu ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMenu
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col text-xl space-y-8">
                        {navItem.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                {item.title}
                            </a>
                        ))}
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;