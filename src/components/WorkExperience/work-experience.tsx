"use client";
import { FileDoc } from "@phosphor-icons/react";
import Datepicker, { type DateValueType } from "react-tailwindcss-datepicker";
import dayjs from "dayjs";

import { Section } from "../section/section";
import { useCallback, useState } from "react";
import Link from "next/link";

interface IExperience {
  id: number;
  company_name: string;
  start_date: string;
  end_date: string;
  position: string;
  descriptions: string[];
}

// Omit 'id' from IExperience and then use 'keyof' to create a union type of the remaining keys
type ExperienceKeys = keyof Omit<IExperience, "id"> | "";

const EXPERIENCES: IExperience[] = [
  {
    id: 1,
    company_name: "LHV Software",
    start_date: "June 2021",
    end_date: "Dec 2023",
    position: "Senior Frontend Developer",
    descriptions: [
      'Contribute to GoodData repos.',
      'Report the process of work to managers daily.',
      'Working and colaborating with Czech co-workers using English.',
      'Demo new features with FE teams by English.',
      'Communicate effectively with team members from Backend team, QA/QC team.'
    ]
  },
  {
    id: 2,
    company_name: "Arrow ltd",
    start_date: "Mar 2020",
    end_date: "May 2021",
    position: "Frontend Developer",
    descriptions: [
      'Take responsibility of front-end with projects.',
      'Research and implement third libraries for website.',
      'Research and reading article to optimize the website.',
      'Reading projects document and do as required.',
      'Develop and maintain front-end features of projects.',
      'Communicate effectively with team members from Backend team, QC team to deliver best product for customers.'
    ]
  },
  {
    id: 3,
    company_name: "Rockship",
    start_date: "Oct 2018",
    end_date: "Feb 2020",
    position: "Frontend Developer",
    descriptions: [
      'Take responsibility of front-end with projects.',
      'Research and implement third libraries for website.',
      'Develop and maintain front-end features of projects.',
      'Interact with Design team, Backend team, Marketing team.',
      'Communicate effectively with team members to accomplish objectives on schedule.'
    ]
  },
];

