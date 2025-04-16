import { useState } from "react";
import { Form } from "./Form";
import { BookMarks } from "./BookMarks";

export function Homepage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {isOpen && <Form onClose={() => setIsOpen(false)} />}

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Website BookMarker</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md transition duration-300"
        >
          Add New
        </button>
      </div>
      <BookMarks/>
    </div>
  );
}
