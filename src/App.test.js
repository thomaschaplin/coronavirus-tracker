import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders convert header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/tracker/i);
  expect(headerElement).toBeInTheDocument();
});
