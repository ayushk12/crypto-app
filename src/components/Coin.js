import React from "react";
import CoinItem from "./CoinItem";

const Coin = (props) => {
  console.log("setaa", props?.coins);
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p>Coin</p>
          <p>Price </p>
          <p>24h</p>
          <p>volume</p>
          <p>mkt Cap </p>
        </div>
        {props.coins.map((coins) => {
          return <CoinItem coins={coins} key={coins?.id} />;
        })}
      </div>
    </div>
  );
};

export default Coin;
