import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  changeStyle?: any;
}

const ToDoInput: React.FC<Props> = ({ text, setText, onSubmit, changeStyle }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={changeStyle || styles.input} returnKeyType="done" keyboardType="default" onSubmitEditing={onSubmit} onChangeText={setText} value={text} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    marginVertical: 20,
  },
  input: {
    height: '100%',
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    // marginVertical: 20,
    fontSize: 18,
  },
});

export default ToDoInput;
