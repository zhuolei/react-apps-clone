import type { Meta } from '@storybook/react';
import React from 'react';
import { DialogTrigger } from 'react-aria-components';
import { AlertDialog } from '../next-react-aria/src/AlertDialog';
import { Button } from '../next-react-aria/src/Button';
import { Modal } from '../next-react-aria/src/Modal';

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

export const Example = (args: any) => (
  <DialogTrigger>
    <Button variant="secondary">Delete…</Button>
    <Modal>
      <AlertDialog {...args} />
    </Modal>
  </DialogTrigger>
);

Example.args = {
  title: 'Delete folder',
  children: 'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.',
  variant: 'destructive',
  actionLabel: 'Delete'
};
