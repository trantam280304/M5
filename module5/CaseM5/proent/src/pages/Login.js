import LoginForm from "../components/LoginForm";

function Login() {
  

  return (
 <>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="../assets/img/apple-icon.png"
  />
  <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
  <title>Material Dashboard 2 by Creative Tim</title>
  {/*     Fonts and icons     */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
  />
  {/* Nucleo Icons */}
  <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
  {/* Font Awesome Icons */}
  {/* Material Icons */}
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
    rel="stylesheet"
  />
  {/* CSS Files */}
  <link
    id="pagestyle"
    href="../assets/css/material-dashboard.css?v=3.1.0"
    rel="stylesheet"
  />
  {/* Nepcha Analytics (nepcha.com) */}
  {/* Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. */}
  
  <main className="main-content  mt-0">
    <div
      className="page-header align-items-start min-vh-100"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")'
      }}
    >
      <span className="mask bg-gradient-dark opacity-6" />
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                    Đăng nhập
                  </h4>
                  <div className="row mt-3">
                    <div className="col-2 text-center ms-auto">
                      <a className="btn btn-link px-3" href="javascript:;">
                        <i className="fa fa-facebook text-white text-lg" />
                      </a>
                    </div>
                    <div className="col-2 text-center px-1">
                      <a className="btn btn-link px-3" href="javascript:;">
                        <i className="fa fa-github text-white text-lg" />
                      </a>
                    </div>
                    <div className="col-2 text-center me-auto">
                      <a className="btn btn-link px-3" href="javascript:;">
                        <i className="fa fa-google text-white text-lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </main>
  {/*   Core JS Files   */}
  {/* Github buttons */}
  {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */}
</>





  );
}
export default Login;





