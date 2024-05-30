'use client'
import { Bag, PenNib, Code, RocketLaunch, BellSimpleRinging } from '@phosphor-icons/react';

import { Section } from "../section/section";

const SERVICES = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'I design products that are more than pretty. I make them shippable.',
    icon: <PenNib size={32} color='#00bc91' />
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'I design products that are more than pretty. I make them shippable.',
    icon: <Code size={32} color='#00bc91' />
  },
  {
    id: 3,
    title: 'SEO / Marketing',
    description: 'I design products that are more than pretty. I make them shippable.',
    icon: <RocketLaunch size={32} color='#00bc91' />
  },
  {
    id: 4,
    title: 'Branding & Strategy',
    description: 'I design products that are more than pretty. I make them shippable.',
    icon: <BellSimpleRinging size={32} color='#00bc91' />
  }
]

export const MyServices: React.FC = () => {
  return (
    <Section
      sectionId='services'
      icon={<Bag size={14} color='#00bc91' />}
      iconText="Services"
    >
      <div className="mb-8 mt-7 md:my-10 section-title">
        <div className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My&nbsp;
            <span className="text-[#00bc91] font-semibold">Services</span>
          </h2>
        </div>
        <p className='max-w-2xl mt-4 md:mt-6 subtitle'>
          I built many projects, with many businesses like EdTech, Data analytic tools, Social network, Admin dashboard,...
        </p>
        </div>
        <div className="grid gap-5 md:gap-6 service-card-wrapper sm:grid-cols-2 lg:gap-7 2xl:gap-8">
          {SERVICES.map(service => {
            const Icon = service.icon;
            return (
              <div key={service.id} className='relative p-5 transition duration-300 border py-7 md:p-7 card-item group border-platinum dark:border-metalBlack rounded-2xl xl:p-8 2xl:p-10 hover:border-theme'>
                <div className='absolute transition duration-300 md:top-10 icon right-6 top-7 md:right-8 group-hover:-rotate-45 lg:top-11'>
                  {Icon}
                </div>
                <div className='text-5xl font-extrabold transition duration-300 md:text-6xl number lg:text-7xl text-greyBlack opacity-30 group-hover:opacity-100'>
                  0{service.id}
                </div>
                <h4 className='mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl'>
                  {service.title}
                </h4>
                <p>
                  {service.description}
                </p>
              </div>
            )
          })}
       </div>
    </Section>
  );
};
