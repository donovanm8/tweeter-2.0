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
    <div className="hidden md:flex flex-col fixed">
      <nav className="xl:space-y-1.5">
        <div className="xl:p-3 py-3">
          <Image
            src={
              "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png"
            }
            width={40}
            height={40}
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
      </nav>
      <div>Current User</div>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="flex items-center space-x-3 text-xl mb-6 hoverAnimation">
      <Icon className="w-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
