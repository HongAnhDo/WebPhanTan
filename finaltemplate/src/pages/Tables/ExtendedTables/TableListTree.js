import React, { Component } from 'react';
import generateData from '../generateData';
import firebase  from '../../../data/Firebase'
let listTree =[];

class TableListTree extends Component {

  componentDidMount(){
    const listTree = firebase.database().ref().child('trees');
    listTree.on('value', snap => {
      const foo = snap.val();
      if (foo !== null) {
        Object.keys(foo).forEach(key => {
          console.log("?????" + foo[key].tenCay);
          listTree.push(foo[key]);
          this.setState({items: listTree});
        });
      }
       });

  };
  state = {
    items: listTree
  };

  deleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }

  render() {
    let { items, isShowingAlert } = this.state;
    return (
      <div className="card" style ={{width: '100%'}}>
        <div className="header">
          <h4 className="title">Danh sách cây</h4>
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th style = {{width: '7%'}}>Mã cây</th>
                <th>Tên cây</th>
                <th>Loại cây</th>
                <th >Địa điểm</th>
                <th className="text-right">Lượng nước max</th>
                <th className="text-right">Trạng thái</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.maCay}>
                  <td>{item.maCay}</td>
                  <td>{item.tenCay}</td>
                  <td>{item.loaiCay}</td>
                  <td >{item.diaDiem}</td>
                  <td className="text-right">{item.luongNuocMax}</td>
                  <td className="text-right">{item.trangThai}</td>
                  
                  <td className="text-right">
                    <a rel="tooltip"
                      className="btn btn-info btn-simple btn-xs"
                      data-original-title="View Profile"
                      onClick={() => this.deleteItem(item.maCay)}>
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

export default TableListTree;