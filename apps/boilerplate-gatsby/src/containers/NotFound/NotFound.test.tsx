import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import '../../graphql/SiteMetadataFragment/mock';
import { NotFound } from './NotFound';

describe(`NotFound`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<NotFound />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
