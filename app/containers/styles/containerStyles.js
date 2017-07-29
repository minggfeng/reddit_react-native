import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap"
  },
  text: {
    flexGrow: 1,
    margin: 20,
    marginBottom: 30
  },
  imageContainer: {
    flex: 1,    
    flexDirection:"column",
    flexWrap: "wrap",
    flexGrow: 3,
    backgroundColor: "black"
  },
  image: {
    flexGrow: 1,
    justifyContent: "center",
    width: "100%"
  },
  title: {
    fontSize: 16
  },
  author: {
    color: "#A9A9A9",
    position: "absolute",
    bottom: 0,
    left: 0
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
  ups: {
    position: "absolute",
    bottom: 0,
    right: 0
  }
})

export default styles;