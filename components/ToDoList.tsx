import { ScrollView, View } from 'react-native';
import ToDoItem from './ToDoItem';

interface Props {
  toDos: Record<string, any>;
  pageLocation: string;
  onDelete: (key: string) => void;
  onComplete: (key: string) => void;
}

const ToDoList: React.FC<Props> = ({ toDos, pageLocation, onDelete, onComplete }) => {
  return (
    <ScrollView>
      {Object.keys(toDos).map((key) => (toDos[key].pageLocation == pageLocation ? <ToDoItem deleteTodo={onDelete} completeTodo={onComplete} key={key} id={key} toDos={toDos} /> : null))}
    </ScrollView>
  );
};

export default ToDoList;
