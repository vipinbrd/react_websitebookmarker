import { useContext } from "react";
import { Bookmark } from "../store/BookmarkProvider";

export function BookMarks(){
   const{bookmarks,setBookmarks}=useContext(Bookmark)
   return <>
   <h1 className="text-3xl font-bold text-center mb-6">ALL Bookmarks</h1>
   {bookmarks.length==0&&<p className="text-center text-gray-500">No Bookmarks</p>}
   {bookmarks.length>0&&
    <ul className="space-y-4 max-w-3xl mx-auto">
      {bookmarks.map((ele)=>{
         return <li key={ele.id} className="bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-lg font-semibold">{ele.name}</p>
            <a href={ele.url} target="_blank" className="text-blue-600 hover:underline text-sm break-all">{ele.url}</a>
          </div>
          <div className="flex gap-3">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm">delete</button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-md text-sm">edit</button>
          </div>
         </li>
      })}
    </ul>
   }
   </>
}
