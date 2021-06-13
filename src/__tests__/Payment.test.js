import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Payment from "../components/Payment";
import paymentData from "./data/paymentData";

describe("create Payment snapshot", () => {
  test("create snapshot", () => {
    let tree = renderer
      .create(
        <Payment
          onCardNumberChange={() => {}}
          onExpirationDateChange={() => {}}
          onSecurityCodeChange={() => {}}
          cardNumber={1234}
          expirationDate={"2021-06-30"}
          securityCode={1234}
          selectedPlan={{ duration_months: 12, price_usd_per_gb: 2 }}
          storage={10}
          upfrontPayment="yes"
          error="All fields must be completed inorder to proceed to next step"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

let tree;

for (let data of paymentData) {
  let { selectedPlan, storage, upfrontPayment } = data;

  describe("Consistency in Payment component", () => {
    beforeEach(() => {
      tree = render(
        <Payment
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
      let duration = document.querySelector(".PaymentPlanDuration");
      let price = document.querySelector(".PaymentPlanPrice");
      expect(parseInt(duration.innerHTML)).toBe(selectedPlan.duration_months);
      expect(parseInt(price.innerHTML)).toBe(selectedPlan.price_usd_per_gb);
    });
    test("Ensure that the storage displayed in the UI is the right one", () => {
      let elemStorage = document.querySelector(".PaymentTotalStorage");
      expect(parseInt(elemStorage.innerHTML)).toBe(storage);
    });
    test("Ensure that the upfront payment displayed in the UI is the right one", () => {
      let elemUpfrontPayment = document.querySelector(".PaymentTotalUpfront");
      expect(elemUpfrontPayment.innerHTML).toBe(upfrontPayment);
    });
  });
}
