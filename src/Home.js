import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>  
    <Header/>
    <div className="home">
      
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/7170O9tC6dL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/71HOERLKYqL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            id="231243456"
            title="HP w100 480P 30 FPS Digital Webcam with Built-in Mic, Plug and Play Setup, Wide-Angle View for Video Calling"
            price={499}
            image="https://m.media-amazon.com/images/I/61HfJn05shL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
          />
         
        </div>
        <div className="home__row">
          <Product
           id="23123564"
           title="Murano Apex 27 LTR Laptop Backpack for 15.6 inch Laptop and Polyester Water Resistance Backpack for Men"
           price={300}
           image="https://m.media-amazon.com/images/I/71miPegpaOL._AC_UL480_FMwebp_QL65_.jpg"
           rating={5}
          />
          <Product 
          id="45657892"
          title="Acer HA220Q 21.5 Inch (54.61 Cm) Full HD IPS Ultra Slim (6.6Mm Thick) LCD Monitor with LED Back Light Technology I Frameless Design I AMD Free Sync I Eye Care Features I"
          price={8299}
          image="https://m.media-amazon.com/images/I/71wRe7xkcSL._AC_UY327_FMwebp_QL65_.jpg"
          rating={4}
          />
          <Product 
          id="67234512"
          title="London Hills 
          Printed Men Round Neck T-Shirt (Pack of 2)"
          price={349}
          image="https://m.media-amazon.com/images/I/8147+fzvxcL._AC_UL480_FMwebp_QL65_.jpg"
          rating={3}
          />
          {/*Product */}
          {/*Product */}
        </div>
        <div className="home__row">
          <Product 
          id="38764590"
          title="Reebok Mens Ultra Fit M Sneaker"
          price={2419}
          image="https://m.media-amazon.com/images/I/71uiND7OIwL._UX625_.jpg"
          rating={5}
          />
          {/*Product */}
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Home;
