import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
  container: {
    height: 290,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
  },
  shadow: {
    shadowOffset: {width: -2, height: 0},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imgContainer: {position: 'relative', backgroundColor: '#1554F6', height: 170},
  title: {
    position: 'absolute',
    left: 18,
    bottom: 15,
    color: Colors.white,
    fontSize: 24,
    fontWeight: '400',
  },
  descContainer: {
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 15,
    paddingBottom: 15,
    height: 78,
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.dark,
  },
  actionBtn: {},
});
