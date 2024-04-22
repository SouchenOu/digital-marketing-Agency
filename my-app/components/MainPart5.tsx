import React from 'react'

const MainPart5 = () => {
  return (
    <section className='flex items-center justify-center border-2 border-red-600 px-[200px] py-[40px] gap-[300px]'>
        <div className='flex flex-col items-start justify-start gap-[20px] w-[800px]'>
            <h1 className='text-[40px] font-[400] '>Digital Marketing FAQs</h1>
            <p className='text-[20px] font-[300] text-gray-500'>As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.</p>
            <div className='flex gap-[20px]'>
                <button className='text-[20px] font-[400] border-2 border-black px-[80px] py-[20px] rounded-full'>More Questions</button>
                <button className='text-[20px] font-[400] underline'>Contanct Us</button>
            </div>

        </div>
        <div className='flex flex-col gap-[20px] w-[630px]'>
            <div className="h-[1px] w-150 bg-black"></div>
            <div className='flex items-center justify-between gap-[40px]'>
                <h1 className='text-[30px] font-bold '>Why is digital marketing important for my business?</h1>
                <span className='text-[70px] font-[300]'>-</span>
            </div>
            <p className=''>Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.</p>
            <div className="h-[1px] w-150 bg-black"></div>
            <div className='flex items-center justify-between gap-[40px]'>
                <h1 className='text-[30px] font-bold '>How can digital marketing help improve my website's visibility?</h1>
                <span className='text-[50px] font-[200]'>+</span>
            </div>
            <div className="h-[1px] w-150 bg-black"></div>
            <div className='flex items-center justify-between gap-[40px]'>
                <h1 className='text-[30px] font-bold '>How long does it take to see results from digital marketing efforts?</h1>
                <span className='text-[50px] font-[200]'>+</span>
            </div>
            <div className="h-[1px] w-150 bg-black"></div>
            <div className='flex items-center justify-between gap-[40px]'>
                <h1 className='text-[30px] font-bold '>How do you measure the success of digital marketing campaigns?</h1>
                <span className='text-[50px] font-[200]'>+</span>
            </div>
            <div className="h-[1px] w-150 bg-black"></div>



        </div>
    </section>
  )
}

export default MainPart5
