import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Button} from '@components/buttons/button/Button';
import {MinifigPreview} from '../minifigPreview/MinifigPreview';
import {useTranslation} from 'react-i18next';
import {Text} from '@components/typography/text/Text';

type RandomMinifigPreviewProps = {
  onDraw?: () => void;
  onDetailsPress?: (id: Domain.Minifig['setId']) => void;
  drawingDisabled?: boolean;
  minifig?: Domain.Minifig;
};

export const RandomMinifigPreview = ({
  onDraw,
  onDetailsPress,
  drawingDisabled,
  minifig,
}: RandomMinifigPreviewProps) => {
  const [t] = useTranslation();
  return (
    <View style={styles.container}>
      {minifig && (
        <MinifigPreview minifig={minifig}>
          <Pressable onPress={() => onDetailsPress?.(minifig.setId)}>
            <Text style={styles.showMoreButton}>
              {t('minifigPreview.showDetails')}
            </Text>
          </Pressable>
        </MinifigPreview>
      )}
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
  showMoreButton: {
    color: 'orange',
    fontWeight: '700',
  },
});
