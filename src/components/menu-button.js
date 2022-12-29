import React from 'react';

export default function MenuButton({ children, ...props}) {
    return (
        <a {...props} className="text-center block hover:bg-blue-400 p-3">
            {children}
        </a>
    );
}