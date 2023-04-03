import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },

  backIcon: {
    width: 20,
    height: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.lightGray,
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 4,
  },
  images: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  imageItem: {
    flexDirection: 'row',
  },
  cancelIcon: {
    width: 20,
    height: 20,
    marginLeft: -16,
    marginTop: -5,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 25,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadPlus: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.white,
    marginBottom: 2,
    marginLeft: 1,
  },
});
