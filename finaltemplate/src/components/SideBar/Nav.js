import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph"></i>
            <p style ={{fontWeight:500}} >Bản đồ</p>
          </Link>
        </li>
        {/* <li className={this.isPathActive('/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Components
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/components/buttons">Buttons</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/components/grid">Grid System</Link>
                </li>
                <li className={this.isPathActive('/components/icons') ? 'active' : null}>
                  <Link to="/components/icons">Icons</Link>
                </li>
                <li className={this.isPathActive('/components/notifications') ? 'active' : null}>
                  <Link to="/components/notifications">Notifications</Link>
                </li>
                <li className={this.isPathActive('/components/panels') ? 'active' : null}>
                  <Link to="/components/panels">Panels</Link>
                </li>
                <li className={this.isPathActive('/components/sweetalert') ? 'active' : null}>
                  <Link to="/components/sweetalert">Sweet Alert</Link>
                </li>
                <li className={this.isPathActive('/components/typography') ? 'active' : null}>
                  <Link to="/components/typography">Typography</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li> */}
        {/* <li className={this.isPathActive('/forms') || this.state.formMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ formMenuOpen: !this.state.formMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>Forms <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.formMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/forms/regular-forms') ? 'active' : null}>
                  <Link to="/forms/regular-forms">Regular Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/extended-forms') ? 'active' : null}>
                  <Link to="/forms/extended-forms">Extended Forms</Link>
                </li>
                <li className={this.isPathActive('/forms/add-tree') ? 'active' : null}>
                  <Link to="/forms/add-tree">Validation Forms</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li> */}
        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
         
            <Link to="/tables/list-tree">
            <p style ={{fontWeight:500}}>Quản lý cây </p>
            </Link>
          
        </li>
        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
         
            <Link to="/TableHistoryWaterTree">
            <p style ={{fontWeight:500}}>Lịch sử người tưới cây </p>
            </Link>
          
        </li>

        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
         
            <Link to="/TableHistoryWaterPeople">
            <p style ={{fontWeight:500}}>Lịch sử cây tưới </p>
            </Link>
          
        </li>

        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
         
            <Link to="/TableListUser">
            <p style ={{fontWeight:500}}>Quản lý user</p>
            </Link>
        </li>

        <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
         
            <Link to="/TableListWater">
            <p style ={{fontWeight:500}}>Quản lý nguồn nước</p>
            </Link>
        </li>

        <li className={this.isPathActive('/tablehistory') || this.state.tableMenuOpen ? 'active' : null}>
         
            <Link to="/TableListSensor">
            <p style ={{fontWeight:500}}>Quản lý sensor </p>
            </Link>
        </li>
        
        <li className={this.isPathActive('/table') || this.state.tableMenuOpen ? 'active' : null}>
         
            <Link to="/TableReport">
            <p style ={{fontWeight:500}}>Quản lý report </p>
            </Link>
        </li>
        <li className={this.isPathActive('/table') || this.state.tableMenuOpen ? 'active' : null}>
         
            <Link to="/login">
            <p style ={{fontWeight:500}}>Login </p>
            </Link>
        </li>
        
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

  export default withRouter(Nav);