import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel } from 'react-bootstrap';

import './styles.css';

const Login = (props) => {
  return (
    <Form horizontal>
      <FormGroup controlId="formHorizontalEmail" className="form-login">
        <Col componentClass={ControlLabel} sm={2}>Email</Col>
        <Col sm={8}>
          <FormControl
            name="email"
            type="email"
            placeholder="Email"
            value={props.user.email}
            onChange={props.onChange} />
        </Col>
      </FormGroup>

  <FormGroup controlId="formHorizontalPassword" className="form-login">
    <Col componentClass={ControlLabel} sm={2}>Password</Col>
    <Col sm={8}>
      <FormControl
        name="password"
        type="password"
        placeholder="Password"
        value={props.user.password}
        onChange={props.onChange} />
    </Col>
  </FormGroup>

  <FormGroup className="form-login">
    <Col smOffset={2} sm={8}>
      <Button
        type="submit"
        onClick={props.signin}>
        Sign in
      </Button>
    </Col>
  </FormGroup>
</Form>
  );
};

Login.propTypes = {
  signin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Login;
