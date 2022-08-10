import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Stat} from '../Constants/types';

type Props = {
  stat: Stat;
};

const StatItem: React.FC<Props> = React.memo(({stat}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.info1}>Base:</Text>
        <Text style={styles.info}> {stat?.base_stat}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info1}>Effort: </Text>
        <Text style={styles.info}> {stat?.effort}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.info1}>Spec Name:</Text>
        <Text style={styles.info}> {stat?.stat.name}</Text>
      </View>
    </View>
  );
});

export default StatItem;

const styles = StyleSheet.create({
  info: {
    letterSpacing: 0.3,
    marginVertical: 8,
    textTransform: 'capitalize',
    color: 'black',
  },
  info1: {
    letterSpacing: 0.3,
    marginVertical: 8,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: '#ee4444',
  },
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: '75%',
    alignSelf: 'center',
    elevation: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
