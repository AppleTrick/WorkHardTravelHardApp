import { useState, useEffect } from 'react';
import { saveToDos, loadToDos } from '../storage/toDoStorage';

export const useToDo = () => {
  const [toDos, setToDos] = useState<Record<string, any>>({});
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const savedToDos = await loadToDos();
      setToDos(savedToDos);
    })();
  }, []);

  const addToDo = async (text: string, pageLocation: 'work' | 'travel') => {
    if (text === '') return;
    const newToDos = { ...toDos, [Date.now()]: { text, pageLocation } };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText('');
  };

  const deleteToDo = async (key: string) => {
    const newToDos = { ...toDos };
    delete newToDos[key];
    setToDos(newToDos);
    await saveToDos(newToDos);
  };

  return { toDos, text, setText, addToDo, deleteToDo };
};
