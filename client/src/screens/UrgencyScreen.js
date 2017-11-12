import React from 'react';
import { StyleSheet, Text, View, Picker,Dimensions } from 'react-native';
import { Divider, Card, Button } from 'react-native-elements';

const window = Dimensions.get('window')
const WINDOW_HEIGHT = Dimensions.get('window').height
const WINDOW_WIDTH = Dimensions.get('window').width
export default class UrgencyScreen extends React.Component {

    constructor() {
        super();
        this.state = {
           
        };
        this.onPressUrgent = this.onPressUrgent.bind(this)
        this.onPressNotUrgent = this.onPressNotUrgent.bind(this)
    }
    componentDidMount(){
        const {supply} = this.props.navigation.state.params;
        this.setState({supply})
    }
  
    onPressGoBack = () => {
        this.props.navigation.navigate('AssistScreen' );
    }

    onPressNotUrgent(){
        const {supply} = this.props.navigation.state.params
        this.props.navigation.navigate('FormScreen', {supply,urgent:false} );
    }

    onPressUrgent(){
        const {supply} = this.props.navigation.state.params
        this.props.navigation.navigate('FormScreen',{supply,urgent:true});
    }
   
    render() {
  
        return (
            <View>
                <Card>
                    <Text style={styles.headline}>How Urgent ?</Text>
                    <View style={styles.btnOptions}>
                        <Button  style={styles.buttonTop} onPress={this.onPressUrgent} backgroundColor={'red'} title='Very Urgent' />
                        <Button  onPress={this.onPressNotUrgent} backgroundColor={'green'} title='Not Urgent' />
                    </View>
                </Card>
                <View style={styles.footer}>
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
  buttonActive:{
    opacity:0.5
  },
  footer: {
    position:'absolute',
    height:150,
    left:0,
    top:WINDOW_HEIGHT - 150,
    width:WINDOW_WIDTH,
  },

});
