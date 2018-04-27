import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';
import firebase from '../../data/Firebase'
const google = window.google;
const data = [];

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      location: this.props.location,
      markers: []
    }
  };

  componentDidMount() {

    this.firebaseRef = firebase.database().ref().child('trees');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
      if (snap != null) {
        const item = snap.val();

        Object.keys(item).forEach(key => {
          var tree = {};
          tree["key"] = item[key].maCay;
          tree["lat"] = item[key].latitude;
          tree["long"] = item[key].longitude;
          tree["type"] = 1;
          data.push(tree);

        });
        this.setState({
          list: data
        });

      }
    });




    this.firebaseRef = firebase.database().ref().child('water-station');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
      if (snap != null) {
        const item = snap.val();
        Object.keys(item).forEach(key => {
          var waterStation = {};
          waterStation["key"] = item[key].tenTram;
          waterStation["lat"] = item[key].latitude;
          waterStation["long"] = item[key].longitude;
          waterStation["type"] = 2;
          data.push(waterStation);

        });
        this.setState({
          list: data
        });
      }
    });

  };

  componentWillUnmount() {
    this.firebaseRef.off();

  };


  render() {

    var image = {
      url: 'https://vignette.wikia.nocookie.net/onthefarm/images/f/f7/Apple_Tree_00-icon.png',

      scaledSize: new google.maps.Size(25, 50), // scaled size
      // origin: new google.maps.Point(0, 0), // origin
      // anchor: new google.maps.Point(0, 0)
    };

    var imageWater = {
      url: 'http://www.eventwatersolutions.com/wp-content/uploads/2016/03/sustainability_icon_hover.png',
      scaledSize: new google.maps.Size(25, 25), // scaled size
      // origin: new google.maps.Point(0, 0), // origin
      // anchor: new google.maps.Point(0, 0)
    }
    return (
      <div>
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{ lat: this.state.location.latitude, lng: this.state.location.longitude }}
        >

          {this.state.list.map((item) => {
            if (item.type == 1)
              return (
                <Marker
                  key={item.key}
                  position={{ lat: item.lat, lng: item.long }}
                  icon={image}

                />
              );

            return (<Marker
              key={item.key}
              position={{ lat: item.lat, lng: item.long }}
              icon={imageWater}

            />);

          })
          }


        </GoogleMap>
      </div>
    )
  };
}

export default withGoogleMap(Map);