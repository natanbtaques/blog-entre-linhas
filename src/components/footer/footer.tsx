import 'tailwindcss/tailwind.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-6 shadow-lg">
            <div className="container mx-auto flex justify-center items-center ">
                {/* Informações de copyright */}
                <p className="text-sm  pr-10">
                    &copy; {new Date().getFullYear()} Entre Linhas. Todos os direitos reservados.
                </p>



                <div className="flex space-x-6">
                    <a
                        href="https://www.facebook.com"
                        className="text-white hover:text-gray-200 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        className="text-white hover:text-gray-200 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        className="text-white hover:text-gray-200 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        className="text-white hover:text-gray-200 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
