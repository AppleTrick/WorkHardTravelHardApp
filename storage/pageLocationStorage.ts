import { saveItem, getItem } from './asyncStorage';

const PAGELOCATION = '@pageLocation';

export const savePageLocation = async (location: 'work' | 'travel') => {
  await saveItem(PAGELOCATION, location);
};

export const loadPageLocation = async (): Promise<'work' | 'travel'> => {
  return await getItem(PAGELOCATION, 'work'); // 기본값 'work'
};
