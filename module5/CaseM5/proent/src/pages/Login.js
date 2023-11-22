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
  <div className="container position-sticky z-index-sticky top-0">
    <div className="row">
      <div className="col-12">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
          <div className="container-fluid ps-2 pe-0">
            <a
              className="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
              href="../pages/dashboard.html"
            >
              Material Dashboard 2
            </a>
            <button
              className="navbar-toggler shadow-none ms-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a
                    className="nav-link d-flex align-items-center me-2 active"
                    aria-current="page"
                    href="../pages/dashboard.html"
                  >
                    <i className="fa fa-chart-pie opacity-6 text-dark me-1" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-2" href="../pages/profile.html">
                    <i className="fa fa-user opacity-6 text-dark me-1" />
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-2" href="../pages/sign-up.html">
                    <i className="fas fa-user-circle opacity-6 text-dark me-1" />
                    Sign Up
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link me-2" href="../pages/sign-in.html">
                    <i className="fas fa-key opacity-6 text-dark me-1" />
                    Sign In
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav d-lg-flex d-none">
                <li className="nav-item d-flex align-items-center">
                  <a
                    className="btn btn-outline-primary btn-sm mb-0 me-2"
                    target="_blank"
                    href="https://www.creative-tim.com/builder?ref=navbar-material-dashboard"
                  >
                    Online Builder
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/product/material-dashboard"
                    className="btn btn-sm mb-0 me-1 bg-gradient-dark"
                  >
                    Free download
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
      </div>
    </div>
  </div>
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
                    Sign in
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
      <footer className="footer position-absolute bottom-2 py-2 w-100">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-12 col-md-6 my-auto">
              <div className="copyright text-center text-sm text-white text-lg-start">
                © , made with <i className="fa fa-heart" aria-hidden="true" />{" "}
                by
                <a
                  href="https://www.creative-tim.com"
                  className="font-weight-bold text-white"
                  target="_blank"
                >
                  Creative Tim
                </a>
                for a better web.
              </div>
            </div>
            <div className="col-12 col-md-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com"
                    className="nav-link text-white"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/presentation"
                    className="nav-link text-white"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/blog"
                    className="nav-link text-white"
                    target="_blank"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.creative-tim.com/license"
                    className="nav-link pe-0 text-white"
                    target="_blank"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
  {/*   Core JS Files   */}
  {/* Github buttons */}
  {/* Control Center for Material Dashboard: parallax effects, scripts for the example pages etc */}
</>





  );
}
export default Login;





