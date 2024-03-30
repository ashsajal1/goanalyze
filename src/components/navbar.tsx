import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { EnterIcon, RocketIcon } from '@radix-ui/react-icons'
import { Badge } from './ui/badge'
import { auth, currentUser, UserButton } from "@clerk/nextjs";
import Image from 'next/image'

export default async function Navbar() {
  const user = await currentUser()
  // console.log(user)

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

        {user ? <UserButton /> : <Link href='/sign-in'><Button variant="outline" size="icon"><EnterIcon /></Button></Link>}

      </div>
    </nav>
  )
}
