import renderer from "react-test-renderer";
import App from "../components/App";

describe("create App snapshot", () => {
  test("create snapshot", () => {
    let tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
