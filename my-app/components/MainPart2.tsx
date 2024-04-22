import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'
import React from 'react'

const MainPart2 = () => {
  return (
    <section className='h-full w-full xl:py-[100px] xl:px-[200px]  px-[20px] py-[20px] gap-[800px]'>
        <div className='flex gap-[200px] xl:px-[200px]'>
            <h2 className='text-[30px] font-bold w-[1000px] '>
                Provide the best service with out of the box ideas
            </h2>
            <p className='text-[20px] font-[400] w-100 text-gray-400'>
                we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
            </p>


        </div>
        <div className='xl:flex lg:flex  items-center  px-[100px] py-[100px] gap-[200x]  justify-center'>
            <div className='bg-gradient-to-b from-black via-gray-800 to-black rounded-xl w-[600px] h-[530px]'>
                <h1 className='text-[90px] bold-[500px] text-white p-[30px]'>920<span className='text-green-900 text-bold text-[70px]'>+</span></h1>
                <p className='text-gray-300 py-[2px] px-[20px] text-[20px] font-[300]'>Project finish with superbly</p>
                <div className='flex'>
                    <div className='flex  items-center overflow-hidden px-[10px]'>
                        {PEOPLE_URL.map((elem)=>(
                                <Image className="rounded-full h-20 w-20" key={elem} src={elem} alt="pictures" width={60} height={60}/>
                            ))}
                             <p className='text-green-900 text-[70px] px-[50px] items-center '> + </p>
                    </div>
                </div>          
            </div>
            <div className='relative flex items-start xl:px-[40px] py-[50px]'>
                <Image src="/team3.jpg" alt="rectangle" width={800} height={700} className=' brightness-75 w-[800px]'/>
                <h1 className='absolute flex items-center justify-center px-[100px] xl:py-[240px] py-[160px] xl:text-[60px] text-[30px]  font-bold text-white'>  HOW&nbsp;&nbsp;&nbsp;&nbsp;WE&nbsp;&nbsp;&nbsp;&nbsp;WORK</h1>
            </div>
        </div>
       
      
    </section>
  )
}

export default MainPart2
