import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import style from '../../css/main.css';

class ItemComponent extends React.Component {
  render() {
    const { costLeft, costReturn, decimals, input } = this.props;
    return (
      <React.Fragment>
        {input ? (
          <div className={style.costInput}>
            Uang yang anda masukkan :Rp{' '}
            <NumberFormat
              value={input}
              displayType="text"
              decimalSeparator=","
              thousandSeparator="."
            />
          </div>
        ) : (
          <React.Fragment />
        )}
        {costReturn &&
          decimals.map((decimal, index) => {
            return costReturn[decimal] ? (
              <div key={decimal} className={style.item}>
                <div className={style.total}>x {costReturn[decimal]}</div>
                <div className={style.nominal}>
                  Rp{' '}
                  <NumberFormat
                    value={decimals[index]}
                    displayType="text"
                    decimalSeparator=","
                    thousandSeparator="."
                  />
                </div>
              </div>
            ) : (
              <React.Fragment />
            );
          })}
        {costLeft ? (
          <div className={style.costLeft}>
            Uang yang tersisa :Rp{' '}
            <NumberFormat
              value={costLeft}
              displayType="text"
              decimalSeparator=","
              thousandSeparator="."
            />
          </div>
        ) : (
          <React.Fragment />
        )}
      </React.Fragment>
    );
  }
}

ItemComponent.propTypes = {
  costLeft: PropTypes.number.isRequired,
  costReturn: PropTypes.oneOfType([PropTypes.number]),
  decimals: PropTypes.objectOf(PropTypes.number),
  input: PropTypes.number.isRequired,
};

export default ItemComponent;
