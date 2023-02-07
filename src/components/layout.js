import React from 'react';
import ButtonMenu from '@components/button-menu';
import logo from '@static/img/logo.svg';

const Header = () => {
    return (
        <header className="border-b space-y-4">
            <a href="/"><img src={logo} alt="The Huts Emsworth" className="w-64 mx-auto" /></a>
            <nav>
                <ul className="flex justify-center">
                    <li><ButtonMenu href="/">Home</ButtonMenu></li>
                    <li><ButtonMenu href="/gift-cards">Gift Cards</ButtonMenu></li>
                    <li><ButtonMenu href="/menu">Menu</ButtonMenu></li>
                    <li><ButtonMenu href="/faqs">FAQs</ButtonMenu></li>
                </ul>
            </nav>

        </header>
    );
};

import IconsInstagram from './icons/instagram';
import IconsFacebook from './icons/facebook';
import IconsLinkTree from './icons/linktree';
import IconsGoogle from './icons/google';

const Footer = () => {
    return (
        <footer className="border-t pt-5">
            <div className="flex items-center space-x-4 justify-center">
                <a href="https://instagram.com/thehutsemsworth">
                    <IconsInstagram className="w-6" />
                </a>
                <a href="https://facebook.com/thehutsemsworth">
                    <IconsFacebook className="w-6" />
                </a>
                <a href="https://linktree.com/thehutsemsworth">
                    <IconsLinkTree className="w-6" />
                </a>
                <a href="https://goo.gl/maps/fV5p13YbYhYgPta39">
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
        <div>
            <NoScript />
            <main
                className="flex items-center justify-center py-8 px-4 mx-auto max-w-full w-[512px]"
            >
                <div className="space-y-12 w-full">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </main>
        </div>
    );
}