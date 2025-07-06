import React, { useRef, useState, useEffect } from 'react'
import { our_mission, our_vision } from '../Data/School'

const Slogans = () => {
    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            if (containerRef.current) {
                setContainerHeight(containerRef.current.offsetHeight);
            }
        };

        // Use ResizeObserver for efficient height tracking
        const resizeObserver = new ResizeObserver(updateHeight);
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Initial height calculation
        updateHeight();

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className='w-full flex  items-start gap-5 lg:gap-3'>
            {/* Mission and Vision Container */}
            <div ref={containerRef} className='flex-1 space-y-6'>
                <MissionVisionCard
                    title="Our Mission"
                    content={our_mission}
                    buttonText="Join Our Mission"
                />
                <MissionVisionCard
                    title="Our Vision"
                    content={our_vision}
                    buttonText="Explore Our Vision"
                />
            </div>

            {/* Right Visual Content */}
            <div 
                className='flex-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl hidden lg:flex border-2 border-white  items-center justify-center'
                style={{ height: containerHeight || 'auto' }}
            >
                <div className='text-white text-center p-6'>
                    <h2 className='text-2xl font-inria mb-3'>Visual Content</h2>
                    <p className='font-inria opacity-90'>Content area for images or graphics</p>
                </div>
            </div>
        </div>
    )
}

// Extracted component for better maintainability
const MissionVisionCard = ({ title, content, buttonText }) => {
    return (
        <div className='border-2 border-white rounded-xl p-6 bg-transparent'>
            <h1 className='text-white font-inria text-2xl lg:text-3xl text-center mb-4'>
                {title}
            </h1>
            <p className='text-white font-inria text-lg lg:text-xl text-center mb-6 leading-relaxed'>
                {content}
            </p>
            <button className='w-full bg-primary py-3 rounded-md font-inria text-lg lg:text-xl hover:bg-primary/90 transition-colors'>
                {buttonText}
            </button>
        </div>
    )
}

export default Slogans