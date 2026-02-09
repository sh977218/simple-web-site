import type { Meta, StoryObj } from '@storybook/angular';
import { NavBarComponent } from './nav-bar.component';
import { expect } from 'storybook/test';

const meta: Meta<NavBarComponent> = {
  component: NavBarComponent,
  title: 'NavBarComponent',
};
export default meta;

type Story = StoryObj<NavBarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/nav-bar/gi)).toBeTruthy();
  },
};
