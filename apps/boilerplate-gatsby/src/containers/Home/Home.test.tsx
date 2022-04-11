import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import '../../graphql/SiteMetadataFragment/mock';
import { Home } from './Home';

describe(`Home`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Home />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
