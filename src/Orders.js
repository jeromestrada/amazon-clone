import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { db, collection, getDoc, query } from "./firebase";
import { doc, getDocs, onSnapshot, orderBy, where } from "firebase/firestore";
import Order from "./Order";

function Orders() {
  //variables
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  // useEffects, kinda like functions
  useEffect(() => {
    console.log("IN ORDERS RIGHT NOW!");
    // (async () => {
    //   if (user) {
    //     console.log("USER EXISTS! and is LOGGED IN!!!");
    //     const docRef = doc(collection(db, "users/" + user.uid + "/orders"));
    //     const docSnap = await getDoc(docRef);
    //     console.log("docSnap is ", docSnap);
    //     // TODO: still can't use the docSnap in setOrders(), find a way to use the retrieved data, not sure if the data is even correct
    //   } else {
    //     setOrders([]);
    //   }
    // })();
    // return () => {
    //   // gets called when the component unmounts;
    // };
  }, [user]);

  // Displayed on the page
  return (
    // returns what to be rendered on screen that uses <Orders/>
    <div className="orders">
      <h1>Your Orders</h1>
      <strong>NOTICE:</strong>
      <p>
        This page is still under development... Thank you for your
        consideration!
      </p>

      <p>Jerom Estrada</p>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
