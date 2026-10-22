"use client";

import React from 'react';

const CurrentDate = () => {
    const date = new Date().toLocaleDateString('bn-BD', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <div>
            <h2>{date}</h2>
        </div>
    );
};

export default CurrentDate;