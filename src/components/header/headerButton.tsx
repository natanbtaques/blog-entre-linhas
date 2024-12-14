import React from 'react'
import Link from 'next/link'

interface HeaderButtonProps {
    button: {
        title: string;
        ref: string;
    };
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ button }) => {
    return (
        <Link href={button.ref} legacyBehavior>
            <a className="hover:text-gray-200 transition-colors duration-300 font-bold">
                {button.title}
            </a>
        </Link>
    );
};

export default HeaderButton;
