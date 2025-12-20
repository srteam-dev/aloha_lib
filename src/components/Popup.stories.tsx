import type { Meta, StoryObj } from '@storybook/react';
import { Popup } from './Popup';
import { Button } from './Button';
import { Input } from './Input';
import { P } from './Typography';
import { useState } from 'react';

const meta = {
  title: 'Components/Popup',
  component: Popup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
} satisfies Meta<typeof Popup>;

export default meta;

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Popup</Button>
      <Popup open={open} onClose={() => setOpen(false)} title="Simple Popup">
        <P>This is a simple popup with some content inside.</P>
      </Popup>
    </>
  );
};

export const WithForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Form</Button>
      <Popup
        open={open}
        onClose={() => setOpen(false)}
        title="User Information"
        footer={
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Submit</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <Input placeholder="Enter your name" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="Enter your email" />
          </div>
        </div>
      </Popup>
    </>
  );
};

export const Small = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Small Popup</Button>
      <Popup open={open} onClose={() => setOpen(false)} title="Small" size="sm">
        <P>This is a small popup.</P>
      </Popup>
    </>
  );
};

export const Large = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Large Popup</Button>
      <Popup open={open} onClose={() => setOpen(false)} title="Large" size="lg">
        <P>
          This is a large popup with more content. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </P>
      </Popup>
    </>
  );
};

export const NoCloseButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Popup</Button>
      <Popup
        open={open}
        onClose={() => setOpen(false)}
        title="No Close Button"
        showCloseButton={false}
        footer={
          <Button onClick={() => setOpen(false)} className="w-full">
            Close
          </Button>
        }
      >
        <P>This popup has no close button in the header.</P>
      </Popup>
    </>
  );
};

export const NoOverlayClose = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Popup</Button>
      <Popup
        open={open}
        onClose={() => setOpen(false)}
        title="No Overlay Close"
        closeOnOverlayClick={false}
      >
        <P>Clicking outside this popup will not close it. Use the X button or press Escape.</P>
      </Popup>
    </>
  );
};

export const WithLongContent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Long Content</Button>
      <Popup open={open} onClose={() => setOpen(false)} title="Long Content" size="lg">
        <div className="max-h-96 overflow-y-auto space-y-4">
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </P>
          <P>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </P>
          <P>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </P>
          <P>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </P>
        </div>
      </Popup>
    </>
  );
};
