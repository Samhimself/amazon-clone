const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51I9e5UAPvtkyiY5izvugGID5R7KTowtrK3BAJLlhrXTNPSiiWjHik8IGupBunNne9hv0umsBwFA6kKto2GZBWQ0W00ioaNp8nR"
);

// API

// - App Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received, for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub-unites of currency
    currency: "usd",
  });

  // OK
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//- Listener
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-6ed45/us-central1/api
