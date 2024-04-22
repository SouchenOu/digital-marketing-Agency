import { faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section className=' xl:flex  xl:p-[100px] p-[50px] gap-[200px]'>
      <div className='flex flex-col items-start justify-start xl:w-[600px] gap-[20px]'>
        <div className='xl:flex items-center justify-center gap-[10px] '>
          <Image src="/Group2.png" alt="logo" width={30}  height={40}/>
          <h1 className=''>MAC</h1>
        </div>
          <p className='text-gray-500 text-[20px] font-[300]'>We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</p>
          <div className='flex'>
            <Image src="/insta.svg" alt="" width={50} height={50}/>
            <Image src="/linkdiin.svg" alt="" width={50} height={50}/>
            <Image src="/facebook.svg" alt="" width={50} height={50}/>
            <Image src="/twitter.svg" alt="" width={50} height={50}/>

          </div>
          

      </div>
      <div className='xl:flex px-[100px] gap-[300px]'>
        <div className=' flex flex-col text-[20px] gap-[25px]'>
          <h1 className='text-[30px] font-[400px]'>Navigation</h1>
          <div className='text-[20px] font-bold text-gray-400 flex flex-col gap-[20px]'>
            <h2>Service</h2>
            <h2>Agency</h2>
            <h2>Case Study</h2>
            <h2>Resource</h2>
            <h2>Contact</h2>

          </div>
          
        </div>
        <div className=' flex flex-col text-[20px] gap-[25px]'>
          <h1 className='text-[30px] font-[400px]'>Licence</h1>
          <div className='text-[20px] font-bold text-gray-400 flex flex-col gap-[20px]'>
            <h2>Privacy Policy</h2>
            <h2>Copyright</h2>
            <h2>Email Address</h2>
           

          </div>
          
        </div>
        <div className=' flex flex-col text-[20px] gap-[25px]'>
          <h1 className='text-[30px] font-[400px]'>Contact</h1>
          <div className='text-[20px] font-bold text-gray-400 flex flex-col gap-[20px]'>
            <div className='flex  gap-[17px] items-center'>
              <FontAwesomeIcon icon={faPhone} />
              <h2>(406) 555-0120</h2>
            </div>
            <div className='flex gap-[17px] items-center'>
                <FontAwesomeIcon icon={faMessage} />
                <h2>Hey@boostim.com</h2>
            </div>
            <div className='flex gap-[17px] items-center'>
            <FontAwesomeIcon icon={faLocationDot} />

              <h2>2972 Westheimer Rd. Santa Ana, Illinois 85486 </h2>

            </div>
          

          </div>
          
        </div>

      </div>
      
    </section>
  )
}

export default Footer
