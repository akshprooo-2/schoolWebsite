import React, { useState, useRef, useEffect } from 'react'
import pages from '../Data/Pages'
import ShowMore from './ShowMore'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [showMore, setShowMore] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const dropdownRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowMore(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // useEffect(() => {
        // setIsMobileMenuOpen(false)
        // if (window.innerWidth < 1024) {
        //     setShowMore(false)
        // }
    // }, [location])

    return (
        <header className='w-full flex items-center justify-center h-30'>
            <nav className='flex items-center justify-between px-6 md:px-10 w-full h-20 bg-back text-text rounded-md shadow-lg border border-primary/10 z-50'>
                <Link to="/" className='text-2xl md:text-3xl font-inria font-bold text-primary hover:text-primary/80 transition-colors'>
                    SoSE Sector 5 Dwarka
                </Link>

                <div className='hidden lg:flex text-xl items-center gap-8 xl:gap-12'>
                    {pages.map((item, idx) => {
                        if (item.morePages.length > 0) {
                            return (
                                <div key={idx} className='relative' ref={dropdownRef}>
                                    <button 
                                        onClick={() => setShowMore(!showMore)}
                                        className='font-inria text-xl text-text hover:text-primary transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/5'
                                    >
                                        {item.Name}
                                        <svg 
                                            className={`w-4 h-4 transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {showMore && <ShowMore arr={item.morePages} />}
                                </div>
                            )
                        } else {
                            const isActive = location.pathname === item.link
                            return (
                                <Link 
                                    to={item.link} 
                                    className={`font-inria text-xl px-3 py-2 rounded-md transition-colors duration-200 ${
                                        isActive 
                                            ? 'text-primary bg-primary/10 font-semibold' 
                                            : 'text-text hover:text-primary hover:bg-primary/5'
                                    }`}
                                    key={idx}
                                >
                                    {item.Name}
                                </Link>
                            )
                        }
                    })}
                </div>

                <button 
                    className='lg:hidden p-2 rounded-md hover:bg-primary/5 transition-colors'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg 
                        className="w-6 h-6 text-text" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className='lg:hidden fixed inset-0 bg-black/50 z-40' onClick={() => setIsMobileMenuOpen(false)}>
                    <div 
                        className='absolute top-28 left-4 right-4 bg-back rounded-lg shadow-xl border border-primary/10 max-h-[calc(100vh-8rem)] overflow-y-auto' 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='flex flex-col p-6'>
                            {pages.map((item, idx) => {
                                if (item.morePages.length > 0) {
                                    return (
                                        <div key={idx} className='mb-4'>
                                            <button 
                                                onClick={() => setShowMore(!showMore)} 
                                                className='w-full text-left font-inria text-lg text-text hover:text-primary transition-colors duration-200 flex items-center justify-between p-2 rounded-md hover:bg-primary/5'
                                            >
                                                {item.Name}
                                                <svg 
                                                    className={`w-4 h-4 transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`}
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {showMore && (
                                                <div className='mt-2 pl-4 space-y-1 border-l-2 border-primary/20'>
                                                    {item.morePages.map((subItem, subIdx) => (
                                                        <Link 
                                                            key={subIdx}
                                                            to={subItem.link}
                                                            className='block font-inria text-base text-text/80 hover:text-primary transition-colors duration-200 p-2 rounded-md hover:bg-primary/5'
                                                            onClick={e => {
                                                                e.stopPropagation(); // Prevent overlay from closing before navigation
                                                                setIsMobileMenuOpen(false);
                                                            }}
                                                        >
                                                            {subItem.Name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                } else {
                                    const isActive = location.pathname === item.link
                                    return (
                                        <Link 
                                            to={item.link}
                                            className={`font-inria text-lg p-2 mb-2 rounded-md transition-colors duration-200 block ${
                                                isActive
                                                    ? 'text-primary bg-primary/10 font-semibold' 
                                                    : 'text-text hover:text-primary hover:bg-primary/5'
                                            }`}
                                            key={idx}
                                        >
                                            {item.Name}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
