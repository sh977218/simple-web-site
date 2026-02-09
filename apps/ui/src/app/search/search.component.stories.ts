import type { Meta, StoryObj } from '@storybook/angular';
import { SearchComponent } from './search.component';
import { expect } from 'storybook/test';

const meta: Meta<SearchComponent> = {
  component: SearchComponent,
  title: 'SearchComponent',
};
export default meta;

type Story = StoryObj<SearchComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/search/gi)).toBeTruthy();
  },
};
