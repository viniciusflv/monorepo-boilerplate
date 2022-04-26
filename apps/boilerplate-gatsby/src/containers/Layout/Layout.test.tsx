import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Layout } from './Layout';

import '../../graphql/SiteMetadataFragment/mock';

describe(`Layout`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Layout path="/">page</Layout>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
