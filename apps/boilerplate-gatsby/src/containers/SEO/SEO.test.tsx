import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { SEO } from './SEO';

import '../../graphql/SiteMetadataFragment/mock';

describe(`SEO`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<SEO />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
