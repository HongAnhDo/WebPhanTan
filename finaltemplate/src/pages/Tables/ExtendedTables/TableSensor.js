import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import generateData from '../generateData';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../../data/Firebase'
import { runInThisContext } from 'vm';
let listTree = [];



class TableListSensor  extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.firebaseRef = firebase.database().ref().child('sensors');
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

    firebase.database().ref().child('sensors').child(itemId).remove();
    console.log("deleteeeeeeeeeeeeeeeeeeeeeeee"+itemId);


  }
  componentWillUnmount() {
    // Un-register the listener on '/someData'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }
  render() {
    let { items} = this.state;
    return (
      <div>
        <div style={{ width: '100%', height: '50px' }}>

          <h4 style={{ float: "left" }}>Danh sách sensor</h4>
          <Link to="/forms/add-sensor">
          <button type="button" className="btn btn-wd btn-success" style={{ float: "right" }}>
            Thêm sensor
        </button>
        </Link>
        </div>

        <div style={{ height: '500px', width: '100%' }}>
          <div className="content table-responsive table-full-width" style ={{width:'95%', marginLeft:'10px'}}>
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>Mã sensor</th>
                  <th>Lượng nước hiện tại</th>
                  <th >Lượng nước trước đó</th>
                  <th>Mã cây kết nối</th>
                  <th className="text-right">Xóa sensor</th>
                  <th className="text-right">Sửa</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.idSensor}>
                    <td>{item.idSensor}</td>
                    <td>{item.luongNuocHienTai}</td>
                    <td >{item.luongNuocTruocDo}</td>
                    <td >{item.maCayKetNoi}</td>
                  
                    <td className="text-right">
                      <button
                      onClick = {this.deleteItem.bind(this, item.idSensor)}
                        className="btn btn-info btn-simple btn-xs"
                        >
                        <i className="fa fa-remove"></i>
                      </button>
                    </td>

                    <td className="text-right">
                      <button
                      onClick = {this.deleteItem.bind(this, item.idSensor)}
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

export default TableListSensor;