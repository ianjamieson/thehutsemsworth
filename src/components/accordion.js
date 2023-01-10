import React, {useState, useEffect} from 'react';

export default function Accordion({ children, ...props}) {
    const [isOpen, setIsOpen] = useState(false);

    const id = props.question.replace(/\s/g, '-').toLowerCase();
    useEffect(() => {
        if (window.location.hash === `#${id}`) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, []);
    return (
        <details className="group" open={isOpen}>
            <summary
                className="p-4 flex cursor-pointer items-center justify-between space-x-4 list-none"
            >
                <div>
                    <a name={id} />
                    {props.question}
                </div>
                <div
                    className="mr-4 h-2 w-2 origin-center rotate-[45deg] transform border-r-2 border-b-2 border-white transition-transform group-open:rotate-[225deg]">
                </div>
            </summary>
            <main className="p-4 pt-0 space-y-4">
                {children}
            </main>

        </details>
    );
}