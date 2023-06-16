import React from "react";
import Header from "./Header";
import  "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Coupons/BAU/coupon_pc_1500x300.gif"
            alt=""
            className="checkout__ad"
          />
          <div>
            <h2 className="checkout__title">
              Your Shopping Basket
            </h2>
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
            {/* BasketItem */}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal/> 
        </div>
      </div>
    </>
  );
}

export default Checkout;
