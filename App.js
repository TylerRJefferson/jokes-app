import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Joke, Punchline, and Another components

export default function App() {
  // create state to hold jokes
  // create state to hold last joke index
  // create function to get another
  // useEffect to get all jokes
  return (
    <View style={styles.container}>
      <Text>🤡🤡🤡🤡🤡🤡🤡</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
