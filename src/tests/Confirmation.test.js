import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Confirmation from "../components/Confirmation";

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
