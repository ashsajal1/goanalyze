import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

export default function AnalysisCard() {
  const img = 'https://www.tradingview.com/x/8GbwaRJX'
  return (
    <Card className='md:w-[330px]'>
      <CardHeader>
        <CardTitle>Analysis of XECUSDT</CardTitle>
      </CardHeader>
      <CardContent>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={'https://www.tradingview.com/x/8GbwaRJX'} alt="fsa" />
        <CardDescription>This is the description of this analysis!</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>

    </Card>
  )
}
