import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import generateData from '../generateData';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../../data/Firebase'
import { runInThisContext } from 'vm';
let listTree = [];



class TableListUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.firebaseRef = firebase.database().ref().child('users');
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

          <h4 style={{ float: "left" }}>Danh sách người dùng</h4>
          <Link to="/forms/add-tree">
          <button type="button" className="btn btn-wd btn-success" style={{ float: "right" }}>
            Thêm nhân viên
        </button>
        </Link>
        </div>

        <div style={{ height: '500px', width: '100%' }}>
          <div className="content table-responsive table-full-width">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th style={{ width: '80px' }}>Avatar</th>
                  <th>Mã người dùng</th>
                  <th >Tên hiển thị</th>
                  
                  <th >Giới tính</th>
                  <th >Email</th>
                  <th >Trạng thái</th>
                  <th>Vai trò</th>
                  <th className="text-right">Xóa</th>
                  <th className="text-right">Sửa</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.email}>
                    <td><img src ={item.avatar} style ={{width:'70px', height:'70px', boderRadius:'20px'}}  alt ="avatar"/></td>
                    <td>{item.maUser}</td>
                    <td >{item.tenHienThi}</td>
                    <td>{item.gioiTinh ? "Nam" : "Nữ"}</td>
                    <th >{item.email}</th>
                    <td >{item.trangThai}</td>
                    <td>{item.vaiTro}</td>
                    

                    <td className="text-right">
                      <button
                      onClick = {this.deleteItem.bind(this, item.maCay)}
                        className="btn btn-info btn-simple btn-xs"
                        >
                        <i className="fa fa-remove"></i>
                      </button>
                    </td>

                    <td className="text-right">
                      <button
                      onClick = {this.deleteItem.bind(this, item.maCay)}
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

export default TableListUser;