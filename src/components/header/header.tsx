import 'tailwindcss/tailwind.css';

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Título do Blog */}
                <h1 className="text-4xl font-extrabold text-white">
                    Blog Entre Linhas
                </h1>

                {/* Navegação */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a
                                href="/"
                                className="hover:text-gray-200 transition-colors duration-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/posts"
                                className="hover:text-gray-200 transition-colors duration-300">
                                Posts
                            </a>
                        </li>
                        <li>
                            <a
                                href="/newPost"
                                className="hover:text-gray-200 transition-colors duration-300">
                                New Post
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
