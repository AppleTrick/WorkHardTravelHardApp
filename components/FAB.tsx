import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { usePageLocation } from '../hooks/usePageLocation';

interface Props {
  addLocation: (text: string) => Promise<void>;
}

const FAB: React.FC<Props> = ({ addLocation }) => {
  const AddLocationListAlert = () => {
    Alert.prompt('목록 추가', '추가하실 목록을 입력해주세요', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: (text) => {
          if (text && text.trim()) {
            addLocation(text);
          } else {
            Alert.alert('오류', '목록 이름을 입력해주세요');
          }
        },
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.fab} onPress={AddLocationListAlert}>
      <Text style={styles.fabText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#6200ee',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FAB;
