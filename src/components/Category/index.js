import {Image, Pressable, Text, View} from 'react-native';

import styles from './styles';

const Category = ({item}) => {
  const {title, image} = item;

  return (
    <Pressable onPress={() => console.log('pressed')} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};
export default Category;
