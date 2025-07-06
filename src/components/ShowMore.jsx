import React from 'react'
import { Link } from 'react-router-dom'

const ShowMore = ({ arr, onNavigate }) => {
    return (
        <div className='absolute top-full right-0 mt-2 w-56 bg-back rounded-lg shadow-xl border border-primary/10 py-3 z-50 animate-in fade-in-0 zoom-in-95 duration-200'>
            {arr.map((item, idx) => (
                <Link
                    key={idx}
                    to={item.link}
                    onClick={(e) => {
                        e.stopPropagation()
                        if (onNavigate) onNavigate()
                    }}
                    className='block px-4 py-2 text-base font-inria text-text hover:text-primary hover:bg-primary/5 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg'
                >
                    {item.Name}
                </Link>
            ))}
        </div>
    )
}

export default ShowMore
