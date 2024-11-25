import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../colors';

interface Props {
  pageLocation: string;
  onSwitch: (location: string) => void;
}

const Header: React.FC<Props> = ({ pageLocation, onSwitch }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => onSwitch('work')}>
      <Text style={{ ...styles.btnText, color: pageLocation === 'work' ? 'white' : theme.grey }}>All</Text>
    </TouchableOpacity>
    {/* <TouchableOpacity onPress={() => onSwitch('work')}>
      <Text style={{ ...styles.btnText, color: pageLocation === 'work' ? 'white' : theme.grey }}>Work</Text>
    </TouchableOpacity> */}
    <TouchableOpacity onPress={() => onSwitch('travel')}>
      <Text style={{ ...styles.btnText, color: pageLocation === 'travel' ? 'white' : theme.grey }}>Travel</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 38,
    fontWeight: '600',
    color: 'white',
  },
});
export default Header;
