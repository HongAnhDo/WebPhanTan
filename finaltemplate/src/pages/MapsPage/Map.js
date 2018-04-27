import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import firebase from '../../data/Firebase'
let listTree = [];

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listTree: listTree,
      location: this.props.location
    }
  };

  componentDidMount() {
    
    // const re = firebase.database().ref().child("trees").remove();

  };


  render() {

    return (
      <div>
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{ lat: this.state.location.latitude, lng: this.state.location.longitude }}
        >

        </GoogleMap>
      </div>
    )
  };
}

export default withGoogleMap(Map);