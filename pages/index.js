import BottomBanner from "@/components/BottomBanner";
import Postfeed from "@/components/Postfeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function Home() {
  const userName = useSelector((state) => state.user.username) 
  return (
    <div>
      <div
        className="bg-black min-h-screen text-[#e7e9ea] max-w-[1400px] mx-auto
    flex"
      >
        <Head>
          <title>Tweeter</title>
          <link
            rel="icon"
            href="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
          />
        </Head>

        <Sidebar />
        <Postfeed />
        <Trending />
      </div>

      {!userName && <BottomBanner />}
    </div>
  );
}
