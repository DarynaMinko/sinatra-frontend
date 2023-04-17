import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
    title: "Buttons/Button",
    component: Button,
    parameters: {
        intent: "primary",
        size: "medium"
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
    intent: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {
    size: "medium"
};

export const Small = Template.bind({});
Small.args = {
    size: "small"
};
