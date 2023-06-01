import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Img from "../logo/Img";
import image1174 from "../logo/image1174.png";
import "./account.css";
// import axios from "axios";
import axios from "../Services/axios";
import { useNavigate } from "react-router-dom";
// import MyProfile from "./MyProfile";


const Account = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


 
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
    }
  },[]);
  // const userData = JSON.parse(localStorage.getItem('user-Info'));
  // const productData = {
  //   userId: userData._id}
    const Login = async (event) => {
      event.preventDefault();
    const user= {email,password}
      try {
        const response = await axios.post('/user/login', user)
        console.log(response)
        alert("Login successful!");
        // console.log(response.data.result.accessToken)
        localStorage.setItem('accessToken',response.result.accessToken)
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <>
      <Header />
      {/* Section1-My Account */}
      <section>
        <div
          className="Account"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
            width: "100%",
          }}
        >
          <div
            className="container"
            style={{width: "100%" }}
          >
            <div className="row" style={{marginLeft:"3rem"}}>
              <div className="col-md-6">
                <h2 className="Producttag">My Account</h2>
                <div
                  className="clo-md-6"
                  style={{
                    justifyContent: "left",
                    display: "flex",
                    fontSize: "16px",
                  }}
                >
                  <p>Home</p>
                  <p style={{ marginLeft: "0.8rem" }}>. Pages</p>
                  <p style={{ color: "#FB2E86", marginLeft: "0.8rem" }}>
                    . My Account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Login */}
      <section>
        <div style={{ marginTop: "2rem" }}>
          <div className="container" style={{width:"80%"}}> 
            <div className="Login-row" style={{width:"100%"}}>
              <div
                className="login col-md-12"
                style={{
                  backgroundImage: `url(${Img.Rectangle1})`,
                  borderColor: "white",
                  boxShadow: "0px 0px 25px rgb(0 0 0 / 20%)",
                  background: "#f6f7fb",
                  paddingInline: "2rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    fontSize: "32px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </h2>
                <p
                  style={{
                    textAlign: "center",
                    color: "#9096B2",
                    marginBottom: "2rem",
                  }}
                >
                  Please login usig account detials below
                </p>
                <form>
                  <input
                    className="logindetails"
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    className="logindetails"
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <p
                    style={{
                      textAlign: "left",
                      color: "#9096B2",
                      marginBottom: "2rem",
                    }}
                  >
                    Forgot your password?
                  </p>
                  <button
                    className="signup btn-outline-success"
                    type="submit"
                    onClick={Login}
                  >
                    Sign Up
                  </button>
                  <a  href="/NewAccount" style={{ display:"flex",flexDirection:"column",textAlign: "center", color: "#9096B2", textDecoration:"none"}}>
                    Don't have an account? Create account
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section3-Banner */}
      <section>
        <div className="ATcontainer col-md">
          <img className="ATtag" src={image1174} alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Account;



// "639eaad15f30026434f78fa7"