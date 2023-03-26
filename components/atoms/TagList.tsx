// tagをリスト形式で提供する

import React, { FC } from 'react';
import { ITagListOption } from '~/types';

export type TabListProps = {
  tagList: ITagListOption[];
};

export const TagList: FC<TabListProps> = ({ tagList }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tagList.map((tag) => (
        <li className="flex items-center" key={tag.id}>
          <span className="ml-2 rounded-3xl border border-blue-500/100 px-1.5 py-0.5 text-xs text-blue-500">
            {tag.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
