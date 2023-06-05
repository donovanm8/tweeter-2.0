import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-[#e7e9ea] max-w-[1400px] mx-auto">
    <Head>
      <title>Tweeter</title>
      <link rel="icon" href="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"/>
    </Head>

    <Sidebar />
    {/* <Postfeed /> */}
    {/* <Trending /> */}
    </div>
  )
}
