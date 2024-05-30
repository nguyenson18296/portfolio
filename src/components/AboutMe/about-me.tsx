'use client'
import { KeyboardEvent, useCallback, useState } from 'react';
import { User, PlusCircle, Check, XCircle } from '@phosphor-icons/react';

import { Section } from "../section/section";
import { IconButton } from '../commons/icon-button';
import { Input } from '../commons/input';
import { Contact } from './contact';

export const AboutMe: React.FC = () => {
  const [textSkill, setTextSkill] = useState('');
  const [skills, setSkills] = useState<string[]>([]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      let cloneSkills = [...skills];
      cloneSkills = cloneSkills.concat(textSkill);
      setSkills(cloneSkills);
      setTextSkill('');
    }
  }, [skills, textSkill]);

  const onRemoveSkill = useCallback((idx: number) => {
    const remainSkills = skills.filter((_i, index) => index !== idx);
    setSkills(remainSkills);
  }, [skills])

  return (
    <Section
      sectionId='about-me'
      icon={<User size={14} color='#00bc91' />}
      iconText="About me"
    >
      <div className="mt-7 md:mt-10 section-title">
        <div className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            About&nbsp;
            <span className="text-[#00bc91] font-semibold">Me</span>
          </h2>
        </div>
        <p className="max-w-2xl mt-4 md:mt-6 subtitle">
          I&apos;m a Frontend developer. I&apos;m working with <strong>ReactJS</strong> (tied with <strong>TypeScript</strong>) and for UI testing I use <strong>Enzyme, Jest, Cypress, React testing library</strong>… (and I also have experiences with <strong>VueJS</strong> and basic <strong>NodeJS</strong>).
        </p>
        {/* <div className='mt-6 section-content'>
          <div className='inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4'>
            {skills.length > 0 && skills.map((skill, index) => (
              <span key={index} className='group relative inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md: md:py-2 hover:text-theme dark:hover:text-white'>
                <XCircle onClick={() => onRemoveSkill(index)} size={16} className='absolute top-0 right-0 hidden group-hover:block' />
                {skill}
              </span>
            ))}
            <span className='inline-block flex items-center'>
              <Input
                text={textSkill}
                setText={setTextSkill}
                icon={<Check size={20} color='#00bc91' />}
                onKeyDown={onKeyDown}
              />
              <IconButton classNames='ml-2'>
                <PlusCircle size={32} />
              </IconButton>
            </span>
          </div>
        </div> */}
        <Contact />
        {/* <ul className='grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8'>
          <li className=""><div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl"><span className='text-[#00bc91]'>185+</span></div><div className="text-sm">Years Of Experience</div></li>
          <li className=""><div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl"><span className='text-[#00bc91]'>12+</span></div><div className="text-sm">Handled Projects</div></li>
          <li className=""><div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl"><span className='text-[#00bc91]'>5+</span></div><div className="text-sm">Open Source Libraries</div></li>
          <li className=""><div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl"><span className='text-[#00bc91]'>18+</span></div><div className="text-sm">Awards Won</div></li>
        </ul> */}
      </div>
    </Section>
  );
};
