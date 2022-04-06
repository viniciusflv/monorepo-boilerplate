import type { MouseEventHandler, ReactNode } from 'react';

export type BoilerplateProps = {
  children: ReactNode;
  onPress: MouseEventHandler<HTMLButtonElement>;
};
