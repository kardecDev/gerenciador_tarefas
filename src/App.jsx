//import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import EmptyState from "./components/EmptyState";
import { v4 as uuidv4 } from 'uuid';
import { useFetchTasks } from "./hooks/useFetchTasks";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Title from "./components/Title";

function App() {
  // 1. Primeiro, tentamos pegar o que está no LocalStorage
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  // 2. Passamos o estado para o hook de busca. 
  // Ele vai decidir se precisa buscar na API ou não.
  const { loading, error } = useFetchTasks(tasks, setTasks);

  // --- Funções de manipulação (onAddTask, onDeleteTask, etc) permanecem as mesmas ---
  // Elas atualizarão o 'tasks', que por sua vez atualizará o LocalStorage.
  if (loading) return <div className="text-white p-6 text-center">Carregando dados iniciais...</div>;
  if (error) return <div className="text-red-400 p-6 text-center">Erro: {error}</div>;   

  //Regra de negócio
  //Toggle task function
  function onTaskClick(taskId){
    const  newTasks = tasks.map((task)=>{
      //Se o id da task for igual ao taskId clicado, então inverte o valor de completed
      if(task.id === taskId){
        return {...task, completed: !task.completed}
      }
      //Senão, retorna a task normalmente
      return task;
    })
    setTasks(newTasks);
  }

  //Delete task function
  function onDeleteTaskClick(taskId){
    const  newTasks = tasks.filter((task)=> task.id !== taskId);
    setTasks(newTasks);
    
  }

  //Add task function
  function onAddTask(title, description){
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  } 

  // --- Lógica de Renderização (Abordagem Sênior) ---
  // Extraímos a lógica condicional para uma constante ou função 
  const renderContentTasks = () => {
    if (tasks.length > 0) {
      return (
        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          onDeleteTaskClick={onDeleteTaskClick} 
        />
      );
    }
    
    return <EmptyState />;
  };
 
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] mx-auto space-y-4">
       <Title> 
          Gerenciador de Tarefas 
       </Title>  
       <AddTask onAddTask={onAddTask} />
       {/* Chamamos a função de renderização aqui */}
       {renderContentTasks()}        
      </div>
    </div>  
  );
}

export default App;