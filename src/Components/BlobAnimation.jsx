"use client";

import React, { useEffect, useRef } from 'react';

const BlobAnimation = () => {
    const blobRef = useRef(null);

    useEffect(() => {
        const handlePointerMove = (event) => {
            const { clientX, clientY } = event;

            blobRef.current.animate([
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                    transform: 'translate(-50%, -50%)'
                }
            ], { duration: 3000, fill: 'forwards' });
        };

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    return (
        <>
            <div
                ref={blobRef}
                className="absolute top-1/2 left-1/2 w-[34vmax] h-[34vmax] bg-gradient-to-r from-slate-300 to-slate-600 rounded-full opacity-40 blur-xl brightness-50 animate-pulse accent-indigo-300"
            ></div>
        </>
    );
};

export default BlobAnimation;
 