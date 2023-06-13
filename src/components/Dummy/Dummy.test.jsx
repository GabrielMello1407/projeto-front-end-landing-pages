import { renderTheme } from '../../templates/Styles/render-theme';
import { Dummy } from '.';
import { screen } from '@testing-library/react';

describe('<Dummy />', () => {
  it('should render', () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
