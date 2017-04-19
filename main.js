import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class MainScreenNavigator extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.spacing}>Main</Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  render() {
    return <Text style={styles.spacing}>Chat with Lucy</Text>;
  }
}

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacing: {
    padding: 20,
  },
});

Expo.registerRootComponent(App);
