import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Like />, container);
  });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Testing Like component", () => {
  it("Like counter is 'Likes: 0' by default ", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });
});
