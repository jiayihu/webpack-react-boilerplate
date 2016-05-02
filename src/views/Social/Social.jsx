import './styles.scss';
import React from 'react';
import query from './data/query';
import imgUrl from './assets/img.svg';

export default class Social extends React.Component {
  constructor() {
    super();
    this.state = {
      data: query.get(),
    };
  }

  render() {
    return (
      <p><img src={imgUrl} style={{ width: 100 }} />This is the Container for Social</p>
    );
  }
}
