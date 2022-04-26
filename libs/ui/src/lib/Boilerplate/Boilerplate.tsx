import { font } from '@boilerplate/tokens';

import type { BoilerplateProps } from './Boilerplate.types';

export function Boilerplate({ children, onPress }: BoilerplateProps) {
  return (
    <button style={{ fontFamily: font.family.mono }} onClick={onPress}>
      {children}
    </button>
  );
}
