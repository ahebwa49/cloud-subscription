import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Payment from "../components/Payment";

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
