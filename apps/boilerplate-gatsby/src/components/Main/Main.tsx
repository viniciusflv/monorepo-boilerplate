import type { PropsWithChildren } from 'react';

import './Main.css';

export function Main({ children }: PropsWithChildren<unknown>) {
  return <main className="main">{children}</main>;
}
