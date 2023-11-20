import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Product from "../models/Product";


const rules = Yup.object().shape({
    name: Yup.string()
        .min(2, "Nhập trên 2 ký tự")
        .max(50, "Đã quá 50 ký tự")
        .required("Vui lòng điền vào ô trống"),
    quantity: Yup.string()
        .min(2, "Nhập trên 2 ký tự")
        .max(50, "Đã quá 50 ký tự")
        .required("Vui lòng điền vào ô trống"),
        price: Yup.string()
        .min(2, "Nhập trên 2 ký tự")
        .max(50, "Đã quá 50 ký tự")
        .required("Vui lòng điền vào ô trống")
});

function Edit(props) {
    let navigate = useNavigate();
    const params = useParams();
    const [id, setId] = useState(0);
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        'name': '',
        'price': '',
        'quantity': ''
    })
    // Chạy 1 lần duy nhất
    useEffect(() => {

        setId(params.id);
        Product.find(params.id).then((res) => {
            setFormData(res.data);
        })
    }, []);


    const handleSubmit = (values) => {
        let data = values;
        Product.update(params.id, data).then((res) => {
            alert(' Sửa thành công')
            navigate("/")
        })
        // Chuyển hướng
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Sửa </h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
                enableReinitialize={true}
            >
                {({ errors, touched }) => (
                    <Form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="form-field">
                            <label htmlFor="Name">Tên</label><br />
                            <Field name="name" className={errors.name && touched.name ? 'input-error' : ''} />
                            {errors.name && touched.name ? (
                                <div className="error-message">{errors.name}</div>
                            ) : null}
                        </div>
                        <br />
                        <div className="form-field">
                            <label htmlFor="price">Giá</label><br />
                            <Field name="price" className={errors.price && touched.price ? 'input-error' : ''} />
                            {errors.price && touched.quantity ? (
                                <div className="error-message">{errors.price}</div>
                            ) : null}
                        </div>
                        <br />
                        <div className="form-field">
                            <label htmlFor="quantity">Tồn kho</label><br />
                            <Field name="quantity" className={errors.quantity && touched.quantity ? 'input-error' : ''} />
                            {errors.quantity && touched.quantity ? (
                                <div className="error-message">{errors.quantity}</div>
                            ) : null}
                        </div>
                        <br/>
                        <button type="submit" className="submit-button">Câp nhật</button>
                        <Link to ="/">Quay lại</Link>

                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Edit;