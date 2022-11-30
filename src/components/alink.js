import React from 'react';

export default function ALink({ children, ...props}) {
    return (
        <a {...props} className="underline hover:opacity-80">
            {children}
        </a>
    );
}