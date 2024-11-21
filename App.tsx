import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, TextInput, ScrollView, Alert } from 'react-native';
import { theme } from './colors';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fontisto } from '@expo/vector-icons';

interface ToDo {
  text: string;
  pageLocation: string;
}

type TPageLocation = 'work' | 'travel';

const STORAGE_KEY = '@toDos';
const PAGELOCATION = '@pageLocation';

export default function App() {
  const [pageLoaction, setPageLoacation] = useState<TPageLocation>('work');
  const [text, setText] = useState('');
  const [toDos, setToDos] = useState<Record<string, ToDo>>({});

  const travel = async () => {
    setPageLoacation('travel');
    try {
      await AsyncStorage.setItem(PAGELOCATION, JSON.stringify('travel'));
    } catch (error) {
      /// save error
    }
  };

  const work = async () => {
    setPageLoacation('work');
    try {
      await AsyncStorage.setItem(PAGELOCATION, JSON.stringify('work'));
    } catch (error) {
      /// save error
    }
  };
  const onChangeText = (payload: string) => setText(payload);

  const saveToDos = async (toSave: Record<string, ToDo>) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch (error) {
      /// save error
    }
  };

  const loadToDos = async () => {
    try {
      const s = await AsyncStorage.getItem(STORAGE_KEY);
      if (s) {
        setToDos(JSON.parse(s));
      } else {
        setToDos({}); // 또는 초기값 설정
      }
    } catch (error) {
      console.error('Failed to load todos:', error);
      setToDos({}); // 에러 발생 시 초기값 설정
    }

    try {
      const location = await AsyncStorage.getItem(PAGELOCATION);
      if (location) {
        setPageLoacation(JSON.parse(location));
      } else {
        setPageLoacation('work'); // 또는 초기값 설정
      }
    } catch (error) {
      console.error('Failed to load todos:', error);
      setPageLoacation('work'); // 에러 발생 시 초기값 설정
    }
  };

  useEffect(() => {
    loadToDos();
  }, []);

  const addToDo = async () => {
    if (text == '') {
      return;
    }
    const newToDos = { ...toDos, [Date.now()]: { text, pageLocation: pageLoaction } };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText('');
  };

  const deleteTodo = (key: string) => {
    Alert.alert('Delete To Do?', 'Are you sure?', [
      { text: '취소' },
      {
        text: '확인',
        style: 'destructive',
        onPress: async () => {
          const newToDos = { ...toDos };
          delete newToDos['1732179583064'];
          setToDos(newToDos);
          await saveToDos(newToDos);
        },
      },
    ]);
  };

  console.log(toDos);
  console.log(pageLoaction);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{ ...styles.btnText, color: pageLoaction === 'work' ? 'white' : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{ ...styles.btnText, color: pageLoaction === 'travel' ? 'white' : theme.grey }}>Travel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          returnKeyType="done"
          keyboardType="default"
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          value={text}
          placeholder={pageLoaction == 'work' ? 'Add a To Do' : 'Where do you want to go?'}
          style={styles.input}
        />
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
