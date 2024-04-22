import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MainPart4 = () => {
  return (
    <section className='border-2 border-red-700 p-[100px] flex flex-col gap-[50px] '>
      <h1 className='text-[40px] font-[800]'>“ They thoroughly analyze our industry and target audience,
         allowing them to develop customized campaigns that effectively reach and 
         engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</h1>

         <div className='flex gap-[1500px]'>
            <div className='lfex flex-col '>
                <h1 className='text-[30px] font-[400]'>Michael Kaizer</h1>
                <p className='text-[20px] font-[300] text-gray-500'>CEO of Basecamp Corp</p>

            </div>
                
               <div className='flex gap-[10px]'>
                    <button className='border-2 border-black px-[80px] py-[20px] rounded-xl'>
                      <FontAwesomeIcon icon={faArrowRight} className='text-xl font-bold'/>
                    </button>
                    <h1 className='flex items-center justify-center text-2xl font-bold'> 01/05 </h1>
                    <button className='bg-black border-2  px-[80px] py-[20px] rounded-xl'>
                    <FontAwesomeIcon icon={faArrowLeft} className='text-white text-xl font-bold'/>

                    </button>
                </div>       
         </div>
    </section>
  )
}

export default MainPart4
