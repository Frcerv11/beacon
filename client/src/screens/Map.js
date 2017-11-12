import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
} from 'react-native';

import MapView from 'react-native-maps';
import { List, ListItem } from 'react-native-elements';
import { calcCrow } from '../helper';

import POIService from '../services/POIService';

const { width, height } = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width/height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



export default class Map extends Component {

  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      lastLat: 40,
      lastLong: 75,
      poiCoords:[]
    };
    this.renderMarker = this.renderMarker.bind(this)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
        });
      },
    (error) => console.log(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        let region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }
        this.onRegionChange(region, region.latitude, region.longitude);
        // POIService.setCoords({lat:this.state.region.latitude,long:this.state.region.longitude})
      }
    );

    
    this.setState({poiCoords:POIService.getPOI()})

  }
  
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }
  
  renderMarker(marker,i){
      let landmarkName = (marker.lm_name).substring(0, 25);
      let landmarkAddress = (marker.desig_addr == null) ? "Address not listed" : marker.desig_addr;
    
      return(
        <MapView.Marker
        key={i}
        coordinate={{latitude:marker.the_geom.coordinates[1],longitude:marker.the_geom.coordinates[0]}}
      >
        <MapView.Callout>
        <List containerStyle={{marginBottom: 0,marginTop:0}}>
          <ListItem
            key={i}
            title={landmarkName + "..."}
            subtitle={landmarkAddress}
          />
        </List>
        </MapView.Callout>
      </MapView.Marker>
      )
  }

  render() {
 
    const poiCoords = this.state.poiCoords || [];

    return (
      <MapView
        style={ styles.map }
        showsUserLocation={ true }
        region={ this.state.region }
        onRegionChange={this.onRegionChange.bind(this)}
        onRegionChangeComplete={ region => this.setState({region}) }
      >
        {poiCoords.map((marker,i) => {
          return this.renderMarker(marker,i);
        })}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map:{
    left:0,
    right:0,
    top:0,
    bottom:0,
    position:'absolute'
  },
});







