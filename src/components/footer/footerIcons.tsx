import react from 'react';

interface FooterIconProps {
    icon: {
        href: string;
        target: string;
        rel: string;
        children: react.ReactNode;
    };
}


const FooterIcon: React.FC<FooterIconProps> = ({ icon }) => {
    return (
        <a
            href={icon.href}
            className="text-white hover:text-gray-200 transition-colors duration-300"
            target={icon.target}
            rel={icon.rel}
        >
            {icon.children}
        </a>
    );
}

export default FooterIcon;
