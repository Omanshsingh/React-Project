import React, { useState, useEffect } from "react";
import NoteForm from "./Components/NoteForm";
import NotesList from "./Components/NotesList";

const App = () => {
  const [notes, setNotes] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(task));
  }, [task]);

  const deleteButton = (idx) => {
    setTask(task.filter((_, index) => index !== idx));
  };

  const updateButton = (idx) => {
    setNotes(task[idx].notes);
    setDetails(task[idx].details);
    setEditIndex(idx);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!notes.trim() || !details.trim()) {
      setError("Both fields are required.");
      return;
    }

    if (editIndex !== null) {
      const updatedTasks = [...task];
      updatedTasks[editIndex] = {
        notes: notes.trim(),
        details: details.trim(),
      };
      setTask(updatedTasks);
      setEditIndex(null);
    } else {
      setTask([
        ...task,
        { notes: notes.trim(), details: details.trim() },
      ]);
    }

    setNotes("");
    setDetails("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white lg:flex">

      <NoteForm
        notes={notes}
        details={details}
        setNotes={setNotes}
        setDetails={setDetails}
        submitHandler={submitHandler}
        editIndex={editIndex}
      />

      {error && (
        <p className="text-red-500 text-center absolute top-4 left-1/2 -translate-x-1/2">
          {error}
        </p>
      )}

      <NotesList
        task={task}
        deleteButton={deleteButton}
        updateButton={updateButton}
      />
    </div>
  );
};

export default App;
