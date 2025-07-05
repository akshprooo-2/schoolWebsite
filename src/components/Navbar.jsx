import React, { useState } from 'react'
import pages from '../Data/Pages'
import ShowMore from './ShowMore'

const Navbar = () => {

    const [showMore, setShowMore] = useState(false)

  return (
    <div className=' flex items-center justify-between px-10 w-[97vw] h-25 bg-back text-text absolute left-1/2 -translate-x-1/2 top-5 rounded-md'>
        <h2 className='text-4xl  font-inria' >SoSE Sector 5 Dwarka</h2>

        <div className='flex items-center gap-5'>
            {pages.map((item,idx)=>{
                if (item.morePages.length > 0){
                    return (
                        <>
                            <a href="" onMouseEnter={()=>setShowMore(!showMore)} onMouseLeave={()=>setShowMore(!showMore)} className=' font-inria text-2xl' key={idx}>{item.Name}</a>
                        
                            {!showMore?'':
                            <ShowMore  />
                            }
                        </>
                    )
                }
                else{
                    return(
                        <a href="" className=' font-inria text-2xl' key={idx}>{item.Name}</a>
                    )
                }
            })}
        </div>
    </div>
  )
}

export default Navbar