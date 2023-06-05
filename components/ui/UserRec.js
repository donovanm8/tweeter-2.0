import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function UserReccomendation({pfp , userName, fullName}) {
  return (
    <div className="flex justify-between p-3 hover:bg-white hover:bg-opacity-10 cursor-pointer">
      <div className="flex space-x-3">
        <img
          className="w-11 h-11 rounded-full object-cover"
          src={pfp}
        />
        <div>
          <div className="flex space-x-1">
            <h1 className="font-bold">{fullName}</h1>
            <CheckBadgeIcon className="w-[18px] text-blue-400" />
          </div>
          <h1 className="text-[12px] mt-1 text-gray-500">@{userName}</h1>
        </div>
      </div>
      <button className="bg-white text-black text-sm w-20 h-8 rounded-full font-semibold">
        Follow
      </button>
    </div>
  );
}
