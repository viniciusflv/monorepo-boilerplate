import { Boilerplate } from './Boilerplate';
import type { BoilerplateProps } from './Boilerplate.types';

export default {
  title: 'Components/Boilerplate',
  component: Boilerplate,
  argTypes: {
    onPress: { action: 'button-press' },
  },
};

const Template = (args: BoilerplateProps) => <Boilerplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Boilerplate =>',
};
