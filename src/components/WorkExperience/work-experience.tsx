"use client";
import { FileDoc } from "@phosphor-icons/react";
import Datepicker, { type DateValueType } from "react-tailwindcss-datepicker";
import dayjs from "dayjs";

import { Section } from "../section/section";
import { useCallback, useState } from "react";

interface IExperience {
  id: number;
  company_name: string;
  start_date: string;
  end_date: string;
  position: string;
  description: string;
}

// Omit 'id' from IExperience and then use 'keyof' to create a union type of the remaining keys
type ExperienceKeys = keyof Omit<IExperience, 'id'> | '';

const EXPERIENCES: IExperience[] = [
  {
    id: 1,
    company_name: 'Envato Market',
    start_date: 'Mar, 2022',
    end_date: 'May, 2024',
    position: 'Lead UX Designer',
    description: 'Owing to advancements in product other designer technologies aute voluptate.'
  },
  {
    id: 2,
    company_name: 'Envato Market',
    start_date: 'Mar 2018',
    end_date: 'Feb 2022',
    position: 'Lead UX Designer',
    description: 'Owing to advancements in product other designer technologies aute voluptate.'
  },
  {
    id: 3,
    company_name: 'Envato Market',
    start_date: 'Mar 2015',
    end_date: 'Feb 2018',
    position: 'Lead UX Designer',
    description: 'Owing to advancements in product other designer technologies aute voluptate.'
  }
]

export const WorkExperience: React.FC = () => {
  const [inits, setInits] = useState(EXPERIENCES);
  const [editingSection, setEditingSection] = useState<{
    section: ExperienceKeys,
    index: number
  }>({
    section: '',
    index: -1
  });
  const [value, setValue] = useState<DateValueType>({
      startDate: new Date(),
      endDate: new Date()
  });

  const handleValueChange = (newValue: DateValueType, index: number) => {
    setValue(newValue);
    const cloneInits = [...inits];
    if (newValue) {
      cloneInits[index].start_date = newValue.startDate as string;
      cloneInits[index].end_date = newValue.endDate as string;
    }
    setInits(cloneInits);
    setEditingSection({
      section: '',
      index: -1
    });
  };

  const onEdit = useCallback((section: ExperienceKeys, idx: number) => {
    setEditingSection({
      section,
      index: idx
    });
  }, [])

  const onBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>, section: ExperienceKeys, index: number) => {
    const cloneInits = [...inits];
    const value = e.target.value;
    if (section !== '') {
      cloneInits[index][section] = value;
    }
    setInits(cloneInits);
    setEditingSection({
      section: '',
      index: -1
    });
  }, [inits]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>, section: ExperienceKeys, index: number) => {
    const cloneInits = [...inits];
    const value = e.currentTarget.value;
    if (section !== '') {
      cloneInits[index][section] = value;
    }
    setInits(cloneInits);
    setEditingSection({
      section: '',
      index: -1
    });
  }, [inits]);

  return (
    <Section icon={<FileDoc size={14} color="#00bc91" />} iconText="About me">
      <div className="mb-8 mt-7 md:my-10 section-title">
        <div className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Work&nbsp;
            <span className="text-[#00bc91] font-semibold">Experience</span>
          </h2>
        </div>
        <p className="max-w-2xl mt-4 md:mt-6 subtitle">
          I design products that are more than pretty. I make them shippable and
          usable, ttempor non mollit dolor et do aute
        </p>
      </div>
      <div className="experience">
        <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
          {inits.map((item, index) => (
            <li key={item.id} className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none">
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                {editingSection.section === 'company_name' && editingSection.index === index ? (
                  <input
                    defaultValue={item.company_name}
                    onBlur={(e) => onBlur(e, 'company_name', index)}
                    // onChange={(e) => onChangeExperiences(e, 'company_name', index)}
                  />
                ) : (
                  <h6
                    className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100"
                    onClick={() => onEdit('company_name', index)}
                  >
                    {item.company_name}
                  </h6>
                )}
                {editingSection.section === 'start_date' && editingSection.index === index ? (
                  <Datepicker
                    value={value} 
                    onChange={(value) => handleValueChange(value, index)}
                    displayFormat="MMM/YYYY"
                    inputClassName="relative transition-all duration-300 py-2.5 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white disabled:opacity-40 disabled:cursor-not-allowed"
                  />
                ) : (
                  <p
                    className="text-[13px] md:text-sm text-[#00bc91]"
                    onClick={() => onEdit('start_date', index)}
                  >
                  {dayjs(item.start_date).format('MMM-YYYY')} - {dayjs(item.end_date).format('MMM-YYYY')}
                  </p>
                )}
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-[#00bc91] md:before:rounded-full md:before:shadow-dots_glow">
                <input
                    defaultValue={item.position}
                    onBlur={(e) => onBlur(e, 'position', index)}
                    onKeyDown={e => onKeyDown(e, 'position', index)}
                    className="w-full text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5 hover:bg-[#f8f8f8]"
                    // onChange={(e) => onChangeExperiences(e, 'company_name', index)}
                  />
                 <textarea
                    defaultValue={item.description}
                    onKeyDown={e => onKeyDown(e, 'position', index)}
                    onBlur={(e) => onBlur(e, 'description', index)}
                    className="w-full hover:bg-[#f8f8f8]"
                    // onChange={(e) => onChangeExperiences(e, 'company_name', index)}
                  />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
