import {View, Text, Image, TextInput} from 'react-native';

import styles from './styles';

const EditableBox = ({label, onChangeText, value, placeholder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
export default EditableBox;
