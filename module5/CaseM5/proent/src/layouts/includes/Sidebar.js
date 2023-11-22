import React from "react";
import Logout from "../../components/Logout";

function Sidebar(props) {
  const { cartItemCount } = props;

  return (
    <>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@2.0.9/css/boxicons.min.css"
      />
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a

              className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
              data-toggle="collapse"
              href=""

              style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
            >

              <h6 className="m-0">𝔗𝔯ầ𝔫 𝔗â𝔪</h6>
              <i class='bx bxs-store'></i>
            </a>
            <br />
            <img className="img-fluid" src="https://www.alimex.com.vn/uploads/Files/DSC01936.jpg"
            
            style={{ width: "60%" ,height: "40%" }}
            
            
            />
            <hr />
            <img className="img-fluid" src="https://morivietnam.vn/wp-content/uploads/2021/09/luxor.png"
            
            style={{ width: "60%" ,height: "40%" }}
            />
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <a href="/" className="nav-item nav-link active">
                    <i class='bx bx-home-heart'></i>
                    Trang chủ

                  </a>
                  <a href="/cart" className="nav-item nav-link">
                  <i class='bx bxs-cart'></i>
                    Giỏ hàng
                  </a>


                  <a href="/checkout" className="nav-item nav-link">
                  <i class='bx bx-credit-card' ></i>
                    Thanh toán
                  </a>
                </div>
                <div className="navbar-nav ml-auto py-0">

                  <Logout />

                </div>
              </div>
            </nav>
            <div
              id="header-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" style={{ height: 410 }}>
                  <img
                    className="img-fluid"
                    src="https://cdn.tgdd.vn/Files/2021/05/25/1354641/top-8-loai-nuoc-giat-thai-lan-duoc-chi-em-tin-dung-tai-viet-nam-202105251608162127.jpg"
                    alt="Image"
                    
                  />                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 700 }}>
                      <h4 className="text-light text-uppercase font-weight-medium mb-3">
                        Giảm 10% khi mua 2 sản phẩm trở lên
                      </h4>
                      <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                        Chào mừng khách hàng
                      </h3>
                      <a href="" className="btn btn-light py-2 px-3">
                        <i class='bx bx-donate-heart' ></i>
                        Mua ngày
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default Sidebar;