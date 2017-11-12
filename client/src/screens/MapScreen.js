import React from 'react';
import { StyleSheet, Text, View, Picker,Dimensions,TextInput } from 'react-native';
import { Divider, Card, Button, FormLabel, FormInput } from 'react-native-elements'
import MapView from 'react-native-maps';
import axios from 'axios';

const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width/height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
export default class MapScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            region:{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0043,
            },
            log:{
                name:'',
                phone:'',
                address:'11 main'
            },
            addr : '350 5th Ave, New York, NY 10118'
        };
        
        this.onPressConfirm = this.onPressConfirm.bind(this)
        this.onPressGoBack = this.onPressGoBack.bind(this)
    }
    componentDidMount(){
        const { supply, urgent,log } = this.props.navigation.state.params;
        this.setState({supply, urgent,log})
        
        let addr = log.address + ", " + log.zip;
        addr = addr.split(' ').join('+');
        const url = 'http://maps.google.com/maps/api/geocode/json?address=' + addr;
        console.log("url", url);
        fetch(url)
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
                region: {
                  latitude:responseData.results[0].geometry.location.lat,
                  longitude: responseData.results[0].geometry.location.lng,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                },
                formattedAddress:responseData.results[0].formatted_address
              });
          })
          .catch(function (err) {
              console.log(err)
            return err;
          });
    }

    onPressGoBack(){
        const supply = this.state.supply;
        const urgent = this.state.urgent;
        this.props.navigation.navigate('FormScreen',{supply,urgent});
    }
    onPressConfirm(){
        const locationAddress = this.state.formattedAddress;
        const longitude = this.state.region.longitude;
        const latitude = this.state.region.latitude;
        const name =  this.state.log.name;
        const phone =  this.state.log.phone;
        const log =  this.state.log;
        const urgent =  this.state.urgent;
        const supply = this.state.supply;
        
        const data = {name,phone,supply,urgent,locationAddress,longitude,latitude}
        axios.post('https://infinite-castle-39283.herokuapp.com' + "/addUser",data)
        .then((response) => {
           console.log(response)
          return response
        })
        .catch(err => console.log(err))
        
        this.props.navigation.navigate('SummaryScreen',{locationAddress,log,urgent,supply});
    }

    render() {
        const locationAddress = this.state.formattedAddress || ''

        const latlng = {latitude:this.state.region.latitude,longitude: this.state.region.longitude} || {}
        return (
            <View>
                <MapView
                scrollEnabled={false}
                pitchEnabled={false}
                rotateEnabled={false}
                style={ styles.map }
                region={this.state.region}
                >
                <MapView.Marker
                    title={locationAddress}
                    coordinate={latlng}
                />
                </MapView> 
                <View style={styles.footer}>
                    <Button  onPress={this.onPressConfirm} style={styles.buttonTop} backgroundColor={'red'} title='Confirm' />
                    <Button  onPress={this.onPressGoBack} title='Go Back' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        position:'absolute',
        height:150,
        left:0,
        top:SCREEN_HEIGHT - 185,
        width:SCREEN_WIDTH,
    },
    buttonTop:{
        marginBottom: 20,
      },
    map:{
        height:SCREEN_HEIGHT - 200,
        width:'100%'
    },

});
