import React from "react";
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
  it("Like counter is 'Likes: 0' by default", () => {
    const p = container.querySelector("p");
    expect(p.textContent).toBe("Likes: 0");
  });

  it("Likes increases after clicking Like button", () => {
    const p = container.querySelector("p");
    const likeButton = container.querySelector("#increment");
    act(() => {
      likeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: 1");
  });

  it("Likes decreases after clicking Like button", () => {
    const p = container.querySelector("p");
    const likeButton = container.querySelector("#decrement");
    act(() => {
      likeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(p.textContent).toBe("Likes: -1");
  });
});
