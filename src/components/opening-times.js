import React from 'react';

export default function OpeningTimes() {
    return (
        <div className="space-y-3 text-center px-10 py-6 border rounded-sm md:min-w-[340px] mx-5">
            <h2 className="text-xl">Opening times</h2>
            <div className="flex justify-between">
                <div>Monday</div>
                <div>Closed</div>
            </div>
            <div className="flex justify-between">
                <div>Tuesday</div>
                <div>9am - 4pm</div>
            </div>
            <div className="flex justify-between">
                <div>Wednesday</div>
                <div>9am - 4pm</div>
            </div>
            <div className="flex justify-between">
                <div>Thursday</div>
                <div>9am - 4pm</div>
            </div>
            <div className="flex justify-between">
                <div>Friday</div>
                <div>9am - 4pm</div>
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