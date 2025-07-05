import React from 'react'
import { useEffect } from 'react'

const ShowMore = ({arr}) => {
  
    return (
    <div className='h-70 w-50 rounded-lg bg-red-500 absolute top-22 right-0 flex flex-col items-center justify-between py-5'>
        {
            arr.map((item, idx)=>(
                <h2 key={idx} className='text-white font-bold' >{item.Name}</h2>
            ))
        }
    </div>
  )
}

export default ShowMore