import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import '../../graphql/SiteMetadataFragment/mock';
import { SEO } from './SEO';

describe(`SEO`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<SEO />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
