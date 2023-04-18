import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
    title: '<Input/Input',
    component: Input,
    parameters: {
        intent: 'labeled',
        sized: 'halfsized'
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Fullsized = Template.bind({});
Fullsized.args = {
    sized: 'fullsized'
};
