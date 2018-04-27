import React from 'react';
import TableListTree from './TableListTree';
import TableHistoryWaterTree from './TableHistoryWaterTree';
import BigTable from './BigTable';

const ExtendedTables = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-6" style = {{width: '100%'}}>
        <TableListTree />
      
      </div>

      <div className="col-md-6" style = {{width: '100%'}}>
        <TableHistoryWaterTree />
      
      </div>
      
    </div>
  </div>
  

);

export default ExtendedTables;