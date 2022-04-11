import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import '../../graphql/SiteMetadataFragment/mock';
import { Main } from './Main';

describe(`Main`, () => {
  it(`should have no SEO violations`, async () => {
    const { container } = render(<Main>page</Main>);

    expect(await axe(container)).toHaveNoViolations();
  });
});
