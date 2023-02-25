import React from 'react';

export default function Heading({ children, ...props}) {
    let tagName = '';
    let className = '';
    switch(props.h) {
    case '1':
        tagName = 'h1';
        className = 'text-2xl text-blue-500';
        break;
    case '2':
        tagName = 'h2';
        className = 'text-xl text-blue-500';
        break;
    }
    return (
        <span>
            {React.createElement(tagName,  { className }, children)}
        </span>
    );
}