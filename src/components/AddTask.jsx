import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function AddTask( {onAddTask} ) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); 

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col mb-4">
            <Input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="Digite o titulo da tarefa" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} />
                
            <Input 
                type="text" 
                name="description" 
                id="description" 
                placeholder="Digite o descrição da tarefa" 
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <button 
                onClick={() => { 
                    //Verifica se o título não está vazio antes de adicionar a tarefa
                    if(!title.trim() || !description.trim()){
                        return alert("Por favor, preencha o título e a descrição da tarefa.");
                    }   

                    onAddTask(title, description)
                    setTitle("");
                    setDescription("");
                    } 
                }  
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"> 
                Adicionar 
            </button>
        </div>
    );
}

AddTask.propTypes = {
    onAddTask: PropTypes.func.isRequired,
};

export default AddTask;