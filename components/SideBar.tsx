import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import SideBarLink from "./SideBarLink";

export default function SideBar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://rb.gy/0gau5a" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SideBarLink text="Home" Icon={HomeIcon} active />
        <SideBarLink text="Explore" Icon={HashtagIcon} />
        <SideBarLink text="Notifications" Icon={BellIcon} />
        <SideBarLink text="Messages" Icon={InboxIcon} />
        <SideBarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SideBarLink text="Lists" Icon={ClipboardListIcon} />
        <SideBarLink text="Profile" Icon={UserIcon} />
        <SideBarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
    </div>
  );
}
