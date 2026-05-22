import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { fn } from 'storybook/test';
const meta = {
  title: 'Shared UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    children: '버튼',
    variant: 'primary',
    size: 'md',
    fullWidth: false,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'danger', 'ghost'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: {
      control: 'boolean',
    },
    as: {
      control: 'radio',
      options: ['button', 'a'],
    },
    children: {
      control: 'text',
    },
    className: {
      control: false,
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary = {
  args: {
    variant: 'primary',
    children: '기본 스타일 버튼',
    onClick: fn(),
  },
} satisfies Story;

// Button 상태
export const Ghost = {
  args: {
    variant: 'ghost',
    children: '보조 버튼',
  },
} satisfies Story;

export const Danger = {
  args: {
    variant: 'danger',
    children: '삭제',
  },
} satisfies Story;

export const Small = {
  args: {
    size: 'sm',
    children: '작은 버튼',
  },
} satisfies Story;

export const Large = {
  args: {
    size: 'lg',
    children: '큰 버튼',
  },
} satisfies Story;

export const Disabled = {
  args: {
    disabled: true,
    children: '비활성화 버튼',
  },
} satisfies Story;

export const FullWidth = {
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    fullWidth: true,
    children: '전체 너비 버튼',
  },
} satisfies Story;

export const AsLink = {
  args: {
    as: 'a',
    href: 'https://github.com/daily-coco/portfolio-notion',
    target: '_blank',
    rel: 'noreferrer',
    children: 'GitHub 보기',
    title: '새창열림',
  },
} satisfies Story;
