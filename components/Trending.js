import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import TrendingUi from "./ui/TrendingUi";
import UserReccomendation from "./ui/UserRec";

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div
        className="flex space-x-3 p-3 bg-white bg-opacity-10 w-[300px] h-[44px]
      rounded-3xl"
      >
        <MagnifyingGlassIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent outline-none placeholder:text-gray-600"
          placeholder="Search Tweeter"
        />
      </div>

      <div
        className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl
      mt-3"
      >
        <h1 className="p-3 font-bold text-xl">What's happening</h1>
        <TrendingUi
          country={"US"}
          trendingTopic={"Jeffrey Epstein"}
          retweetCount={100}
        />
        <TrendingUi country={"MX"} trendingTopic={"AMLO"} retweetCount={100} />
        <TrendingUi
          country={"UK"}
          trendingTopic={"Manchester City"}
          retweetCount={100}
        />
        <TrendingUi
          country={"AU"}
          trendingTopic={"Covid-19"}
          retweetCount={100}
        />
        <TrendingUi country={"FR"} trendingTopic={"Paris"} retweetCount={100} />
      </div>
      <div
        className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl
      mt-3"
      >
        <h1 className="p-3 font-bold text-xl">Who to Follow</h1>
        <UserReccomendation
          pfp={
            "https://yt3.googleusercontent.com/ilXDOhnI33_OR9SWcOmUDfsyjcUH1Ssj7Llif1RZ4RXvQ5K0rRp9PP-oofC1rRqgHU_jfMDgiEA=s900-c-k-c0x00ffffff-no-rj"
          }
          fullName={"David Bragg"}
          userName={"br4gg"}
        />
        <UserReccomendation
          pfp={
            "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
          }
          fullName={"Elon Musk"}
          userName={"elonmusk"}
        />
        <UserReccomendation
          pfp={
            "https://pbs.twimg.com/profile_images/1268733255013920769/3blVbYtD_400x400.jpg"
          }
          fullName={"iLiFE! Idol"}
          userName={"iLiFE_official"}
        />
      </div>
    </div>
  );
}
