import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';

import { ExcelComponent } from './excel.component';

const meta: Meta<ExcelComponent> = {
  component: ExcelComponent,
  title: 'ExcelComponent',
};
export default meta;

type Story = StoryObj<ExcelComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/excel/gi)).toBeTruthy();
  },
};
