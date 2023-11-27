import React from 'react';

function Footer(props) {
  return (
    <>
      <div className="container-fluid bg-secondary text-dark mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <a href="" className="text-decoration-none">
              <h1 className="mb-4 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border border-white px-3 mr-1">
                𝔗𝔯ầ𝔫 
                </span>
                𝔗â𝔪
              </h1>
            </a>
          
            <p className="mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-3" />
              PHONG BÌNH - GIO LINH - QUẢNG TRỊ
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope text-primary mr-3" />
              trantam280304@gmail.com
            </p>
            <p className="mb-0">
              <i className="fa fa-phone-alt text-primary mr-3" />
              0914695575
            </p>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Đường dẫn của shop</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a className="text-dark mb-2" href="/">
                    <i className="fa fa-angle-right mr-2" />
                    Trang chủ
                  </a>
                
                  <a className="text-dark mb-2" href="/cart">
                    <i className="fa fa-angle-right mr-2" />
                    Chi tiết sản phẩm
                  </a>
                  <a className="text-dark mb-2" href="/checkout">
                    <i className="fa fa-angle-right mr-2" />
                    Thanh toán
                  </a>
                 
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Đường dẫn của shop</h5>
                <div className="d-flex flex-column justify-content-start">
                <a className="text-dark mb-2" href="/">
                    <i className="fa fa-angle-right mr-2" />
                    Trang chủ
                  </a>
                 
                  
                  <a className="text-dark mb-2" href="/cart">
                    <i className="fa fa-angle-right mr-2" />
                    Chi tiết sản phẩm
                  </a>
                  <a className="text-dark mb-2" href="/checkout">
                    <i className="fa fa-angle-right mr-2" />
                    Thanh toán
                  </a>
                 
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="font-weight-bold text-dark mb-4">Bản tin</h5>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control border-0 py-4"
                      placeholder="Tên"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control border-0 py-4"
                      placeholder=" Email"
                      required="required"
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block border-0 py-3"
                      type="submit"
                    >
                     Gửi liền
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row border-top border-light mx-xl-5 py-4">
          <div className="col-md-6 px-xl-0">
            <p className="mb-md-0 text-center text-md-left text-dark">
              ©{" "}
              <a className="text-dark font-weight-semi-bold" href="#">
                Cảm ơn bạn
              </a>
               . Đã tin tưởng shop mình
             
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="img/payments.png" alt="" />
          </div>
        </div>
      </div>

    </>
  );
}

export default Footer;