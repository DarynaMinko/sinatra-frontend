import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from './search';

export default {
    title: '<Search/Search',
    component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Field = Template.bind({});
Field.args = {};
