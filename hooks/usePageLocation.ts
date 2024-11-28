import { useState, useEffect } from 'react';
import { savePageLocation, loadPageLocation, loadLocationList, saveLocationList } from '../storage/pageLocationStorage';

export const usePageLocation = () => {
  const [addLocationName, setaddLocationName] = useState('');

  // 위치 항목들 가져오기
  const [locationList, setLocationList] = useState<Record<string, any>>({});

  // 현재 선택된 로케이션 가지고 오기
  const [pageLocation, setPageLocation] = useState<string>('All');

  useEffect(() => {
    (async () => {
      const savedLocationList = await loadLocationList();
      if (Object.keys(savedLocationList).length === 0) {
        const newLocationList = {
          [Date.now()]: {
            ListName: 'ALL',
          },
        };
        setLocationList(newLocationList);
        await saveLocationList(newLocationList);
      } else {
        setLocationList(savedLocationList);
      }

      // 선택한 위치 가지고오기
      const savedLocation = await loadPageLocation();
      setPageLocation(savedLocation);
    })();
  }, []);

  const addLocation = async (text: string) => {
    if (text == '') return;
    try {
      const newLocationList = {
        ...locationList,
        [Date.now()]: {
          ListName: text,
        },
      };

      await saveLocationList(newLocationList);
      setLocationList(newLocationList);

      console.log('New Location List:', newLocationList);
    } catch (error) {
      console.error('Failed to add location:', error);
    }
  };
  // 위치 전환
  const switchLocation = async (location: string) => {
    setPageLocation(location);
    await savePageLocation(location);
  };

  return { pageLocation, switchLocation, addLocationName, setaddLocationName, locationList, setLocationList, addLocation };
};
