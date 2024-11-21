import { saveItem, getItem } from './asyncStorage';

const STORAGE_KEY = '@toDos';

export const saveToDos = async (toDos: Record<string, any>) => {
  await saveItem(STORAGE_KEY, toDos);
};

export const loadToDos = async (): Promise<Record<string, any>> => {
  return await getItem(STORAGE_KEY, {}); // 기본값 {}
};
