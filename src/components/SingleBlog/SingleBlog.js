import React from "react";
import Img from "../logo/Img";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./singleblog.css";
import Rectangle149 from "../logo/Rectangle149.png";
import Pen from "../logo/Pen.png";
import Calndr from "../logo/Calndr.png";
import Group92 from "../logo/Group92.png";
import Group140 from "../logo/Group140.png";
import Img1 from "../logo/Img1.png";
import Img2 from "../logo/Img2.png";
import Img3 from "../logo/Img3.png";
import Img4 from "../logo/Img4.png";
import RecentPost1 from "../logo/RecentPost1.png";
import RecentPost2 from "../logo/RecentPost2.png";
import RecentPost3 from "../logo/RecentPost3.png";
import RecentPost4 from "../logo/RecentPost4.png";
import SalePost1 from "../logo/SalePost1.png";
import SalePost2 from "../logo/SalePost2.png";
import SalePost3 from "../logo/SalePost3.png";
import Group208 from "../logo/Group208.png";
import Group207 from "../logo/Group207.png";
import Group206 from "../logo/Group206.png";
import Group198 from "../logo/Group198.png";
import Follow from "../logo/Follow.png";
import PrevNext from "../logo/PrevNext.png";
import cardImg1 from "../logo/cardImg1.png";
import cardImg2 from "../logo/cardImg2.png";
import image1174 from "../logo/image1174.png";
import RatingSection from "../RatingSection";

