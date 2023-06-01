import React, { useState } from "react";
import "./account.css";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import Bheem from "../logo/Bheem.jpg";
import logout from "../logo/logout.png";
import userid from "../logo/userid.png";
import { DriveFileRenameOutlineSharp } from "@mui/icons-material";

const MyProfile = () => {
 
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          My Profile
          <ManageAccounts />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li className="dpinfo">
            <div className="profile_img">
              <span className="dropmenu-icon">
                <img className="userimg" src={Bheem} alt="loading..." />
              </span>
              <div className="edit">
              {/* <button onClick={toggleModal}><DriveFileRenameOutlineSharp /></button> */}
              </div>
            </div>           
          </li>
          <li className="userinfo">
            <img
              src={userid}
              alt="loading..."
              style={{ width: "20px", height: "22px" }}
            />
            Ketan Sonawane
          </li>
          <li className="userinfo">
            <img
              src={userid}
              alt="loading..."
              style={{ width: "20px", height: "22px" }}
            />
            ketan@gmail.com
          </li>
          <button className="logoutbtn">
            <img
              src={logout}
              alt="loading..."
              style={{ width: "20px", height: "20px", marginTop: "-0.2rem" }}
            />{" "}
            Logout
          </button>
        </ul>
      </div>
      {/* <div className="dropdown show">
        <button
          className="btn dropdown-toggle user-icon"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <ManageAccounts/>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item">
            <span className="dropmenu-icon">
              <img src="#" alt="" style={{width: "19px"}} />
            </span>
            View Profile
          </a>
          <a className="dropdown-item">
            <span className="dropmenu-icon">
              <img
                src="https://investnow.hdfcsec.com/InvestNowCDN/images/settings-icon.svg"
                alt=""
                style={{width: "19px"}}
              />
            </span>
            Set my preferences
          </a>
          <a className="dropdown-item">
            <span className="dropmenu-icon">
              <img
                src="https://investnow.hdfcsec.com/InvestNowCDN/images/logout-icon.svg"
                alt=""
                style={{width: "19px"}}
              />
            </span>
            Logout
          </a>
        </div>
      </div> */}
    </>
  );
};

export default MyProfile;
