import {Image, Pressable, Text, View} from 'react-native';

import styles from './styles';
import {colors} from '../../utils/colors';

const Category = ({item, isSelected, onPress}) => {
  const {title, image} = item;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          isSelected && {
            backgroundColor: colors.primary,
          },
        ]}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <Text
        style={[
          styles.title,
          isSelected && {
            color: colors.primary,
            fontWeight: 600,
          },
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};
export default Category;
