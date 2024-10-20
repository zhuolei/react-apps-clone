import type { Meta } from '@storybook/react';
import React from 'react';
import { Form } from 'react-aria-components';
import { Button } from '../next-react-aria/src/Button';
import { DateRangePicker } from '../next-react-aria/src/DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: 'Trip dates'
  }
};

export default meta;

export const Example = (args: any) => <DateRangePicker {...args} />;

export const Validation = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <DateRangePicker {...args} />
    <Button type="submit" variant="secondary">Submit</Button>
  </Form>
);

Validation.args = {
  isRequired: true
};
