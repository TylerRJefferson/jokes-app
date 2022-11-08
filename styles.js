import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc00',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  jokeText: {
    textAlign: 'center',
    fontSize: 40,
  },
  punchline: {
    textAlign: 'center',
    color: '#c00',
    fontSize: 32,
  },
  bigButton: {
    backgroundColor: 'blue',
    padding: 24,
    borderRadius: 6,
  },
  buttonText:{
    color: 'white',
    fontSize: 30
  },
  emoticon: {
    fontSize: 36
  },
  hidden: {
    backgroundColor: '#c00',
    width: '100%',
    padding: 16,
  },
  show: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 16,
  }
})

export default styles;