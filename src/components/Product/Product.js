import React from "react";
import axios from "axios";
import "./product.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Img from "../logo/Img";
import Bag1 from "../logo/Bag1.png";
import Bag2 from "../logo/Bag2.png";
import Bag3 from "../logo/Bag3.png";
import Group236 from "../logo/Group236.png";
import Model1 from "../logo/Model1.png";
import Model2 from "../logo/Model2.png";
import Model3 from "../logo/Model3.png";
import Model4 from "../logo/Model4.png";
import image1174 from "../logo/image1174.png";
import {
  FavoriteBorder,
  Facebook,
  Instagram,
  Twitter,
  ArrowForward,
} from "@mui/icons-material";
import RatingSection from "../RatingSection";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Product = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
 

  useEffect(() => {
    getproduct();
  }, []);
  // console.log(id);

  const getproduct = async () => {
    try {
      const response = await axios.get(
        `https://api-ecommerce-dev.devtomaster.com/v1/product/getProduct/${id}`
      );
      setProduct(response.data.result.product);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(product);
const accessToken =   (localStorage.getItem('accessToken'));
// console.log(userData._id);
  const handleAddToCart = async () => {
    const productData = {
      cartItems: {
        productId: product._id,
        quantity: 1,
        price: product.price,
        categoryId: product.category._id,
      },
    };
    console.log(productData, "PD");
    try {
      const res = await axios.post(
        "https://api-ecommerce-dev.devtomaster.com/v1/cart/addToCart",(productData),
      {headers: {
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      }},);
      console.log(res);
      alert("Product added successful!");
    } catch (err) {
      // setLoading(false);
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      {/* Section1-Product */}
      <section>
        <div
          className="ProductDetails"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{ width: "100%" }}>
            <div className="row" style={{ marginLeft: "3rem" }}>
              <div className="col-md-6">
                <h2 className="Producttag">Product Details</h2>
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
                    . Product Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Playwood */}
      <section>
        <div className="container" style={{ height: "100%" }}>
          <div
            className="Palywood row"
            style={{
              backgroundImage: `url(${Img.Rectangle132})`,
              width: "75%",
              height: "95%",
              marginLeft: "6rem",
            }}
          >
            <div
              className="Pcard col-md-4"
              style={{ width: "8.3rem", height: "100%" }}
            >
              <div className="PBcard-body">
                <img
                  src={Bag1}
                  alt="loading.."
                  className="PBcard-img-top"
                  style={{ width: "8rem" }}
                />
              </div>
              <div className="PBcard-body">
                <img
                  src={Bag2}
                  alt="loading.."
                  className="PBcard-img-top"
                  style={{ width: "8rem" }}
                />
              </div>
              <div className="PBcard-body">
                <img
                  src={Bag3}
                  alt="loading.."
                  className="PBcard-img-top"
                  style={{ width: "8rem" }}
                />
              </div>
            </div>
            <div
              className="Pcard col-md-4"
              style={{
                width: "18.5rem",
                height: "28rem",
              }}
            >
              <div
                className="Pcard-body"
                style={{ marginTop: "0.59rem" }}
              ></div>
              {/* Maping img */}
              {product?.images?.map((img) => (
                <img
                  className="Bcard-img-top"
                  src={img?.img}
                  alt="loading.."
                  style={{ paddingTop: "7rem" }}
                ></img>
              ))}
             
            </div>
            <div
              className="Pcard col-md-4"
              style={{
                width: "26rem",
                height: "100%",
                marginTop: "2rem",
              }}
            >
              <div className="pcard-body">
                <h5 className="Pcard-title">{product.productName}</h5>
                <div style={{ display: "flex" }}>
                  <img
                    src={Group236}
                    alt="loading.."
                    style={{ height: "0.8rem", width: "3.9rem" }}
                  ></img>
                  <p
                    style={{
                      marginTop: "-0.4rem",
                      color: "#151875",
                      fontSize: "14px",
                    }}
                  >
                    (22)
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <p>${product.price}</p>
                  <p
                    style={{
                      textDecoration: "line-through",
                      color: "#FB2E86",
                      margin: "0 10px",
                    }}
                  >$3200
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      color: "#0D134E",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Color
                  </p>
                  <p style={{ color: " #A9ACC6" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris tellus porttitor purus, et volutpat sit.
                  </p>
                </div>
                <div>
                  <button type="button" className="addbtn btn btn-sm" onClick={() => handleAddToCart()}>Add to Cart</button>
                  <button className="addbtnn">
                    <FavoriteBorder style={{ color: "#535399" }} />
                  </button>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <p className="paras">Categories: {product?.category?.catName}</p>      
                  <p className="paras">Tags</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p className="paras">Share</p>
                  <Facebook style={{ margin: "0 10px" }} />
                  <Instagram />
                  <Twitter style={{ margin: "0 10px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section3-Banner */}
      <section>
        <div
          className="product"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: "2rem",
            marginBottom: "7rem",
          }}
        >
          <div className="container">
            <div
              className="types row"
              style={{
                marginLeft: "-3rem",
                marginTop: "2rem",
                marginBottom: "2rem ",
              }}
            >
              <p
                className="topnav col-md-2"
                style={{ textDecoration: "underline" }}
              >
                Description
              </p>
              <p className="topnav col-md-2">Additional Info</p>
              <p className="topnav col-md-2">Reviews</p>
              <p className="topnav col-md-2">Videos</p>
            </div>
            <div className="row" style={{ marginBottom: "2rem" }}>
              <div className="col">
                <h3 className="heading">Various Tempor</h3>
                <p className="detail">
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus
                  dolor ornare faucibus vel sed et eleifend habitasse amet.
                  Montes, mauris varius ac est bibendum. Scelerisque a, risus ac
                  ante. Velit consectetur neque, elit, aliquet. Non varius proin
                  sed urna, egestas consequat laoreet diam tincidunt. Magna eget
                  faucibus cras justo, tortor sed donec tempus. Imperdiet
                  consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
                  in fringilla vulputate nunc nec. Dui, massa viverr .
                </p>
              </div>
            </div>
            <div className="row" style={{ marginBottom: "0rem" }}>
              <div className="col">
                <h3 className="heading"> More details</h3>
                <p className="detail">
                  <ArrowForward style={{ color: "black" }} />
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </p>
                <p className="detail">
                  <ArrowForward style={{ color: "#2F1AC4" }} />
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </p>
                <p className="detail">
                  <ArrowForward style={{ color: "black" }} />
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </p>
                <p className="detail" style={{ marginBottom: "5rem" }}>
                  <ArrowForward style={{ color: "black" }} />
                  Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                  diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                  vulputate nunc nec. Dui, massa viverr .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section4-RelatedProdcut */}
      <section>
        <div
          className="Related"
          style={{
            display: "flex",
            marginBottom: "3rem",
            color: "#1A0B5B",
            justifyContent: "center",
          }}
        >
          <h3
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            Related Product
          </h3>
        </div>
        <div className="container">
          <div
            className="row"
            style={{
              justifyItems: "center",
              justifyContent: "space-evenly",
              marginBottom: "4rem",
            }}
          >
            <div className="Rcard" style={{ width: "18rem" }}>
              <img src={Model1} className="Rcard-img-top" alt="loading.." />
              <div className="Rcard-body">
                <h5 className="Rcard-title">Mens Fashion Wear</h5>
                <RatingSection rating="4" />
              </div>
              <div>
                <p className="Rcard-text">$43.00</p>
              </div>
            </div>
            <div className="Rcard" style={{ width: "18rem" }}>
              <img src={Model2} className="Rcard-img-top" alt="..." />
              <div className="Rcard-body">
                <h5 className="Rcard-title">Women's Fashion</h5>
                <RatingSection rating="5" />
              </div>
              <div>
                <p className="Rcard-text">$67.00</p>
              </div>
            </div>
            <div className="Rcard" style={{ width: "18rem" }}>
              <img src={Model3} className="Rcard-img-top" alt="..." />
              <div className="Rcard-body">
                <h5 className="Rcard-title">Wolx Dummy Fashion</h5>
                <RatingSection rating="4" />
              </div>
              <div>
                <p className="Rcard-text">$67.00</p>
              </div>
            </div>
            <div className="Rcard" style={{ width: "18rem" }}>
              <img src={Model4} className="Rcard-img-top" alt="..." />
              <div className="Rcard-body">
                <h5 className="Rcard-title">Top Wall Digital Clock</h5>
                <RatingSection rating="3" />
              </div>
              <div>
                <p className="Rcard-text">$51.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section5-Banner */}
      <section>
        <div className="PDcontainer col-md">
          <img className="PDtag" src={image1174} alt="loading.."></img>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Product;
