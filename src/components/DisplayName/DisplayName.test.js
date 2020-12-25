import React from 'react';
import { render } from '@testing-library/react';
import DisplayName from './DisplayName';

test('renders display name', () => {
  const { getByText } = render(<DisplayName />);
  const linkElement = getByText(/By: Ashish Sheelavantar/i);
  expect(linkElement).toBeInTheDocument();
});