const PROJECTS = [
  {
    id: 1,
    start_date: 'Feb 2024',
    end_date: new Date().toString(),
    project_name: 'Travelist',
    website: 'https://travelist.jp/',
    position: 'Frontend Developer',
    descriptions: [
      'Building new features',
      'Communicate with other teams to clarify requirements, and work in parallel with the backend team',
      'Refactor old codes',
      'Code review for other team members',
      'Technologies/Libraries: VueJS, Nuxt, Vuex, Docker,...'
    ]
  },
  {
    id: 2,
    start_date: 'May 2023',
    end_date: 'Feb 2024',
    project_name: 'Giftpad',
    website: 'https://giftpad.jp/',
    position: 'Frontend Developer',
    descriptions: [
      'Building admin dashboard for admin user.',
      'Building reuseable components.',
      'Writing unit test',
      'Refactor old codes',
      'Code review for other team members',
      'Technologies/Libraries: VueJS, Nuxt, Vuex, Jest, Docker,...'
    ]
  },
  {
    id: 3,
    start_date: 'June 2021',
    end_date: 'Dec 2023',
    project_name: 'GoodData',
    website: 'https://gooddata.com/',
    position: 'Frontend Developer',
    descriptions: [
      'Reading documents, requirements and building the features cover all of the requirements.',
      'Creating UI base on Figma designs.',
      'Building reuseable components.',
      'Writing unit test, integration test, E2E test...',
      'Research new services and integrate with current projects: Appcues, Strapi CMS, Hubspot, Auth0,...',
      'Technologies/Libraries: React + Typescript, Redux, Redux Saga, jest, enzyme, cypress, react-testing-lbrary, storybook, Docker,...',
      'Fix bugs on old applications using Emberjs.'
    ]
  },
  {
    id: 4,
    start_date: 'Apr 2020',
    end_date: 'May 2021',
    project_name: 'Lottery Backend Client',
    website: '',
    position: 'Frontend Developer',
    descriptions: [
      'Read website documents and do as required.',
      'Working with backend team about API.',
      'Research document to find the way to optimize the website.',
      'Technologies/Libraries: Redux, React Hook Form, React i18next, React-virtualized, lodash, moment, Bootstrap, quilljs, WebSocket...',
    ]
  },
  {
    id: 5,
    start_date: 'Sep 2020',
    end_date: 'Jan 2021',
    project_name: 'Sporta',
    website: 'https://www.sporta.vn/',
    position: 'Frontend Developer',
    descriptions: [
      'Working with backend team',
      'Research document to find the way to optimize the website.',
      'Technologies/Libraries: Chartjs, Redux, React Hook Form, Semantic UI, lodash, dayjs, styled-component, Nextjs...',
    ]
  },
  {
    id: 6,
    start_date: 'Apr 2019',
    end_date: 'Feb 2020',
    project_name: 'Apac Law Firm',
    website: '',
    position: 'Frontend Developer',
    descriptions: [
      'Take responsibility of front-end: code, performance of website.',
      'Research document and implement third libraries',
      'Technologies/Libraries: HTML/CSS, VueJS, Vuex, ChartJS, Vuetify, ...',
    ]
  },
  {
    id: 7,
    start_date: 'Apr 2019',
    end_date: 'Jan 2020',
    project_name: 'Isense',
    website: 'https://www.isensegroup.com/',
    position: 'Frontend Developer',
    descriptions: [
      'Build layout from design.',
      'Research document and implement third libraries',
      'Technologies/Libraries: HTML5/ CSS3, React, Redux, Material UI, ChartJS, ...',
    ]
  },
  {
    id: 8,
    start_date: 'Jan 2019',
    end_date: 'June 2019',
    project_name: 'Meta.us',
    website: '',
    position: 'Frontend Developer',
    descriptions: [
      'Buiding layout from design, interact with API base on user flow, API document.',
      'Technologies/Libraries: VueJS, Vuetify, Vuex, Bulma...',
    ]
  }
]

