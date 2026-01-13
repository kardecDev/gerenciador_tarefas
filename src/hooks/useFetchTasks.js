import { useState, useEffect } from "react";
import { fetchTodos } from "../services/api";

export function useFetchTasks(tasks, setTasks) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lógica Sênior: Só busca na API se NÃO houver tarefas no LocalStorage
    if (tasks.length > 0) return; 

    const loadData = async () => {
      try {
        setLoading(true);
        const todos = await fetchTodos();
        setTasks(todos); // Isso vai disparar o salvamento automático no LocalStorage
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []); // Executa apenas no mount

  return { loading, error };
}