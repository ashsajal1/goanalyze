import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'

export default function AnalysisCard({ img }: { img: string }) {
  return (
    <Card className='md:w-[320px]'>
      <CardHeader>
        <CardTitle>Analysis of XECUSDT</CardTitle>
        <CardDescription>This is the description of this analysis!</CardDescription>
      </CardHeader>
      <CardContent>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={'https://www.tradingview.com/x/8GbwaRJX'} alt="fsa" />
      </CardContent>
      <CardFooter className="flex justify-between items-center gap-2">
        <Link className='w-full' target='_blink' href={img}>
          <Button className='w-full' variant="outline">View Charts</Button>
        </Link>
        <Button>See Deatils</Button>
      </CardFooter>

    </Card>
  )
}
