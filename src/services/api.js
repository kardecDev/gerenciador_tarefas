const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos?_limit=10`);
  if (!response.ok) throw new Error("Erro ao carregar missões espaciais.");
  return await response.json();
};