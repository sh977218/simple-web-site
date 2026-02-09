import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';

import { VideoComponent } from './video.component';

const meta: Meta<VideoComponent> = {
  component: VideoComponent,
  title: 'VideoComponent',
};
export default meta;

type Story = StoryObj<VideoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/video/gi)).toBeTruthy();
  },
};
