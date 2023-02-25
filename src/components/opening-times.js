import React from 'react';
import Heading from './heading';

export default function OpeningTimes() {
    return (
        <div className="space-y-3 text-center px-10 py-6 border rounded-sm md:min-w-[340px] mx-5">
            <Heading h="2">Opening times</Heading>
            <div className="flex justify-between">
                <div>Monday</div>
                <div>Closed</div>
            </div>
            <div className="flex justify-between">
                <div>Tuesday</div>
                <div>10am - 3pm</div>
            </div>
            <div className="flex justify-between">
                <div>Wednesday</div>
                <div>10am - 3pm</div>
            </div>
            <div className="flex justify-between">
                <div>Thursday</div>
                <div>10am - 3pm</div>
            </div>
            <div className="flex justify-between">
                <div>Friday</div>
                <div>10am - 3pm</div>
            </div>
            <div className="flex justify-between">
                <div>Saturday</div>
                <div>9am - 4pm</div>
            </div>
            <div className="flex justify-between">
                <div>Sunday</div>
                <div>9am - 4pm</div>
            </div>
        </div>
    );
}
