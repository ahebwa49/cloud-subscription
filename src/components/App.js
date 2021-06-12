import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/App.scss";
import Subscription from "./Subscription";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import { calculateTotal } from "../utils/index";

function App() {
  const [step, setStep] = useState(0);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState({
    duration_months: 12,
    price_usd_per_gb: 2,
  });
  const [error, setError] = useState("");
  const [duration, setDuration] = useState(12);
  const [storage, setStorage] = useState(5);
  const [upfrontPayment, setUpfrontPayment] = useState("No");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [email, setEmail] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const fetchPlans = async () => {
    const response = await axios.get(
      "https://cloud-storage-prices-moberries.herokuapp.com/prices",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status !== 200) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      let plans = response.data.subscription_plans;
      setPlans(plans);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onTermsAndConditionsChange = (e) => {
    setTermsAndConditions(termsAndConditions === false ? true : false);
  };

  const onCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const onExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };

  const onSecurityCodeChange = (e) => {
    setSecurityCode(e.target.value);
  };

  const onDurationValueChange = (e, plan) => {
    setSelectedPlan(plan);
    setDuration(plan.duration_months);
  };

  const onStorageValueChange = (e, capacity) => {
    setStorage(capacity);
  };

  const onUpfrontPaymentValueChange = (e) => {
    setUpfrontPayment(e.target.value);
  };

  const goBack = (step) => {
    setStep(step - 1);
    setError("");
  };

  const checkIfComplete = (step) => {
    if (step === 0) {
      setStep(step + 1);
    }
    if (step === 1) {
      if (!securityCode || !cardNumber || !expirationDate) {
        setError(
          "All fields must be completed inorder to proceed to next step"
        );
      } else {
        setError("");
        setStep(step + 1);
      }
    }
  };

  let totalPrice = calculateTotal(
    storage,
    selectedPlan.price_usd_per_gb,
    upfrontPayment
  );

  const handleFormSubmit = async () => {
    const data = {
      creditCardNumber: cardNumber,
      cardExpirationDate: expirationDate,
      cardSecurityCode: securityCode,
      subscriptionPlan: selectedPlan,
      AmountOfGigaBytesInCloud: storage,
      email,
      totalPrice,
      upfrontPayment,
    };
    const response = await axios.post("https://httpbin.org/post", {
      data,
    });

    if (response.status !== 200) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      console.log("Do something");
    }
  };

  return (
    <div className="App">
      {step === 0 && (
        <Subscription
          plans={plans}
          onDurationValueChange={onDurationValueChange}
          onStorageValueChange={onStorageValueChange}
          onUpfrontPaymentValueChange={onUpfrontPaymentValueChange}
          storage={storage}
          duration={duration}
          upfrontPayment={upfrontPayment}
        />
      )}
      {step === 1 && (
        <Payment
          onCardNumberChange={onCardNumberChange}
          onExpirationDateChange={onExpirationDateChange}
          onSecurityCodeChange={onSecurityCodeChange}
          cardNumber={cardNumber}
          expirationDate={expirationDate}
          securityCode={securityCode}
          selectedPlan={selectedPlan}
          storage={storage}
          upfrontPayment={upfrontPayment}
          error={error}
        />
      )}
      {step === 2 && (
        <Confirmation
          onEmailChange={onEmailChange}
          onTermsAndConditionsChange={onTermsAndConditionsChange}
          email={email}
          termsAndConditions={termsAndConditions}
          selectedPlan={selectedPlan}
          storage={storage}
          upfrontPayment={upfrontPayment}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      <div className="AppButtons">
        {step ? (
          <div
            className="AppButtonsBack"
            onClick={() => {
              goBack(step);
            }}
          >
            back
          </div>
        ) : null}
        {step === 2 ? null : (
          <div
            className="AppButtonsNext"
            onClick={() => {
              checkIfComplete(step);
            }}
          >
            next
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
