import React from 'react'

interface HeaderButtonProps {
    button: {
        title: string;
        ref: string;
    };
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ button }) => {
    return (
        <a
            href={button.ref}
            className="hover:text-gray-200 transition-colors duration-300 font-bold">
            {button.title}
        </a>
    );
};

export default HeaderButton;
