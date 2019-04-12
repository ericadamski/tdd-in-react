// #region mocks
jest.mock(
  "unfetch",
  () =>
    function unfetchMock(url, options) {
      return Promise.resolve({
        text() {
          return [
            "You will never guess what Elsa did to the balloon. She let it go.",
            "I had a dream that I was a muffler last night. I woke up exhausted!"
          ][Math.max(1, Math.floor(Math.random() * 100)) % 2];
        }
      });
    }
);
// #endregion mocks
import React from "react";
import App from "../app";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  act
} from "react-testing-library";

describe("the app", () => {
  afterEach(cleanup);

  it("should display a new joke when the next button is clicked", async () => {
    const { container, getByRole, debug, asFragment } = render(<App />);

    await waitForElement(() => getByRole("joke"));

    const firstJoke = getByRole("joke").textContent;

    act(() => {
      fireEvent.click(getByRole("next"));
    });

    await waitForElement(() => getByRole("joke"));

    expect(firstJoke).not.toBe(getByRole("joke").textContent);
  });
});
