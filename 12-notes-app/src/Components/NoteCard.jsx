import React from "react";
import { X, SquarePen } from "lucide-react";

const NoteCard = ({ elem, index, deleteButton, updateButton }) => {
  return (
    <div
      className="flex justify-between flex-col items-start relative h-52 bg-cover text-black w-40 rounded-2xl py-9 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
    >
      <div>
        <h4 className="text-xl leading-tight font-bold mb-2">
          {elem.notes}
        </h4>
        <p className="mt-2 leading-tight font-medium">
          {elem.details}
        </p>
      </div>

      <button
        onClick={() => deleteButton(index)}
        className="cursor-pointer absolute bottom-2 bg-red-600 w-1/3 rounded-2xl p-1 flex justify-center"
      >
        <X color="#ffffff" strokeWidth={2.75} />
      </button>

      <button
        onClick={() => updateButton(index)}
        className="cursor-pointer absolute bottom-2 right-4 bg-green-600 w-1/3 rounded-2xl p-1 flex justify-center"
      >
        <SquarePen color="#ffffff" strokeWidth={2.75} />
      </button>
    </div>
  );
};

export default NoteCard;
