import './styles.scss';
import React from 'react';
import Button from '../uikit/Button/Button';
import Dashboard from '../views/Dashboard/Dashboard';
import Social from '../views/Social/Social';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>This is React application!</p>
        <p><Button /></p>
        <Dashboard />
        <Social />
      </div>
    );
  }
}
