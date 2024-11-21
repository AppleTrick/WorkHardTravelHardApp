import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../colors';

interface Props {
  id: string;
  toDos: Record<string, any>;
  deleteTodo: any;
}

const ToDoItem: React.FC<Props> = ({ toDos, id, deleteTodo }) => {
  return (
    <View style={styles.toDo}>
      <Text style={styles.toDoText}>{toDos[id].text}</Text>
      <TouchableOpacity onPress={() => deleteTodo(id)}>
        <Fontisto name="trash" size={18} color={theme.grey} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ToDoItem;
