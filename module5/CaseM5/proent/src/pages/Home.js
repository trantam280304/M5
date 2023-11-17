import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { Link, useNavigate } from 'react-router-dom';
import ProductModel from '../models/ProductModel';
import CartModel from "../models/CartModel";
import App from '../App.css';

function Home(props) {

    const navigate = useNavigate();
    const [cartItemCount, setCartItemCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);

    useEffect(() => {
        ProductModel.all()
            .then((res) => {
                setProducts(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleShowMore = () => {
        setVisibleProducts(visibleProducts + 4);
    };

    const handleShowLess = () => {
        setVisibleProducts(visibleProducts - 4);
    };

    const handleAddToCart = (productId) => {
        CartModel.addtocart(productId)
            .then((res) => {
                console.log(res);
                alert('Thêm vào giỏ hàng thành công');
                // Cập nhật số lượng sản phẩm trong giỏ hàng
                setCartItemCount(cartItemCount + 1);
            })
            .catch((error) => {
                console.log(error);
                alert('Thêm vào giỏ hàng thất bại');
            });
    };


    return (
        <MasterLayout>
            <a href="/cart" className="btn border cart-button">
                <i className="fas fa-shopping-cart text-primary text-right" />
                <span className="badge">{cartItemCount}</span>
            </a>
            <div className="row">

                {products.slice(0, visibleProducts).map((product) => (
                    <div key={product.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img
                                    className="img-fluid"
                                    src={product.image}
                                    style={{ maxWidth: "250px", height: "250px" }}
                                    alt={product.name}
                                />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{product.name}</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>{product.price_fm} VND</h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <Link
                                    to={`/detail/${product.id}`}
                                    className="btn btn-sm text-dark p-0"
                                >
                                    <i className="fas fa-eye text-primary mr-1" />
                                    Chi tiết
                                </Link>
                                <button

                                    onClick={() => handleAddToCart(product.id)}
                                    className="btn btn-sm text-dark p-0"
                                >
                                    < i className="fas fa-shopping-cart"></i>  Giỏ Hàng

                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {visibleProducts < products.length && (
                <div className="col-12 text-center m-3">
                    <button className="btn btn-success load-more-product" onClick={handleShowMore}>
                        Xem tiếp
                    </button>
                </div>
            )}

            {visibleProducts > products.length && (
                <div className="col-12 text-center m-3">
                    <button className="btn btn-danger load-more-product" onClick={handleShowLess}>
                        Lùi lại
                    </button>
                </div>
            )}
        </MasterLayout>
    );
}

export default Home;