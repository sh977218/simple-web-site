import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';

import { SearchResultComponent } from './search-result.component';

const meta: Meta<SearchResultComponent> = {
  component: SearchResultComponent,
  title: 'SearchResultComponent',
};
export default meta;

type Story = StoryObj<SearchResultComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/search-result/gi)).toBeTruthy();
  },
};
