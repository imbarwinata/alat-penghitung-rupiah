import React from 'react';
import { hot } from 'react-hot-loader';
import withDefaultLayout from './layouts/default';

const FormComponent = React.lazy(() => import('./components/form'));
const ItemComponent = React.lazy(() => import('./components/item'));

const decimals = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50];
let value = 0;
let costLeft = 0;
let costReturn = {};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      inputLabel: 0,
    };
  }

  calculate(input) {
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
      costLeft = value;
    }
  }

  handleChangeInput = e => {
    let input = e.target.value;
    input = input.replace('^0', '');
    this.setState({ input });
  };

  handleEnter = e => {
    if (e.key === 'Enter') {
      this.handleCalculate();
    }
  };

  handleCalculate = () => {
    costReturn = {};
    let { input } = this.state;
    if (input === '0' || input === '') {
      alert('Silakan masukkan nominal!');
    } else if (input.includes('-')) {
      alert('Nominal yang anda masukkan tida valid!');
    } else {
      input = input.replace(/[.]/g, '');
      input = parseInt(input, 0);
      if (input < decimals[8]) {
        costLeft = input;
        costReturn = {};
        this.setState({ inputLabel: input });
      } else {
        this.calculate(input);
        this.setState({ costReturn, inputLabel: input });
      }
    }
  };

  render() {
    const { input, inputLabel } = this.state;

    return (
      <div data-test="component-app">
        <React.Fragment>
          <React.Suspense fallback={<div>Memuat Data Form...</div>}>
            <FormComponent
              data-test="component-form"
              {...this.state}
              input={input}
              handleCalculate={this.handleCalculate}
              handleChangeInput={this.handleChangeInput}
              handleEnter={this.handleEnter}
            />
          </React.Suspense>
          <React.Suspense fallback={<div>Memuat Data Item...</div>}>
            <ItemComponent
              data-test="component-item"
              input={inputLabel}
              costReturn={costReturn}
              costLeft={costLeft}
              decimals={decimals}
            />
          </React.Suspense>
        </React.Fragment>
      </div>
    );
  }
}

export const AppComponent = App;
export const Data = {
  costReturn,
  costLeft,
};
export default hot(module)(withDefaultLayout(App));
