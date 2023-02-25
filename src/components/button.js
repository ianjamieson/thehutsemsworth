import React from 'react';

export default function Button({ children, ...props}) {
    return (
        <a {...props} className="transition-all text-center block  p-3 border border-blue-500 hover:bg-blue-100 rounded-lg">
            {children}
        </a>
    );
}