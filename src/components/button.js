import React from 'react';

export default function Button({ children, ...props}) {
    return (
        <a {...props} className="text-center block hover:bg-blue-400 p-3 border border-white rounded-lg">
            {children}
        </a>
    );
}