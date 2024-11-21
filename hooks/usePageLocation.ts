import { useState, useEffect } from 'react';
import { savePageLocation, loadPageLocation } from '../storage/pageLocationStorage';

export const usePageLocation = () => {
  const [pageLocation, setPageLocation] = useState<'work' | 'travel'>('work');

  useEffect(() => {
    (async () => {
      const savedLocation = await loadPageLocation();
      setPageLocation(savedLocation);
    })();
  }, []);

  const switchLocation = async (location: 'work' | 'travel') => {
    setPageLocation(location);
    await savePageLocation(location);
  };

  return { pageLocation, switchLocation };
};
