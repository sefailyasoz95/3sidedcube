import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const Loading: React.FC<Props> = React.memo((props: Props) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={'large'} color="black" />
    </View>
  );
});

export default Loading;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
