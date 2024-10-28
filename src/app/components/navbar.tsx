import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-red-900 font-bold font-color text-slate-50 h-20">
        <div className="flex justify-between items-center">
            <Link href="/">
                <h1 className='text-xl m-6 cursor-pointer hover:text-red-400'>Rodem</h1>
            </Link>
            <ul className='flex gap-4 mr-5'>      
                <Link className='hover:text-red-400' href= "/about">About</Link>
                <Link className='hover:text-red-400' href= "/skill">Skill</Link>
                <Link className='hover:text-red-400' href= "/charges">Charges</Link>
                <Link className='hover:text-red-400' href= "/contact">Contact</Link>

            </ul>
        </div>
  
    </div>
  )
}

export default Navbar