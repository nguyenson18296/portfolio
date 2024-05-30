interface ISection {
  sectionId: string;
  icon: React.ReactNode;
  iconText: string;
  children: React.ReactNode;
}

export const Section: React.FC<ISection> = ({ icon, iconText, sectionId, children }) => {
  return (
    <div
      id={sectionId}
      className="py-3.5 max-w-content xl:max-w-[58.75rem] 2xl:max-w-[58.75rem] max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl about-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-3xl">
          {icon}
          {iconText}
        </div>
        {children}
      </div>
    </div>
  );
};
