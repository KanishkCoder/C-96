import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StoryScreen from './screens/storyScreen'
import StoryScreen2 from './screens/storyScreen2'
import StoryScreen3 from './screens/storyScreen3'
import Home from './screens/home'
import ImageScreen from './screens/imageScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

export default function App() {
  return (
    <View style={styles.container}>
    <AppContainer  />
    </View>
  );
}

let AppNavigator = createSwitchNavigator({
  Home: Home,
  ImageScreen: ImageScreen,
  StoryScreen: StoryScreen,
  StoryScreen2: StoryScreen2,
  StoryScreen3: StoryScreen3
})

const AppContainer= createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
