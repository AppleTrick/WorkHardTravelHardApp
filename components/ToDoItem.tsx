import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons/';
import { theme } from '../colors';

interface Props {
  id: string;
  toDos: Record<string, any>;
  deleteTodo: (key: string) => void;
  completeTodo: (key: string) => void;
}

const ToDoItem: React.FC<Props> = ({ toDos, id, deleteTodo, completeTodo }) => {
  return (
    <TouchableOpacity onPress={() => completeTodo(id)}>
      <View style={styles.toDo}>
        {toDos[id].complete ? <FontAwesome name="check-square-o" size={24} color="red" /> : <FontAwesome name="square-o" size={24} color={theme.grey} />}
        <Text style={[styles.toDoText, toDos[id].complete && styles.completedText]}>{toDos[id].text}</Text>
        <TouchableOpacity onPress={() => deleteTodo(id)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Fontisto name="trash" size={18} color={theme.grey} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default ToDoItem;
