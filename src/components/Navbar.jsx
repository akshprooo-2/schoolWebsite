import React, { useState } from 'react'
import pages from '../Data/Pages'
import ShowMore from './ShowMore'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [showMore, setShowMore] = useState(false)

  return (
    <div className=' flex items-center justify-between px-10 w-[97vw] h-25 bg-back text-text absolute left-1/2 -translate-x-1/2 top-5 rounded-md'>
        <h2 className='text-3xl  font-inria' >SoSE Sector 5 Dwarka</h2>

        <div className='hidden lg:flex text-xl items-center gap-20'>
            {pages.map((item,idx)=>{
                if (item.morePages.length > 0){
                    return (
                        <>
                            <a onClick={()=>setShowMore(!showMore)} className=' cursor-pointer font-inria text-2xl' key={idx}>{item.Name}</a>
                        
                            {!showMore?'':
                            <ShowMore arr={item.morePages} />
                            }
                        </>
                    )
                }
                else{
                    return(
                        <Link to={item.link} className=' font-inria text-2xl' key={idx}>{item.Name}</Link>
                    )
                }
            })}
        </div>
    </div>
  )
}

export default Navbar