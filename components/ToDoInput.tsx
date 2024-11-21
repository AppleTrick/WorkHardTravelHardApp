import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const ToDoInput: React.FC<Props> = ({ text, setText, onSubmit }) => {
  return (
    <TextInput
      style={styles.input}
      returnKeyType="done"
      keyboardType="default"
      onSubmitEditing={onSubmit}
      onChangeText={setText}
      value={text}
      // placeholder={pageLoaction == 'work' ? 'Add a To Do' : 'Where do you want to go?'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
});

export default ToDoInput;
