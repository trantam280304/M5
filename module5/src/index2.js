import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";

const element = React.createElement('div', { className: 'container' }, 'Hello, world!');
// mảng
const fruits = ['cam', 'đào', 'bưởi'];
// vi du 1
<div>
  <h1>Hello, world!</h1>
  <h2>It is {new Date().toLocaleTimeString()}.</h2>
</div>
// vi du 2
const students = [
  {
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany'
  },
  {
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico'
  },
  {
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria'
  },
  {
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK'
  },
  {
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada'
  },
  {
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = () => {
  root.render(
    <div>

      {/* duyệt mảng */}
      <h1 >Trái cây</h1>
      <ul>
        {
          fruits.map((value, index) => (

            <li>{value}</li>

          ))

        }
      </ul>
      {/* vi du  */}
      <div>
        <h1>KIMOCHI</h1>
        <h2>Bây giờ là : {new Date().toLocaleTimeString()}.</h2>
      </div>

      {/* vi du  */}

      <div>
        {students.map(student => (
          <tr>
            <td>{student.company}</td>
            <td>{student.contact}</td>
            <td>{student.country}</td>
          </tr>
        ))}
      </div>
      <div className="container">
        <div className="card">
          <div className="card--header" />
          <img
            className="avatar"
            src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/384404561_659583592943087_6543722415206754386_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFVHP1THhkR-Zp4V73scquPghhU27c73oiCGFTbtzveiNIDa1XlPbnPuBn1vPH5sez-xA58D6RtKFoQYu4aA0WS&_nc_ohc=beuofiyHWJkAX9W19h2&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDhtjKN85OGCGf8rnhcGF2AW5psWANCfEe0wCcm7pv9jw&oe=6540CBD4"
            alt="avatar"
          />
          <div className="card--body">
            <div>
              <p className="text-header">TRẦN TÂM</p>
              <p className="text-sub">
                THeo dõi mình để có nhiều trái cây nhé !
              </p>
              <button className="btn1 third">Theo dõi</button>
            </div>
          </div>
        </div>
      </div>
            {/* vi du  */}

      <div className="container d-flex align-items-center text-center">
        <div className="form-signin">
          <form>
            <img className="mb-4" src="https://tse2.mm.bing.net/th?id=OIP.SMww6enCdn4CdG_8i25Y0wHaHa&pid=Api&P=0&h=180" alt="" width="72" height="57" />
            <h1 className="h3 mb-3 fw-normal">Trang đăng nhập</h1>
            <div className="form-floating">
              <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
              <label>Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
              <label>Mât khẩu</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" /> nhớ đăng nhập
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Đăng nhập</button>
            <p className="mt-5 mb-3 text-muted">© TRANG TRÁI CÂY</p>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('root')

  )
};
setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();