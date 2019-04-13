import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import styles from '../../css/main.css';

class FormComponent extends React.Component {
  render() {
    const {
      handleChangeInput,
      handleCalculate,
      handleEnter,
      input,
    } = this.props;
    return (
      <div className={styles.form}>
        <NumberFormat
          onChange={handleChangeInput}
          onKeyDown={handleEnter}
          value={input}
          decimalSeparator=","
          thousandSeparator="."
          className={styles.formInput}
        />
        <button
          className={styles.formButton}
          type="button"
          onClick={handleCalculate}
        >
          Hitung
        </button>
      </div>
    );
  }
}

FormComponent.propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
  handleCalculate: PropTypes.func.isRequired,
  handleEnter: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default FormComponent;
