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
      age: 0,
      firstName: "",
      secondName: "",
      middleName: "",
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
        <MyInput label="Age" id="age" name="age" onChange={formik.handleChange} value={formik.values.age} type="number"/>
        {formik.errors.age ? <div>{formik.errors.age}</div> : null}
        <NewModule formik={formik}/>
        <Button type="submit">Отправить на решение</Button>
      </Form>
    </Container>

  );
}

export default App;