import React from 'react';

import Form from 'react-bootstrap/Form';
var json = {}
const MyInput = (props) => {

  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control value={props.value} id={props.id} type={props.type} onChange={props.onChange} />
    </Form.Group>
  );
}


export default MyInput;