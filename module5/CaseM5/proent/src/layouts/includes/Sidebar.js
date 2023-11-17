import React from "react";

function Sidebar(props) {
  const { cartItemCount } = props;

  return (
      <>
        <div className="container-fluid">
          <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="d-inline-flex align-items-center">
                <a className="text-dark" href="">
                  FAQs
                </a>
                <span className="text-muted px-2">|</span>
                <a className="text-dark" href="">
                  Help
                </a>
                <span className="text-muted px-2">|</span>
                <a className="text-dark" href="">
                  Support
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
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
                  <i className="fab fa-instagram" />
                </a>
                <a className="text-dark pl-2" href="">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center py-3 px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
              <a href="/" className="text-decoration-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  Shopper
                </h1>
              </a>
            </div>
            <div className="col-lg-6 col-6 text-left">
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for products"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3 col-6 text-right">
              
              
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar Start */}
        <div className="container-fluid mb-5">
          <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
              <a
                className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                data-toggle="collapse"
                href="#navbar-vertical"
                style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
              >
                <h6 className="m-0">Categories</h6>
                <i className="fa fa-angle-down text-dark" />
              </a>
              <nav
                className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0"
                id="navbar-vertical"
              >
                <div
                  className="navbar-nav w-100 overflow-hidden"
                  style={{ height: 410 }}
                >
                 
                </div>
              </nav>
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
                      Home
                    </a>
                    <a href="shop.html" className="nav-item nav-link">
                      Shop
                    </a>
                    <a href="detail.html" className="nav-item nav-link">
                      Shop Detail
                    </a>
                    <div className="nav-item dropdown">
                      <a
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Pages
                      </a>
                      <div className="dropdown-menu rounded-0 m-0">
                        <a href="cart.html" className="dropdown-item">
                          Shopping Cart
                        </a>
                        <a href="checkout.html" className="dropdown-item">
                          Checkout
                        </a>
                      </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">
                      Contact
                    </a>
                  </div>
                  <div className="navbar-nav ml-auto py-0">
                    <a href="" className="nav-item nav-link">
                      Login
                    </a>
                    <a href="" className="nav-item nav-link">
                      Register
                    </a>
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
                    <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Fashionable Dress
                        </h3>
                        <a href="" className="btn btn-light py-2 px-3">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ height: 410 }}>
                    <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: 700 }}>
                        <h4 className="text-light text-uppercase font-weight-medium mb-3">
                          10% Off Your First Order
                        </h4>
                        <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                          Reasonable Price
                        </h3>
                        <a href="" className="btn btn-light py-2 px-3">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#header-carousel"
                  data-slide="prev"
                >
                  <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                    <span className="carousel-control-prev-icon mb-n2" />
                  </div>
                </a>
                <a
                  className="carousel-control-next"
                  href="#header-carousel"
                  data-slide="next"
                >
                  <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                    <span className="carousel-control-next-icon mb-n2" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>

  )
}
export default Sidebar;