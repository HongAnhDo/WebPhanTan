import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import firebase from '../../data/Firebase'
let listTree = [];

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listTree: [],
      location: this.props.location
    }
  };

  componentDidMount() {
    const listTree = firebase.database().ref().child('trees');
    listTree.on('value', snap => {
      const foo = snap.val();
      if (foo !== null) {
        Object.keys(foo).forEach(key => {
          console.log("?????" + foo[key].tenCay);
          listTree.push(foo[key]);
          this.setState({ items: listTree });
        });
      }
    });

  };


  render() {

    return (
      <div>
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{ lat: this.state.location.latitude, lng: this.state.location.longitude }}
        >
          {this.state.listTree.map((a, i) => {
            {/* let lat = parseFloat(a.lat.replace('"', '').replace('"', ''));
            let lon = parseFloat(a.lon.replace('"', '').replace('"', '')); */}
            console.log("////////////////////////////////////"+ a)
           
            {/* return (
              <Marker key={i}
                position={{ lat: 0, lng: 0 }}
                defaultAnimation={2}
              />
            ) */}
          })}

        </GoogleMap>
      </div>
    )
  };
}

export default withGoogleMap(Map);