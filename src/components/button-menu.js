import classNames from 'classnames';
import React from 'react';

export default function  ButtonMenu({ children, ...props}) {
    const path = typeof window !== 'undefined' ? window.location.pathname : 'invalid';

    var aClasses = classNames(
        'text-center block hover:bg-blue-400 p-3',
        {
            'bg-blue-400': props.href == path.substring(0, path.length - 1),
        }
    );

    return (
        <a {...props} className={aClasses}>
            {children}
        </a>
    );
}