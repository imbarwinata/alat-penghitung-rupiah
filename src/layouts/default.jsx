import React, { Component } from 'react';
import style from '../css/main.css';

const withDefaultLayout = (Header, Body) => {
  return class DefaultLayout extends Component {
    render() {
      return (
        <div className={style.container}>
          <div className={style[('row', 'row-centered', 'my-container')]}>
            <div className={style[('col-xs-12', 'col-centered')]}>
              {Header && <Header />}
            </div>
            <div className={style[('col-xs-12', 'col-centered')]}>
              <Body />
            </div>
          </div>
        </div>
      );
    }
  };
};

export default withDefaultLayout;
