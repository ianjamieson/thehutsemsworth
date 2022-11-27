import * as React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import pdf from '@static/pdf/the-huts-emsworth-winter-menu-2022.pdf';

const MenuPage = () => {
    return (
        <Layout>
            <Button
                target="_blank"
                rel="noopener noreferrer"
                href={pdf}
            >🍽️ View our menu &raquo;</Button>
        </Layout>
    );
};

export default MenuPage;

export const Head = () => (
    <Seo>
        <title>The Menu | The Huts Emsworth</title>
    </Seo>
);
