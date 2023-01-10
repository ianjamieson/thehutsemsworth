import * as React from 'react';
import Layout from '../components/layout';
import { Seo } from '../components/seo';
import ALink from '../components/alink';
import mapToTheHuts from '@static/img/maps/thornham-marina-car-park-to-the-huts.jpg';
import Accordion from '@components/accordion';

const FaqsPage = () => {
    return (
        <Layout>
            <div className="divide-y divide-gray-50">
                <Accordion question="How do you find The Huts when you get to Thornham Marina?">
                    <p>
                        Once you have arrived at Thornham Marina car park. You can follow the directional
                        arrow on the image below to find The Huts.
                    </p>
                    <p>
                        From the car park, you will enter the Marina, through the gate. Walk straight towards
                        the sea until you cannot go any further, and then turn left. You will be able to see
                        The Huts as you walk with the sea on your right.
                    </p>
                    <p>
                        <a href={mapToTheHuts} target="_blank" rel="noreferrer">
                            <img src={mapToTheHuts} alt="Map to The Huts from Thornham Marina Car Park" />
                        </a>
                    </p>
                </Accordion>
                <Accordion question="Are there any short walks near The Huts?">
                    <p>
                        Yes, you can check out our <ALink href="https://www.alltrails.com/en-gb/explore/map/the-huts-circular-b096577" target="_blank" rel="noreferrer">AllTrails map of The Huts Circular</ALink>
                    </p>
                    <p>
                        It is a short, flat gravel track walk with great view
                    </p>

                </Accordion>
                <Accordion question="Do you have toilets?">
                    <p>
                        Yes. There are toilets at Thornham Marina. While you are at The Huts, you will need to ask
                        a member of staff for the key fob, which will unlock the door. They will also direct you
                        to where the toilets are situated, they are a couple of minutes walk away.
                    </p>
                </Accordion>
                <Accordion question="Do you have a menu online?">
                    <p>
                        Yes, you can view our menu online <ALink href="/menu">here</ALink>
                    </p>
                </Accordion>
                <Accordion question="How can I find you on What Three Words?">
                    <p>
                        <ALink href="https://w3w.co/sentences.bits.herbs" target="_blank" rel="noreferrer">
                        sentences.bits.herbs
                        </ALink>
                    </p>
                </Accordion>
            </div>
        </Layout>
    );
};

export default FaqsPage;

export const Head = () => (
    <Seo>
        <title>FAQs | The Huts Emsworth</title>
    </Seo>
);
