import * as React from 'react';
import logo from '@static/img/logo.svg';

export const Seo = ({ children }) => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap" rel="stylesheet" />
            <link rel="icon" href={logo} />
            <meta name="description" content="🌊 The perfect pit stop for your waterside walk 🤍 Previously 'Deck on The Go' 🧁 Coffee and Cake by the sea 📍 Thornham Marina Emsworth" />

            {/* <!-- Facebook Meta Tags --> */}
            <meta property="og:url" content="https://thehutsemsworth.co.uk/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="The Huts Emsworth" />
            <meta property="og:description" content="🌊 The perfect pit stop for your waterside walk 🤍 Previously 'Deck on The Go' 🧁 Coffee and Cake by the sea 📍 Thornham Marina Emsworth" />
            <meta property="og:image" content="https://thehutsemsworth.co.uk/assets/img/logo.svg" />
            <meta property="og:image:width" content="1024" />
            <meta property="og:image:height" content="1024" />

            {/* <!-- Twitter Meta Tags --> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="thehutsemsworth.co.uk" />
            <meta property="twitter:url" content="https://thehutsemsworth.co.uk/" />
            <meta name="twitter:title" content="The Huts Emsworth" />
            <meta name="twitter:description" content="🌊 The perfect pit stop for your waterside walk 🤍 Previously 'Deck on The Go' 🧁 Coffee and Cake by the sea 📍 Thornham Marina Emsworth" />
            <meta name="twitter:image" content="https://thehutsemsworth.co.uk/assets/img/logo.svg" />
            {children}
        </>
    );
};