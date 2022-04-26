import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Header } from './Header';

import '../../graphql/SiteMetadataFragment/mock';

describe(`Header`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Header />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
