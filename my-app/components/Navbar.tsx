import { NAV_CONST } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-start gap-[100px] px-[40px] py-[20px]'>
        <div className='flex items-center gap-1'>
            <Link href="/">
                <Image src="/Group2.png" alt="logo" width={20} height={20}/>
            </Link>
            <h2 className='text-[20px] font-[400] '>Mac</h2>
        </div>
            
            <ul className='flex items-center gap-[90px] text-[20px] font-[500] '>
                {NAV_CONST.map((elem)=>(
                    <Link href={elem.href}>{elem.Home}</Link>
                ))}

            </ul>
        
      
    </div>
  )
}

export default Navbar
