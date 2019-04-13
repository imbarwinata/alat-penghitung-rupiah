import React, { Component } from 'react';
import Header from '../components/header';
import style from '../css/main.css';
import bts from '../css/bootstrap-grid.css';

const withDefaultLayout = Body => {
  return class DefaultLayout extends Component {
    render() {
      return (
        <div className={style.container}>
          <div
            className={`${bts[('row', 'row-centered')]} ${
              style['my-container']
            }`}
          >
            <div className={bts[('col-sm-12', 'col-centered')]}>
              {Header && <Header />}
            </div>
            <div className={bts[('col-sm-12', 'col-centered')]}>
              {Body && <Body />}
            </div>
          </div>
        </div>
      );
    }
  };
};

export default withDefaultLayout;
