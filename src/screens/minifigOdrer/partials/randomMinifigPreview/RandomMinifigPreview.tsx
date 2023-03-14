import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '@components/buttons/button/Button';
import {MinifigPreview} from '../minifigPreview/MinifigPreview';
import {useTranslation} from 'react-i18next';

type RandomMinifigPreviewProps = {
  onDraw?: () => void;
  drawingDisabled?: boolean;
  minifig?: Domain.Minifig;
};

export const RandomMinifigPreview = ({
  onDraw,
  drawingDisabled,
  minifig,
}: RandomMinifigPreviewProps) => {
  const [t] = useTranslation();
  return (
    <View style={styles.container}>
      {minifig && <MinifigPreview minifig={minifig} />}
      <Button
        text={t('minifigPreview.drawAgain')}
        disabled={drawingDisabled}
        onPress={onDraw}
        wrapperProps={{style: styles.drawButton}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  drawButton: {
    marginTop: 48,
  },
});
