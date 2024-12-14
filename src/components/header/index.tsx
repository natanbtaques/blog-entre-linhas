import 'tailwindcss/tailwind.css';
import HeaderButton from './headerButton';

const Header = () => {
    return (
        <header className="bg-color-pur-to-red text-white p-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Título do Blog */}
                <h1 className="text-4xl font-extrabold text-white">
                    Blog Ink & Ideas
                </h1>

                {/* Navegação */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <HeaderButton button={{ title: 'Home', ref: '/homePage' }} />
                        </li>
                        <li>
                            <HeaderButton button={{ title: 'Posts', ref: '/posts' }} />
                        </li>
                        <li>
                            <HeaderButton button={{ title: 'New Post', ref: '/newPost' }} />
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
