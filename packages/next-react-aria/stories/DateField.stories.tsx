import type { Meta } from '@storybook/react';
import React from 'react';
import { Form } from 'react-aria-components';
import { Button } from '../next-react-aria/src/Button';
import { DateField } from '../next-react-aria/src/DateField';

const meta: Meta<typeof DateField> = {
  component: DateField,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: 'Event date'
  }
};

export default meta;

export const Example = (args: any) => <DateField {...args} />;

export const Validation = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <DateField {...args} />
    <Button type="submit" variant="secondary">Submit</Button>
  </Form>
);

Validation.args = {
  isRequired: true
};
