import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Nav from './Nav';
import backgroundImage from './sidebar5.jpg';

class SideBar extends Component {

  state = {};

  render() {
    // let {
    //   location,
    //   backgroundColor,
    //   enableBackgroundImage,
    //   backgroundImage
    // } = this.props;

    return (
      <div   style = {{width: '170px', float: 'left', backgroundImage:"url(./sidebar-5.jpg)"}}>

        <div style = {{height: '50px', width: '170px'}}>

            <img src={'http://www.morimotobangkok.com/img/press/bk.png'} alt="logo"  style = {{height: '50px', width: '170px'}}/>
          </div>

        <div style = {{backgroundImage: 'url(' + backgroundImage + ')'}}>
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
        
      </div>
    )
  }
}

export default SideBar;