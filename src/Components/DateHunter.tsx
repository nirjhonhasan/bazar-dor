"use client";

import { useEffect, useState } from "react";

const CurrentDate = () => {
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const formattedDate = new Date().toLocaleDateString('bn-BD', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            timeZone: 'Asia/Dhaka',
        });

        // Async Execution e shift kora
        requestAnimationFrame(() => {
            setDate(formattedDate);
        });
    }, []);

    if (!date) return null;

    return (
        <div>
            <h2>{date}</h2>
        </div>
    );
};

export default CurrentDate;