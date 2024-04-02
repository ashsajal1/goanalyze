"use client"
import { useState, useEffect } from 'react';
import AnalysisCard from "@/components/analysis-card";

export default function Home() {
  const [analysisData, setAnalysisData] = useState([]);

  useEffect(() => {
    async function fetchAnalysisData() {
      try {
        const response = await fetch('/api/analysis');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setAnalysisData(data.res);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAnalysisData();
  }, []);

  return (
    <main>
      {analysisData.length > 0 ? (
        <div className="flex items-center justify-between flex-wrap gap-2 p-2 md:p-4">
          {analysisData.map((item, index) => (
            <AnalysisCard key={index} img={item.imageUrl} />
          ))}
        </div>
      ) : (
        <p>Loading analysis data...</p>
      )}
    </main>
  );
  
}
