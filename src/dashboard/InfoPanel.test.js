import { render, screen } from "@testing-library/react";
import InfoPanel from "./InfoPanel";
import { store } from "app/store";
import { Provider } from "react-redux";

// A test
test("Renders copper", () => {
  render(
    <Provider store={store}>
      <InfoPanel />
    </Provider>
  );

  const copperText = screen.getByText(/copper/i);

  expect(copperText).toBeInTheDocument();
});
