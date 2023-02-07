import React from 'react';

export default function ButtonGoogleMaps({ children, ...props}) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7db3c6]"
            href="https://goo.gl/maps/fV5p13YbYhYgPta39"
        >{children}</a>
    );
}