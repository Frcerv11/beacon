import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { Text, Button, Card, Image,Divider } from 'react-native-elements'

const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

var box_count = 3;
var box_height = SCREEN_HEIGHT / box_count;

export default class WelcomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            locationAddress:'1600 Pennsylvania Ave, PA 19130, USA',
            log:{
                name:'John Doe',
                phone:'555-555-5555'
            },
            supply:'food',
            urgent:true
        };
        this.onPressDone = this.onPressDone.bind(this)
    }
    componentDidMount(){
        const {locationAddress,log,urgent,supply } = this.props.navigation.state.params;
        this.setState({locationAddress,log,urgent,supply})
    }

    onPressDone = (user) => {
        const locationAddress = this.state.locationAddress;
        const log =  this.state.log;
        const urgent =  this.state.urgent;
        const supply = this.state.supply;
        const complete = true
        this.props.navigation.navigate('WelcomeScreen',{complete,locationAddress,log,urgent,supply});
    }
    

    render() {
        const locationAddress = this.state.locationAddress || "";
        const name = this.state.log.name || "";
        const phone = this.state.log.phone || "";
        const supply = this.state.supply || "";
        const urgent = this.state.urgent || "";
        return (
            <View>
                <Card title={name} titleStyle={{color:'black',fontSize:25,fontWeight:'bold'}}>
                    <Text style={styles.textStyle} > <Text style={styles.labelStyle}>Requested:</Text> {supply}</Text>
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <Text style={styles.textStyle} > <Text style={styles.labelStyle}>Urgent:</Text> {urgent ? 'Yes!' : 'No'}</Text>
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <Text style={styles.textStyle} ><Text style={styles.labelStyle}>Address:</Text> {locationAddress}</Text>
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <Text style={styles.textStyle} ><Text style={styles.labelStyle}>Phone Number:</Text> {phone}</Text>    
                </Card >
                <View style={styles.footer}>
                    <Button large={true} onPress={this.onPressDone} backgroundColor={'red'} title='Done' />
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    textStyle:{
        marginTop:20,
        marginBottom:20,
        fontSize:20
    },
    labelStyle:{
        fontWeight:'bold'
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    footer: {
        position:'absolute',
        height:150,
        left:0,
        top:SCREEN_HEIGHT - 150,
        width:SCREEN_WIDTH,
      }
  });