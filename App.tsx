import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, TextInput, ScrollView, Alert } from 'react-native';
import { theme } from './colors';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fontisto } from '@expo/vector-icons';
import { saveItem } from './storage/asyncStorage';
import Header from './components/Header';
import { usePageLocation } from './hooks/usePageLocation';
import { useToDo } from './hooks/useToDo';

interface ToDo {
  text: string;
  pageLocation: string;
}

type TPageLocation = 'work' | 'travel';

const STORAGE_KEY = '@toDos';
const PAGELOCATION = '@pageLocation';

export default function App() {
  // const [pageLoaction, setPageLoacation] = useState<TPageLocation>('work');
  // const [text, setText] = useState('');
  // const [toDos, setToDos] = useState<Record<string, ToDo>>({});

  // const travel = async () => {
  //   setPageLoacation('travel');
  //   saveItem(PAGELOCATION, 'travel');
  // };

  // const work = async () => {
  //   setPageLoacation('work');
  //   saveItem(PAGELOCATION, 'work');
  // };

  // const onChangeText = (payload: string) => setText(payload);

  // const saveToDos = async (toSave: Record<string, ToDo>) => {
  //   saveItem(STORAGE_KEY, toSave);
  // };

  // const loadToDos = async () => {
  //   try {
  //     const s = await AsyncStorage.getItem(STORAGE_KEY);
  //     if (s) {
  //       setToDos(JSON.parse(s));
  //     } else {
  //       setToDos({}); // 또는 초기값 설정
  //     }
  //   } catch (error) {
  //     console.error('Failed to load todos:', error);
  //     setToDos({}); // 에러 발생 시 초기값 설정
  //   }

  //   try {
  //     const location = await AsyncStorage.getItem(PAGELOCATION);
  //     if (location) {
  //       setPageLoacation(JSON.parse(location));
  //     } else {
  //       setPageLoacation('work'); // 또는 초기값 설정
  //     }
  //   } catch (error) {
  //     console.error('Failed to load todos:', error);
  //     setPageLoacation('work'); // 에러 발생 시 초기값 설정
  //   }
  // };

  // useEffect(() => {
  //   loadToDos();
  // }, []);

  // const addToDo = async () => {
  //   if (text == '') {
  //     return;
  //   }
  //   const newToDos = { ...toDos, [Date.now()]: { text, pageLocation: pageLoaction } };
  //   setToDos(newToDos);
  //   await saveToDos(newToDos);
  //   setText('');
  // };

  // const deleteTodo = (key: string) => {
  //   Alert.alert('Delete To Do?', 'Are you sure?', [
  //     { text: '취소' },
  //     {
  //       text: '확인',
  //       style: 'destructive',
  //       onPress: async () => {
  //         const newToDos = { ...toDos };
  //         delete newToDos['1732179583064'];
  //         setToDos(newToDos);
  //         await saveToDos(newToDos);
  //       },
  //     },
  //   ]);
  // };

  const { pageLocation, switchLocation } = usePageLocation();
  const { toDos, text, setText, addToDo, deleteToDo } = useToDo();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header onSwitch={switchLocation} pageLocation={pageLocation} />
      <View>
        {/* TextInput */}
        <TextInput
          returnKeyType="done"
          keyboardType="default"
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          value={text}
          placeholder={pageLoaction == 'work' ? 'Add a To Do' : 'Where do you want to go?'}
          style={styles.input}
        />
        {/* ToDoList */}
        <ScrollView>
          {Object.keys(toDos).map((key) =>
            toDos[key].pageLocation == pageLoaction ? (
              <View style={styles.toDo} key={key}>
                <Text style={styles.toDoText}>{toDos[key].text}</Text>
                <TouchableOpacity onPress={() => deleteTodo(key)}>
                  <Fontisto name="trash" size={18} color={theme.grey} />
                </TouchableOpacity>
              </View>
            ) : null,
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 38,
    fontWeight: '600',
    // color: theme.grey,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toDoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
