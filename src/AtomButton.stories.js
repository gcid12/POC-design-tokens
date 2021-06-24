import React from 'react';
import AtomButton from './AtomButton';

export default {
  title: 'Example/AtomButton',
  component: AtomButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AtomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'outlined',
  primary:true,
  buttonContent: 'Button1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  primary:false,
  buttonContent: 'Button2',
};
