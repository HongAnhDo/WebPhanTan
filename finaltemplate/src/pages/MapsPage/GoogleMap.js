import React from 'react';
import Map from './Map';

let GoogleMap = () => (

  <div>
    <div style = {{width:'100%', height:'50px'}}>
 
          <h4 style={{ float: "left" }}>Bản đồ cây</h4>
          <a href="#">
          <button type="button" className="btn btn-wd btn-success" style={{ float: "right" }}>
          Thêm cây
          
          </button>
          </a>
    </div>

    <div style={{ height: '500px', width: '100%' }}>

      <div className="content" style={{ display: 'block' }}>
        <div style={{ width: '100%', height: '500px', boxSizing: 'border-box' }}>
          <Map
            location={{ latitude: 21.005636, longitude: 105.843337 }}
            containerElement={
              <div style={{ width: '100%', height: '100%' }} />
            }
            mapElement={
              <div style={{ height: `100%`, height: '100%' }} />
            } />
        </div>
      </div>
    </div>
  </div>


);

export default GoogleMap;