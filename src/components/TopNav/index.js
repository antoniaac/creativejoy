import logo from "./logo.png";
import "./topNav.css";

const TopNav = () => {
  return (
    <div className="header">
      <div className="row top-nav">
        <div className="brand">
          <img className="logo" src={logo}></img>
        </div>

        <div className="inp-container">
          <input className="form-control" placeholder="Search"></input>
          <button>
            <i className="fa fa-search" />
          </button>
        </div>

        <div className="login-container p-0 ">
          <a href="#">
            <i className="fa fa-user-circle user-icon" />
          </a>
          <h5>
            <a href="#">Login </a>
          </h5>
          /
          <h5>
            <a href="#">Register </a>
          </h5>
        </div>
        <div className="cart-wishlist">
          <ul className="p-0">
            <li className="list-icon">
              <a href="#">
                <i className="fa fa-heart" />
              </a>
            </li>
            <li className="list-icon">
              <a href="#">
                <i className="fa fa-shopping-cart" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
