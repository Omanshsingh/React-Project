import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ task, deleteButton, updateButton }) => {
  return (
    <div className="lg:w-1/2 p-10 lg:border-l-2 overflow-auto h-[90%]">
      <h3 className="w-full text-white text-4xl font-bold mb-5">
        Recent Notes
      </h3>

      <div className="flex flex-wrap items-start justify-start gap-5 mt-5">
        {task.map((elem, index) => (
          <NoteCard
            key={index}
            elem={elem}
            index={index}
            deleteButton={deleteButton}
            updateButton={updateButton}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
