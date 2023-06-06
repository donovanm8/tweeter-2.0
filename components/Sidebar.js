import { auth } from "@/firebase";
import { signoutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  BellIcon,
  EnvelopeIcon,
  ClipboardIcon,
  BookmarkIcon,
  CheckBadgeIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  async function handleSignOut (){
    await signOut(auth)
    dispatch(signoutUser())
  }
  return (
    <div className="hidden sm:flex flex-col fixed h-full xl:pl-24">
      <nav className="xl:space-y-1.5 relative h-full">
        <div className="xl:p-3 py-3 flex pl-2 xl:justify-start">
          <Image
            src={
              "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
            }
            width={40}
            height={40}
            className="cursor-pointer hover:opacity-70"
          />
        </div>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={EnvelopeIcon} text={"Messages"} />
        <SidebarLink Icon={ClipboardIcon} text={"Lists"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={CheckBadgeIcon} text={"Twitter Blue"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={EllipsisHorizontalCircleIcon} text={"More"} />
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] font-bold text-xl mt-2">
          Tweet
        </button>
        <div className="cursor-pointer absolute bottom-2 -right-2 flex items-center justify-center p-1 xl:p-3 space-x-3 hover:bg-white hover:bg-opacity-20 rounded-full"
        onClick={handleSignOut}>
          <img
            className="w-11 h-11 rounded-full object-cover"
            src={user.photoUrl || "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"}
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <EllipsisHorizontalIcon className="hidden xl:inline w-5" />
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex justify-center items-center  xl:justify-start space-x-3 text-xl mb-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
