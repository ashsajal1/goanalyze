"use client"
import { useQuery } from '@tanstack/react-query';
import AnalysisCard from "@/components/analysis-card";
import { Key } from 'react';
import { SkeletonCard } from '@/components/skeleton';


export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ['analysisData'],
    queryFn: () =>
      fetch('/api/analysis').then((res) => res.json()),
  })

  // console.log(data)
  if (isPending) return <div className='h-screen flex items-center justify-center'> <SkeletonCard /></div>

  if (error) throw new Error('An error has occurred: ' + error.message)

  return (
    <main className="flex items-center justify-start flex-wrap gap-2 p-2 md:p-4">
      {data.res.map((item: { imageUrl: string; }, index: Key | null | undefined) => (
        <AnalysisCard key={index} img={item.imageUrl} />
      ))}
    </main>
  );
}
