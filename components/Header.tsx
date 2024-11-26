import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderItem from './HeaderItem';

interface Props {
  pageLocation: string;
  onSwitch: (location: string) => void;
  locationList: Record<string, any>;
}

const Header: React.FC<Props> = ({ pageLocation, onSwitch, locationList }) => (
  <View style={styles.header}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Object.keys(locationList).map((key) => (
        <HeaderItem key={key} id={key} pageLocation={pageLocation} locationName={locationList[key].ListName} onSwitch={onSwitch} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnText: {
    fontSize: 38,
    fontWeight: '600',
    color: 'white',
  },
});
export default Header;
