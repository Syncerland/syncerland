import type { Meta, StoryObj } from "@storybook/react";
import BaseComponent from "./baseComponent";
import { mockBaseComponentProps } from "./baseComponent.mock";

const meta: Meta<typeof BaseComponent> = {
    component: BaseComponent,
    title: "templates/BaseComponent",
};

export default meta;

type Story = StoryObj<typeof BaseComponent>;

export const Base: Story = {
    args: mockBaseComponentProps.base,
};
