import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Main } from './Main';

import '../../graphql/SiteMetadataFragment/mock';

describe(`Main`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Main>page</Main>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
