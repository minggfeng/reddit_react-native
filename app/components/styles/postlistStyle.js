import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    margin: 10
  },
  background: {
    backgroundColor: '#222222'
  },
  containerRow: {
    flex: 1,
    flexDirection: "row"
  },
  containerColumn1: {
    flex: 1,
    flexDirection: "column",
    flexGrow: 1
  },
  containerColumn2: {
    flex: 1,
    flexDirection: "column",
    flexGrow: 4,
    position: "relative",
    marginLeft: 7.5,
    minHeight: 70
  },
  icon: {
    height: 60,
    width: 60
  },
  title: {
    fontSize: 16
  },
  arrow: {
    ...Platform.select({
      ios: {
        height: 10,
        width: 10
      },
      android: {
        height: 30,
        width: 30
      }
    })
  },
  author: {
    color: "#A9A9A9",
    position: "absolute",
    bottom: 0,
    left: 0
  }
})

export default styles;