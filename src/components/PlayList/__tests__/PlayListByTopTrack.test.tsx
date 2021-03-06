import { render } from '@testing-library/react';
import React from 'react';

import ThemeProvider from '../../../contexts/Theme';
import { PlayListByTopTrack } from '../PlayListByTopTrack';

describe('Test PlayListByTopTrack component', () => {
  it('Should render without error', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <PlayListByTopTrack />
      </ThemeProvider>,
    );
    expect(getByTestId('playlist-by-top-track')).toBeDefined();
  });
});
