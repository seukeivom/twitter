import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-r border-l border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex justify-between items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
           <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="flex items-center justify-center px-0 w-9 h-9 hoverEffect">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
    </div>
  )
}