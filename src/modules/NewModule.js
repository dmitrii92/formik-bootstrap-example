import React from 'react';
import Form from 'react-bootstrap/Form';
import MyInput from '../components/MyInput.js';

const NewModule = (props) => {
    const formik = props.formik;

    return (
        <Form.Group>
            <MyInput label="Name" id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} type="text" />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <MyInput label="Second Name" id="secondName" name="secondName" onChange={formik.handleChange} value={formik.values.secondName} type="text" />
            {formik.errors.secondName ? <div>{formik.errors.secondName}</div> : null}
            <MyInput label="Middle Name" id="middleName" name="middleName" onChange={formik.handleChange} value={formik.values.middleName} type="text" />
            {formik.errors.middleName ? <div>{formik.errors.middleName}</div> : null}
        </Form.Group>
    );
}
export default NewModule; 