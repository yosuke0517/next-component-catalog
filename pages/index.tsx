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
import { getRandomImageUrl } from '~/utils/demoImageUrl';
import JobCard, {
  JobCardProps,
  JobStates,
} from '~/components/molecules/JobCard';
import { getRandomItems, programmingItems } from '~/utils/dummy';

// テストでーた TODO supabaseから取得するようにする
const options = [
  { id: 0, name: 'Option 1' },
  { id: 1, name: 'Option 2' },
  { id: 2, name: 'Option 3' },
  { id: 3, name: 'Option 4' },
  { id: 4, name: 'Option 5' },
  { id: 5, name: 'Option 6' },
];

const tagList1 = [
  { id: 0, name: 'React' },
  { id: 1, name: 'Next.js' },
  { id: 2, name: 'TypeScript' },
];

const tagList2 = [
  { id: 3, name: 'JavaScript' },
  { id: 4, name: 'CSS' },
  { id: 5, name: 'HTML' },
];

const Home: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [jobData, setJobData] = useState<JobCardProps[]>([]);

  useEffect(() => {
    setUser(supabase.auth.user());
    const jobData = [
      {
        title: 'Job Title 1',
        imageUrl: getRandomImageUrl(),
        status: JobStates.OPEN,
        tagList: getRandomItems(programmingItems),
      },
      {
        title: 'Job Title 2',
        imageUrl: getRandomImageUrl(),
        status: JobStates.CLOSED,
        tagList: getRandomItems(programmingItems),
      },
      {
        title: 'Job Title 3',
        imageUrl: getRandomImageUrl(),
        status: JobStates.CLOSED,
        tagList: getRandomItems(programmingItems),
      },
      {
        title: 'Job Title 4',
        imageUrl: getRandomImageUrl(),
        status: JobStates.CLOSED,
        tagList: getRandomItems(programmingItems),
      },
      {
        title: 'Job Title 5',
        imageUrl: getRandomImageUrl(),
        status: JobStates.CLOSED,
        tagList: getRandomItems(programmingItems),
      },
      // ... more jobs
    ];
    setJobData(jobData);
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobData.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            imageUrl={job.imageUrl}
            status={job.status}
            tagList={job.tagList}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
