import React from 'react';
import PropTypes from 'prop-types';

const decimals = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
let value = 0;

class FormComponent extends React.Component {
  state = { input: 0, costReturn: {}, costLeft: 0 };

  calculate(input) {
    const { costReturn } = this.state;
    for (let i = 0; i < decimals.length; i += 1) {
      value = input - decimals[i];
      if (value > 0 || value === 0) {
        if (decimals[i] in costReturn) {
          costReturn[decimals[i]] += 1;
        } else {
          costReturn[decimals[i]] = 1;
        }
        break;
      }
    }

    if (value > decimals[8] || value === decimals[8]) {
      this.calculate(value);
    } else {
      console.log('ini duit sisa', value);
      this.setState({ costLeft: value });
    }
  }

  handleChangeInput = e => {
    const input = e.target.value;
    this.setState({ input });
  };

  handleCalculate = () => {
    const { input, costReturn, costLeft } = this.state;
    this.setState({ costReturn: {}, costLeft: 0 });
    console.log('Uang yang dimasukkan:', input);
    this.calculate(input);
    console.log('Uang dipecah menjadi:', costReturn);
    console.log('Uang sisa:', costLeft);
    console.log('----------------------------------------------------');
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        <h2>{title && title}</h2>
        <input onChange={this.handleChangeInput} />
        <button type="button" onClick={this.handleCalculate}>
          Hitung
        </button>
      </div>
    );
  }
}

FormComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormComponent;
