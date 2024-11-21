import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { theme } from '../colors';

interface Props {
  pageLocation: 'work' | 'travel';
  onSwitch: (location: 'work' | 'travel') => void;
}

const Header: React.FC<Props> = ({ pageLocation, onSwitch }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
    <TouchableOpacity onPress={() => onSwitch('work')}>
      <Text style={{ color: pageLocation === 'work' ? 'white' : theme.grey }}>Work</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onSwitch('travel')}>
      <Text style={{ color: pageLocation === 'travel' ? 'white' : theme.grey }}>Travel</Text>
    </TouchableOpacity>
  </View>
);

export default Header;
