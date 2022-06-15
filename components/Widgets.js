import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import {useState} from 'react';

export default function Widgets({ news, randomUser }) {
    const [articleNum, setArticleNum] = useState(3);
    const [randomUserNum, setRandomUserNum] = useState(3)
    return (
        <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5 ">
            <div className="sticky top-0  py-1.5 z-50 bg-white  ">
                <div className="w-[90%] xl:w-[75%] flex items-center p-3 rounded-full relative">
                    <SearchIcon className="h-5 z-50 text-gray-500" />
                    <input type="text" className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" placeholder="Search Twitter" />
                </div>
            </div>

            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
                <h4 className="font-bold text-xl px-4">What's happening</h4>

                {news.slice(0,articleNum).map((article, index) => (

                    <News key={index} article={article} />

                ))}

                <button onClick={() => setArticleNum(articleNum+3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show more</button>
            </div>

            <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl w-[90%] xl:w-[75%] pt-2 sticky top-16">
                <h4 className="font-bold text-xl px-4">Who to follow</h4>
                {randomUser.slice(0,randomUserNum).map((user, index) => (
                    <div key={user.login.uuid} className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                        <img className="rounded-full object-cover" width="40" src={user.picture.thumbnail} alt="" />
                        <div className="ml-4 truncate leading-5">
                            <h4 className="font-bold hover:underline text-[14px] truncate">{user.login.username}</h4>
                            <h5 className="text-[13px] text-gray-500 truncate">{user.name.first + " " + user.name.last}</h5>
                        </div>
                        <button className="ml-auto bg-sky-500 text-white rounded-full px-3.5 font-bold py-1.5 text-sm">Follow</button>
                    </div>
                ))}
                <button onClick={() => setRandomUserNum(randomUserNum + 3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show more</button>
            </div>
        </div> 
    )
}