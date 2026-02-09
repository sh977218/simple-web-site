import type { Meta, StoryObj } from '@storybook/angular';
import { SceneGraph } from './scene-graph';
import { expect } from 'storybook/test';

const meta: Meta<SceneGraph> = {
  component: SceneGraph,
  title: 'SceneGraph',
};
export default meta;

type Story = StoryObj<SceneGraph>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/scene-graph/gi)).toBeTruthy();
  },
};
