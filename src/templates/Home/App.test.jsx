import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../Styles/render-theme';
import { theme } from '../Styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Olá',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  });
  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', 'red');
});
