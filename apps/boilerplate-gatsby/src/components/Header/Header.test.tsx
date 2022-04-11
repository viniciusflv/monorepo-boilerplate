import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import '../../graphql/SiteMetadataFragment/mock';
import { Header } from './Header';

describe(`Header`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Header />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
