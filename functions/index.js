const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Kq01iG2DXBcN51GlmjNCV1PqGWwI9YLNVr6VFPebA8jzYS2BHiUDn2R60L4Vk4lBAt0SDaTv7cGfiEQlqweVhAm006PdjAYsX"
);

// app config
const app = express();
// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// api routes
app.get("/", (request, response) => response.status(200).send("hello world!"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this purchase...", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-9d4ac/us-central1/api
