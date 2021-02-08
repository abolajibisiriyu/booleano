import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "app";

test("renders app name: booleano)", () => {
  render(<App />);
  const appName = screen.getByText(/booleano/i);
  expect(appName).toBeInTheDocument();
});
