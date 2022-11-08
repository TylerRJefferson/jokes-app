import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Joke, Punchline, and Another components

export default function App() {
  // create state to hold jokes
  const [jokeList, setJokeList] = useState([]);
  // create state to hold last joke index
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  // create function to get another
  const getNextJoke = () => {
    if(currentJokeIndex , jokeList.length - 1){
      setCurrentJokeIndex(currentJokeIndex + 1)
    } else {
      setCurrentJokeIndex(0)
    }
  }
  // useEffect to get all jokes
  useEffect(() => {
    fetch("https://api.sampleapis.com/jokes/goodJokes")
      .then(result => result.json())
      .then(setJokeList)
      .catch(alert)
  }, [])

  return (
    <View style={styles.container}>
      <Text>🤡🤣🤡🤣🤡🤣🤡🤣🤡🤣🤡🤣🤡</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcc00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
