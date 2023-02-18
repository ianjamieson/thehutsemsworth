import React from 'react';

export default function List({ children, ...props}) {
    return (
        <ul className="ml-6 [&>li]:list-disc">
            {children}
        </ul>
    );
}