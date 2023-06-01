import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RatingSection from "../RatingSection";
import "./shoplist.css";
import Img from "../logo/Img";
import {
  WindowSharp,
  ViewListSharp,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  ZoomInOutlined,
} from "@mui/icons-material";
import Group44 from "../logo/Group44.png";
import image1174 from "../logo/image1174.png";
import axios from "axios";
import { Link } from "react-router-dom";

const ShopList = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getproduct();
  }, [category]);

  const getproduct = async () => {
    try {
      const response = await axios.get(
        category
          ? `https://api-ecommerce-dev.devtomaster.com/v1/product/getProducts?category=${category}`
          : "https://api-ecommerce-dev.devtomaster.com/v1/product/getProducts"
      );

      setProduct(response.data.result.products);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(product);
  // // console.log(pl);
  // console.log(category);

  return (
    <>
      <Header />
      <section>
        <div
          className="shop"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "16rem",
            marginTop: "2rem",
            marginBottom: "7rem",
          }}
        >
          <div className="container" style={{ width: "100%" }}>
            <div className="row" style={{ marginLeft: "3rem" }}>
              <div
                className="col-md-6"
                // style={{ justifyContent: "center", textAlign: "center" }}
              >
                <h2 className="Gridtag">Shop List</h2>
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
                    . Shop List
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Ecommerce */}
      <section>
        <div
          className="container"
          style={{ textAlign: "center", marginBottom: "7rem", width: "100%" }}
        >
          <div className="row" style={{ width: "95%" }}>
            <div className="col" style={{ width: "40%" }}>
              <h5
                style={{
                  color: "#151875",
                  fontSize: "22px",
                  marginLeft: "6.6rem",
                }}
              >
                Ecommerce Acceories & Fashion item{" "}
              </h5>
              <p style={{ color: "#8A8FB9", marginRight: "1.5rem" }}>
                About 9,620 results (0.62 seconds)
              </p>
            </div>
            <div
              className="col"
              style={{ display: "flex", marginTop: "1.2rem", width: "100%" }}
            >
              Per Page:
              <input
                type="text"
                className="form-control"
                style={{
                  width: "15%",
                  height: "1.8rem",
                  borderRadius: "1px",
                  margin: "0 10px",
                }}
              />
              Sort By:
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="form-select"
                aria-label="Default select example"
                style={{
                  borderColor: "#bdbdd8",
                  width: "19%",
                  height: "1.8rem",
                  borderRadius: "1px",
                  fontSize: "12px",
                  margin: "0 10px",
                }}
              >
                <option defaultValue="Furniture">Best Match</option>
                <option value="Furniture">Furniture</option>
                <option value="Gadgets">Gadgets</option>
                <option value="Bags">Bags</option>
              </select>
              View:
              <a href="/Grid">
                <WindowSharp
                  style={{ color: "151875", height: "20px", marginTop: "1px" }}
                />
              </a>
              <a href="/ShopList">
                <ViewListSharp style={{ color: "151875" }} />
              </a>
              <input
                type="text"
                className="form-control"
                style={{
                  borderColor: "#bdbdd8",
                  width: "20%",
                  height: "1.8rem",
                  borderRadius: "1px",
                  margin: "0 10px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section3-Cards */}
      <section>
        <div className="cards container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center", gap: "3rem" }}
          >
            {product.map((pl) => (
              <Link
                to={`/Product/${pl._id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card col-lg-8"
                  style={{ width: "80%", marginLeft: "5rem", height: "100%" }}
                >
                  <div className="row ">
                    <div
                      className="col-md-4"
                      style={{ display: "flex", justifuyContent: "center" }}
                    >
                      {/* Maping-Image */}
                      {pl.images.map((img) => (
                        <img
                          className="img"
                          src={img.img}
                          alt="loading.."
                        ></img>
                      ))}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{pl.productName}</h5>
                        <img
                          src={Group44}
                          className="more-dots"
                          alt="loading.."
                        ></img>
                      </div>
                      <div className="text-muted">
                        <p className="price26">${pl.price}</p>
                        <p className="price52">$52.00</p>
                        <div className="brandrating">
                          <RatingSection rating="4" />
                        </div>
                      </div>
                      <div>
                        <h1 className="card-description">{pl.description}</h1>
                        <div className="card-smallImg">
                          <ShoppingCartOutlined />
                          <FavoriteBorderOutlined />
                          <ZoomInOutlined />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Section4-Tag */}
      <section>
        <div className="SLcontainer">
          <img className="SLtag" src={image1174} alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShopList;
