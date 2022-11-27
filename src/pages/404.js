import * as React from 'react';
import Layout from '../components/layout';
import Button from '../components/button';

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="space-y-4">
                <h1 className="text-xl">Page not found</h1>
                <p>Sorry, we couldn't find the page you were looking for</p>
                <Button href="/">Go back to the homepage</Button>
            </div>
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
