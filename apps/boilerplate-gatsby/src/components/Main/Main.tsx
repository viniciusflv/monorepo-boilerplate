import { MainProps } from './Main.types';

export function Main({ children }: MainProps) {
  return (
    <main style={{ flexGrow: 1, outline: '1px solid green' }}>{children}</main>
  );
}
