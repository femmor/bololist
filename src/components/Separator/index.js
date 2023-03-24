import {View, Text, Image} from 'react-native';

import styles from './styles';

import separatorIcon from '../../assets/icons/separator.png';

const Separator = ({title}) => {
  return (
    <View style={styles.container}>
      <Image source={separatorIcon} style={styles.separatorIcon} />
      <Text style={styles.separatorText}>{title}</Text>
      <Image source={separatorIcon} style={styles.separatorIcon} />
    </View>
  );
};
export default Separator;
