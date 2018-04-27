import React, { Component } from 'react';
import generateData from '../generateData';
import firebase from '../../../data/Firebase'
let listHistoryWaterTree = [];


class TableHistoryWaterPeople extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {


  };

  onClick (){
    this.firebaseRef = firebase.database().ref().child('LichSuTuoiCayTheoNguoiTuoi').child(this.state.value);
    this.firebaseCallback = this.firebaseRef.on('value', (snap) => {
      if (snap != null) {
        const item = snap.val();
        var data = [];
        Object.keys(item).forEach(key => {
          data.push(item[key]);

        });
        this.setState({
          items: data,
        
        });

        console.log("????????????" + this.state.items);
      }
    });

  }

  handleChange (event){
    this.setState({value: event.target.value});
}

  handleSubmit = () =>{

   

  }

  deleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }
  componentWillUnmount() {
    // Un-register the listener on '/someData'.
    // this.firebaseRef.off('value', this.firebaseCallback);
  }
  render() {
    let { items, isShowingAlert } = this.state;

    return (
      <div>
        <div style={{ width: '100%', height: '50px' }}>

          <h4 style={{ float: "left", color:'blue', fontWeight:450 }}>Danh sách lịch sử tưới cây theo người tưới</h4>
          <div style={{ float: "right", width: "40%", display: "inline" }}>
           
              <label>
              Người tưới:
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
              </label>
              <button type="button" className="btn btn-wd btn-success" title ="Search" style={{ width: '100px', height: '30px' , marginLeft:'6px'}} onClick = {this.onClick.bind(this)}>Search</button>
           
          </div>


        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Lượng nước tưới</th>
                <th>Mã cây tưới</th>
                <th>Tên cây tưới</th>
                <th>Thời gian tưới</th>
                <th className="text-right">Xóa</th>

              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.thoiGianTuoi}>
                  <td>{item.luongNuocTuoi}</td>
                  <td>{item.maCayTuoi}</td>
                  <td>{item.tenCayTuoi}</td>
                  <td >{item.thoiGianTuoi}</td>
          

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

export default TableHistoryWaterPeople;