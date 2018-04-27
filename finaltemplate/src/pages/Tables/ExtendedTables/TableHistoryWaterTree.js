import React, { Component } from 'react';
import generateData from '../generateData';
import firebase from '../../../data/Firebase'
let listHistoryWaterTree = [];


class TableHistoryWaterTree extends Component {

  componentDidMount() {
    this.firebaseRef = firebase.database().ref().child('LichSuTuoiCayTheoCay');
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

        console.log("????????????" + this.state.items);
      }
    });



  };
  state = {
    items: listHistoryWaterTree
  };

  deleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }
  componentWillUnmount() {
    // Un-register the listener on '/someData'.
    this.firebaseRef.off('value', this.firebaseCallback);
  }
  render() {
    let { items, isShowingAlert } = this.state;
    return (
      <div className="card" style={{ width: '100%' }}>
        <div className="header">
          <h4 className="title"></h4>
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Lượng nước tưới</th>
                <th>Mã người tưới</th>
                <th>Ngày giờ tưới</th>
                <th>Tên người tưới</th>
                <th>Vai trò người tưới</th>
               
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.maNguoiTuoi}>
                  <td>{item.luongNuocTuoi}</td>
                  <td>{item.ngayGioTuoi}</td>
                  <td>{item.tenNguoiTuoi}</td>
                  <td >{item.diaDiem}</td>
                  <td className="text-right">{item.vaiTroNguoiTuoi}</td>
                  

                  <td className="text-right">
                    <a rel="tooltip"
                      className="btn btn-info btn-simple btn-xs"
                      data-original-title="View Profile"
                      onClick={() => this.deleteItem(item.maNguoiTuoi)}>
                      <i className="fa fa-remove"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

export default TableHistoryWaterTree;