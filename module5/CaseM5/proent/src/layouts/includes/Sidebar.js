import React from "react";
import Logout from "../../components/Logout";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CustomerModel from "../../models/CustomerModel";

function Sidebar(props) {
  const { cartItemCount } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    CustomerModel.logout()
      .then((response) => {
        CustomerModel.deleteCookie("customer");
        alert('Bạn chắc chắn muốn đăng xuất khỏi hệ thống?')
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
          title: "Đăng xuất thất bại",
        });
      });
  };
  let customer = CustomerModel.getCookie("customer");
  customer = customer ? JSON.parse(customer) : "";
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

              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-danger font-weight-bold  border-red px-3 mr-1">
                  𝔗𝔯ầ𝔫
                </span>
                𝔗â𝔪
              </h1>

              <i class='bx bxs-store'></i>
            </a>
            <br />
            <img className="img-fluid"
              src="https://flyclipart.com/thumb2/simple-isometric-store-icons-png-365537.png"
              style={{ width: "70%", height: "60%", marginTop: "70px" }}
            />
            <hr />

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

                <div className="nav-item dropdown">
                  <button
                    type="button"
                    className="btn btn-sm btn-light dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {customer ? (
                      <>
                        <i className="fas fa-user" /> {customer.name}
                      </>
                    ) : (
                      <>
                        <i className="fas fa-user" /> Đăng nhập
                      </>

                    )}
                  </button>

                  <div className="dropdown-menu rounded-0 m-0">
                    {customer ? (
                      <Link to="/" onClick={handleLogout}>
                        Đăng xuất
                      </Link>
                    ) : (
                      <div>
                        <Link to="/login" type="" >
                          Đăng nhập
                        </Link>
                      </div>
                    )}
                    <div>
                      <Link to="/register" type="button">
                        Đăng Ký
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" style={{ height: 410 }}>
      <img className="img-fluid"                    src="https://cdn.tgdd.vn/Files/2021/05/25/1354641/top-8-loai-nuoc-giat-thai-lan-duoc-chi-em-tin-dung-tai-viet-nam-202105251608162127.jpg"
 alt="Image" />
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <div className="p-3" style={{ maxWidth: 700 }}>
          <h4 className="text-light text-uppercase font-weight-medium mb-3">
              Giảm 10% khi mua 2 sản phẩm trở lên
          </h4>
          <h3 className="display-4 text-white font-weight-semi-bold mb-4">
             Chào mừng khách hàng
          </h3>
          <a href="/cart" className="btn btn-light py-2 px-3">
            Mua ngày
          </a>
        </div>
      </div>
    </div>
    <div className="carousel-item" style={{ height: 410 }}>
      <img className="img-fluid" src="https://4.bp.blogspot.com/-Z4w21qNyNGU/XLAnvVJsQWI/AAAAAAAAVqg/n0_VjODOn2oJUWjGGHx0oc8Oy2U4SPryACEwYBhgL/s1600/13-min_optimized.jpg" alt="Image" />
      <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <div className="p-3" style={{ maxWidth: 700 }}>
          <h4 className="text-light text-uppercase font-weight-medium mb-3">
          Giảm 10% khi mua 2 sản phẩm trở lên
          </h4>
          <h3 className="display-4 text-white font-weight-semi-bold mb-4">
          Chào mừng khách hàng
          </h3>
          <a href="/cart"className="btn btn-light py-2 px-3">
          Mua ngày
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



