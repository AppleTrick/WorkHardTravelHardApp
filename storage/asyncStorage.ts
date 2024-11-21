import AsyncStorage from '@react-native-async-storage/async-storage';

// asyncStorage를 통해 Item을 저장함\
export const saveItem = async (key: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save item with key: ${key}`, error);
  }
};

// asyncStorage를 통해 Item을 가지고옴
export const getItem = async <T>(key: string, defaultValue: T): Promise<T> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(`Failed to get item with key: ${key}`, error);
    return defaultValue;
  }
};
