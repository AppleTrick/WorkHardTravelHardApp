import { saveItem, getItem } from './asyncStorage';

const PAGELOCATION = '@pageLocation';
const LOCATIONLIST = '@locationList';

// 마지막 종료된 페이지 위치 정보
export const savePageLocation = async (location: string) => {
  await saveItem(PAGELOCATION, location);
};

export const loadPageLocation = async (): Promise<string> => {
  return await getItem(PAGELOCATION, 'ALL');
};

// 페이지 리스트 가지고 오기
export const saveLocationList = async (locationList: Record<string, any>) => {
  await saveItem(LOCATIONLIST, locationList);
};

export const loadLocationList = async (): Promise<Record<string, any>> => {
  return await getItem(LOCATIONLIST, {});
};
