import "tailwindcss/tailwind.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import FooterIcons from "./footerIcons";

const Footer = () => {
    return (
        <footer className="color-2 text-white py-6 shadow-lg">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
                {/* Informações de copyright */}
                <p className="text-sm md:pr-10">
                    &copy; {new Date().getFullYear()} Ink & Ideas. All rights reserved.
                </p>

                <div className="flex space-x-6">
                    <FooterIcons
                        icon={{
                            href: "https://www.facebook.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: <FaFacebook size={24} />,
                        }}
                    />

                    <FooterIcons
                        icon={{
                            href: "https://www.twitter.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: <FaTwitter size={24} />,
                        }}
                    />
                    <FooterIcons
                        icon={{
                            href: "https://www.instagram.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: <FaInstagram size={24} />,
                        }}
                    />
                    <FooterIcons
                        icon={{
                            href: "https://www.linkedin.com",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: <FaLinkedin size={24} />,
                        }}
                    />

                </div>
            </div>
        </footer>
    );
};

export default Footer;
