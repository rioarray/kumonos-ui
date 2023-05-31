import type { Meta, StoryObj } from "@storybook/react";

import { ButtonGroup } from "./ButtonGroup";

import Button from "../Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Buttons/Button Group",
  tags: ["autodocs"],
  component: ButtonGroup,
  argTypes: {
    as: {
      control: { type: null },
      table: {
        defaultValue: { summary: "div" },
      },
    },
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button colorType="outline">Button</Button>
      <Button>Button</Button>
      <Button disabled>Button</Button>
    </ButtonGroup>
  ),
};
