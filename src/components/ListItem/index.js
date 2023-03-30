import {View, Text, Image, Pressable} from 'react-native';

import styles from './styles';

import chevronRight from '../../assets/icons/chevron_right.png';

const ListItem = ({title, subTitle, reversed, showIcon, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {reversed ? (
        <View style={styles.titleContainer}>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          <Text style={styles.titleReversed}>{title}</Text>
        </View>
      ) : (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
      )}
      {showIcon ? <Image source={chevronRight} /> : null}
    </Pressable>
  );
};
export default ListItem;
