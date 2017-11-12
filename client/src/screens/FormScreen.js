import React from 'react';
import { StyleSheet, Text, View, Picker,Dimensions,TextInput } from 'react-native';
import { Divider, Card, Button, FormLabel, FormInput } from 'react-native-elements'

const window = Dimensions.get('window')
const WINDOW_HEIGHT = Dimensions.get('window').height
const WINDOW_WIDTH = Dimensions.get('window').width
export default class FormScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            log:{
                name:'',
                address:'',
                zip:'',
                phone:''
            }
        
        };
        
       this.onPressFormSubmit = this.onPressFormSubmit.bind(this);
       this.onPressGoBack = this.onPressGoBack.bind(this)
    }
    componentDidMount(){
        const { supply, urgent } = this.props.navigation.state.params;
        this.setState({supply, urgent})
    }
    onPressFormSubmit(){
        const { supply, urgent } = this.props.navigation.state.params;
        const log = this.state.log;
        this.props.navigation.navigate('MapScreen', {supply, urgent,log} );
    }
    onPressGoBack(){
        const supply = this.state.supply;
        this.props.navigation.navigate('UrgencyScreen',{supply});
    }
   
    render() {
        return (
 
            <View>
                <Card >
                    <FormLabel>Name</FormLabel>
                    <FormInput onChangeText={name => this.setState(prevState => ({
                        log:{
                            ...prevState.log,
                            name
                        }
                    }))} />
                    <FormLabel>Address</FormLabel>
                    <FormInput onChangeText={address => this.setState(prevState => ({
                        log:{
                            ...prevState.log,
                            address
                        }
                    }))} />
                    <FormLabel>Zip Code</FormLabel>
                    <FormInput onChangeText={zip => this.setState(prevState => ({
                        log:{
                            ...prevState.log,
                            zip
                        }
                    }))} />
                    <FormLabel>Phone Number</FormLabel>
                    <FormInput style={styles.cardContainer} onChangeText={phone => this.setState(prevState => ({
                        log:{
                            ...prevState.log,
                            phone
                        }
                    }))} />
                </Card>
                <View style={styles.footer}>
                    <Button  onPress={this.onPressFormSubmit} style={styles.buttonTop} backgroundColor={'red'} title='Submit' />
                    <Button  onPress={this.onPressGoBack} title='Go Back' />
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
  cardContainer:{
      marginBottom:100
  },
  footer: {
    position:'absolute',
    height:200,
    left:0,
    top:WINDOW_HEIGHT - 200,
    width:WINDOW_WIDTH,
  }
});
