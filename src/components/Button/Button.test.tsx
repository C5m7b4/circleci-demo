import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('should render correctly', () => {
    const testFn = jest.fn();
    const { container } = render(<Button label="Click Me" onClick={testFn} />);

    expect(container).toMatchSnapshot();
    fireEvent.click(container);
  });
});
