import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RegularForms from './RegularForms';
import ExtendedForms from './ExtendedForms';
import AddTreeForms from './AddTreeForms';
import firebase from '../../data/Firebase'

class Forms extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <Route path={`${this.props.match.url}/regular-forms`} component={RegularForms} />
          <Route path={`${this.props.match.url}/extended-forms`} component={ExtendedForms} />
          <Route path={`${this.props.match.url}/add-tree`} render={props => {
            return <AddTreeForms {...props} onSubmit={values => {
              this.ref = firebase.database().ref().child('trees');
              this.ref.child(values.maCay).set(values);

              alert ("Susccess");
            }} />
          }} />
        </div>
      </div>
    );
  }
}

export default Forms;