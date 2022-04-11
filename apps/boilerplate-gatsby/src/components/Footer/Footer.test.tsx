import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import '../../graphql/SiteMetadataFragment/mock';
import { Footer } from './Footer';

describe(`Footer`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Footer />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
