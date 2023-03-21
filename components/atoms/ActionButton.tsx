import { FC, MouseEventHandler, ReactNode, useState } from 'react';
import cn from 'classnames';

type ActionButtonProps = {
  type: ActionButtonType;
  callback?: () => void | Promise<void>;
  children: ReactNode;
};

export type ActionButtonType = 'main' | 'sub' | 'cancel';

export const ActionButton: FC<ActionButtonProps> = ({
  type = 'main',
  children,
  callback,
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    if (callback) {
      await callback();
    }
    setLoading(false);
  };

  const btnClass = cn('rounded-full text-white font-bold py-2 px-4', {
    'bg-orange-500': type === 'main',
    'bg-blue-500': type === 'sub',
    'border border-orange-500 bg-white text-orange-400': type === 'cancel',
    'hover:opacity-80': true,
  });

  return (
    <button className={btnClass} onClick={handleClick}>
      {loading ? 'Loading...' : ''}
      {children ?? ''}
    </button>
  );
};
