import { useState, useEffect } from 'react';
import { savePageLocation, loadPageLocation, loadLocationList, saveLocationList } from '../storage/pageLocationStorage';

export const usePageLocation = () => {
  const [addLocationName, setaddLocationName] = useState('');

  // 위치 항목들 가져오기
  const [locationList, setLocationList] = useState<Record<string, any>>({});

  // 현재 선택된 로케이션 가지고 오기
  const [pageLocation, setPageLocation] = useState<string>('All');

  useEffect(() => {
    // 위치리스트들 가지고오기
    (async () => {
      const savedLocationList = await loadLocationList();
      setLocationList(savedLocationList);
    })();

    // 선택한 위치 가지고오기
    (async () => {
      const savedLocation = await loadPageLocation();
      setPageLocation(savedLocation);
    })();
  }, []);

  const AddLocaiton = async (text: string) => {
    if (text == '') return;
    const newLocationList = {
      ...locationList,
      [Date.now()]: {
        ListName: text,
      },
    };
    setLocationList(newLocationList);
    await saveLocationList(newLocationList);
    setaddLocationName('');
  };

  const deleteLocation = () => {};

  const switchLocation = async (location: string) => {
    setPageLocation(location);
    await savePageLocation(location);
  };

  return { pageLocation, switchLocation, addLocationName, setaddLocationName, locationList, setLocationList };
};
