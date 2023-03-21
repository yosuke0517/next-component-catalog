import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MouseEventHandler, ReactNode } from 'react';
import { MultiSelectInput, MultiSelectInputProps } from './MultiSelectInput';
// @ts-ignore // mdxでドキュメントも作成することができる（今回はパス）
// import MDXDocument from "./AttachableIconButton.mdx";

export default {
  title: 'MultiSelectInput',
  component: MultiSelectInput,
  argTypes: {
    // propsに渡すvariantをStorybookから変更できるように追加
    type: {
      // ラジオボタンで設定できるように指定
      control: { type: 'radio' },
      options: ['main', 'sub'],
    },
    // propsに渡すchildrenをStorybookから変更できるように追加
    children: {
      // テキストボックスで入力できるように指定
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      // ドキュメント用のmdxコンポーネントを指定
      // page: MDXDocument,
    },
  },
} as ComponentMeta<typeof MultiSelectInput>;

const options = [
  { id: 0, name: 'Option 1' },
  { id: 1, name: 'Option 2' },
  { id: 2, name: 'Option 3' },
];

export const Main = (
  props: JSX.IntrinsicAttributes & {
    type: MultiSelectInputProps;
    callback?: MouseEventHandler<HTMLButtonElement> | undefined;
    children: ReactNode;
  }
) => {
  return <MultiSelectInput options={options} />;
};

// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof MultiSelectInput> = (args) => (
  <MultiSelectInput {...args} />
);

// bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({});

// デフォルトのpropsを設定する
TemplateTest.args = {
  options: options,
};
