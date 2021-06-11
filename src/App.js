import React, { useState } from "react";
import "./App.scss";
import Subscription from "./Subscription";
import Payment from "./Payment";
import Confirmation from "./Confirmation";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div className="App">
      {step === 0 && <Subscription />}
      {step === 1 && <Payment />}
      {step === 2 && <Confirmation />}
      <div className="AppButtons">
        {step ? (
          <div className="AppButtonsBack" onClick={() => setStep(step - 1)}>
            back
          </div>
        ) : null}
        {step === 2 ? null : (
          <div className="AppButtonsNext" onClick={() => setStep(step + 1)}>
            next
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
