import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/US_3P_TheFirstLady_Showtime/696f3927-c01c-4fc8-a1f5-81f0c7e7e8fc._UR3000,600_SX3000_FMwebp_.jpeg"
          alt=""
        />

        <div className="checkout__title">
          <h2>Your shopping Basket</h2>
          <FlipMove
            staggerDelayBy={25}
            appearAnimation="accordionVertical"
            enterAnimation="accordionVertical"
            leaveAnimation="accordionVertical"
            duration={95}
            easing="ease-in-out"
            typeName="ul"
          >
            {basket.map((item) => (
              <li key={item.id}>
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              </li>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
