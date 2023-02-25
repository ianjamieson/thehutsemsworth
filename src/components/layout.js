import React from 'react';
import ButtonMenu from '@components/button-menu';
import logo from '@static/img/logo-transparent.svg';
import hero from '@static/img/hero/marina.jpg';
import IconsMenu from './icons/menu';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
    const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            navRef.current.style.height = navRef.current.scrollHeight + 'px';
        } else {
            navRef.current.style.height = 0;
        }
    }, [isMenuOpen]);

    return (
        <header className="mb-12">
            <div className="bg-blue-500 h-20 flex items-center">
                <div className="absolute left-1/2 top-0 z-10 -ml-14 bg-blue-500 rounded-full w-28 h-28 flex items-center justify-center">
                    <a href="/"><img src={logo} alt="The Huts Emsworth" className="w-24 mx-auto" /></a>
                </div>
                <a className="absolute right-2 p-3 cursor-pointer" onClick={handleMenuClick}>
                    <IconsMenu className="text-white w-8"></IconsMenu>
                </a>
                <nav ref={navRef} className="w-full transition-all absolute bg-blue-500 top-20 right-0 overflow-hidden h-0">
                    <ul className="mt-8">
                        <li><ButtonMenu href="/">Home</ButtonMenu></li>
                        <li><ButtonMenu href="/gift-cards">Gift Cards</ButtonMenu></li>
                        <li><ButtonMenu href="/menu">Menu</ButtonMenu></li>
                        <li><ButtonMenu href="/faqs">FAQs</ButtonMenu></li>
                    </ul>
                </nav>
            </div>
            <div>
                <img src={hero} className="w-full h-[300px] lg:h-[400px] object-cover" />
            </div>
        </header>
    );
};

import IconsInstagram from './icons/instagram';
import IconsFacebook from './icons/facebook';
import IconsLinkTree from './icons/linktree';
import IconsGoogle from './icons/google';

const Footer = () => {
    return (
        <footer className="border-t py-5 bg-blue-500">
            <div className="text-white flex items-center space-x-4 justify-center">
                <a href="https://instagram.com/thehutsemsworth" className="hover:text-blue-100">
                    <IconsInstagram className="w-6" />
                </a>
                <a href="https://facebook.com/thehutsemsworth" className="hover:text-blue-100">
                    <IconsFacebook className="w-6" />
                </a>
                <a href="https://linktree.com/thehutsemsworth" className="hover:text-blue-100">
                    <IconsLinkTree className="w-6" />
                </a>
                <a href="https://goo.gl/maps/fV5p13YbYhYgPta39" className="hover:text-blue-100">
                    <IconsGoogle className="w-6" />
                </a>
            </div>
        </footer>
    );
};

const NoScript = () => {
    return (
        <noscript><iframe title="gtm" src="https://www.googletagmanager.com/ns.html?id=GTM-MBBHSGB"
            height="0" width="0" style={{ display:'none', visibility:'hidden' }}></iframe></noscript>
    );
};

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <NoScript />
            <Header />
            <main
                className="flex items-center justify-center pb-8 px-4 mx-auto max-w-full w-[512px]"
            >
                <div className="space-y-8 w-full">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}