<<<<<<< HEAD
import './styles.scss';
import React from 'react';
import query from './data/query';
import imgUrl from './assets/img.svg';
=======
import React from 'react';
import query from './data/query';
>>>>>>> e5c7717a0842ebd493bef0e3038a6ba765e8cbab

export default class Social extends React.Component {
  constructor() {
    super();
    this.state = {
      data: query.get(),
    };
  }

  render() {
    return (
<<<<<<< HEAD
      <p><img src={imgUrl} style={{ width: 100 }} />This is the Container for Social</p>
=======
      <p>This is the Container for Social</p>
>>>>>>> e5c7717a0842ebd493bef0e3038a6ba765e8cbab
    );
  }
}
