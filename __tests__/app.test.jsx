import React from 'react';
import { shallow } from 'enzyme';

import App, { AppComponent } from '../src/App';

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

describe('<App />', () => {
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
