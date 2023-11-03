import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Vidu = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            address: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().min(5,"bạn cần nhập trên 5 ký tự")
            .max(15,"bạn đã nhập quá 15 ký tự")
            .required('điền vào chổ trống'),
            email: Yup.string().email('email không đúng')
            .required('điền vào chổ trống'),
            address: Yup.string()
            .required('điền vào chổ trống'),
            password: Yup.string().min(8,"đã qua 8 số")
            .required('điền vào chổ trống'),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')],"password chưa trùng" )
            .required('điền vào chổ trống'),


        })

    })
    return (
        <div>
            <h3>form submit</h3>
            <form onSubmit={formik.handleSubmit}>
                <lablel>Name:</lablel><br />
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}>
                </input><br />
                <lablel>Email:</lablel><br />
                <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}>
                </input><br />
                <lablel>Address:</lablel><br />
                <input
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}>
                </input><br />
                <lablel>Password:</lablel><br />
                <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}>
                </input><br />
                <lablel> Conrfim Password:</lablel><br />
                <input
                    type="text"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}>
                </input><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}

export default Vidu;
