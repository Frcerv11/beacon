import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Me extends React.Component {
  onPressLearnMore = (user) => {
    this.props.navigation.navigate('Settings');
}


  render() {
    return (
      <View>
          <Text>
              Hello World :D It's Me ! 
          </Text>
          <Button
            onPress={this.onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
