import { BoilerplateProps } from './Boilerplate.types';

export function Boilerplate({ children, onPress }: BoilerplateProps) {
  return <button onClick={onPress}>{children}</button>;
}
