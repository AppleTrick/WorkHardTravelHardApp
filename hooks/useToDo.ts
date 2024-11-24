import { useState, useEffect } from 'react';
import { saveToDos, loadToDos, clearToDos } from '../storage/toDoStorage';

export const useToDo = () => {
  const [toDos, setToDos] = useState<Record<string, any>>({});
  const [text, setText] = useState('');

  useEffect(() => {
    // TEST CODE
    // asyncStorage를 비워주는 코드
    // clearToDos();

    (async () => {
      const savedToDos = await loadToDos();
      setToDos(savedToDos);
    })();
  }, []);

  const addToDo = async (text: string, pageLocation: 'work' | 'travel') => {
    if (text === '') return;
    const newToDos = { ...toDos, [Date.now()]: { text, pageLocation, complete: false } };
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

  const completeToDo = async (key: string) => {
    const newToDos = { ...toDos };
    newToDos[key] = { ...newToDos[key], complete: !newToDos[key].complete };
    setToDos(newToDos);
    await saveToDos(newToDos);
  };

  return { toDos, text, setText, addToDo, deleteToDo, completeToDo };
};
