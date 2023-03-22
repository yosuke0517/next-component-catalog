import type { NextPage } from 'next';
import {
  ArrowLeftOnRectangleIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';
import { Layout } from '~/components/Layout';
import { Auth } from '~/components/Auth';
import { ActionButton } from '~/components/atoms/ActionButton';
import { SingleSelectInput } from '~/components/atoms/SingleSelectInput';
import { MultiSelectInput } from '~/components/atoms/MultiSelectInput';
import { XMarkIcon } from '@heroicons/react/20/solid';
import React, { FormEvent, useState } from 'react';
import { TagList } from '~/components/atoms/TagList';
import { supabase } from '~/utils/supabase';
import { useMutateAuth } from '~/hooks/useMutateAuth';

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
  const signOut = () => {
    supabase.auth.signOut();
  };
  const user = supabase.auth.user();
  const [isLogin, setIsLogin] = useState(true);
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  } = useMutateAuth();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate();
    } else {
      registerMutation.mutate();
    }
  };
  if (!user) {
    return (
      <Layout title="Login">
        <ShieldCheckIcon className="mb-6 h-12 w-12 text-blue-500" />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              required
              className="my-2 rounded border border-gray-300 px-3 py-2 text-sm  placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="my-6 flex items-center justify-center text-sm">
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="cursor-pointer font-medium hover:text-indigo-500"
            >
              change mode ?
            </span>
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <CheckBadgeIcon className="h-5 w-5" />
            </span>
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
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
      <p className="my-3 text-xl text-blue-600">ID: {user.email}</p>
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
