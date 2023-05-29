import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  tags: ["autodocs"],
  component: Button,
  args: {
    children: "Button",
  },
  parameters: {
    controls: { hideNoControlsWarning: true, exclude: ["children"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const Template: Story = {
  render: (args) => (
    <div className="space-x-2">
      <Button variant="primary" {...args}>
        Primary
      </Button>
      <Button variant="success" {...args}>
        Success
      </Button>
      <Button variant="warning" {...args}>
        Warning
      </Button>
      <Button variant="danger" {...args}>
        Danger
      </Button>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="dark" {...args}>
        Dark
      </Button>
      <Button variant="light" {...args}>
        Light
      </Button>
    </div>
  ),
};

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    controls: { include: [] },
  },
  render: (args) => (
    <div className="space-x-2">
      <Button {...args}>Button</Button>
      <Button colorType="outline" {...args}>
        Button
      </Button>
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  parameters: {
    controls: { include: [] },
  },
  render: (args) => (
    <div className="space-x-2">
      <Button {...args}>Button</Button>
      <Button colorType="outline" {...args}>
        Button
      </Button>
    </div>
  ),
};

export const Size: Story = {
  parameters: {
    controls: { include: [] },
  },
  render: (args) => (
    <div className="space-x-2">
      <Button size="small" variant="primary" {...args}>
        Small
      </Button>
      <Button size="default" variant="primary" {...args}>
        Default
      </Button>
      <Button size="large" variant="primary" {...args}>
        Large
      </Button>
    </div>
  ),
};

export const Block: Story = {
  args: {
    block: true,
  },
  parameters: {
    controls: { include: [] },
  },
  render: (args) => (
    <div className="grid gap-4">
      <Button {...args}>Button</Button>
      <Button colorType="outline" {...args}>
        Button
      </Button>
    </div>
  ),
};

export const Variant: Story = {
  ...Template,
  parameters: {
    controls: { include: [] },
  },
};

export const Outline: Story = {
  ...Template,
  args: {
    colorType: "outline",
  },
  parameters: {
    controls: { include: [] },
  },
};