const SingleBlog = () => {
  return (
    <>
      <Header />
      {/* Section1-Single Blog*/}
      <section>
        <div
          className="SingleBlog"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{width:"100%"}}>
            <div className="row" style={{marginLeft:"3rem"}}>
              <div className="col-md-6">
                <h2 className="Producttag">Single Blog</h2>
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
                    . Single Blog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Big */}
      <section>
        <div className="big">
          <div className="child container">
            <div className="child-sec1">
              <div className="child-sec1-img"></div>
              <ul className="child-sec1-ul">
                <img src={Pen} alt="loading.."></img>
                <li className="child-sec1-li-sa"> Surf Auxion</li>
                <img src={Calndr} alt="loading.."></img>
                <li className="child-sec1-li-date">Aug 09 2020</li>
              </ul>
              <div className="child-sec1-h2">
                <h2 className="sec1-h2">
                  Mauris at orci non vulputate diam tincidunt nec.
                </h2>
                <p className="sec1-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                  malesuada vitae ultrices in in neque, porta dignissim.
                  Adipiscing purus, cursus vulputate id id dictum at.
                </p>
              </div>
              <div className="child-sec1-paragraph">
                <p className="sec1-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc.
                </p>
              </div>
              <div className="child-sec1-notes">
                <img src={Rectangle149} className="notes-line" alt="loading.."></img>
                <p className="sec1-notes">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Commodo dictum sapien,
                  amet, consequat toamk risusu”
                </p>
              </div>
              <div className="child-sec1-vdo">
                <div>
                  <img className="sec1-vdo-vdo1" src={Group92} alt="loading.."></img>
                </div>
                <div>
                  <img className="sec1-vdo-vdo1" src={Group140} alt="loading.."></img>
                </div>
              </div>
              <div className="child-sec1-paragraph">
                <p className="sec1-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc.
                </p>
              </div>
              <div className="child-sec1-card row">
                <div className="Imgs-sec-card col-sm-3">
                  <img src={Img1} className="card-img-top" alt="loading.."/>
                  <h4 className="img-heading">Quam Sed</h4>
                  <div style={{ display: "flex"}}>
                  <p className="sec1-price">$32.00</p>
                    <p className="sec1-pricecut">$56.00</p>
                    <p className="sec1-star">
                    <RatingSection rating="4"/></p>
                  </div>
                </div>
                <div className="Imgs-sec-card col-sm-3">
                  <img src={Img2} className="card-img-top" alt="..." />
                  <h4 className="img-heading">Tristique sed</h4>
                  <div style={{ display: "flex"}}>
                    <p className="sec1-price">$32.00</p>
                    <p className="sec1-pricecut">$56.00</p>
                    <p className="sec1-star">
                    <RatingSection rating="4"/></p>
                  </div>
                </div>
                <div className="Imgs-sec-card col-sm-3">
                  <img src={Img3} className="card-img-top" alt="..." />
                  <h4 className="img-heading">A etiam</h4>
                  <div style={{ display: "flex" }}>
                  <p className="sec1-price">$32.00</p>
                    <p className="sec1-pricecut">$56.00</p>
                    <p className="sec1-star">
                    <RatingSection rating="4"/></p>
                  </div>
                </div>
                <div className="Imgs-sec-card col-sm-3">
                  <img src={Img4} className="card-img-top" alt="..." />
                  <h4 className="img-heading">Mi nisi</h4>
                  <div style={{ display: "flex", width:"100%" }}>
                  <p className="sec1-price">$32.00</p>
                    <p className="sec1-pricecut">$56.00</p>
                    <p className="sec1-star">
                    <RatingSection rating="4"/></p>
                  </div>
                </div>
              </div>
              <div className="child-sec1-paragraph">
                <p className="sec1-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc.
                </p>
              </div>
              <div className="child-sec1-paragraph">
                <p className="sec1-paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                  dapibus est, nunc, montes, lacus consequat integer viverra.
                  Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae
                  ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Velit dapibus est, nunc, montes, lacus
                  consequat integer viverra. Sit morbi etiam quam rhoncus. Velit
                  in arcu platea donec vitae ante posuere malesuada.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Velit dapibus
                  est, nunc.
                </p>
              </div>
              <div className="child-sec1-Follow">
                <img src={Follow} alt="loading.."></img>
              </div>
              <div className="child-sec2-prenext">
                <img src={PrevNext} className="prevnext" alt="loading.."></img>
              </div>
              <div
                className="child-sec1-cardimg"
                style={{ width: "100%", marginTop: "7rem", display: "" }}
              >
                <div
                  className="child-Sec1-card mb-3"
                  style={{ width: "80%", height: "100%" }}
                >
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={cardImg1}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="child-sec1-card-body">
                        <h5 className="SB-card-title">
                          Sapien ac
                          <p className="card-title-date">Jan 09 2020</p>
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. At in vitae rutrum vulputate consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="child-Sec1-card mb-3"
                  style={{ width: "80%", height: "100%" }}
                >
                  <div className="row g-0">
                    <div className="col-md-3">
                      <img
                        src={cardImg2}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="child-sec1-card-body">
                        <h5 className="SB-card-title">
                          Augue conva{" "}
                          <p className="card-title-datee">Aug 18 2020</p>
                        </h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. At in vitae rutrum vulputate consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="child-sec1-form container"
                style={{ marginTop: "5rem" }}
              >
                <div className="row" style={{width:"100%"}}>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="child-sec1-form-control"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="child-sec1-form-control"
                      placeholder="Your Email*"
                    />
                  </div>
                  <br />
                  <div className="col-lg-6">
                    <textarea className="child-Sec1-form-control" placeholder="Write your comment*" id="floatingTextarea"></textarea>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label">
                    Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>
                  <div className="child-sec1-btn">
                  <button type="button" className="Child-shopbtn btn">Continue Shoping</button>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Child-Sec2-Right */}
            <div className="child-sec2">
              <div className="child-sec2-search">
                <h2 className="sec2-headings">Search</h2>
                <div className="sec2-searchbox" style={{ display: "flex" }}>
                  <input
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Search for post"
                  ></input>
                </div>
              </div>
              <div className="child-sec2-categories">
                <h2 className="sec2-headings">Categories</h2>
                <div className="sec2-categories-btn">
                <button type="button" className="Pinkchild-shpbtn btn">Hobbies(14)</button>
                  <button className="child-shpbtn btn" type="button">
                    Women(21)
                  </button>
                  <button className="child-shpbtn btn" type="button">
                    Women(21)
                  </button>
                  <button className="child-shpbtn btn" type="button">
                    Women(21)
                  </button>
                  <button className="child-shpbtn btn" type="button">
                    Women(21)
                  </button>
                  <button className="child-shpbtn btn" type="button">
                    Women(21)
                  </button>
                </div>
              </div>
              <div className="child-sec2-RecentPost col-md">
                <h2 className="sec2-headings">Recent Post</h2>
                <img src={RecentPost1} className="Post-img" alt="loading.."/>
                <img src={RecentPost2} className="Post-img" alt="loading.."/>
                <img src={RecentPost3} className="Post-img" alt="loading.."/>
                <img src={RecentPost4} className="Post-img" alt="loading.."/>
              </div>
              <div className="child-sec2-SaleProduct col-md">
                <h2 className="sec2-headings">Sale Product</h2>
                <img src={SalePost1} className="Post-img" alt="loading.."/>
                <img src={SalePost2} className="Post-img" alt="loading.."/>
                <img src={SalePost3} className="Post-img" alt="loading.."/>
              </div>
              <div className="child-sec2-OfferProduct">
                <h2 className="sec2-headings">Offer Product</h2>
                <img src={Group208} className="Offer-img" alt="loading.."></img>
                <img src={Group207} className="Offer-img" alt="loading.."></img>
                <img src={Group206} className="Offer-img" alt="loading.."></img>
                <img src={Group198} className="Offer-img" alt="loading.."></img>
              </div>
              <div className="child-sec2-follow">
                <h2 className="sec2-headings">Follow</h2>
                <img src={Follow} className="follow" alt="loading.."></img>
              </div>
              <div className="child-sec2-tag">
                <h2 className="sec2-headings">Tags</h2>
                <div className="sec2-tag">
                  <p className="tags-list">General</p>
                  <p className="tags-list" style={{color:" #FB2E86"}}>Atsanil</p>
                  <p className="tags-list">Insas.</p>
                </div>
                <div className="sec2-tag">
                  <p className="tags-list">Bibsaas</p>
                  <p className="tags-list">Nulla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section4-Tag */}
      <section>
        <div className="SBcontainer">
          <img className="SBtag" src={image1174} alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SingleBlog;
