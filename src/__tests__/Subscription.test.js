import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Subscription from "../components/Subscription";
import subscriptionData from "./data/subscriptionData";

describe("create subscription snapshot", () => {
  test("create snapshot", () => {
    let tree = renderer
      .create(
        <Subscription
          plans={[
            { duration_months: 3, price_usd_per_gb: 3 },
            { duration_months: 6, price_usd_per_gb: 2.5 },
            { duration_months: 12, price_usd_per_gb: 2 },
          ]}
          onDurationValueChange={() => {}}
          onStorageValueChange={() => {}}
          onUpfrontPaymentValueChange={() => {}}
          storage={5}
          duration={6}
          upfrontPayment="Yes"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

let tree;

for (let data of subscriptionData) {
  let { plans, storage, duration } = data;
  describe("Consistency in subscription component", () => {
    beforeEach(() => {
      tree = render(
        <Subscription
          plans={plans}
          onDurationValueChange={() => {}}
          onStorageValueChange={() => {}}
          onUpfrontPaymentValueChange={() => {}}
          storage={storage}
          duration={duration}
          upfrontPayment="Yes"
        />
      );
    });
    test("Ensure that all duration radio buttons are displayed in the UI", () => {
      let nodeList = document.querySelectorAll(
        ".SubscriptionFormGroup input[name=duration]"
      );
      expect(nodeList.length).toBe(plans.length);
    });
    test("Ensure that all storage radio buttons are displayed in the UI", () => {
      let nodeList = document.querySelectorAll(
        ".SubscriptionFormGroup input[name=storage]"
      );
      expect(nodeList.length).toBe(3);
    });
    test("Ensure that all the upfront radio buttons are displayed in the UI", () => {
      let nodeList = document.querySelectorAll(
        ".SubscriptionFormGroup input[name=upfrontPayment]"
      );
      expect(nodeList.length).toBe(2);
    });
  });
}
