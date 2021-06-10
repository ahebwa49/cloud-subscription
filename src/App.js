import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Your Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            // value={this.state.username}
            // onChange={this.handleUsernameChange}
            placeholder="example@gmail.com"
            required
            className="form-input"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
