import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Download } from '@phosphor-icons/react';

import { SelectSkills } from "../SelectSkills/select-skills";

export const SideInfo: React.FC = () => {
  return (
    <div className="w-full mx-auto minfo__sidebar__wrapper xl:fixed xl:top-1/2 xl:left-4 2xl:left-14 xl:-translate-y-1/2 sm:max-w-sidebar xl:max-2xl:max-w-xs z-999">
      <div className="p-3 max-xl:mb-3 overflow-visible minfo__sidebar bg-white dark:bg-nightBlack rounded-2xl">
        <div className="mx-4 mt-12 text-center user-info lg:mx-6">
          <Link href="#" className="mb-2.5 h-36 w-36 block mx-auto border-6 border-platinum dark:border-[#2f2f2f] overflow-hidden rounded-full">
            <Image
              alt="Kevin de Bruyne"
              width={200}
              height={200}
              src="https://i.pinimg.com/564x/d8/c9/90/d8c990a4e36b9883bcbd8c7c3d090349.jpg"
              className="dark:block w-full h-full rounded-full"
            />
          </Link>
          <h6 className="mb-1 text-lg font-semibold text-black dark:text-white name">
            Brown Reddick
          </h6>
          <div className="leading-none cd-headline clip is-full-width">
            <h6 className="text-sm cd-words-wrapper designation text-theme after:!bg-theme">
              Web Designer
            </h6>
          </div>
        </div>
        <div className="pt-6 mx-4 border-t lg:mx-6 user-meta-info md:mx-7 my-7 border-platinum dark:border-metalBlack">
          <ul className="space-y-3">
            <li className="flex text-sm">
              <span className="flex-1 font-medium text-black dark:text-white">
                Residence:
              </span>
              <span>
                Vietnam
              </span>
            </li>
            <li className="flex text-sm">
              <span className="flex-1 font-medium text-black dark:text-white">
                City:
              </span>
              <span>
                Ho Chi Minh City
              </span>
            </li>
            <li className="flex text-sm">
              <span className="flex-1 font-medium text-black dark:text-white">
                Age:
              </span>
              <span>
                28
              </span>
            </li>
          </ul>
          <div className="py-5 rounded-2xl bg-flashWhite dark:bg-metalBlack">
            <div className="text-sm font-medium text-black dark:text-white">
              Skills
            </div>
            <SelectSkills />
          </div>
          <div>
            <a className="text-center text-sm border border-[#00bc91] bg-[#00bc91] flex items-center justify-center gap-2 text-white rounded-3xl py-3.5 transition duration-300 text-[15px] font-semibold hover:bg-[#069c7a] hover:border-[#069c7a]">
              DOWNLOAD CV
              <span className="animate-bounce">
                <Download />
              </span>
            </a>
          </div>
        </div>
        <svg className="absolute w-0 h-0"><clipPath id="my-clip-path" clipPathUnits="objectBoundingBox" stroke="white" stroke-width="2"><path d="M0.001,0.031 C0.001,0.014,0.026,0.001,0.055,0.001 H0.492 C0.506,0.001,0.52,0.004,0.53,0.009 L0.61,0.052 C0.62,0.057,0.634,0.06,0.649,0.06 H0.947 C0.977,0.06,1,0.074,1,0.091 V0.971 C1,0.987,0.977,1,0.947,1 H0.055 C0.026,1,0.001,0.987,0.001,0.971 V0.031"></path></clipPath></svg>
      </div>
    </div>
  )
}