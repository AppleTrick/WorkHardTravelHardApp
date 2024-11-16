import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable, TextInput } from 'react-native';
import { theme } from './colors';
import { useState } from 'react';

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState('');
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  // const onChangeText = (event: string) => console.log(event);
  const onChangeText = (payload: string) => setText(payload);
  const addToDo = () => {
    alert(text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text style={{ ...styles.btnText, color: working ? 'white' : theme.grey }}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text style={{ ...styles.btnText, color: !working ? 'white' : theme.grey }}>Travel</Text>
        </TouchableOpacity>
        {/* 하이라이트 변화를 줄수있는 버튼 */}
        {/* <TouchableHighlight
          underlayColor="red"
          activeOpacity={0.5}
          onPress={() => {
            console.log('hi');
          }}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight> */}

        {/* 터치를 하면 UI 적으로 변화는 없지만 반응을 볼수 있는 버튼 컴포넌트 */}
        {/* <TouchableWithoutFeedback
          onPress={() => {
            console.log('pressed');
          }}
        >
          <Text style={styles.btnText}>Travel</Text>
        </TouchableWithoutFeedback> */}
      </View>
      <View>
        <TextInput
          // multiline // 라인 여러개 사용가능하게
          // secureTextEntry // 비밀번호로 보이게함
          // returnKeyType="send"
          // keyboardType="ascii-capable"
          // autoCapitalize={'sentences'} // 자동완성기능
          keyboardType="default" // 나오는 키보드 타입 설정
          onSubmitEditing={addToDo} // return 버튼을 눌렀을때 반응하는 것
          onChangeText={onChangeText}
          value={text}
          placeholder={working ? 'Add a To Do' : 'Where do you want to go?'}
          style={styles.input}
        />
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
    marginTop: 20,
    fontSize: 18,
  },
});
