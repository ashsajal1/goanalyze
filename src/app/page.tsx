"use client"
import { useQuery } from '@tanstack/react-query';
import AnalysisCard from "@/components/analysis-card";
import { Key } from 'react';


export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ['analysisData'],
    queryFn: () =>
      fetch('/api/analysis').then((res) => res.json()),
  })

  // console.log(data)
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <main>
      <div className="flex items-center justify-between flex-wrap gap-2 p-2 md:p-4">
        {data.res.map((item: { imageUrl: string; }, index: Key | null | undefined) => (
          <AnalysisCard key={index} img={item.imageUrl} />
        ))}
      </div>
    </main>
  );
}
