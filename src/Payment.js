import React, { useState } from "react";
import "./Payment.scss";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("2021-05-31");
  const [securityCode, setSecurityCode] = useState("");

  const onCardNumberChange = (e) => {
    console.log(e.target.value);
    setCardNumber(e.target.value);
  };

  const onExpirationDateChange = (e) => {
    console.log(e.target.value);
    setExpirationDate(e.target.value);
  };

  const onSecurityCodeChange = (e) => {
    console.log(e.target.value);
    setSecurityCode(e.target.value);
  };
  return (
    <div className="Payment">
      <h3>Payment Data </h3>
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
            onChange={onCardNumberChange}
          />
        </div>
        <div className="PaymentFormGroup">
          <label
            htmlFor="expirationDate"
            className="PaymentFormGroup__label"
          >
            Expiration Date
          </label>
          <input
            type="date"
            required
            name="expirationDate"
            placeholder="Expiration Date"
            value={expirationDate}
            onChange={onExpirationDateChange}
          />
        </div>
        <div className="PaymentFormGroup">
          <label
            htmlFor="securityCode"
            className="PaymentFormGroup__label"
          >
            Security Code
          </label>
          <input
            type="text"
            name="securityCode"
            placeholder="Security Code"
            required
            value={securityCode}
            onChange={onSecurityCodeChange}
          />
        </div>
      </form>
    </div>
  );
};
export default Payment;
