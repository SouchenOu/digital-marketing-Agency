import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MainPart7 = () => {
  return (
    <section className='border-2 border-red-600 p-[100px]'>
        <div className='flex items-center justify-between gap-[20px]'>
            <div className='flex flex-col i  gap-[70px] py-[30px]  rounded-full w-[500px]'>
                <div className='flex items-center justify-between gap-[20px]'>
                    <span className='border-2 border-blue-400 rounded-[50%] w-[20px] h-[20px] text-blue-400 ' style={{background : '#45A7DE'}}></span>
                    <h1 className='text-gray-500 text-[20px] font-[300]'>5 min read</h1>

                </div>
                <h1 className='text-[30px] font-[400]'>How a Digital Marketing Agency Can Boost Your Business</h1>
                <div className='gap-[40px] flex items-center justify-center'>
                    <p className='text-[20px] font-bold text-gray-500'>What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,</p>
                    <button className='border-2 border-gray-500 bg-black text-white  w-[200px] px-[50px] h-[50px] rounded-xl '>
                        <FontAwesomeIcon icon={faArrowLeft} className='flex items-center justify-center'/>
                    </button>

                </div>


            </div>
            <div className='flex flex-col i  gap-[70px] py-[30px]  rounded-full w-[500px]'>
                <div className='flex items-center justify-between gap-[20px]'>
                    <span className='border-2 border-orange-500 rounded-[50%] w-[20px] h-[20px] text-orange-400 ' style={{background : '#EA5F38'}}></span>
                    <h1 className='text-gray-500 text-[20px] font-[300]'>5 min read</h1>

                </div>
                <h1 className='text-[30px] font-[400]'>The Latest Trends and Strategies with a Digital Marketing Agency</h1>
                <div className='gap-[40px] flex items-center justify-center'>
                    <p className='text-[20px] font-bold text-gray-500'>What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,</p>
                    <button className='border-2 border-gray-500 text-black  w-[200px] px-[50px] h-[50px] rounded-xl '>
                        <FontAwesomeIcon icon={faArrowLeft} className='flex items-center justify-center'/>
                    </button>

                </div>


            </div>
            <div className='flex flex-col i  gap-[70px] py-[30px]  rounded-full w-[500px]'>
                <div className='flex items-center justify-between gap-[20px]'>
                    <span className='border-2 border-gray-400 rounded-[50%] w-[20px] h-[20px] text-gray-400 ' style={{background : '#6A26F1'}}></span>
                    <h1 className='text-gray-500 text-[20px] font-[300]'>5 min read</h1>

                </div>
                <h1 className='text-[30px] font-[400]'>Maximizing ROI with the Expertise of a Digital Marketing Agency</h1>
                <div className='gap-[40px] flex items-center justify-center'>
                    <p className='text-[20px] font-bold text-gray-500'>What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,</p>
                    <button className='border-2 border-gray-500 text-black  w-[200px] px-[50px] h-[50px] rounded-xl '>
                        <FontAwesomeIcon icon={faArrowLeft} className='flex items-center justify-center'/>
                    </button>

                </div>

            </div>
        </div>
        
    </section>
  )
}

export default MainPart7