import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import styles from './styles';
import {AppHeader} from '../../../components';

import backIcon from '../../../assets/icons/back_outline.png';
import cancelIcon from '../../../assets/icons/close.png';
import {useState} from 'react';

const CreateListing = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const uploadNewImage = async () => {
    setIsLoading(true);
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    });

    if (result?.assets?.length) {
      if (images.length > 1) {
        alert('You can only upload 2 images');
        return;
      }
      setImages(list => [...list, ...result?.assets]);
    }
    setIsLoading(false);
  };

  const onDeleteImage = index => {
    const newImages = images.filter((_, idx) => idx !== index);
    setImages(newImages);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView>
        <AppHeader
          title="Create a new Listing"
          showLeftIcon
          leftIcon={backIcon}
          leftIconPress={() => navigation.goBack()}
          leftIconStyle={styles.backIcon}
        />
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Upload Photos</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity
              disabled={images.length > 1}
              style={styles.uploadContainer}
              onPress={uploadNewImage}>
              <View style={styles.uploadCircle}>
                <Text style={styles.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.images}>
              {images.map((image, idx) => (
                <View style={styles.imageItem} key={idx}>
                  <Image
                    source={{
                      uri: image?.uri,
                    }}
                    style={styles.image}
                  />
                  <Pressable hitSlop={20} onPress={() => onDeleteImage(idx)}>
                    <Image source={cancelIcon} style={styles.cancelIcon} />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
          {isLoading ? <ActivityIndicator /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CreateListing;
