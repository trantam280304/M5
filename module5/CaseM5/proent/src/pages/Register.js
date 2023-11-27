import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import Swal from "sweetalert2";
import CustomerModel from "../models/CustomerModel";

const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập tên!"),
    email: Yup.string().required("Vui lòng nhập email!"),
    phone: Yup.number().required("Vui lòng nhập số điện thoại!"),
    address: Yup.string().required("Vui lòng nhập địa chỉ!"),
    password: Yup.string().required("Vui lòng nhập mật khẩu!"),
    repeatpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Mật khẩu nhập lại không khớp')
    .required('Vui lòng nhập lại mật khẩu'),

});

const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    repeatpassword: "",

};


function Register(props) {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        CustomerModel.register(values)
            .then((res) => {
                // console.log(values);
                handleRegisterSuccess();
                navigate("/login");
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Có lỗi xảy ra khi đăng ký!",
                    text: err.message,
                });
            });
    };

    const handleRegisterSuccess = () => {
        Swal.fire({
            icon: "success",
            title: "Đăng ký thành công vui lòng đăng nhập!",
            showConfirmButton: false,
            timer: 2000,
        });
    };

    return (
        <>
            <>

                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="../assets/img/apple-icon.png"
                />
                <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
                <title>Material Dashboard 2 by Creative Tim</title>
                {/*     Fonts and icons     */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
                />
                {/* Nucleo Icons */}
                <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
                <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
                {/* Font Awesome Icons */}
                {/* Material Icons */}
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                    rel="stylesheet"
                />
                {/* CSS Files */}
                <link
                    id="pagestyle"
                    href="../assets/css/material-dashboard.css?v=3.1.0"
                    rel="stylesheet"
                />
                {/* Nepcha Analytics (nepcha.com) */}
                {/* Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. */}
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                >

                    <main className="main-content  mt-0">
                        <section>
                            <div className="page-header min-vh-100">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                            <div
                                                className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                                                style={{
                                                    backgroundImage:
                                                        'url("../assets/img/illustrations/illustration-signup.jpg")',
                                                    backgroundSize: "cover"
                                                }}
                                            ></div>
                                        </div>
                                        <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                            <div className="card card-plain">
                                                <div className="card-header">
                                                    <h4 className="font-weight-bolder">Trang đăng ký</h4>
                                                    <p className="mb-0">
                                                        Trải nghiệm sản phẩm tốt nhé
                                                    </p>
                                                </div>
                                                <div className="card-body">
                                                    <Form role="form">
                                                        <div className="input-group input-group-outline mb-3">
                                                            <Field type="text" className="form-control"  name="name" placeholder="Tên"/><br/>
                                                        </div>
                                                            <ErrorMessage name="name" component="div" className="error-message" style={{ color: 'red' }} />
                                                        <div className="input-group input-group-outline mb-3">
                                                            <Field type="email" className="form-control" name="email"  placeholder="Email"/><br/>

                                                        </div>
                                                            <ErrorMessage name="email" component="div" className="error-message" style={{ color: 'red' }} />
                                                        <div className="input-group input-group-outline mb-3">
                                                            <Field type="number" className="form-control"  name="phone"  placeholder="Số điện thoại"/><br/>
                                                        </div>
                                                            <ErrorMessage name="phone" component="div" className="error-message" style={{ color: 'red' }} />
                                                        <div className="input-group input-group-outline mb-3">
                                                            <Field type="text" className="form-control"  name="address"  placeholder="Địa chỉ"/><br/>
                                                        </div>
                                                            <ErrorMessage name="address" component="div" className="error-message" style={{ color: 'red' }} />
                                                        <div className="input-group input-group-outline mb-3">
                                                            <Field type="password" className="form-control"  name="password"  placeholder="Mật khẩu"/><br/>

                                                        </div>
                                                            <ErrorMessage name="password" component="div" className="error-message" style={{ color: 'red' }} />
                                                        <div className="input-group input-group-outline mb-3">
                                                            <Field type="password" className="form-control"  name="repeatpassword" placeholder="Nhập lại mật khẩu"/><br/>

                                                        </div>
                                                            <ErrorMessage name="repeatpassword" component="div" className="error-message" style={{ color: 'red' }} />
                                                        <div className="text-center">
                                                            <button
                                                                type="submit"
                                                                className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                                                            >
                                                                Đăng ký
                                                            </button>
                                                        </div>
                                                    </Form>

                                                </div>
                                                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                                    <p className="mb-2 text-sm mx-auto">
                                                        Bạn đã có tài khoản
                                                        <a
                                                            href="/login"
                                                            className="text-primary text-gradient font-weight-bold"
                                                        >
                                                            Đăng nhập
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </Formik>
            </>

        </>
    );
}

export default Register;
