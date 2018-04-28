import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import { withRouter } from 'react-router-dom';
import TableHistoryWaterTree from '../Tables/ExtendedTables/TableHistoryWaterTree'
import TableHistoryWaterPeople from '../Tables/ExtendedTables/TableHistoryWaterPeople'
import TableListSensor from '../Tables/ExtendedTables/TableSensor'
import TableListWater from '../Tables/ExtendedTables/TableListWater'
import TableListUser from '../Tables/ExtendedTables/TableUser'
import TableReport from '../Tables/ExtendedTables/TableReport'

import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';
import ThemeOptions from '../../components/ThemeOptions';
import MobileMenu from '../../components/MobileMenu';
import backgroundImage from './sidebar5.jpg'
/**
 * Pages
 */
import MapTree from '../MapsPage/MapTree';
import Components from '../Components';
import UserProfile from '../UserProfile';
import MapsPage from '../MapsPage';
import Forms from '../Forms';
import Charts from '../Charts';
import Calendar from '../Calendar';
import Tables from '../Tables';

const widthView = window.innerWidth - 200;

const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history

}) => {
  // history.listen(() => {
  //   if (mobileNavVisibility === true) {
  //     hideMobileMenu();
  //   }
  // });
  return (

    <div className="main_page" style={{ backgroundColor: "#494949", height: "100%", width: "100%", display: 'inline' }}>
      {/* <div className="close-layer" onClick={hideMobileMenu}></div> */}
      <SideBar style={{ float: 'left', height: '100%', backgroundImage: 'url(' + backgroundImage + ')' }} />

      <div className="main-panel" style={{ float: 'left', width: widthView + 'px', height: '100%' }}>
        <Header />
        <Route exact path="/" component={MapTree} />
        <Route path="/components" component={Components} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/forms" component={Forms} />
        <Route path="/tables" component={Tables} />
        <Route path="/maps" component={MapsPage} />
        <Route path="/charts" component={Charts} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/TableHistoryWaterTree" component={TableHistoryWaterTree} />
        <Route path="/TableHistoryWaterPeople" component={TableHistoryWaterPeople} />
        <Route path="/TableListSensor" component={TableListSensor} />
        <Route path ='/TableListWater' component ={TableListWater}/>
        <Route path ='/TableListUser' component ={TableListUser}/>
        <Route path ='/TableReport' component ={TableReport}/>
      </div>
    </div>

  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));