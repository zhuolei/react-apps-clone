import type { Meta } from '@storybook/react';
import React from 'react';
import { Button } from '../next-react-aria/src/Button';
import { DateField } from '../next-react-aria/src/DateField';
import { Form } from '../next-react-aria/src/Form';
import { TextField } from '../next-react-aria/src/TextField';

const meta: Meta<typeof Form> = {
  component: Form,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => (
  <Form {...args}>
    <TextField label="Email" name="email" type="email" isRequired />
    <DateField label="Birth date" isRequired />
    <div className="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">Reset</Button>
    </div>
  </Form>
);
