import React, { useEffect, useState } from "react";
import "./my-bag.css";
import BagShopItem from "../../components/bagShopItem/BagShopItem";
export default function MyBag({ games, reference }) {

  const [total, setTotal] = useState(0);

  const handleTotalPayment = ()=>{
   return games.map(game=> game.price * (1 - game.discount))
    .reduce((acc, curr)=> acc + curr, 0).toFixed(2)
  }

useEffect(()=>{
  setTotal(handleTotalPayment())
}, [games]);

  return (
    <section ref={reference} id="bag" className="bag">
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>My Bag</h1>
        </div>

        {games.length === 0 ? (
          <h2>Your Bag Is Empty</h2>
        ) : (
          <>
            <div className="row">
              <div className="table-responsive">
                <table className="shopBagTable table table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Preview</th>
                      <th scope="col">Game</th>
                      <th scope="col">Price</th>
                      <th scope="col">Discount</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {games.map((game, index) => (
                      <BagShopItem game={game} index={index} key={index} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row d-flex justify-content-between mt-5">
              <div className="col-lg-2 d-flex align-items-center">
                <p className="itemCount">Total Items: {games.length} </p>
              </div>
              {/* //============================================================== */}
              <div className="col-lg-10 d-flex justify-content-end">
                <div className="payment">
                  Total: ${total}
                  <a href="#">Check out <i className="bi bi-wallet-fill"></i> </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
