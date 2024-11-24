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

// 개발도중에 불필요한 데이터를 클리어하는 코드
export const clearItem = async () => {
  try {
    await AsyncStorage.clear();
    console.log('모든 테스트 데이터가 삭제되었습니다.');
  } catch (error) {
    console.log('데이터 삭제 중 오류 발생:', error);
  }
};
