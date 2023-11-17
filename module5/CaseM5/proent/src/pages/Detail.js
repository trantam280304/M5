import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import MasterLayout from "../layouts/MasterLayout";
import CartModel from '../models/CartModel';
import ProductModel from '../models/ProductModel';

function Detail(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const Urlname = 'http://127.0.0.1:8000/';

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`)
            .then(response => {
                setProduct(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching product data:', error);
            });
    }, []);

    if (product === null) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        const cart = {
          id: id,
        };
        CartModel.addtocart(id)
          .then((res) => {
            console.log(res );
            alert('thêm thành công')
            navigate("/Cart");
          });
    };

    return (
        <MasterLayout>
            <div className="container-fluid bg-secondary mb-5">
                <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ minHeight: 300 }}
                >
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
                    <div className="d-inline-flex">
                        <p className="m-0">
                            <a href="">Home</a>
                        </p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop Detail</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 pb-5">
                        <div
                            id="product-carousel"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner border">
                                <div className="carousel-item active">
                                    <img
                                        style={{ maxWidth: '250px', height: '250px' }}
                                        className="w-100 h-100"
                                        src={Urlname + product.image}
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 pb-5">
                        <h3 className="font-weight-semi-bold text-left">{product.name}</h3>
                        <h3 className="font-weight-semi-bold mb-4 text-left">{product.price.toLocaleString()} VND</h3>
                        <p className="mb-4  text-left ">
                            {product.description}
                        </p>
                        <div className="d-flex align-items-center mb-4 pt-2">
                            <div className="input-group quantity mr-3" style={{ width: 130 }}>
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-minus">
                                        <i className="fa fa-minus" />
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    className="form-control bg-secondary text-center"
                                    defaultValue={1}
                                />
                                <div className="input-group-btn">
                                    <button className="btn btn-primary btn-plus">
                                        <i className="fa fa-plus" />
                                    </button>
                                </div>
                            </div>
                            <button onClick={handleAddToCart} class="btn btn-primary px-3"><i class="fa fa-shopping-cart mr-1"></i> BuyNow</button>

                        </div>
                        <div className="d-flex pt-2">
                            <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                            <div className="d-inline-flex">
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a className="text-dark px-2" href="">
                                    <i className="fab fa-pinterest" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </MasterLayout>
    )
}
export default Detail;
