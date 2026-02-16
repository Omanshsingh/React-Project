import React from "react";

const NoteForm = ({
  notes,
  details,
  setNotes,
  setDetails,
  submitHandler,
  editIndex,
}) => {
  return (
    <form
      onSubmit={submitHandler}
      className="flex items-start lg:w-1/2 gap-4 flex-col p-10"
    >
      <h1 className="text-4xl font-bold">
        {editIndex !== null ? "Edit Note" : "Add New Note"}
      </h1>

      <textarea
        className="px-5 h-20 w-full py-2 font-medium border-2 rounded-md outline-none"
        placeholder="Enter your note"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <textarea
        className="px-5 h-32 w-full py-2 font-medium border-2 rounded-md outline-none"
        placeholder="Write details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <button
        type="submit"
        className="px-5 h-12 w-full active:scale-95 font-medium rounded-md text-black outline-none bg-white hover:bg-gray-200 transition-colors"
      >
        {editIndex !== null ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
