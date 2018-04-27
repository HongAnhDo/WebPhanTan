import React, { Component } from 'react';
import firebase from '../../../data/Firebase'
class SelectSensor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: "",
      listSensor:[]
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  componentDidMount() {
    this.firebaseRef = firebase.database().ref().child('sensors');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
      if (snap != null) {
        const item = snap.val();
        var data = [];
        Object.keys(item).forEach(key => {
          // if (item[key].maCayKetNoi == null)
            data.push(key);

        });
        this.setState({
          listSensor: data
        });


      }
    });

    console.log("sennnnnnnnnnnnn" + JSON.stringify(this.state.listSensor))

   
  }

  componentWillUnmount() {
    this.firebaseRef.off('value', this.firebaseCallback);
  }


  render() {
    return (
      <div style={{ width: '42%', marginRight: '5%', float: 'right', height: '40px' }}>
        <select
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: '100%', height: '40px', 
          borderTop: 'none', borderLeft: 'none', borderRight: 'none', 
          backgroundColor: '#ffffff', borderBottomColor: '#DCDCDC', 
          fontSize: '15px', paddingTop: '10px', outline: 'none'
        }}
        >
        {this.state.listSensor.map((item) =>

          <option value={item}>{item}</option>
        )}
          
        
        </select>
      </div>
    );
  }
}

export default SelectSensor;
