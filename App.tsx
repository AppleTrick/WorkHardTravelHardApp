import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from './colors';
import Header from './components/Header';
import { usePageLocation } from './hooks/usePageLocation';
import { useToDo } from './hooks/useToDo';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import FAB from './components/FAB';

export default function App() {
  const { pageLocation, switchLocation, locationList, addLocation } = usePageLocation();
  const { toDos, text, setText, addToDo, deleteToDo, completeToDo, editToDo } = useToDo();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="white" />
      <Header onSwitch={switchLocation} pageLocation={pageLocation} locationList={locationList} />
      <ToDoInput text={text} setText={setText} onSubmit={() => addToDo(text, pageLocation)} />
      <ToDoList toDos={toDos} pageLocation={pageLocation} onDelete={deleteToDo} onComplete={completeToDo} onEdit={editToDo} />
      <FAB addLocation={addLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
});
