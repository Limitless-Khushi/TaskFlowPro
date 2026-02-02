import React, { useState } from 'react';

const Kanban = () => {
  const [columns] = useState([
    { id: 1, title: 'To Do', tasks: ['Setup Repo', 'Design UI'] },
    { id: 2, title: 'In Progress', tasks: ['Auth System'] },
    { id: 3, title: 'Done', tasks: ['Project Pitch'] },
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Task Board</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          + New Task
        </button>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {columns.map(col => (
          <div key={col.id} className="bg-gray-100 p-4 rounded-lg w-80 flex-shrink-0">
            <h3 className="font-bold mb-4 flex justify-between">
              {col.title} <span className="text-gray-400">{col.tasks.length}</span>
            </h3>
            {col.tasks.map((task, i) => (
              <div key={i} className="bg-white p-4 rounded shadow-sm mb-3 cursor-move hover:border-indigo-500 border border-transparent transition-all">
                {task}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
