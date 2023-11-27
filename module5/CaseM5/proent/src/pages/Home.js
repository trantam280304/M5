import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import { Link, useNavigate } from 'react-router-dom';
import ProductModel from '../models/ProductModel';
import { useSelector, useDispatch } from "react-redux";
import { SET_CART } from "../redux/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(props) {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [cartItemCount, setCartItemCount] = useState(0);
    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(4);
    useEffect(() => {
        ProductModel.all()
          .then((res) => {
            setProducts(res.data);
          })
          .catch((err) => {
            throw err;
          });
      }, []);

    const handleShowMore = () => {
        setVisibleProducts(visibleProducts + 4);
    };

    const handleShowLess = () => {
        setVisibleProducts(visibleProducts - 4);
    };

    const handleAddToCart = (id, count, product) => {
        let item = {
            product_id: id,
            quantity: count,
            product: product,
        };
        let update = false;
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            if (element.product_id === id) {
                update = true;
                cart[index].quantity = cart[index].quantity + count;
            }
        }
        if (update) {
            var newCart = [...cart];
        } else {
            var newCart = [...cart, item];
        }
        localStorage.setItem("cart", JSON.stringify(newCart));
        dispatch({ type: SET_CART, payload: newCart });
        toast.success("Thêm thành công");
        setCartItemCount(newCart.length);
    };


    return (
        <MasterLayout>
            <h1> ---- Sản phẩm ----</h1>
            <Link to="/cart" className="btn border cart-button">
                <i className="fas fa-shopping-cart text-primary text-right" />
                <span className="badge">{cartItemCount}</span>
            </Link>
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
                                    onClick={() => handleAddToCart(product.id, 1, product)}
                                    className="btn btn-sm text-dark p-0"
                                >
                                    <i className="fas fa-shopping-cart"></i>  Giỏ Hàng
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