import * as React from 'react';
import Intro from '@components/intro';
import Layout from '@components/layout';
import Location from '@components/location';
import OpeningTimes from '@components/opening-times';
import { Seo } from '../components/seo';

const IndexPage = () => {
    return (
        <Layout>
            <Intro />
            <OpeningTimes />
            <Location />
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <Seo>
        <title>The Huts Emsworth</title>
    </Seo>
);