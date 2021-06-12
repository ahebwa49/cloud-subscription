import React from "react";
import "../styles/Payment.scss";
import { calculateTotal } from "../utils/index";

const Payment = ({
  onCardNumberChange,
  onExpirationDateChange,
  onSecurityCodeChange,
  cardNumber,
  expirationDate,
  securityCode,
  selectedPlan,
  upfrontPayment,
  error,
  storage,
}) => {
  let totalPrice = calculateTotal(
    storage,
    selectedPlan.price_usd_per_gb,
    upfrontPayment
  );
  return (
    <div className="Payment">
      <h4>Payment Data </h4>
      <div className="PaymentPlan">
        Subscription Plan: {selectedPlan.duration_months} months,{" "}
        {selectedPlan.price_usd_per_gb}USD per GB
      </div>
      <div className="PaymentTotal">
        Amount of gigabytes in a cloud: {storage}GB
      </div>
      <div className="PaymentTotal">Upfront Payment: {upfrontPayment}</div>
      <div className="PaymentTotal">Total Price: {totalPrice}USD</div>
      <form className="PaymentForm">
        <div className="PaymentFormGroup">
          <label htmlFor="cardNumber" className="PaymentFormGroup__label">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            required
            value={cardNumber}
            onChange={(e) => onCardNumberChange(e)}
          />
        </div>
        <div className="PaymentFormGroup">
          <label htmlFor="expirationDate" className="PaymentFormGroup__label">
            Expiration Date
          </label>
          <input
            type="date"
            required
            name="expirationDate"
            placeholder="Expiration Date"
            value={expirationDate}
            onChange={(e) => onExpirationDateChange(e)}
          />
        </div>
        <div className="PaymentFormGroup">
          <label htmlFor="securityCode" className="PaymentFormGroup__label">
            Security Code
          </label>
          <input
            type="text"
            name="securityCode"
            placeholder="Security Code"
            required
            value={securityCode}
            onChange={(e) => onSecurityCodeChange(e)}
          />
        </div>
      </form>
      {error ? <div className="paymentError">{error}</div> : null}
    </div>
  );
};
export default Payment;
