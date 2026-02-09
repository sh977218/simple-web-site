import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';

import { SceneGraph } from './scene-graph';

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
