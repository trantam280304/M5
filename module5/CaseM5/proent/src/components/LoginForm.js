  import React from "react";
  import Swal from "sweetalert2";
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  import { Link, useNavigate } from "react-router-dom";
  import CustomerModel from "../models/CustomerModel";

  const SignupSchema = Yup.object().shape({
      email: Yup.string().required("Vui lòng nhập email !"),
      password: Yup.string().required("Vui lòng nhập mật khẩu !"),
  });
  const initialValues = {
      email: "",
      password: "",
  };
  function LoginForm(props) {
      const navigate = useNavigate();
      const handleSubmit = (values) => {
        CustomerModel.login(values)
              .then((res) => {
                CustomerModel.setCookie("customer", JSON.stringify(res.customer), res.expires_in);
                  localStorage.setItem("token", res.access_token);
                  navigate("/checkout");
                  handleLoginSuccess();
              })
              .catch((err) => {
                  Swal.fire({
                      icon: 'error',
                      title: 'Đăng nhập thất bại',
                      showConfirmButton: false,
                      timer: 1500, // Tăng thời gian hiển thị lên 1.5 giây
                      timerProgressBar: true, // Thêm thanh tiến trình thời gian
                      toast: true, // Sử dụng kiểu thông báo "toast"
                      showClass: {
                        popup: 'swal2-noanimation',
                        backdrop: 'swal2-noanimation',
                      },
                      hideClass: {
                        popup: '',
                        backdrop: '',
                      },
                    });
              });
      };
      const handleLoginSuccess = () => {
          Swal.fire({
              icon: 'success',
              title: 'Đăng nhập thành công',
              position: 'top-end', // Hiển thị ở góc trên bên phải
              showConfirmButton: false,
              timer: 1500, // Tăng thời gian hiển thị lên 1.5 giây
              timerProgressBar: true, // Thêm thanh tiến trình thời gian
              iconColor: '#00A65A',
              toast: true,// Sử dụng kiểu thông báo "toast"
              showClass: {
                popup: 'swal2-noanimation',
                backdrop: 'swal2-noanimation',
              },
              hideClass: {
                popup: '',
                backdrop: '',
              },
            });
      };
      return (
          <Formik
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}
          >
              <div className="card-body">
                        <Form role="form" className="text-start">
                          <div className="input-group input-group-outline my-3">
                          <Field
                          type="email"
                          id="form2Example17"
                          name="email"
                          className="form-control form-control-lg"
                          placeholder="Nhập địa chỉ email"
                      />  
                          </div>
                          <div className="input-group input-group-outline mb-3">
                          <Field
                          type="password"
                          id="form2Example27"
                          name="password"
                          className="form-control form-control-lg"
                          placeholder="Nhập password"
                      />
                          </div>
                          <div className="form-check form-switch d-flex align-items-center mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                              defaultChecked=""
                            />
                            <label
                              className="form-check-label mb-0 ms-3"
                              htmlFor="rememberMe"
                            >
                              Nhớ tài khoản
                            </label>
                          </div>
                          <div className="text-center">
                          <button className="btn btn-danger btn-lg btn-block" type="submit">
                          Đăng nhập
                      </button>
                          </div>
                          <p className="mt-4 text-sm text-center">
                          Bạn cần giúp đỡ?
                            <a
                              href="/register"
                              className="text-primary text-gradient font-weight-bold"
                            >
                              Đăng ký
                            </a>
                          </p>
                        </Form>
                      </div>
          </Formik>
      );
  }
  export default LoginForm;