import { Button } from '@/components/ui/button'
import { HomeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4 m-auto w-full'>
        <h1>404 not found!</h1>
        <Link href={'/'}><Button>Back to home <HomeIcon className='ml-4' /></Button></Link>
    </div>
  )
}
