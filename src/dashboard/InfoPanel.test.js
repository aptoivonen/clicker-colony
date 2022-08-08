import { render, screen } from "@testing-library/react";
import InfoPanel from "./InfoPanel";
import { createStore } from "app/store";
import { Provider } from "react-redux";

// A test
test("Renders copper", () => {
  render(
    <Provider store={createStore()}>
      <InfoPanel />
    </Provider>
  );

  const copperText = screen.getByText(/copper/i);

  expect(copperText).toBeInTheDocument();
});
