import style from './button.module.scss';
import React, { PropTypes } from 'react';

export default function Button(props) {
  return (
    <button className={style.myBtn} onClick={props.onClick}>{props.text}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};
