import { Dispatch, SetStateAction, KeyboardEvent, useCallback } from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  icon?: React.ReactNode;
  setText: Dispatch<SetStateAction<string>>;
}

export const Input: React.FC<IInputProps> = ({
  text,
  icon,
  setText,
  onKeyDown,
  ...props
}) => {
  return (
    <div className="flex">
      <input
        autoComplete='off'
        type="text"
        id="small-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
        className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      />
      {icon && (
        <span className="cursor-pointer inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          {icon}
        </span>
      )}
    </div>
  )
}