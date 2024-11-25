import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  id: string;
  location: string;
}

const HeaderItem: React.FC<Props> = ({ id, location }) => {
  return (
    <TouchableOpacity onPress={() => onSwitch('work')}>
      <Text style={{ ...styles.btnText, color: pageLocation === 'work' ? 'white' : theme.grey }}>Work</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: 38,
    fontWeight: '600',
    color: 'white',
  },
});

export default HeaderItem;
