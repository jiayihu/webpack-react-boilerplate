import './styles.scss';
import React from 'react';
import Button from '../uikit/Button/Button';
import Dashboard from '../views/Dashboard/Dashboard';
import Social from '../views/Social/Social';
import { getAuth, getData } from './jwt';

export default class App extends React.Component {
  getAuth() {
    console.log('Getting Auth...');
    getAuth().then(json => {
      console.log(json);
      window.localStorage.setItem('jwt', json.data._token);
      return;
    });
  }

  getData() {
    const token = localStorage.getItem('jwt');
    console.log('Getting Data with token ', token);
    getData(token).then(json => {
      console.log(json);
      return;
    });
  }

  render() {
    return (
      <div>
        <p>This is React application!</p>
        <p>
          <Button onClick={this.getAuth} text="Get Auth in Console" />
          <Button onClick={this.getData} text="Get Data in Console" />
        </p>
        <Dashboard />
        <Social />
      </div>
    );
  }
}
