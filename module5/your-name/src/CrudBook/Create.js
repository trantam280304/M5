import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Books from "../models/Books";
import App from '../App.css';
const rules = Yup.object().shape({
    title: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    quantity: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
});
function Create(props) {
    let navigate = useNavigate();

    //  làm việc với dữ liệu 
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        'title': '',
        'quantity': '',
    })

    const handleSubmit = (values) => {
        let data = values;
        Books.store(data).then((res) => {
            alert('them thanh cong');
            navigate("/")
        }).catch((res) => {
            alert('them that bai');
        })

    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Create</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="form-field">
                            <label htmlFor="title">Title</label><br/>
                            <Field name="title" className={errors.title && touched.title ? 'input-error' : ''} /><br/>
                            {errors.title && touched.title ? (
                                <div className="error-message">{errors.title}</div>
                            ) : null}
                        </div>

                        <div className="form-field">
                            <label htmlFor="quantity">Quantity</label><br/>
                            <Field name="quantity" className={errors.quantity && touched.quantity ? 'input-error' : ''} />
                            {errors.quantity && touched.quantity ? (
                                <div className="error-message">{errors.quantity}</div>
                            ) : null}
                        </div>
                      
                        <button type="submit" className="submit-button">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>

    );

}


export default Create;
