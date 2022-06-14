import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
    const posts = [
        {
            id: "1",
            name: "John Doe",
            username: "johndoe",
            userImage: "https://i.pravatar.cc/200",
            img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
            text: "nice view 🙂🙂",
            timestamp: "2 hours ago"
        },
        {
            id: "2",
            name: "Will Smith",
            username: "willsmith",
            userImage: "https://i.pravatar.cc/200",
            img: "https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            text: "just chilling 😻🥰🥰🥰",
            timestamp: "5 days ago"
        },

    ];
  return (
    <div className="xl:ml-[370px] border-r border-l border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        <div className="flex justify-between items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
           <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="flex items-center justify-center px-0 w-9 h-9 hoverEffect">
                <SparklesIcon className="h-5"/>
            </div>
        </div>
        <Input />
        {posts.map((post) => (
            <Post key={post.id} post={post} />
        ))}

    </div>
  )
}