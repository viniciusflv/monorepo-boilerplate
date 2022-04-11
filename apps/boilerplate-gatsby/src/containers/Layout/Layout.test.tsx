import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import '../../graphql/SiteMetadataFragment/mock';
import { Layout } from './Layout';

describe(`Layout`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Layout>page</Layout>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
