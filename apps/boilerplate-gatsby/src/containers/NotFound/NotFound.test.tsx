import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { NotFound } from './NotFound';

import '../../graphql/SiteMetadataFragment/mock';

describe(`NotFound`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<NotFound />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
