import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

import { selectUser } from "../../features/userSlice";
import firestore from "../../firebase";

import "./PlansScreen.css";

function PlansScreen() {
  //   const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  const products = {
    1: {
      name: "Premium",
      description: "4K + HDR",
      prices: {},
    },
    2: {
      name: "Standard",
      description: "1080p",
      prices: {},
    },
    3: {
      name: "Basic",
      description: "720p",
      prices: {},
    },
  };

  //   useEffect(() => {
  //     firestore
  //       .collection("products")
  //       .where("active", "==", true)
  //       .get()
  //       .then((querySnapshot) => {
  //         const products = {};

  //         querySnapshot.forEach(async (productDoc) => {
  //           products[productDoc.id] = productDoc.data();
  //           const priceSnap = await productDoc.ref.collection("prices").get();

  //           priceSnap.docs.forEach((price) => {
  //             products[productDoc.id].prices = {
  //               priceId: price.id,
  //               priceData: price.data(),
  //             };
  //           });
  //         });

  //         setProducts(products);
  //       });
  //   }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await firestore
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe("secret_key");
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plansScreen__plan">
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
