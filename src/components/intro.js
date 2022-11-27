import React from 'react';
import pdf from '@static/pdf/the-huts-emsworth-winter-menu-2022.pdf';

export default function Intro() {
    return (
        <div className="text-center space-y-3">
            <h1 className="text-xl">The Huts Emsworth</h1>
            <ul>
                <li>🌊 The perfect pit stop for your waterside walk</li>
                <li>🧁 Coffee and Cake by the sea</li>
                <li>🍴 Bacon Rolls - Paninis - Soup</li>
                <li>📍 Thornham Marina Emsworth</li>
                <li><a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={ pdf }
                >🍽️ View our menu</a></li>
            </ul>
        </div>
    );
}