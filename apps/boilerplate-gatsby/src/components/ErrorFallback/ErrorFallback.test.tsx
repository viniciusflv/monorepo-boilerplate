import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import '../../graphql/SiteMetadataFragment/mock';
import { ErrorFallback } from './ErrorFallback';

describe(`ErrorFallback`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<ErrorFallback />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
