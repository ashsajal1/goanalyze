import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { RocketIcon } from '@radix-ui/react-icons'
import { Badge } from './ui/badge'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-primary h-[60px] p-2'>
      <Link className='text-xl font-bold' href={'/'}>GoAnalyze</Link>
      <div className='flex items-center justify-between gap-2'>
        <Link href={'signals'}>
          <Button variant={'secondary'}>
            <RocketIcon className="mr-2 h-4 w-4" />
            Signals
            <Badge className='ml-2 rounded-full' variant="destructive">4</Badge>
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  )
}
