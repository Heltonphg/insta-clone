import { Platform } from 'react-native';

export default {
  margin: 15,
  padding: 15,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 0 },
  }),
  tabBarHeight: 50,
};
