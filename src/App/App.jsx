import './styles.scss';
import React from 'react';
import Button from '../Button/Button';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <p>This is React application!</p>
        <p><Button /></p>
      </div>
    );
  }
}
