import React from 'react';
import Image from 'next/image';
import { TagList } from '../atoms/TagList';
import { ITagListOption } from '~/types';

/** 状態が増えたらここに追加していく */
export const JobStates = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
} as const;

export type JobState = (typeof JobStates)[keyof typeof JobStates];

export type JobCardProps = {
  title: string;
  status: JobState;
  imageUrl: string;
  tagList: ITagListOption[];
};

export const JobCard: React.FC<JobCardProps> = ({
  title,
  imageUrl,
  status,
  tagList,
}) => {
  return (
    <div className="max-w-sm rounded-lg bg-white p-4 shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        style={{ objectFit: 'cover' }}
        width={300}
        height={150}
        className="h-40 w-full rounded"
      />
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-2 text-sm font-semibold">Status: {status}</p>
      <TagList tagList={tagList} />
    </div>
  );
};

export default JobCard;
