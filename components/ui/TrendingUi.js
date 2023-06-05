import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
export default function TrendingUi({country, trendingTopic, retweetCount}) {
  return (
    <div className="relative p-3 hover:bg-white hover:bg-opacity-10 cursor-pointer">
      <EllipsisHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
      <p className="text-xs text-gray-500">Trending in {country}</p>
      <h1 className="text-[15px] font-bold">{trendingTopic}</h1>
      <p className="text-xs text-gray-500">{retweetCount}k Tweets</p>
    </div>
  );
}
