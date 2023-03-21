import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { Layout } from '~/components/Layout';
import { Auth } from '~/components/Auth';
import { ActionButton } from '~/components/atoms/ActionButton';
import { SingleSelectInput } from '~/components/atoms/SingleSelectInput';
import { MultiSelectInput } from '~/components/atoms/MultiSelectInput';
import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { TagList } from '~/components/atoms/TagList';

// テストでーた TODO supabaseから取得するようにする
const options = [
  { id: 0, name: 'Option 1' },
  { id: 1, name: 'Option 2' },
  { id: 2, name: 'Option 3' },
  { id: 3, name: 'Option 4' },
  { id: 4, name: 'Option 5' },
  { id: 5, name: 'Option 6' },
];

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <Layout title="Login">
        <Auth />
      </Layout>
    );
  }
  return (
    <Layout title="Todo App">
      <div className="flex">
        <button type="button" onClick={() => signOut()}>
          ログアウト
        </button>
        <ArrowLeftOnRectangleIcon className="h-6 w-6 cursor-pointer" />
      </div>
      <p className="my-3 text-xl text-blue-600">ID: {session?.user.email}</p>
      <div>
        <p>ActionButton</p>
        <ActionButton type="sub" callback={() => console.log(session)}>
          hoge
        </ActionButton>
      </div>
      <div>
        <p>SingleSelectInput</p>
        <SingleSelectInput options={options} />
      </div>
      <div>
        <p>MultiSelectInput</p>
        <MultiSelectInput options={options} />
      </div>
      <div>
        <p>TabList</p>
        <TagList tagList={options} />
      </div>
    </Layout>
  );
};

export default Home;
