import * as React from 'react';
import Layout from '../components/layout';
import { Seo } from '../components/seo';

const GiftCardsPage = () => {
    if (typeof window === 'undefined') {
        return;
    }
    (function (g, i, f, t, u, p, s) { g[u] = g[u] || function() { (g[u].q = g[u].q || []).push(arguments); }; p = i.createElement(f); p.async = 1; p.src = t; s = i.getElementsByTagName(f)[0]; s.parentNode.insertBefore(p, s); })(window, document, 'script', 'https://cdn.giftup.app/dist/gift-up.js', 'giftup');
    return (
        <Layout>
            <div className="gift-up-target" data-site-id="88cc4d6f-14a2-4e66-5ea9-08db0534bd27" data-platform="Other" ></div>
        </Layout>
    );
};

export default GiftCardsPage;

export const Head = () => (
    <Seo>
        <title>Gift Cards | The Huts Emsworth</title>
    </Seo>
);
