import Image from 'next/image'
import React from 'react'

const MainPart3 = () => {
  return (
    <section className='items-center justify-center 3xl:p-[100px] md:p-[100px] lg:p-[100px] bg-gray-100 p-[10px]'>
        <div className='bg-gradient-to-b from-black via-gray-800 to-black  h-full px-[100px] rounded-xl flex flex-col gap-[100px]'>
          <div className='flex flex-col gap-[30px] '>
              <h1 className='xl:text-[70px] xl:font-[500] text-[30px] font-[500] text-white w-full ' > Real-world examples of how we have helped companies achieve their marketing objectives.</h1>
                <div className='xl:flex items-center gap-[100px] justify-center'>
                  <button type="button" className='border-2 border-gray-700 text-white text-[30px] bold=[20px] rounded-full px-[70px] py-[10px]'>All Work (20)</button>
                  <button type='button' className='border-2 border-gray-700 text-white text-[30px] bold=[20px] rounded-full px-[70px] py-[10px] bg-green-500'>UI/ UX design[10]</button>
                  <button type="button" className='border-2 border-gray-700 text-white text-[30px] bold=[20px] rounded-full px-[70px] py-[10px]'>Digital Marketing[5]</button>
                  <button type="button" className='border-2 border-gray-700 text-white text-[30px] bold=[20px] rounded-full px-[70px] py-[10px]'>Branding[5]</button>
                </div>
          </div>
          <div  className='xl:flex  items-center justify-center gap-[60px] xl:p-[100px] p-[10px]'>
            <div className=' bg-gray-200 rounded-[50%] xl:w-[30px] xl:h-[20px] xl:p-[200px] flex items-center justify-center w-[30px] h-[30px] p-[170px]'>
              <div className=' bg-green-400 rounded-[50%] xl:p-[100px] flex items-center justify-center p-[50px]'>
                <h1 className='text-[30px] font-bold w-full'>See Details</h1>
              </div>  
            </div>
            <div className='hide-scrollbar flex items-start justify-start gap-[10px] overflow-x-auto  xl:h-[640px] xl:w-[2000px] px-[60px] py-[90px] w-[400px] h-[400px]'>
                <Image src="/mark2.jpg" alt="mark1" height={700} width={600}/>
                <Image src="/mark2.jpg" alt="mark1" height={700} width={600}/>
                <Image src="/mark2.jpg" alt="mark1" height={700} width={600}/>
                <Image src="/mark2.jpg" alt="mark1" height={700} width={600}/>
                <Image src="/mark2.jpg" alt="mark1" height={700} width={600}/>
                <Image src="/mark2.jpg" alt="mark1" height={700} width={600}/>
            </div>
          </div>           
        </div>
    </section>
  )
}

export default MainPart3
