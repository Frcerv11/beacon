import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { Text, Button, Card, Image } from 'react-native-elements'

const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

var box_count = 3;
var box_height = SCREEN_HEIGHT / box_count;

export default class WelcomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            complete:false
        };
        this.onPressSummary = this.onPressSummary.bind(this);
    }

    onPressStart = (user) => {
        this.props.navigation.navigate('AssistScreen');
    }

    onPressCancel = (user) => {
        const complete = false
        this.props.navigation.navigate('WelcomeScreen',{complete});
    }

    onPressSummary(){
        console.log(this.state)
        const locationAddress = this.state.locationAddress;
        const log =  this.state.log;
        const urgent =  this.state.urgent;
        const supply = this.state.supply;
        const complete = true
        this.props.navigation.navigate('SummaryScreen',{complete,locationAddress,log,urgent,supply});
    }
    componentDidMount(){
        const {locationAddress,log,urgent,supply,complete } = this.props.navigation.state.params || '';
        console.log(locationAddress)
        this.setState({locationAddress,log,urgent,supply,complete})
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text h1 style={styles.paragraph}>
                    BEACON
                </Text>
                {!this.state.complete ? <Button large={true} style={styles.btn} onPress={this.onPressStart} backgroundColor={'red'} title='Request Help' /> : <View><Button large={true} onPress={this.onPressSummary} backgroundColor={'blue'} title='View Summary' /><Button large={true} style={[styles.btn,styles.btnBottom]} onPress={this.onPressCancel}  backgroundColor={'black'} title='Canel Request' /></View>}
              
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    image: {
        flexGrow:1,
        height:null,
        width:null,
        alignItems: 'center',
        justifyContent:'center',
    },
    btnBottom:{
        marginTop:20
    },
    btn:{
        marginBottom:250
    },
    paragraph: {
        marginBottom:50,
        textAlign: 'center',
        fontWeight: 'bold',
    },
  });