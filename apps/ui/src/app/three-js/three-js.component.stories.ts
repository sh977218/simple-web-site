import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';

import { ThreeJsComponent } from './three-js.component';

const meta: Meta<ThreeJsComponent> = {
  component: ThreeJsComponent,
  title: 'ThreeJsComponent',
};
export default meta;

type Story = StoryObj<ThreeJsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/three-js/gi)).toBeTruthy();
  },
};
