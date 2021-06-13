import React from "react";
import "../styles/Confirmation.scss";
import { calculateTotal } from "../utils/index";

const Confirmation = ({
  onEmailChange,
  onTermsAndConditionsChange,
  handleFormSubmit,
  email,
  termsAndConditions,
  selectedPlan,
  upfrontPayment,
  storage,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit();
  };

  let totalPrice = calculateTotal(
    storage,
    selectedPlan.price_usd_per_gb,
    upfrontPayment
  );

  return (
    <div className="Confirmation">
      <h4>Confirmation</h4>
      <div className="ConfirmationSummary">
        <span>
          Subscription Plan:{" "}
          <span className="ConfirmationSummaryDuration">
            {selectedPlan.duration_months}
          </span>
          months,
        </span>
        <span className="ConfirmationSummaryPrice">
          {selectedPlan.price_usd_per_gb}
        </span>
        USD per GB
        <br />
        <br />
        <span>
          Amount of gigabytes in a cloud:{" "}
          <span className="ConfirmationSummaryStorage">{storage}</span>GB
        </span>
        <br />
        <br />
        <span>
          Upfront Payment:{" "}
          <span className="ConfirmationSummaryUpfront">{upfrontPayment}</span>
        </span>
        <br />
        <br />
        <span>Total Price: {totalPrice}USD</span>
      </div>
      <form className="ConfirmationForm" onSubmit={handleSubmit}>
        <div className="ConfirmationFormGroup">
          <label htmlFor="email" className="ConfirmationFormGroup__label">
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
            value={email}
            onChange={(e) => onEmailChange(e)}
          />
        </div>
        <div className="ConfirmationFormGroup">
          <input
            type="checkbox"
            name="termsAndConditions"
            required
            checked={termsAndConditions === true}
            value={termsAndConditions}
            onChange={(e) => onTermsAndConditionsChange(e)}
          />
          <label htmlFor="email" className="ConfirmationFormGroup__label">
            Terms and conditions agreement
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Confirmation;
