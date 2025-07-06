import React from 'react'

const PrincipalMessage = () => {
  return (
    <div className='h-auto w-full rounded-xl flex flex-col lg:flex-row gap-4 items-center px-4 lg:px-30 border-2 border-white py-5 justify-between'>
        <div className='h-[40vh] w-full lg:w-[40%] bg-white rounded-xl'></div>
        <div className='w-full lg:w-[60%] lg:h-[20vh] gap flex flex-col items-center text-center justify-between ' >
          <h1 className='text-4xl font-inria text-white'>Principal's Message</h1>
          <p className='text-white font-inria text-2xl' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo sit illum adipisci nobis harum eius perspiciatis rerum iusto, illo, sapiente, maiores quaerat unde culpa molestias error esse sint natus atque.</p>
        </div>   
    </div>
  )
}
export default PrincipalMessage