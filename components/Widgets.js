import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import {useState} from 'react';

export default function Widgets({ news }) {
    const [articleNum, setArticleNum] = useState(3);
    return (
        <div className="xl:w-[600px] hidden lg:inline space-y-5 ">
            <div className="sticky top-0  py-1.5 z-50 bg-white  ">
                <div className="ml-8 w-[90%] xl:w-[75%] flex items-center p-3 rounded-full relative">
                    <SearchIcon className="h-5 z-50 text-gray-500" />
                    <input type="text" className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" placeholder="Search Twitter" />
                </div>
            </div>

            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] ml-8 xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">What's happening</h4>

                {news.slice(0,articleNum).map((article, index) => (

                    <News key={index} article={article} />

                ))}

                <button onClick={() => setArticleNum(articleNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show more</button>
            </div>
        </div> 
    )
}