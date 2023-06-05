import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  ChartBarIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import TweetHeader from "./TweetHeader";

export default function Tweet() {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader />
      <div className="p-3 ml-14 flex space-x-14">
        <ChatBubbleOvalLeftEllipsisIcon className="cursor-pointer w-5 hover:text-blue-500" />
        <HeartIcon className="cursor-pointer w-5 hover:text-pink-500" />
        <ChartBarIcon className="cursor-not-allowed hover:text-green-400 w-5" />
        <ArrowUpTrayIcon className="cursor-not-allowed hover:text-green-400 w-5" />
      </div>
    </div>
  );
}
