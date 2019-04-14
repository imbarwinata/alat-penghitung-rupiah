import React from 'react';
import { shallow } from 'enzyme';

import App, { AppComponent, Data } from '../src/App';
import FormComponent from '../src/components/form';

const setup = (props = {}, state = null) => {
  let wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByAttr = (wrapper, val) => {
  return wrapper
    .find(AppComponent)
    .dive()
    .find(`[data-test="${val}"]`);
};

describe('Renders Components', () => {
  it('renders <App/> components', () => {
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, 'component-app');

    expect(appComponent.length).toBe(1);
  });

  it('renders <App.FormComponent /> component', () => {
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, 'component-form');

    expect(appComponent.length).toBe(1);
  });

  it('renders <App.ItemComponent /> component', () => {
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, 'component-item');

    expect(appComponent.length).toBe(1);
  });
});

describe('Set State', () => {
  it('Set input state 12900, get state input 12900', () => {
    const wrapper = setup();
    const appComponent = wrapper
      .find(AppComponent)
      .dive()
      .setState({ input: 12900 });
    const input = appComponent.state('input');

    expect(input).toBe(12900);
  });
});

describe('Calculate Nominal Rupiah', () => {
  it('Calculate with nominal = 12900', () => {
    const wrapper = setup();
    const appComponent = wrapper
      .find(AppComponent)
      .dive()
      .setState({ input: 12900 });
    const input = appComponent.state('input');
    const calculate = appComponent.instance().calculate(input);
    const { costLeft, costReturn } = Data;

    expect(costReturn).toMatchObject({
      '100': 4,
      '500': 1,
      '1000': 2,
      '10000': 1,
    });
    expect(costLeft).toBe(0);
  });
});
