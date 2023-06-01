import React, { useEffect } from "react";
import Img from "../logo/Img";
import "./shoppingcart.css";
import Dandi from "../logo/Dandi.png";
import RGreen from "../logo/RGreen.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState } from "react";
import axios from "axios";
import Axios from "../Services/axios";
import { DeleteForeverTwoTone } from "@mui/icons-material";
// import Product from "../Product/Product";

const ShoppingCart = () => {

  // Increament-Decreament Function
  const [data, setData] = useState({
    cartItems:{
      productId:"",
      quantity:"",
      price:"",
      category:"",
    }
  })
  const handleIncrement = async (productId, quantity, price, category) => {
    try{
      data.cartItems.productId=productId;
      data.cartItems.quantity= 1;
      data.cartItems.price=price;
      data.cartItems.category=category;
    
      const increment = await Axios.post("/cart/increaseQuantity",(data),);
      console.log(increment);
      getCartItems();
      }
      catch (error) {
        console.log(error);
      }
  };
  const handleDecrement = async (productId, quantity, price, category) => {
    try{
      data.cartItems.productId=productId;
      data.cartItems.quantity= 1;
      data.cartItems.price=price;
      data.cartItems.category=category;
    
      const decrement = await Axios.post("/cart/decreaseQuantity1",(data),);
      console.log(decrement);
      getCartItems();
      }
      catch (error) {
        console.log(error);
      }

  };

  // View Cart Product Function
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCartItems();
  }, []);
  const accessToken = localStorage.getItem("accessToken");
  const getCartItems = async () => {
    try {
      const items = await axios.get(
        "https://api-ecommerce-dev.devtomaster.com/v1/cart/getUserCart",
        {
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : "",
          },
        }
      );
      setCart(items.data.cartItems);
      console.log(items);
    } catch (error) {
      console.log(error);
    }
  };

// Delete Product Function
const [itemId, setitemId] = useState({
  productId:"",
});

  const deleteProduct = async (id) =>{
    itemId.productId = id;
    console.log(id);
    try{
      const response = await Axios.post('/cart/deleteItem',({ productId: id }),
      )
      getCartItems();     
      // setitemId(response.productId._id);
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }

  // Clear Cart Function
  const clearCart = async () => {
    try{
      const response = await Axios.post('/cart/clearCart',);
      console.log(response);
      alert("Confirm!");
      getCartItems();
    }
    catch(error){
      console.log(error);
    }
  }
   console.log(accessToken);
  return (
    <>
      <Header />
      {/* Section1-ShoppingCart */}
      <section>
        <div
          className="Account"
          style={{
            backgroundImage: `url(${Img.Rectangle115})`,
          }}
        >
          <div className="container" style={{ width: "100%" }}>
            <div className="row" style={{ marginLeft: "3rem" }}>
              <div className="col-md-6">
                <h2 className="Producttag">Shopping Cart</h2>
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
                    . Shopping Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section2-Cart */}
      <section>
        <div className="Cart">
          <div className="cart container">
            <div className="cart_child_sec1">
              <div className="cart-tags">
                <h2 className="SCarthead1" style={{ width: "100%" }}>
                  Product
                </h2>
                <h2 className="SCarthead2" style={{ width: "100%" }}>
                  Price
                </h2>
                <h2 className="SCarthead3" style={{ width: "100%" }}>
                  Quantity
                </h2>
                <h2 className="SCarthead4" style={{ width: "100%" }}>
                  Total
                </h2>
              </div>
              <br />
              <div className="SCartdiv">
                <div className="Cartgrid1">
                  {cart?.map((product) => (
                    <div className="CartItem">
                      <div className="Cartimg">
                        <img
                          src={product?.productId?.images?.map(
                            (img) => img?.img
                          )}
                          alt="loading.."
                          style={{
                            width: "100%",
                            height: "100%",
                            paddingRight: "10px",
                          }}
                        />
                      </div>
                      <div style={{ width: "100%", height:"80%"}}>
                        <p className="Carttxt1">
                          {product?.productId?.productName}
                        </p>
                        <p className="Carttxt2">Color:Brown</p>
                        <p className="Carttxt3">Size:XL</p>
                      </div>
                      <div style={{ width: "100%",display: "flex",justifyContent: "center",alignItems: "center" }}>
                        <p className="Cartprice">
                          ${product?.productId?.price / 100}
                        </p>
                      </div>
                      <div className="quantity-img-count">
                        <button
                          className="count-buttons"
                          onClick={() => handleDecrement(
                            product?.productId._id,
                            product?.quantity,
                            product?.productId.price,
                            product?.categoryId?._id
                          )}
                          disabled={product?.quantity === 1}
                        >
                          -
                        </button>
                        <span className="counter-span">{product?.quantity}</span>
                        <button
                          className="count-buttons"
                          onClick={ () => 
                            handleIncrement(
                              product?.productId._id,
                              product?.quantity,
                              product?.productId.price,
                              product?.categoryId?._id
                            )}
                        >
                          +
                        </button>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems:"center",
                          // alignSelf:"center"
                        }}
                      >
                        <div className="Carttotal">${product?.price / 100}</div>
                        <div onClick= { () => deleteProduct(product?.productId?._id)}><DeleteForeverTwoTone /></div>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <br />
              <br />
              <div className="TwoButton">
                <button type="button" className="Updatebtn btn">
                  Update Cart
                </button>
                <button type="button" className="Updatebtn btn" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
              <br />
              <br />
            </div>
            <div className="cart_child_sec2">
              <div className="cart-tags">
                <h2 className="SCarthead5">Cart Totals</h2>
              </div>
              <div className="child_sec2_total">
                <div className="child_sec2_total_totals">
                  <p>Subtotals</p>
                  <p>£219.00</p>
                </div>
                <div child-sec2-total>
                  <img src={Dandi} className="dandi" alt="loading.."></img>
                </div>
                <div className="child_sec2_total_totals">
                  <p>Totals</p>
                  <p>£325.00</p>
                </div>
                <div child-sec2-total>
                  <img src={Dandi} className="dandi" alt="loading.."></img>
                </div>
                <div style={{ display: "flex", marginBottom: "1.5rem" }}>
                  <img src={RGreen} className="RGreen" alt="loading.."></img>
                  <p className="ticktext">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
                <div child-sec2-total>
                  <button type="button" className="Checkoutbtn btn">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
              <div className="calculate">
                <h2 className="cal">Calculate Shopping</h2>
              </div>
              <div className="address">
                <input
                  type="text"
                  id="country"
                  placeholder="Bangladesh"
                  className="country"
                ></input>
                <input
                  type="text"
                  id="country"
                  placeholder="Mirpur Dhaka - 1200"
                  className="country"
                ></input>
                <input
                  type="text"
                  id="country"
                  placeholder="Postal Code"
                  className="country"
                ></input>
                <div cart-child-sec2-total>
                  <button type="button" className="Countinuebtn btn">
                    Calculate Shiping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShoppingCart;
