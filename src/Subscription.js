import React, { useState } from "react";
import "./Subscription.scss";

const Subscription = () => {
  const [duration, setDuration] = useState("3");
  const [storage, setStorage] = useState("5");
  const [upfrontPayment, setUpfrontPayment] = useState("No");
  const [step, setStep] = useState(1);

  const onDurationValueChange = (e) => {
    console.log(e.target.value);
    setDuration(e.target.value);
  };

  const onStorageValueChange = (e) => {
    console.log(e.target.value);
    setStorage(e.target.value);
  };

  const onUpfrontPaymentValueChange = (e) => {
    console.log(e.target.value);
    setUpfrontPayment(e.target.value);
  };

  return (
    <div className="Subscription">
      <h3>Subscription Parameters</h3>
      <form className="SubscriptionForm">
        <div className="SubscriptionFormGroup">
          <label htmlFor="duration" className="SubscriptionFormGroup__label">
            Duration
          </label>
          <input
            type="radio"
            name="duration"
            value="3"
            onChange={onDurationValueChange}
            checked={duration === "3"}
          />{" "}
          3 months
          <input
            type="radio"
            name="duration"
            value="6"
            onChange={onDurationValueChange}
            checked={duration === "6"}
          />{" "}
          6 months
          <input
            type="radio"
            name="duration"
            value="12"
            onChange={onDurationValueChange}
            checked={duration === "12"}
          />{" "}
          12 months
        </div>
        <div className="SubscriptionFormGroup">
          <label htmlFor="storage" className="SubscriptionFormGroup__label">
            Amount of gigabytes in a cloud
          </label>
          <input
            type="radio"
            name="storage"
            value="5"
            onChange={onStorageValueChange}
            checked={storage === "5"}
          />{" "}
          5 GB
          <input
            type="radio"
            name="storage"
            value="10"
            onChange={onStorageValueChange}
            checked={storage === "10"}
          />{" "}
          10 GB
          <input
            type="radio"
            name="storage"
            value="50"
            onChange={onStorageValueChange}
            checked={storage === "50"}
          />{" "}
          50 GB
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
            value="No"
            onChange={onUpfrontPaymentValueChange}
            checked={upfrontPayment === "No"}
          />{" "}
          No
          <input
            type="radio"
            name="upfrontPayment"
            value="Yes"
            onChange={onUpfrontPaymentValueChange}
            checked={upfrontPayment === "Yes"}
          />{" "}
          Yes
        </div>
      </form>
    </div>
  );
};
export default Subscription;
