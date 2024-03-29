import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between h-[60px] p-2 border'>
        <Link href={'/'}>GoAnalyze</Link>
        <div>
            <ModeToggle />
        </div>
    </nav>
  )
}
