import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Menu from './menu/Menu';
import UserContainer from '../../containers/userContainer';

import { Col } from 'react-bootstrap';

const HeaderContainer = UserContainer(Header);

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.signout = this.signout.bind(this);
  }

  signout() {
    this.props.actions.signout();

    this.setState({});

    console.log('Check');
  }

  render() {
    return (
      <div className="container-fluid" style={{padding: 0}}>
        <HeaderContainer signout={this.signout} />
        <Col xs={4} md={2} style={{backgroundColor: '#222d32', paddingLeft: 0, paddingRight: 0, height: '100vh'}}>
          <Menu />
        </Col>
        <Col xs={4} md={10} style={{backgroundColor: '#ecf0f5', paddingLeft: 0, paddingRight: 0, height: '100vh'}}>
          { this.props.children }
        </Col>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.array,
  actions: PropTypes.object.isRequired,
};


export default UserContainer(Layout);
