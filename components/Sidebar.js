import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import { HomeIcon, } from "@heroicons/react/solid";
import { DotsHorizontalIcon, UserIcon, DotsCircleHorizontalIcon, ClipboardIcon, BookmarkIcon, HashtagIcon, BellIcon, InboxIcon } from "@heroicons/react/outline";

export default function Sidebar() {
    return (
        <div className='hidden sm:flex flex-col p-2 xl:items-center fixed h-full'>
            {/* Twitter logo */}
            <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>

                <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
            </div>

            {/* Menu */}
            <div className='mt-4 mb-2.5 xl:items-start'>
                <SidebarMenuItem text="Home" Icon={HomeIcon} active />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
                <SidebarMenuItem text="Notifications" Icon={BellIcon} />
                <SidebarMenuItem text="Messages" Icon={InboxIcon} />
                <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
                <SidebarMenuItem text="Profile" Icon={UserIcon} />
                <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
            {/* Button */}

            <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>

            {/* Mini Profile */}
            <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
                <img className="rounded-full w-10 h-10 object-cover xl:mr-2" src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="User Image" />

                <div className='leading-5 hidden xl:inline'>
                    <h4 className='font-bold'>John Doe</h4>
                    <p className='text-gray-500'>@johndoe</p>
                </div>
                <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
            </div>
        </div>
    )
}