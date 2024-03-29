import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-primary h-[60px] p-2'>
        <Link className='text-xl font-bold' href={'/'}>GoAnalyze</Link>
        <div>
            <ModeToggle />
        </div>
    </nav>
  )
}
