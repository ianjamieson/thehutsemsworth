import React from 'react';

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
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7db3c6]"
                    href="https://goo.gl/maps/fV5p13YbYhYgPta39"
                >Find us on Google Maps &raquo;</a></p>
        </div>
    );
}