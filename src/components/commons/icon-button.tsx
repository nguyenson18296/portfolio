interface IIconButton {
  classNames?: string;
  children: React.ReactNode;
}

export const IconButton: React.FC<IIconButton> = ({
  classNames,
  children
}) => {
  return (
    <button type="button" className={`${classNames} w-[30px] h-[30px] text-blue-700 border border-[#00bc91] hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500`}>
      {children}
    </button>
  )
}