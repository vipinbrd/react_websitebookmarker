import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { Bookmark } from "../store/BookmarkProvider";

export function Form({ onClose }) {
const{bookmarks,setBookmarks}=useContext(Bookmark)

  const websiteName = useRef();
  const weburl = useRef();
  function formSubmitHandler(e){
    event.preventDefault();
    const name=websiteName.current.value;
    const url=weburl.current.value;
    const data={
        name,url
    }
    setBookmarks((pre)=>{
        return [...pre,data]
    })
    onClose()
  }

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={(e)=>{formSubmitHandler(e)}} className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Website</h2>

        <label htmlFor="name" className="block mb-1 text-sm font-medium">Website Name</label>
        <input
          id="name"
          ref={websiteName}
          type="text"
          placeholder="Enter website name"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label htmlFor="url" className="block mb-1 text-sm font-medium">Website URL</label>
        <input
          id="url"
          ref={weburl}
          type="text"
          placeholder="Enter website URL"
          className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-sm font-medium"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold"
          >
            Add
          </button>
        </div>
      </form>
    </div>,
    document.querySelector("#backdrop")
  );
}
