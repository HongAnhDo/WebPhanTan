import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import generateData from '../generateData';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../../data/Firebase'
import { runInThisContext } from 'vm';
let listTree = [];



class TableListWater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.firebaseRef = firebase.database().ref().child('water-station');
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
      if (snap != null) {
        const item = snap.val();
        var data = [];
        Object.keys(item).forEach(key => {
          data.push(item[key]);

        });
        this.setState({
          items: data
        });
      }
    });



  };


  deleteItem(itemId) {
    this.setState({
      items: this.state.items.filter(item => item.maCay !== itemId)
    });

    firebase.database().ref().child('trees').child(itemId).remove();
    console.log("deleteeeeeeeeeeeeeeeeeeeeeeee" + itemId);


  }
  componentWillUnmount() {
    // Un-register the listener on '/someData'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }
  render() {
    let { items } = this.state;
    return (
      <div>
        <div style={{ width: '100%', height: '50px' }}>

          <h4 style={{ float: "left" }}>Danh sách nguồn nước</h4>
          <Link to="/forms/add-tree">
            <button type="button" className="btn btn-wd btn-success" style={{ float: "right" }}>
              Thêm nguồn nước
        </button>
          </Link>
        </div>

        <div style={{ height: '500px', width: '100%' }}>
          <div className="content table-responsive table-full-width">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th style={{ width: '7%' }}>Mã trạm</th>
                  <th>Địa điểm</th>
                  <th >Dung tích chứa</th>

                  <th >Trạng thái</th>
                  <th className="text-right">Xóa trạm nước</th>
                  <th className="text-right">Sửa</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.tenTram}>
                    <td>{item.tenTram}</td>
                    <td>{item.diaDiem}</td>
                    <td>{item.dungTichChua}</td>
                    <td >{item.tinhTrang}</td>


                    <td className="text-right">
                      <button
                        onClick={this.deleteItem.bind(this, item.maCay)}
                        className="btn btn-info btn-simple btn-xs"
                      >
                        <i className="fa fa-remove"></i>
                      </button>
                    </td>

                    <td className="text-right">
                      <button
                        onClick={this.deleteItem.bind(this, item.maCay)}
                        className="btn btn-info btn-simple btn-xs"
                      >
                        <i className="fa fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>

    )
  }
}

export default TableListWater;