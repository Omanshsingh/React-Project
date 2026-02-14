import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { SquarePen } from "lucide-react";

const App = () => {
  const [notes, setNotes] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const deleteButton = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setTask(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(task));
  }, [task]);

  const updateButton = (idx) => {
    setNotes(task[idx].notes);
    setDetails(task[idx].details);
    setEditIndex(idx);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedTasks = [...task];
      updatedTasks[editIndex] = { notes, details };
      setTask(updatedTasks);
      setEditIndex(null);
    } else {
      setTask([...task, { notes, details }]);
    }

    setNotes("");
    setDetails("");
  };

  return (
    <div className="h-screen bg-gray-900 text-white lg:flex">
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

      <div className="lg:w-1/2 p-10 lg:border-l-2 overflow-auto h-[90%]">
        <h3 className="w-full text-white text-4xl font-bold mb-5">
          Recent Notes
        </h3>

        <div className="flex flex-wrap items-start justify-start gap-5 mt-5">
          {task.map((elem, index) => (
            <div
              key={index}
              className="flex justify-between flex-col items-start relative h-52 bg-cover text-black w-40 rounded-2xl py-9 px-4 p-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
            >
              <div>
                <h4 className="text-xl leading-tight font-bold mb-2">
                  {elem.notes}
                </h4>
                <p className="mt-2 leading-tight font-medium">{elem.details}</p>
              </div>

              <h2
                onClick={() => deleteButton(index)}
                className="cursor-pointer absolute bottom-2 bg-red-600 w-1/3 rounded-2xl text-xs pl-4 p-1"
              >
                <X color="#ffffff" strokeWidth={2.75} />
              </h2>

              <h2
                onClick={() => updateButton(index)}
                className="cursor-pointer absolute bottom-2 right-4 bg-green-600 w-1/3 rounded-2xl text-xs pl-4 p-1"
              >
                <SquarePen color="#ffffff" strokeWidth={2.75} />
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
