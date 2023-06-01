import React from 'react';
import "./blogpage.css";
import Img from "../logo/Img";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pen from "../logo/Pen.png";
import Calndr from "../logo/Calndr.png";
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
import image1174 from "../logo/image1174.png";


const BlogPage = () => {
    return (
      <>
        <Header />
        {/* Section1-BlogPae*/}
        <section>
          <div
            className="BlogPage"
            style={{
              backgroundImage: `url(${Img.Rectangle115})`,
            }}
          >
            <div className="container" style={{width:"100%"}}>
              <div className="row" style={{marginLeft:"3rem"}}>
                <div className="col-md-6">
                  <h2 className="Producttag">Blog Page</h2>
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
                      . Blog Page
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
            <div className="Child container">
              <div className="Child-Sec1">
                <div className="Child-Sec1-img"></div>
                <ul className="Child-Sec1-Ul">
                  <img src={Pen} alt="loading.."></img>
                  <li className="Child-Sec1-li-sa"> Surf Auxion</li>
                  <img src={Calndr} alt="loading.."></img>
                  <li className="Child-Sec1-li-date">Aug 09 2020</li>
                </ul>
                <div className="Child-Sec1-h2">
                  <h2 className="Sec1-h2">
                    Mauris at orci non vulputate diam tincidunt nec.
                  </h2>
                  <p className="Sec1-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                    facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                    malesuada vitae ultrices in in neque, porta dignissim.
                    Adipiscing purus, cursus vulputate id id dictum at.
                  </p>
                  <p className='readmore'>Read More</p>
                </div>
                <div className='Child-Sec1-img2'></div>
                <ul className="Child-Sec1-Ul">
                  <img src={Pen} alt="loading.."></img>
                  <li className="Child-Sec1-li-sa"> Surf Auxion</li>
                  <img src={Calndr} alt="loading.."></img>
                  <li className="Child-Sec1-li-date">Aug 09 2020</li>
                </ul>
                <div className="Child-Sec1-h2">
                  <h2 className="Sec1-h2">
                  Aenean vitae in aliquam ultrices lectus. Etiam.</h2>
                  <p className="Sec1-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                    facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                    malesuada vitae ultrices in in neque, porta dignissim.
                    Adipiscing purus, cursus vulputate id id dictum at.
                  </p>
                  <p className='readmore'>Read More</p>
                </div>
                <div className='Child-Sec1-img3'></div>
                <ul className="Child-Sec1-Ul">
                  <img src={Pen} alt="loading.."></img>
                  <li className="Child-Sec1-li-sa"> Surf Auxion</li>
                  <img src={Calndr} alt="loading.."></img>
                  <li className="Child-Sec1-li-date">Aug 09 2020</li>
                </ul>
                <div className="Child-Sec1-h2">
                  <h2 className="Sec1-h2">
                  Sit nam congue feugiat nisl, mauris amet nisi.</h2>
                  <p className="Sec1-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                    facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                    malesuada vitae ultrices in in neque, porta dignissim.
                    Adipiscing purus, cursus vulputate id id dictum at.
                  </p>
                  <p className='readmore'>Read More</p>
                </div>
                <div className='child-sec1-buttons'>
                <button type="button" className="child-btn btn-light">1</button>
                <button type="button" className="childs-btn btn-light">2</button>
                <button type="button" className="childs-btn btn-light">3</button>
                <button type="button" className="childs-btn btn-light">4</button>
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
        {/* Section3-Tag */}
        <section>
          <div className="BPcontainer">
            <img className="BPtag" src={image1174} alt="loading.."></img>
          </div>
        </section>
        <Footer />
      </>
    );
  };


  export default BlogPage;