import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import generateData from '../generateData';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../../data/Firebase'
import { runInThisContext } from 'vm';
let listTree = [];



class TableReport extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    };

    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.firebaseRef = firebase.database().ref().child('report-tree');
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
    let x = 0;
    return (
      <div>
        <div style={{ width: '100%', height: '50px' }}>

          <h4 style={{ float: "left" }}>Danh sách report</h4>
     
        </div>

        <div style={{ height: '500px', width: '100%' }}>
          <div className="content table-responsive table-full-width">
            <table className="table table-hover table-striped">
              <thead>
                <tr>
                  <th style={{ width: '7%' }}>STT</th>
                  <th>Mã cây</th>
                  <th >Tên cây</th>
                  <th>Mã nhân viên report</th>
                  <th >Tên nhân viên</th>
                  <th>Nội dung</th>
                  <th >Thời gian report</th>
                  
                  <th className="text-right">Xóa </th>
                
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.timeSendReport}>
                  <td>{x = x+ 1}</td>
                    <td>{item.treeReport.maCay}</td>
                    <td>{item.treeReport.tenCay}</td>
                    <td >{item.userReport.maUser}</td>
                    <td >{item.userReport.tenHienThi}</td>
                    <td >{item.messageReport}</td>
                    <td >{item.timeSendReport}</td>

                    <td className="text-right">
                      <button
                      onClick = {this.deleteItem.bind(this, item.maCay)}
                        className="btn btn-info btn-simple btn-xs"
                        >
                        <i className="fa fa-remove"></i>
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

export default TableReport;