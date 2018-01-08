import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import Users from './userAdministration/Users';
// import NotFoundPage from './NotFoundPage';
// <Route component={NotFoundPage} />
import Layout from './common/Layout';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
