import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  // Inicialização "Lazy" (Preguiçosa)
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      // Se existir no localStorage, retorna o dado, senão retorna o valor inicial
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Erro ao ler localStorage para a chave "${key}":`, error);
      return initialValue;
    }
  });

  // Efeito para persistir os dados toda vez que o estado mudar
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Erro ao salvar no localStorage para a chave "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}