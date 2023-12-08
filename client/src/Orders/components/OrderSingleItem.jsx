import React, { Fragment, useState } from 'react';
import Modal from '../../shared/components/Modals/Modal';
import DeleteWarning from '../../shared/components/DeleteWarning/DeleteWarning';
import axios from '../../axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stripe from 'react-stripe-checkout';

const OrderSingleItem = (props) => {
  const [showWarning, setShowWarning] = useState(false);

  let startDate = new Date(props.startDate).toLocaleDateString('de-DE');
  let endDate = new Date(props.endDate).toLocaleDateString('de-DE');

  let totalPrice;
  if (props.totalPrice) {
    totalPrice = props.totalPrice.toFixed(2);
  }

  const showDeleteWarning = () => {
    setShowWarning(true);
  };

  const hideDeleteWarning = () => {
    setShowWarning(false);
  };

  const handleToken = async (amount, token) => {
    try {
      const body = {
        email: token.email,
        source: token.id,
        amount: amount,
      };
      await axios.post('/stripe', body);
      await props.onPayNowHandler();
      await props.sendInvoiceEmail();
      toast.success('Payment Successfully Done');
    } catch (error) {
      toast.error('Payment Failed please try again');
      console.log(error.message);
    }
  };

  const tokenHandler = async (token) => {
    handleToken(totalPrice * 100, token);
  };

  return (
    <Fragment>
      {showWarning && (
        <Modal removeModal={hideDeleteWarning}>
          <DeleteWarning
            cancel={hideDeleteWarning}
            delete={props.onDeleteOrder}
          />
        </Modal>
      )}
      <div className='order-card'>
        <div className='item-rental'>
          <p className='name'>
            {props.name}
            <span> {props.model}</span>
          </p>
          <img src={props.image} alt='rental' />
        </div>
        <div className='main-order-wrapper'>
          <p className='total-price'>
            Your price:<span>{totalPrice}</span>$
          </p>
          <p className='full-name'>
            {props.firstName}
            <span> {props.lastName}</span>
          </p>
          <div className='order-info'>
            <p>
              Rent dates from {startDate} <span>to {endDate}</span>
            </p>
            <p>For total of {props.totalDays} days</p>
          </div>
          {!props.isPayNow ? (
            <p className='off-message'>Pay now and get 10% off </p>
          ) : (
            <p className='off-message'>Proceed to checkout </p>
          )}
          <div className='buttons'>
            {!props.isPayNow ? (
              <Fragment>
                {/* <p onClick={props.onPayNowHandler} className="button-action"> */}
                <Stripe
                  stripeKey='pk_test_51MButaKxBMJbdAZArgRSLCR7lu19N6WN0g2hngQA6e1cnLlVUvYdbDzVIMG8MPHO5YGLEBcDff8m1fkQSr7ITjCs00Zfnrumtz'
                  token={tokenHandler}
                >
                  <p className='button-action'>Pay Now</p>
                </Stripe>
                {/* <p onClick={props.onInvoicePdf} className="button-action">
                  Pay Later
                </p> */}
              </Fragment>
            ) : (
              <Fragment>
                <p className='button-action'>Already Paid</p>
                {/* <p onClick={props.sendInvoiceEmail} className="button-action">
                  Checkout
                </p> */}
              </Fragment>
            )}
            <p onClick={showDeleteWarning} className='button-action'>
              Delete
            </p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default OrderSingleItem;
