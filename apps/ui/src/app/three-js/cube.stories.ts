import type { Meta, StoryObj } from '@storybook/angular';
import { Cube } from './cube';
import { expect } from 'storybook/test';

const meta: Meta<Cube> = {
  component: Cube,
  title: 'Cube',
};
export default meta;

type Story = StoryObj<Cube>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/cube/gi)).toBeTruthy();
  },
};
