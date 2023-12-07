import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const handleToken = async (amount, token) => {
    try {
      console.log(amount);
      console.log(token);
      const body = {
        email: token.email,
        source: token.id,
        amount: amount,
      };
      const data = await axios.post("/stripe", body);
      toast.success("Payment Successfully Done");
    } catch (error) {
      toast.error("Payment Failed please try again");
      console.log(error.message);
    }
  };

  const tokenHandler = (token) => {
    handleToken(1000, token);
  };

  return (
    <div>
      <div>Hello</div>
      <Stripe
        stripeKey="pk_test_51MButaKxBMJbdAZArgRSLCR7lu19N6WN0g2hngQA6e1cnLlVUvYdbDzVIMG8MPHO5YGLEBcDff8m1fkQSr7ITjCs00Zfnrumtz"
        token={tokenHandler}
      />
      <ToastContainer />
    </div>
  );
};

export default Checkout;
