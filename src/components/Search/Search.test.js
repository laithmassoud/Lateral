import { render, screen } from "@testing-library/react";
import UserEvent from '@testing-library/user-event';
import Search from './Search'

test('input value is updated correctly', () => {
  render(<Search />);
  const input = screen.getByRole('textbox');
  UserEvent.type(input, 'test');

  expect(input.value).toBe('test');
});