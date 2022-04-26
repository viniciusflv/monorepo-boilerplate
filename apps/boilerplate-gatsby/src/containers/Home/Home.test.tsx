import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Home } from './Home';

import '../../graphql/SiteMetadataFragment/mock';

describe(`Home`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Home />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
