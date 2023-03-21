import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MouseEventHandler, ReactNode } from 'react';
import { ActionButton, ActionButtonType } from './ActionButton';
// @ts-ignore // mdxでドキュメントも作成することができる（今回はパス）
// import MDXDocument from "./AttachableIconButton.mdx";

export default {
  title: 'ActionButton',
  component: ActionButton,
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
} as ComponentMeta<typeof ActionButton>;

const callback = () => {
  alert('callback!!');
};

export const Main = (
  props: JSX.IntrinsicAttributes & {
    type: ActionButtonType;
    callback?: MouseEventHandler<HTMLButtonElement> | undefined;
    children: ReactNode;
  }
) => {
  return (
    <ActionButton {...props} type="main" callback={callback}>
      <span>要素を挿入することもできる🛩</span>
    </ActionButton>
  );
};

export const Sub = (
  props: JSX.IntrinsicAttributes & {
    type: ActionButtonType;
    callback?: MouseEventHandler<HTMLButtonElement> | undefined;
    children: ReactNode;
  }
) => {
  return (
    <ActionButton {...props} type="sub" callback={callback}></ActionButton>
  );
};

export const Cancel = (
  props: JSX.IntrinsicAttributes & {
    type: ActionButtonType;
    callback?: MouseEventHandler<HTMLButtonElement> | undefined;
    children: ReactNode;
  }
) => {
  return (
    <ActionButton {...props} type="cancel" callback={callback}></ActionButton>
  );
};

// テンプレートコンポーネントを実装
// Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof ActionButton> = (args) => (
  <ActionButton {...args} />
);

// bindを呼び出しStoryを作成
export const TemplateTest = Template.bind({});

// デフォルトのpropsを設定する
TemplateTest.args = {
  type: 'main',
  callback,
  children: <span>画面上でPropsが触れるヤツ</span>,
};
