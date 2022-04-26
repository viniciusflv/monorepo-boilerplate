import type { PropsWithChildren } from 'react';

export function App({ children }: PropsWithChildren<unknown>) {
  // Add Providers here
  return <>{children}</>;
}
