import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Img from "../logo/Img";
import image1174 from "../logo/image1174.png";
import "./account.css";
import Validation from "../Validation/Validation";
import { useState } from "react";
// import axios from "axios";
import { useEffect } from "react";
import axios from "../Services/axios";

const NewAccount = () => {
  // const USER_REGEX = /[A-Z, a-z, 0-9, @,_]{6,25}$/;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const [storedValues, setStoredValues] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  // const validationis = false;
  const handleChange = (event) => {
    setStoredValues({
      ...storedValues,
      [event.target.name]: event.target.value,
    });
  };
  useEffect(() => {
    if (localStorage.getItem("user-Info")) {
    }
  },[]);
 
  const handleformSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(storedValues));
    const { fullName, email, password } = storedValues;
    const data = storedValues;
    try {
      const response = await axios.post("/user/create", data);
      console.log(response);
      // console.log(response.data.result);
      localStorage.setItem(
        "user-Info", JSON.stringify(response.result)
      );
      // window.location.href = '/Account'
    } catch (error) {
      console.log(error);
    } 
  };
 

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
          <div className="container" style={{ width: "100%" }}>
            <div className="row" style={{ marginLeft: "3rem" }}>
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
      {/* Section2-Signin */}
      <section>
        <div style={{ marginTop: "2rem" }}>
          <div className="container" style={{ width: "80%" }}>
            <div className="Login-row" style={{ width: "100%" }}>
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
                  <div className="form-field">
                    <input
                      className="logindetails"
                      name="fullName"
                      type="text"
                      placeholder="Name"
                      required
                      value={storedValues.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <p className="su-error-msg">*{errors.fullName}</p>
                    )}
                  </div>
                  <br />
                  <div className="form-field">
                    <input
                      className="logindetails"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      value={storedValues.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <p className="su-error-msg">*{errors.email}</p>
                    )}
                  </div>
                  <br />
                  <div className="su-field">
                    {/* <label>Password</label> */}
                    <input
                      className="logindetails"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                      value={storedValues.password}
                      onChange={handleChange}
                    />
                    {errors.password && (
                      <p className="su-error-msg">*{errors.password}</p>
                    )}
                  </div>
                  <br />

                  <button
                    className="signup btn-outline-success"
                    disabled={false}
                    type="submit"
                    onClick={handleformSubmit}
                  >
                    Sign Up
                  </button>
                  <a
                    href="/Account"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center",
                      color: "#9096B2",
                      textDecoration:"none"
                    }}
                  >
                    Already have an account? Login
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

export default NewAccount;
