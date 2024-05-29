'use client'
import React, { useCallback, useState } from "react";
import Select, { StylesConfig } from 'react-select';
import Image from "next/image";
import cx from 'classnames';

import reactIcon from '@/assets/react.png'
import vueIcon from '@/assets/vue.png'
import angular from '@/assets/angular.png';
import phpIcon from '@/assets/php.png'
import htmlIcon from '@/assets/html.png'

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

interface ISKills {
  value: string;
  label: React.JSX.Element;
}

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles, { isDisabled}) => {
    return {
      ...styles,
      cursor: isDisabled ? 'not-allowed' : 'default',
      // This is an example: backgroundColor: isDisabled ? 'rgba(206, 217, 224, 0.5)' : 'white'
      color: isDisabled ? '#aaa' : 'white'
    }
  },
  // For the options
  option: (styles, { isDisabled}) => {
    return {
      ...styles,
      opacity: isDisabled ? '0.5' : '1',
      color: 'black',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
};

const options: ISKills[] = [
  {
    value: 'reactjs',
    label: <div className="flex items-center">
      <Image src={reactIcon} alt="react" width={20} height={20} />
      <span className="ml-2 text-[13px] font-normal dark:font-light">
        ReactJS
      </span>
    </div>
  },
  {
    value: 'vuejs',
    label: <div className="flex items-center">
      <Image src={vueIcon} alt="vue" width={20} height={20} />
      <span className="ml-2 text-[13px] font-normal dark:font-light">
        VueJS
      </span>
    </div>
  },
  {
    value: 'angularjs',
    label: <div className="flex items-center">
      <Image src={angular} alt="angular" width={20} height={20} />
      <span className="ml-2 text-[13px] font-normal dark:font-light">
        AngularJS
      </span>
    </div>
  },
  {
    value: 'HTML',
    label: <div className="flex items-center">
      <Image src={htmlIcon} alt="html" width={20} height={20} />
      <span className="ml-2 text-[13px] font-normal dark:font-light">
        HTML
      </span>
    </div>
  },
  {
    value: 'php',
    label: <div className="flex items-center">
      <Image src={phpIcon} alt="php" width={20} height={20} />
      <span className="ml-2 text-[13px] font-normal dark:font-light">
        PHP
      </span>
    </div>
  }
]


export const SelectSkills: React.FC = () => {
  const [initOptions, setInitOptions] = useState<ISKills[]>(options);
  const [skills, setSkills] = useState<ISKills[]>([]);

  const onChange = useCallback((value: ISKills) => {
    const cloneSkills = [...skills];
    setSkills([...cloneSkills, value])
  }, [skills]);

  return (
    <div>
      <Select
        options={initOptions}
        onChange={onChange}
        isOptionDisabled={option => skills.map(skill => skill.label).includes(option.label)}
        styles={colourStyles}
        className="my-2"
      />
      <ul className="my-3">
        {skills.map(item => (
        <li
          key={item.value}
          className="my-2"
        >
          {item.label}
        </li>
        ))}
      </ul>
    </div>
  )
}