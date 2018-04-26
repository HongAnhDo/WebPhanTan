import React, { Component } from 'react';
import { GoogleMap, withGoogleMap , Marker} from 'react-google-maps';
import firebase from '../../data/Firebase'
let listTree = [];

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listTree:[]
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
    const { location } = this.props.location;
    const{listTree} = this.state.listTree;
    return (
      <div>
        <GoogleMap
          defaultZoom={17}
          defaultCenter={{ lat: location.latitude, lng: location.longitude }}
        >
       {this.props.location && <Marker />}

        </GoogleMap>
      </div>
    )
  };
}

export default withGoogleMap(Map);