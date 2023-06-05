export default function TweetHeader() {
  return (
    <div className="p-3 flex space-x-3">
      <img
        src="https://pbs.twimg.com/profile_images/1646092462912606210/RDKtfp8Y_400x400.jpg"
        className="w-11 h-11 rounded-full object-cover"
      />
      <div>
        <div className="flex items-center space-x-2 text-gray-500 mb-1">
          <span className="font-bold text-white">あいす Aisu</span>
          <span>@ice_icol</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>2hrs ago</span>
        </div>
        <span>おはよう🥱 あいこる周年緊張するね 、みんな来てね 、</span>
      </div>
    </div>
  );
}
