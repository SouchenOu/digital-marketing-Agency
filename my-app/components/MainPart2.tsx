import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'
import React from 'react'

const MainPart2 = () => {
  return (
    <section className='border-2 border-red-950 h-full w-full xl:py-[100px] xl:px-[500px]  px-[30px] py-[40px] gap-[800px]'>
        <div className='flex gap-[200px]'>
            <h2 className='text-[30px] font-bold w-[1000px]'>
                Provide the best service with out of the box ideas
            </h2>
            <p className='text-[20px] font-[400] w-100 text-gray-400'>
                we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.
            </p>


        </div>
        <div className='flex items-center justify-between px-[8px] py-[50px]'>
            <div className='bg-black rounded-xl w-[500px] h-[350px]'>
                <h1 className='text-[70px] bold-[500px] text-white p-[10px]'>920<span className='text-green-900 text-bold text-[70px]'>+</span></h1>
                <p className='text-gray-300 py-[2px] px-[20px]'>Project finish with superbly</p>
                <div className='flex '>
                    <div className='flex  items-center overflow-hidden px-[10px]'>
                        {PEOPLE_URL.map((elem)=>(
                                <Image className="rounded-full h-10 w-10" key={elem} src={elem} alt="pictures" width={20} height={20}/>
                            ))}
                             <p className='text-green-900 text-[70px] px-[50px] items-center '> + </p>


                    </div>



                </div>
                

                
            </div>
            <div className='flex items-start'>
                <Image src="/test.png" alt="rectangle" width={900} height={800}/>
            </div>
        </div>
      
    </section>
  )
}

export default MainPart2
