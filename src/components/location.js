import React from 'react';
import ButtonGoogleMaps from './button-google-maps';

export default function Location() {
    return (
        <div className="space-y-4 px-10 py-6 text-center">
            <h2 className="text-xl">Find Us</h2>
            <p>The Huts Emsworth,<br />
                Thornham Marina,<br />
                Emsworth,<br />
                PO10 8DD
            </p>
            <p>
                <ButtonGoogleMaps>
                    Find us on Google Maps &raquo;
                </ButtonGoogleMaps>
            </p>
        </div>
    );
}