import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Banner_cart from "../components/Banner_cart";
import CartModel from "../models/CartModel";
import { useDispatch, useSelector } from "react-redux";
import MasterLayout from "../layouts/MasterLayout";
import ProductModel from "../models/ProductModel";
import CustomerModel from "../models/CustomerModel";
import Swal from "sweetalert2";
import { SET_CART } from "../redux/action";

function Cart(props) {
    const cart = useSelector((state) => state.cart);

    const [products, setProducts] = useState([]);
    const totalAll = products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
    const Urlname = 'http://127.0.0.1:8000/';

    useEffect(() => {
        CartModel.getAll()
            .then((res) => {
                setProducts(res);
                console.log(res);
            })
            .catch((err) => {
                throw err;
            });
    }, []);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleQuantityChange(productId, newQuantity) {
        const updatedProducts = products.map((product) => {
            if (product.id === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        setProducts(updatedProducts);
    }
    const handleDelete = (id) => {
        const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
        if (isConfirmed) {

            CartModel.remove(id)
                .then((res) => {
                    // Tìm sản phẩm trong state products để xóa
                    const updatedProducts = products.filter
                        ((product) => product.id !== id);
                    // Cập nhật danh sách sản phẩm
                    setProducts(updatedProducts);
                })
                .catch((err) => {
                    console.log(err);
                    alert("Đã có lỗi xảy ra");
                });
        }
    };

    const handleCheckout = () => {
        let customer = CustomerModel.getCookie("customer");
        customer = customer ? JSON.parse(customer) : "";
    
        if (!customer) {
          alert("Bạn cần đăng nhập để thanh toán đơn hàng của bạn !");
          navigate("/login");
        } else {
          localStorage.setItem("cart", JSON.stringify(cart));
          dispatch({ type: SET_CART, payload: cart });
          navigate("/checkout");
        }
    };

    return (
        <MasterLayout>
            <>
                <div className="container-fluid bg-secondary mb-5">
                    <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{ minHeight: 300 }}
                    >
                        <h1 className="font-weight-semi-bold text-uppercase mb-3">
                        GIỎ HÀNG
                        </h1>
                        <div className="d-inline-flex">
                            <p className="m-0">
                                <a href="/">Trang chủ</a>
                            </p>
                            <p className="m-0 px-2">-</p>
                            <p className="m-0">GIỎ HÀNG</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5">
                    <div className="row px-xl-5">
                        <div className="col-lg-8 table-responsive mb-5">
                            <table className="table table-bordered text-center mb-0">
                                <thead className="bg-secondary text-dark">
                                    <tr>
                                        <th>Sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá </th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody className="align-middle">
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="align-middle">
                                                <img src={product.image} alt="" style={{ width: 50 }} />{" "}
                                                {product.name}
                                            </td>
                                            <td>
                                                <div className="quantity">
                                                    <input
                                                        type="number"
                                                        name="qty"
                                                        id={`quantity-${product.id}`}
                                                        value={product.quantity}
                                                        min="1"
                                                        onChange={(e) =>
                                                            handleQuantityChange(product.id, e.target.value)
                                                        }
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                {(product.quantity * product.price).toLocaleString()}  VNĐ

                                            </td>
                                            <td>
                                                <button

                                                    id={`button-${product.id}`}
                                                    onClick={() => handleDelete(product.id)}
                                                >
                                                    <i className="fa fa-times" />

                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <form className="mb-5" action="">
                                <div className="input-group">

                                </div>
                            </form>
                            <div className="card border-secondary mb-5">
                                <div className="card-header bg-secondary border-0">
                                    <h4 className="font-weight-semi-bold m-0">Đơn Hàng</h4>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-3 pt-1">
                                        <h6 className="font-weight-medium">Tiền</h6>
                                        <h6 className="font-weight-medium"> {totalAll.toLocaleString()} VND </h6>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-weight-medium">Phí vận chuyển</h6>
                                        <h6 className="font-weight-medium">30.000 VNĐ</h6>
                                    </div>
                                </div>
                                <div className="card-footer border-secondary bg-transparent">
                                    <div className="d-flex justify-content-between mt-2">
                                        <h5 className="font-weight-bold">Tổng</h5>
                                        <h5 className="font-weight-bold">{(totalAll - 30000).toLocaleString()} VND</h5>
                                    </div>
                                    <button
                                        onClick={handleCheckout}
                                        href=""
                                        className="btn btn-block btn-primary font-weight-bold my-3 py-3"
                                    >
                                        Đặt hàng
                                    </button>
                                    <a className="gray_btn" href="/">

                                        <span className="arrow_icon">
                                            <i className="fas fa-arrow-left"></i>
                                        </span>
                                        Tiếp tục mua sắm
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </>
        </MasterLayout>
    );
}

export default Cart;