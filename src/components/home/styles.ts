import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    maxHeight: height * 0.7
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
  },
  negar: {
    width: width * 0.2,
    height: width * 0.2,
    position: 'fixed',
    bottom: height * 0.18,
    left: width * 0.05,
    backgroundColor: 'red',
    borderRadius: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  aceitar: {
    width: width * 0.2,
    height: width * 0.2,
    position: 'fixed',
    bottom: height * 0.18,
    left: width * 0.65,
    backgroundColor: 'green',
    borderRadius: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleIcon: {
    fontSize: 35,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  matchImg: {
    width: width * 0.83,
    padding: width * 0.02,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height * 0.55,
    maxHeight: height * 0.55,
    borderRadius: 8,
    backgroundColor: 'gray'
  },
  userName: {
    fontSize: width * 0.05,
    marginVertical: width * 0.04,
    textAlign: 'left',
    width: width * 0.8
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: width * 0.4,
    alignItems: 'center',
  },
  infoTextContainer: {
    alignItems: 'center'
  },
  learnText: {
    fontSize: width * 0.045,
    fontWeight: 'bold'
  },
  infoText: {
    fontSize: width * 0.04,
  }
});