import AnalysisCard from "@/components/analysis-card";
import supabase from "@/lib/supabaseClient";
import { auth, currentUser } from "@clerk/nextjs";
import { Database } from "../../database.types";

export default async function Home() {
  // const { userId } = auth();
  // const user = await currentUser();

  // if (userId) {
  //   const { data } = await supabase.from('user_profile').insert({ id: userId, first_name: user?.firstName, last_name: user?.lastName, email:user?.emailAddresses, image_url: user?.imageUrl }).returns<Database>()
  //   console.log(data)
  // }
  return (
    <main className="flex items-center justify-between flex-wrap gap-2 p-2 md:p-4">
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
      <AnalysisCard img='https://www.tradingview.com/x/8GbwaRJX' />
    </main>
  )
}
