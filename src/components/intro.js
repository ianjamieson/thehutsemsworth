import React from 'react';
import Heading from './heading';

export default function Intro() {
    return (
        <div className="text-center space-y-3">
            <Heading h="1" className="text-xl">The Huts Emsworth</Heading>
            <ul>
                <li>🌊 The perfect pit stop for your waterside walk</li>
                <li>🧁 Coffee and Cake by the sea</li>
                <li>🍴 Bacon Rolls - Paninis - Soup</li>
                <li>📍 Thornham Marina Emsworth</li>
            </ul>
        </div>
    );
}