import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "./Radio";

export default {
    title: "<Radio/Radio",
    component: Radio
} as ComponentMeta<typeof Radio>;

// this var if we don't have children
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Field = Template.bind({});
Field.args = {};
