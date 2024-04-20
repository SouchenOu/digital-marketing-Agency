import Image from 'next/image'
import React from 'react'

const MainPart1 = () => {
  return (
    <section className='border-2 border-red-700 xl:flex lg:flex items-center py-[100px] h-full xl:px-[400px] lg:px-[200px]  gap-[200px] overflow-auto px-20'>
        <div className='flex flex-col gap-[20px]'>
                <div className='flex flex-col items-center justify-start gap-[20px] xl:w-[600px] px-[2Opx]'>
                    <h1 className='text-[60px] font-[400] flex-row'>Stay ahead of the curve with our forward-thinking </h1>
                    <p className='text-[20px] font-[300] text-gray-500'>An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you.</p>
                </div>
                <div className='flex  items-center gap-[20px] '>
                    <button type="button" className='border-2 border-gray-500 p-[20px] text-[20px]  rounded-full text-white bg-black font-bold'>Schedule Call</button>
                    <button type="button" className=' underline p-[20px] text-[20px] font-[400] rounded-full '>View Case Study</button>
                </div>
                <div className='flex items-center justify-between gap-[30px]'>
                    <h1 className='text-[20] font-[400] w-[200px]'>Trusted by the world's biggest brands</h1>
                    <Image src="/Companylogo1.png" alt="logo1" width={100} height={90}/>
                    <Image src="/Companylogo2.png" alt="logo2" width={100} height={90}/>
                    <Image src="/Companylogo3.png" alt="logo3" width={100} height={90}/>

                </div>
        </div>
        <div className=''>
            <Image src="/groupAll.png" alt="rectangle" width={700} height={700}/>
           

        </div>
      
      
    </section>
  )
}

export default MainPart1
