import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import NewModule from './modules/NewModule.js';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';

import './css/App.css';
import MyInput from './components/MyInput.js';
import validation from './validation.js';

const App = () => {

  const formik = useFormik({
    initialValues: {
    },
    onSubmit: (values) => {
      console.log("Submitted")
      console.log(values)
      alert(JSON.stringify(values));
    },
    validate: validation
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <MyInput label="age" id="age" name="age" onChange={formik.handleChange} value={formik.values.age} type="number"/>
        {formik.errors.age ? <div>{formik.errors.age}</div> : null}
        <NewModule formik={formik}/>
        <Button onClick={formik.handleSubmit} type="submit">Отправить на решение</Button>
      </Form>
    </Container>

  );
}

export default App;