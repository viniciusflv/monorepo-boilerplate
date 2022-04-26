import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { ErrorFallback } from './ErrorFallback';

import '../../graphql/SiteMetadataFragment/mock';

describe(`ErrorFallback`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<ErrorFallback />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
