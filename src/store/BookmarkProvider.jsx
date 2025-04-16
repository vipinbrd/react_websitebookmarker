import { createContext, useState } from "react";

export const Bookmark=createContext([])
export  function BookmarkProvider({children}){
  
    const[bookmarks,setBookmarks]=useState([]);


    return  <Bookmark.Provider value={{bookmarks,setBookmarks}}>{children}</Bookmark.Provider>

    



}