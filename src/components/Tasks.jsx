import { CheckCheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

/* eslint-disable react/prop-types */
function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  const navigate = useNavigate();
  function onSeeDetailsClick(title, description){
    const query = new URLSearchParams()
    query.set("title", title);
    query.set("description", description);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((tasks)=>(
        <li key={tasks.id} className="flex gap-2">
          <button 
            onClick={() => onTaskClick(tasks.id)}
            className={`bg-slate-400 w-full text-white text-left p-2 rounded-md flex items-center    gap-2
                      ${tasks.completed && 'line-through' }`}>
                        
                        {tasks.completed && <CheckCheckIcon />} {tasks.title}
          </button>
          <Button 
            onClick={() => onSeeDetailsClick(tasks.title, tasks.description)} >
              <ChevronRightIcon />
          </Button>
          <Button
            onClick={() => onDeleteTaskClick(tasks.id)}>
              <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;