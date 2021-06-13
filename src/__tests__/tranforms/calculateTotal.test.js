import { calculateTotal } from "../../utils/index";

/**
 * Description: calculateTotal is a function that's used to get the toal price of the subscription after the user has selected the required parametrs
 * Expectations:
 *             -
 */

describe("calculateTotal integrity", () => {
  test("Works well when upfront payment is a No", () => {
    expect(calculateTotal(10, 3, "No")).toBe(30);
  });
  test("Works well when upfront payment is a Yes", () => {
    expect(calculateTotal(10, 3, "Yes")).toBe(27);
  });
});
