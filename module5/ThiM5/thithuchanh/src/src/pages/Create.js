import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
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
function Create(props) {
    let navigate = useNavigate();
    // Làm việc với dữ liệu
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        'name': '',
        'price': '',
        'quantity': ''
    })
    const handleSubmit = (values) => {
        let data = values;
        Product.store(data).then((res) => {
            alert('Thêm thành công');
            // Chuyển hướng
            navigate("/")
        }).catch((res) => {
            alert('Thêm thất bại')
        })
    }
    return (
        <div>
            <h1>Thêm</h1>
            <Formik
                initialValues={formData}
                validationSchema={rules}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="name">Tên</label>
                        <br />
                        <Field name="name" />
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <br />
                        <label htmlFor="price">Giá</label>
                        <br />
                        <Field name="price" />
                        {errors.price && touched.price ? (
                            <div>{errors.price}</div>
                        ) : null}
                        <br />
                        <label htmlFor="email">Tồn kho</label>
                        <br />
                        <Field name="quantity" />
                        {errors.quantity && touched.quantity ? (
                            <div>{errors.quantity}</div>
                        ) : null}
                        <br />
                        <button type="submit">Cập nhật</button> |
                        <Link to ="/">Quay lại</Link>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Create;