export const WorkExperience: React.FC = () => {
  const [inits, setInits] = useState(EXPERIENCES);
  const [editingSection, setEditingSection] = useState<{
    section: ExperienceKeys;
    index: number;
  }>({
    section: "",
    index: -1,
  });
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
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
      section: "",
      index: -1,
    });
  };

  const onEdit = useCallback((section: ExperienceKeys, idx: number) => {
    setEditingSection({
      section,
      index: idx,
    });
  }, []);

  const onBlur = useCallback(
    (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
      section: ExperienceKeys,
      index: number
    ) => {
      const cloneInits = [...inits];
      const value = e.target.value;
      if (section !== "") {
        cloneInits[index][section] = value;
      }
      setInits(cloneInits);
      setEditingSection({
        section: "",
        index: -1,
      });
    },
    [inits]
  );

  const onKeyDown = useCallback(
    (
      e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
      section: ExperienceKeys,
      index: number
    ) => {
      const cloneInits = [...inits];
      const value = e.currentTarget.value;
      if (section !== "") {
        cloneInits[index][section] = value;
      }
      setInits(cloneInits);
      setEditingSection({
        section: "",
        index: -1,
      });
    },
    [inits]
  );

  return (
    <Section
      sectionId="experiences"
      icon={<FileDoc size={14} color="#00bc91" />}
      iconText="Experiences"
    >
      <div className="mb-8 mt-7 md:my-10 section-title">
        <div className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Work&nbsp;
            <span className="text-[#00bc91] font-semibold">Experience</span>
          </h2>
        </div>
        <p className="max-w-2xl mt-4 md:mt-6 subtitle">
          I built many projects, with many businesses like EdTech, Data analytic
          tools, Social network, Admin dashboard,...
        </p>
      </div>
      <h3 className="title text-[24px] my-2 md:text-2xl lg:text-3xl font-extralight text-[#00bc91] font-semibold">
        Companies
      </h3>
      <div className="experience">
        <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
          {inits.map((item, index) => (
            <li
              key={item.id}
              className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none"
            >
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                {editingSection.section === "company_name" &&
                editingSection.index === index ? (
                  <input
                    defaultValue={item.company_name}
                    onBlur={(e) => onBlur(e, "company_name", index)}
                    // onChange={(e) => onChangeExperiences(e, 'company_name', index)}
                  />
                ) : (
                  <h6
                    className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100"
                    // onClick={() => onEdit("company_name", index)}
                  >
                    {item.company_name}
                  </h6>
                )}
                <p
                    className="text-[13px] md:text-sm text-[#00bc91]"
                    onClick={() => onEdit("start_date", index)}
                  >
                    {dayjs(item.start_date).format("MMM-YYYY")} -{" "}
                    {dayjs(item.end_date).format("MMM-YYYY")}
                  </p>
                {/* {editingSection.section === "start_date" &&
                editingSection.index === index ? (
                  <Datepicker
                    value={value}
                    onChange={(value) => handleValueChange(value, index)}
                    displayFormat="MMM/YYYY"
                    inputClassName="relative transition-all duration-300 py-2.5 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white disabled:opacity-40 disabled:cursor-not-allowed"
                  />
                ) : (
                  <p
                    className="text-[13px] md:text-sm text-[#00bc91]"
                    onClick={() => onEdit("start_date", index)}
                  >
                    {dayjs(item.start_date).format("MMM-YYYY")} -{" "}
                    {dayjs(item.end_date).format("MMM-YYYY")}
                  </p>
                )} */}
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-[#00bc91] md:before:rounded-full md:before:shadow-dots_glow">
                {/* <input
                  defaultValue={item.position}
                  onBlur={(e) => onBlur(e, "position", index)}
                  onKeyDown={(e) => onKeyDown(e, "position", index)}
                  className="w-full text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5 hover:bg-[#f8f8f8]"
                  // onChange={(e) => onChangeExperiences(e, 'company_name', index)}
                />
                <textarea
                  defaultValue={item.description}
                  onKeyDown={(e) => onKeyDown(e, "position", index)}
                  onBlur={(e) => onBlur(e, "description", index)}
                  className="w-full hover:bg-[#f8f8f8]"
                  // onChange={(e) => onChangeExperiences(e, 'company_name', index)}
                /> */}
                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  {item.position}
                </h4>
                <ul className="list-disc">
                  {item.descriptions.map((desc, idx) => (
                    <li key={idx}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <h2 className="title text-[24px] my-2 md:text-2xl lg:text-3xl font-extralight text-[#00bc91] font-semibold">
        Projects
      </h2>
      <div className="projects mt-4">
        <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2">
          {PROJECTS.map((item, index) => (
            <li
              key={item.id}
              className="p-5 border rounded-xl md:flex max-md:space-y-2 border-platinum dark:border-metalBlack md:border-0 md:p-0 md:rounded-none"
            >
              <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                {editingSection.section === "company_name" &&
                editingSection.index === index ? (
                  <input
                    defaultValue={item.project_name}
                    onBlur={(e) => onBlur(e, "company_name", index)}
                    // onChange={(e) => onChangeExperiences(e, 'company_name', index)}
                  />
                ) : (
                  <h6
                    className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100"
                    // onClick={() => onEdit("company_name", index)}
                  >
                    {item.project_name}
                   <p className="my-1">
                    <Link href={item.website} className="hover:text-[#00bc91]" target="_blank">
                        {item.website}
                      </Link>
                   </p>
                  </h6>
                )}
                <p
                    className="text-[13px] md:text-sm text-[#00bc91]"
                    onClick={() => onEdit("start_date", index)}
                  >
                    {dayjs(item.start_date).format("MMM-YYYY")} -{" "}
                    {dayjs(item.end_date).format("MMM-YYYY")}
                  </p>
              </div>
              <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-[#00bc91] md:before:rounded-full md:before:shadow-dots_glow">
                <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                  {item.position}
                </h4>
                <ul className="list-disc">
                  {item.descriptions.map((desc, idx) => (
                    <li key={idx}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
