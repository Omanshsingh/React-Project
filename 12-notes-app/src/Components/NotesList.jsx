import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ task, deleteButton, updateButton }) => {
  return (
    <div className="w-full lg:w-1/2 p-6 lg:p-10 lg:border-l-2">
      <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6">
        Recent Notes
      </h3>

      <div className="flex flex-wrap gap-5">
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
