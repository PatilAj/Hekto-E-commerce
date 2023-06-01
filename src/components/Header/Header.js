import React from 'react';
import './header.css';
import {
  MailOutline,
  PhoneInTalk,
  ArrowDropDownOutlined,
  ShoppingCartOutlined,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  Search,
} from '@mui/icons-material';
import MyProfile from '../Account/MyProfile';

const Header = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#7E33E0',
          display: 'flex',
          justifyContent: 'space-around',
          textAlign: 'center',
        }}
      >
        <ul className="nav justify-content-start">
          <li className="navrouting nav-item">
            <a className=" nav-link text-white" href="/NotFound">
              <MailOutline style={{gap: '1rem !important'}} />
              mhhasanul@gmail.com
            </a>
          </li>
          <li className="navrouting nav-item">
            <a className="nav-link text-white" href="/NotFound">
              <PhoneInTalk />
              (12345)67890
            </a>
          </li>
        </ul>
        <ul className="nav justify-content">
          <li className="navrouting nav-item">
            <a className="nav-link text-white" href="/NotFound">
              English<ArrowDropDownOutlined />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/NotFound">
              USD<ArrowDropDownOutlined />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/Account">
              Login<PersonOutlineOutlined />
            </a>
          </li>
          <MyProfile />
          <li className="nav-item">
            <a className="nav-link text-white" href="/Hekto">
              Wishlist<FavoriteBorderOutlined />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/ShoppingCart">
              <ShoppingCartOutlined />
            </a>
          </li>
        </ul>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{width: '100% !important'}}
      >
        <div className="container-fluid" style={{width: '100% !important'}}>
          <a
            className="navbar-brand"
            href="/"
            style={{
              fontWeight: 'bold',
              fontSize: '36px',
              width: '10rem',
              marginLeft: '10rem',
            }}
          >
            Hekto
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{width: '50%', marginLeft: '-3rem'}}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Home</a></li>
                  <li>
                    <a className="dropdown-item" href="/AboutUs">
                      AboutUs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/LeftSideBar">
                      LeftSideBar
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/BlogPage">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Grid">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/SingleBlog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ShopList">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ContactUs">Contact</a>
              </li>

            </ul>
            <form className="d-flex" style={{marginRight: '11rem'}}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{borderRadius: '1px'}}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{
                  backgroundColor: '#FB2E86',
                  color: 'white',
                  borderRadius: '1px',
                  border: 'none',
                }}
              >
                <Search />
              </button>
            </form>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Header;
