import React, {Image, View, StyleSheet} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Text} from '@components/typography/text/Text';
import {useTranslation} from 'react-i18next';

type MinifigPreviewProps = {
  minifig: Domain.Minifig;
};

export const MinifigPreview = ({minifig}: MinifigPreviewProps) => {
  const [t] = useTranslation();
  return (
    <DropShadow style={styles.dropShadow}>
      <View style={styles.content}>
        <MinifigImage minifig={minifig} />
        <Text style={styles.minifigTitle} numberOfLines={1}>
          {minifig.name}
        </Text>
        <Text style={styles.showMoreButton}>
          {t('minifigPreview.showDetails')}
        </Text>
      </View>
    </DropShadow>
  );
};

type MinifigImageProps = {
  minifig: Domain.Minifig;
};

const MinifigImage = ({minifig}: MinifigImageProps) => {
  const [t] = useTranslation();
  return (
    <View style={styles.minifigImgContainer}>
      {minifig.img ? (
        <Image
          source={{uri: minifig.img}}
          style={styles.minifigImg}
          resizeMode="contain"
          accessibilityLabel={t('minifigPreview.imageLabel', {
            name: minifig.name,
          })}
        />
      ) : (
        <Text style={styles.noPreview}>{t('minifigPreview.noPreview')}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropShadow: {
    shadowColor: 'orange',
    shadowOpacity: 2,
    shadowRadius: 8,
  },
  content: {
    padding: 16,
    borderRadius: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  minifigImg: {
    flex: 1,
    aspectRatio: 1,
  },
  minifigImgContainer: {
    height: 150,
    justifyContent: 'center',
  },
  minifigTitle: {
    color: 'black',
    fontWeight: '700',
  },
  showMoreButton: {
    color: 'orange',
    fontWeight: '700',
  },
  noPreview: {
    color: 'black',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});
