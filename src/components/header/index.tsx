import 'tailwindcss/tailwind.css';
import HeaderButton from './headerButton';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="color-2 text-white p-6 shadow-lg sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* Título do Blog */}
                <Link href={'/home'}>
                    <Image src="/logo.png" alt="Blog Logo" width={80} height={50} />
                </Link>

                {/* Navegação */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <HeaderButton button={{ title: 'Home', ref: '/home' }} />
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
