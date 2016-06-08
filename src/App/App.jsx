import './styles.scss';
import React from 'react';
import { GeneralMenu } from '../shared';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GeneralMenu />
        <p>This is React application!</p>
      </div>
    );
  }
}
