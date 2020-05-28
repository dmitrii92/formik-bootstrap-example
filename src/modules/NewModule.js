import React from 'react';

import Form from 'react-bootstrap/Form';

import MyInput from '../components/MyInput.js';
var jsonObj = {};

const NewModule = (props) => {
    const formik = props.formik;

    return (
        <Form.Group>
            <MyInput label="Имя" id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} type="text" />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <MyInput label="Фамилия" id="secondName" name="secondName" onChange={formik.handleChange} value={formik.values.secondName} type="text" />
            {formik.errors.secondName ? <div>{formik.errors.secondName}</div> : null}
            <MyInput label="Отчество" id="middleName" name="middleName" onChange={formik.handleChange} value={formik.values.middleName} type="text" />
            {formik.errors.middleName ? <div>{formik.errors.middleName}</div> : null}
        </Form.Group>
    );
}
export default NewModule; 