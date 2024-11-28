import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../colors';

interface Props {
  id: string;
  locationName: string;
  pageLocation: string;
  onSwitch: (location: string) => void;
}

const HeaderItem: React.FC<Props> = ({ locationName, onSwitch, pageLocation }) => {
  return (
    <TouchableOpacity onPress={() => onSwitch(locationName)}>
      <Text style={{ ...styles.btnText, color: pageLocation == locationName ? 'white' : theme.grey }}>{locationName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnText: {
    marginRight: 15,
    fontSize: 38,
    fontWeight: '600',
    color: 'white',
  },
});

export default HeaderItem;
