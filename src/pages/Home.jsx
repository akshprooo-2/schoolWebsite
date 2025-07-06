import React from 'react'
import Carousel from '../components/Carousel'
import Marquee from 'react-fast-marquee'
import PrincipalMessage from '../components/PrincipalMessage'
import Slogans from '../components/Slogans'

const Home = () => {
  return (
    <div className='flex flex-col gap-4' >
      <Carousel />
      
      <Marquee className='h-20 bg-[#ffffff10] border-y-1 border-white'><h1 className='text-white font-inknut text-3xl'>Ranked 4 In Delhi</h1></Marquee>
    
      <PrincipalMessage />
      <Slogans />
    </div>
  )
}

export default Home