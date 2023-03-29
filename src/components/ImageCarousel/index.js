import {useState} from 'react';
import {FlatList, Image, View, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

import styles from './styles';

const ImageCarousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scroll end
  const handleScrollEnd = ev => {
    const horizontalOffset = ev.nativeEvent.contentOffset.x;
    const index = Math.floor(horizontalOffset / width);
    setActiveIndex(index);
  };

  // Render image
  const renderImage = ({item}) => {
    return <Image source={{uri: item}} style={styles.image} />;
  };

  return (
    <View>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(item, idx) => idx.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
      />

      <View style={styles.pagination}>
        {images.map((_, idx) => (
          <View
            style={[
              styles.paginationLine,
              idx === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
};
export default ImageCarousel;
