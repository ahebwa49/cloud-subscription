import React, { useState } from "react";
import "./Confirmation.scss";

const Confirmation = () => {
  const [email, setEmail] = useState("");

  const onEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  return (
    <div className="Confirmation">
      <h3>Confirmation</h3>
      <div className="ConfirmationPrice">Price per GB:</div>
      <div className="ConfirmationTotalPrice">Total price:</div>
      <form className="ConfirmationForm">
        <div className="ConfirmationFormGroup">
          <label htmlFor="email" className="ConfirmationFormGroup__label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            required
            value={email}
            onChange={onEmailChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Confirmation;
