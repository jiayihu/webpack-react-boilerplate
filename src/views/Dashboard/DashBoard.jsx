import React from 'react';
import query from './data/query';

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: query.get(),
    };
  }

  render() {
    return (
      <p>This is the Container for DashBoard</p>
    );
  }
}
