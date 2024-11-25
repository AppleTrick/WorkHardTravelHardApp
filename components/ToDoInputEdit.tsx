import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { theme } from '../colors';

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const ToDoInputEdit: React.FC<Props> = ({ text, setText, onSubmit }) => {
  return (
    <View style={styles.toDo}>
      <TextInput style={styles.input} returnKeyType="done" keyboardType="default" onSubmitEditing={onSubmit} onChangeText={setText} value={text} />
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
  },
  input: {
    padding: 5,
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ToDoInputEdit;
