import { Boilerplate } from '@boilerplate/ui';

export function Header() {
  return (
    <header style={{ outline: '1px solid red' }}>
      Header <Boilerplate onPress={console.log}>Boilerplate {'=>'}</Boilerplate>
    </header>
  );
}
