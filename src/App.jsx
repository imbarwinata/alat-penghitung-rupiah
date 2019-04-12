import React from 'react';
import { hot } from 'react-hot-loader';
import withDefaultLayout from './layouts/default';
const FormComponent = React.lazy(() => import("./components/form"));
const ItemComponent = React.lazy(() => import("./components/item"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Handling State in here

  render() {
    return (
      <React.Fragment>
        <React.Suspense fallback={<div>Loading</div>}>
          <FormComponent/>
        </React.Suspense>
        <React.Suspense fallback={<div>Loading</div>}>
          <ItemComponent/>
        </React.Suspense>
      </React.Fragment>
    );
  }
}

export default hot(module)(withDefaultLayout(null, App));