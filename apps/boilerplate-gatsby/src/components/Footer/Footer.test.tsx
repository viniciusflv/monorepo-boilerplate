import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Footer } from './Footer';

import '../../graphql/SiteMetadataFragment/mock';

describe(`Footer`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Footer />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
