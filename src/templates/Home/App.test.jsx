import { screen } from '@testing-library/react';
import Home from '.';
import { renderTheme } from '../Styles/render-theme';
import { theme } from '../Styles/theme';

describe('<Home/>', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
