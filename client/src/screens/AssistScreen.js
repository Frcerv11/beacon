import React from 'react';
import { StyleSheet, Text, View, Picker,Dimensions } from 'react-native';
import { Divider, Card, Button } from 'react-native-elements';

const window = Dimensions.get('window')
const WINDOW_HEIGHT = Dimensions.get('window').height
const WINDOW_WIDTH = Dimensions.get('window').width
export default class AssistScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            supply: 'Medical Supplies'
        };
        this.onPressGoBack = this.onPressGoBack.bind(this)
       this.updateSupplies = this.updateSupplies.bind(this)
    }
    updateSupplies(supply){
        console.log(supply)
        this.setState({ supply })
    }
    onPressUrgencyScreen = () => {
        const supply = this.state.supply    
        this.props.navigation.navigate('UrgencyScreen', {supply} );
    }
    onPressGoBack(){
        this.props.navigation.navigate('WelcomeScreen');
    }
   
    render() {
        return (
            <View>
                <Card>
                    <Text style={styles.headline}>What do you need help with ?</Text>
                    <Picker selectedValue = {this.state.supply} onValueChange = {this.updateSupplies}>
                        <Picker.Item label = "Medical Supplies" value = "Medical Supplies" />
                        <Picker.Item label = "Food" value = "Food" />
                        <Picker.Item label = "Water" value = "Water" />
                        <Picker.Item label = "Clothing" value = "Clothing" />
                    </Picker>
                </Card>
                <View style={styles.footer}>
                    <Button onPress={this.onPressUrgencyScreen} style={styles.buttonTop} backgroundColor={'green'} title='Next' />
                    <Button onPress={this.onPressGoBack} title='Go Back' />
                </View>
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
  headline: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 35,
    height:90,
  },
  buttonTop:{
    marginBottom: 20,
  },
  footer: {
    position:'absolute',
    height:200,
    left:0,
    top:WINDOW_HEIGHT - 200,
    width:WINDOW_WIDTH,
  }
});
