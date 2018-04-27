import React from 'react';
import { Route } from 'react-router-dom';
import TableListTree from './ExtendedTables';
import TableHistoryWaterTree from './ExtendedTables';


const Tables = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/list-tree`} component={TableListTree} />
    <Route path={`${match.url}/history-water-tree`} component={TableHistoryWaterTree} />
  </div>
);

export default Tables;