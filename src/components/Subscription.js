import React, { useState } from "react";
import "../styles/Subscription.scss";

const Subscription = ({
  onDurationValueChange,
  onStorageValueChange,
  onUpfrontPaymentValueChange,
  plans,
  duration,
  storage,
  upfrontPayment,
}) => {
  const storagePlans = [5, 10, 50];
  return (
    <div className="Subscription">
      <h4>Subscription Parameters</h4>
      <form className="SubscriptionForm">
        <div className="SubscriptionFormGroup">
          <label htmlFor="duration" className="SubscriptionFormGroup__label">
            Duration:
          </label>
          <br />
          {plans.map((plan, index) => (
            <div key={index}>
              <input
                key={index}
                required
                type="radio"
                name="duration"
                value={plan.duration_months}
                onChange={(e) => onDurationValueChange(e, plan)}
                checked={duration === plan.duration_months}
              />
              <span>
                {plan.duration_months} months, price usd per gb:{" "}
                {plan.price_usd_per_gb}
              </span>
              <br />
            </div>
          ))}
        </div>
        <div className="SubscriptionFormGroup">
          <label htmlFor="storage" className="SubscriptionFormGroup__label">
            Amount of gigabytes in a cloud:
          </label>
          <br />
          {storagePlans.map((plan, index) => (
            <div key={index}>
              <input
                key={index}
                type="radio"
                name="storage"
                value={plan}
                required
                onChange={(e) => onStorageValueChange(e, plan)}
                checked={storage === plan}
              />
              <span>{plan} GB</span>
              <br />
            </div>
          ))}
        </div>
        <div className="SubscriptionFormGroup">
          <label
            htmlFor="upfrontPayment"
            className="SubscriptionFormGroup__label"
          >
            Upfront payment:
          </label>
          <input
            type="radio"
            name="upfrontPayment"
            required
            value="No"
            onChange={(e) => onUpfrontPaymentValueChange(e)}
            checked={upfrontPayment === "No"}
          />{" "}
          No
          <input
            type="radio"
            name="upfrontPayment"
            value="Yes"
            required
            onChange={(e) => onUpfrontPaymentValueChange(e)}
            checked={upfrontPayment === "Yes"}
          />{" "}
          Yes
        </div>
      </form>
    </div>
  );
};
export default Subscription;
