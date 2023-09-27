import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Buttons";

export default {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        color: {
            control: {
                type: "select",
                options: ["default", "red", "black", "gray"],
            },
			defaultValue: 'black',
			description: 'Background color',
        },
        border: {
            control: {
                type: "check",
                options: ["default", "red", "black"],
            },
			defaultValue: 'default',
			description: 'Border color',
        },
		label: {
			control: {
				type: 'text',
			},
			defaultValue: 'Button'
		}
    },
} as Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const button_red: Story = {
    args: {
        color: "red",
        label: "Red Button",
    },
};

export const button_black: Story = {
    args: {
        color: "black",
        label: "Black Button",
    },
};

export const button_gray: Story = {
    args: {
        color: "gray",
        label: "Gray Button",
    },
};

export const button_wo_bg_red: Story = {
    args: {
        label: "No bg red",
        border: "red",
    },
};

export const button_wo_bg_black: Story = {
    args: {
        label: "No bg black",
        border: "black",
    },
};