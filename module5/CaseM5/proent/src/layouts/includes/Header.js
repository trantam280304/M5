import React from "react";
function Header(props) {



    
    return (
        <div>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-check text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">Sản phẩm chất lượng</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                            <h5 className="font-weight-semi-bold m-0">Giao hàng nhanh</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">Hoàn trả 14 ngày</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div
                            className="d-flex align-items-center border mb-4"
                            style={{ padding: 30 }}
                        >
                            <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                            <h5 className="font-weight-semi-bold m-0">Hỗ trợ 24/7</h5>
                        </div>
                    </div>
                </div>
            </div>

                <div className="container-fluid offer pt-5">
                    <div className="row px-xl-5">
                        <div className="col-md-6 pb-4">
                            <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                                <img
                                style={{ width: "30%" ,height: "90%" }}
                                src="https://cdn.tgdd.vn/Files/2021/05/25/1354641/top-8-loai-nuoc-giat-thai-lan-duoc-chi-em-tin-dung-tai-viet-nam-202105251606345110.jpg" alt="" />
                                <div className="position-relative" style={{ zIndex: 1 }}>
                                    <h5 className="text-uppercase text-primary mb-3">
                                       Giảm giá cực sốc
                                    </h5>
                                    <h1 className="mb-4 font-weight-semi-bold">Nước giặt hương thơm</h1>
                                    <a href="/" className="btn btn-outline-primary py-md-2 px-md-3">
                                        Mua ngay
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pb-4">
                            <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                                <img src="https://tse4.mm.bing.net/th?id=OIP.k3UdPD-YJHEuMGkPhWbECQHaEK&pid=Api&P=0&h=180" alt="" 
                                style={{ width: "30%" ,height: "90%" }}

                                
                                />
                                <div className="position-relative" style={{ zIndex: 1 }}>
                                    <h5 className="text-uppercase text-primary mb-3">
                                        Khác hàng là số 1 
                                    </h5>
                                    <h1 className="mb-4 font-weight-semi-bold">Phục vụ tận tình</h1>
                                    <a href="/" className="btn btn-outline-primary py-md-2 px-md-3">
                                    Mua ngay
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-secondary my-5">
                    <div className="row justify-content-md-center py-5 px-xl-5">
                        <div className="col-md-6 col-12 py-5">
                            <div className="text-center mb-2 pb-2">
                                <h2 className="section-title px-5 mb-3">
                                    <span className="bg-secondary px-2">Giới thiệu về shop</span>
                                </h2>
                                <p>
                                   Là 1 trong những shop bán uy tín và bán chạy nhất Việt Nam
                                </p>
                            </div>
                            <form action="">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control border-white p-4"
                                        placeholder="Gửi email cho shop"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary px-4">Gửi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>

    )
}
export default Header;