import type { Meta, StoryObj } from '@storybook/react-vite';

import Card from './Card';
import * as s from './Card.css';

const paddingOptions = Object.keys(s.padding) as Array<keyof typeof s.padding>;

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],

  args: {
    padding: 'md',
    interactive: false,
    children: 'Card content',
  },

  argTypes: {
    padding: {
      control: 'select',
      options: paddingOptions,
      description: 'Card 내부 여백 크기',
    },
    interactive: {
      control: 'boolean',
      description: 'hover/click 가능한 카드 스타일 적용 여부',
    },
    children: {
      control: 'text',
      description: 'Card 안에 들어갈 내용',
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  args: {
    interactive: true,
    children: 'Interactive Card',
    role: 'button',
    tabIndex: 0,
  },
};

export const PaddingVariants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16, maxWidth: 480 }}>
      {paddingOptions.map((padding) => (
        <Card key={padding} {...args} padding={padding}>
          padding: {padding}
        </Card>
      ))}
    </div>
  ),
  args: {
    interactive: false,
  },
};

export const WithContent: Story = {
  render: (args) => (
    <Card {...args}>
      <h3 style={{ margin: 0 }}>포트폴리오 카드</h3>
      <p style={{ margin: '8px 0 0' }}>프로젝트 요약, 태그, 설명 등을 담는 카드 컴포넌트입니다.</p>
    </Card>
  ),
  args: {
    padding: 'md',
    interactive: false,
  },
};
