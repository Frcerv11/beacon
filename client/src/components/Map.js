import React from 'react';
import { StyleSheet, Text, View, Picker,Dimensions,TextInput } from 'react-native';
import { Divider, Card, Button, FormLabel, FormInput } from 'react-native-elements'
import MapView from 'react-native-maps';
const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width/height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            region:{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0043,
                longitudeDelta: 0.0043,
            },
            addr : '350 5th Ave, New York, NY 10118'
        };
        this.onPressConfirm = this.onPressConfirm.bind(this);
        this.onPressGoBack = this.onPressGoBack.bind(this)
    }
    componentDidMount(){
        
        // const { supply, urgent,log } = this.props.navigation.state.params;
        // console.log(log)
        // this.setState({supply, urgent,log})
        // let addr = this.state.addr;
        // addr = addr.split(' ').join('+');
        // const url = 'http://maps.google.com/maps/api/geocode/json?address=' + addr;
        // console.log("url", url);
        // fetch(url)
        //   .then((response) => response.json())
        //   .then((responseData) => {
        //       console.log(responseData.results[0].geometry.location.lat,responseData.results[0].geometry.location.lng)
        //     this.setState({
        //         region: {
        //           latitude:responseData.results[0].geometry.location.lat,
        //           longitude: responseData.results[0].geometry.location.lng,
        //           latitudeDelta: LATITUDE_DELTA,
        //           longitudeDelta: LONGITUDE_DELTA,
        //         }
        //       });
        //   })
        //   .catch(function (err) {
        //       console.log(err)
        //     return err;
        //   });
    }
    onPressConfirm(){

        // this.props.navigation.navigate('MapScreen', {supply, urgent,log} );
    }
    onPressGoBack(){
        const supply = this.state.supply;
        this.props.navigation.navigate('UrgencyScreen',{supply});
    }
    render() {
        console.log(this.props.regionProp + "PROPS")
        const latlng = {latitude:this.state.region.latitude,longitude: this.state.region.longitude} || {}
        return (
         
                <MapView
                scrollEnabled={false}
                pitchEnabled={false}
                rotateEnabled={false}
                style={ styles.map }
                region={this.state.region}
                >
                <MapView.Marker
                coordinate={latlng}
                />
                </MapView> 
                
           
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        position:'absolute',
        height:150,
        left:0,
        top:SCREEN_HEIGHT - 150,
        width:SCREEN_WIDTH,
    },
    map:{
        height:SCREEN_HEIGHT - 200,
        width:'100%'
    },

});
