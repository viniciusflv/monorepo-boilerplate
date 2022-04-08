import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { Boilerplate } from './Boilerplate';

expect.extend(toHaveNoViolations);

describe('Boilerplate', () => {
  test('default', async () => {
    const { container } = render(
      <Boilerplate onPress={console.log}>Boilerplate</Boilerplate>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
