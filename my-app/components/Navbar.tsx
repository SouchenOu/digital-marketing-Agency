import { NAV_CONST } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'





const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-start lg:px-[50] 3xl:px-100 gap-[100px] px-[40px] py-[20px]'>
            <div className='flex items-center gap-1'>
                <Link href="/">
                    <Image src="/Group2.png" alt="logo" width={20} height={20}/>
                </Link>
                <h2 className='text-[20px] font-[400] '>Mac</h2>
            </div>
            
            <ul className='hidden h-full gap-12 lg:flex '>
                {NAV_CONST.map((elem)=>(
                    <div className=' flex items-center gap-[10px]'>
                        <FontAwesomeIcon icon={faChevronDown} />
                        <Link className='text-[20px] font-[500] ' href={elem.href}>{elem.Home} </Link>
                    </div>
                   

                ))}

            </ul>
            <div className='flex items-center gap-[10px]'>
                <button type="button" className='text-[20px] text-black  flex items-center rounded-full border-2 border-black font-[400]  px-8 py-2   ' >Get started</button>
                <FontAwesomeIcon icon={faBell} size="lg" className='text-white rounded-full p-[6px] ' style={{background : 'black'}} />
            </div>
        
      
    </div>
  )
}

export default Navbar
