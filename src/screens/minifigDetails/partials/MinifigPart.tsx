import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Heading} from '@components/typography/heading/Heading';

type MinifigPartProps = {
  part: Omit<Domain.MinifigPart, 'id'>;
};

export const MinifigPart = ({part}: MinifigPartProps) => {
  return (
    <View>
      <Heading variant="h3">{part.name}</Heading>
      {part.img && <Image source={{uri: part.img}} style={styles.img} />}
    </View>
  );
};

const styles = StyleSheet.create({
  img: {width: 200, height: 150},
});
