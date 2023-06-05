import {
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
  EnvelopeIcon,
  ClipboardIcon,
  BookmarkIcon,
  CheckBadgeIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  HashtagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Sidebar() {
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
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] font-bold text-xl mt-2">Tweet</button>
      <div className="absolute bottom-0">Current User</div>
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
