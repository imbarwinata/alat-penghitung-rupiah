import React from 'react';
import style from '../../css/main.css';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={style.header}>Alat Penghitung Rupiah</div>
      </React.Fragment>
    );
  }
}

export default Header;
