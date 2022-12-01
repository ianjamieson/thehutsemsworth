import * as React from 'react';
import Button from '../components/button';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import ALink from '../components/alink';
import pdf from '@static/pdf/the-huts-emsworth-winter-menu-2022.pdf';

const FaqsPage = () => {
    return (
        <Layout>
            <details className="group">
                <summary
                    className="p-4 flex cursor-pointer items-center justify-between border-gray-50 list-none group-open:border-b group-open:bg-gray-50"
                >
                    <div>
                        Do you have toilets?
                    </div>
                    <div
                        className="mr-4 h-2 w-2 origin-center -rotate-45 transform border-r-2 border-b-2 border-white transition-transform group-open:rotate-45">
                    </div>
                </summary>
                <main className="p-4 divide-y divide-gray-50 bg-gray-50 [&>*]:p-4">
                    Yes. There are toilets at Thornham Marina. While you are at The Huts, you will need to ask
                    a member of staff for the key fob, which will unlock the door. They will also direct you
                    to where the toilets are situated, they are a couple of minutes walk away.
                </main>

            </details>
        </Layout>
    );
};

export default FaqsPage;

export const Head = () => (
    <Seo>
        <title>FAQs | The Huts Emsworth</title>
    </Seo>
);
