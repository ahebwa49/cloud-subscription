import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Confirmation from "../components/Confirmation";
import confirmationData from "./data/confirmationData";

describe("create App snapshot", () => {
  test("create snapshot", () => {
    let tree = renderer
      .create(
        <Confirmation
          onEmailChange={() => {}}
          onTermsAndConditionsChange={() => {}}
          handleFormSubmit={() => {}}
          email="ahebwa49@gmail.com"
          termsAndConditions={true}
          selectedPlan={{ duration_months: 12, price_usd_per_gb: 2 }}
          storage={50}
          upfrontPayment="yes"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

let tree;
for (let data of confirmationData) {
  let { selectedPlan, storage, upfrontPayment } = data;

  describe("Consistency in Payment component", () => {
    beforeEach(() => {
      tree = render(
        <Confirmation
          onCardNumberChange={() => {}}
          onExpirationDateChange={() => {}}
          onSecurityCodeChange={() => {}}
          cardNumber={1234}
          expirationDate={"2021-06-30"}
          securityCode={1234}
          selectedPlan={selectedPlan}
          storage={storage}
          upfrontPayment={upfrontPayment}
          error="All fields must be completed inorder to proceed to next step"
        />
      );
    });
    test("Ensure that the payment plan displayed in the UI is the right one", () => {
      let duration = document.querySelector(".ConfirmationSummaryDuration");
      let price = document.querySelector(".ConfirmationSummaryPrice");
      expect(parseInt(duration.innerHTML)).toBe(selectedPlan.duration_months);
      expect(parseInt(price.innerHTML)).toBe(selectedPlan.price_usd_per_gb);
    });
    test("Ensure that the storage displayed in the UI is the right one", () => {
      let elemStorage = document.querySelector(".ConfirmationSummaryStorage");
      expect(parseInt(elemStorage.innerHTML)).toBe(storage);
    });
    test("Ensure that the upfront payment displayed in the UI is the right one", () => {
      let elemUpfrontPayment = document.querySelector(
        ".ConfirmationSummaryUpfront"
      );
      expect(elemUpfrontPayment.innerHTML).toBe(upfrontPayment);
    });
  });
}
