import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { theme } from './colors';
import Header from './components/Header';
import { usePageLocation } from './hooks/usePageLocation';
import { useToDo } from './hooks/useToDo';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

export default function App() {
  const { pageLocation, switchLocation } = usePageLocation();
  const { toDos, text, setText, addToDo, deleteToDo } = useToDo();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header onSwitch={switchLocation} pageLocation={pageLocation} />
      <ToDoInput text={text} setText={setText} onSubmit={() => addToDo(text, pageLocation)} />
      <ToDoList toDos={toDos} pageLocation={pageLocation} onDelete={deleteToDo} />
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
