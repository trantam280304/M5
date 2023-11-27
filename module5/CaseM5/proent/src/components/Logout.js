import CustomerModel from "../models/CustomerModel";
import Swal from "sweetalert2";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Logout(){
    const navigate = useNavigate();
        const handleLogout = () => {
            CustomerModel.logout()
                .then((response) => {
                    CustomerModel.deleteCookie("customer");
                    Swal.fire({
                        icon: "success",
                        title: "Đăng xuất thành công",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        navigate("/");
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Logout Fail",
                    });
                });
        };
        let customer = CustomerModel.getCookie("customer");
        if (customer != "undefined") {
            customer = customer ? JSON.parse(customer) : '';    
        }

    return(
       <div>
            {customer ? (
                <button
                    className="col-12"
                    style={{
                        marginLeft: 10,
                        textAlign: "center",
                        position: "inherit"
                    }}
                >
                    <a style={{ color: "red" }} onClick={handleLogout}>
                       {customer.name}

                    <i class='bx bxs-user-circle' ></i>
                    </a>
                </button>
            ) : (
                <button
                    className="col-12"
                    style={{
                        marginLeft: 10,
                        textAlign: "center",
                        position: "inherit"
                    }}
                >
                    <i class='bx bx-last-page'></i>
                    <Link style={{ color: "black" }} to='/login'>Đăng nhập</Link>
                </button>
            )}
       </div>
);

}
export default Logout