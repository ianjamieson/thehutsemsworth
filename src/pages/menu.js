import * as React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import ALink from '../components/alink';
import pdf from '@static/pdf/the-huts-emsworth-winter-menu-2022.pdf';

const MenuPage = () => {
    return (
        <Layout>
            <Button
                target="_blank"
                rel="noopener noreferrer"
                href={pdf}
            >🍽️ View our menu &raquo;</Button>

            <div className="space-y-3">
                <h3 className="text-xl">Are you enjoying your time at The Huts?</h3>
                <p>If so, we would be grateful if you could <ALink href="https://g.page/r/Ce1PK0rsFFYCEAI/review" target="_blank">leave us a review on Google</ALink>. Thank You.</p>
            </div>
        </Layout>
    );
};

export default MenuPage;

export const Head = () => (
    <Seo>
        <title>The Menu | The Huts Emsworth</title>
    </Seo>
);
