import React from 'react';
import { Route } from 'react-router-dom';
import TableListTree from './ExtendedTables';


const Tables = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/list-tree`} component={TableListTree} />
  </div>
);

export default Tables;