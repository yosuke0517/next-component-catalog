import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import { Layout } from '~/components/Layout';
import { ActionButton } from '~/components/atoms/ActionButton';
import { SingleSelectInput } from '~/components/atoms/SingleSelectInput';
import { MultiSelectInput } from '~/components/atoms/MultiSelectInput';
import React, { useEffect, useState } from 'react';
import { TagList } from '~/components/atoms/TagList';
import { supabase } from '~/utils/supabase';
import { useRouter } from 'next/router';
import { User } from '@supabase/supabase-js';

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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(supabase.auth.user());
  }, []);
  const signOut = () => {
    supabase.auth.signOut();
  };
  // const user = supabase.auth.user();
  return (
    <Layout title="Todo App">
      <div className="flex">
        <button type="button" onClick={() => signOut()}>
          ログアウト
        </button>
        <ArrowLeftOnRectangleIcon className="h-6 w-6 cursor-pointer" />
      </div>
      <p className="my-3 text-xl text-blue-600">ID: {user?.email}</p>
      <div>
        <p>ActionButton</p>
        <ActionButton type="sub" callback={() => console.log(user)}>
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
