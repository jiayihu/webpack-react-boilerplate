import './styles.scss';
import React from 'react';
import imgUrl from './assets/img.svg';

export default class Dashboard extends React.Component {
  render() {
    return (
      <p>
        <img src={imgUrl} style={{ width: 100 }} alt="Img" />
        This is the Container for Dashboard
      </p>
    );
  }
}
