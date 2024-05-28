"use client";
import React from "react";
import { BookOpen } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

import { Section } from "../section/section";

export const Portfolio: React.FC = () => {
  return (
    <Section icon={<BookOpen size={14} color="#00bc91" />} iconText="Portfolio">
      <div className="mb-8 mt-7 md:my-10 section-title">
        <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
          Feature&nbsp;
          <span className="font-semibold text-[#00bc91]">Projects</span>
        </h2>
        <p className="max-w-2xl mt-4 md:mt-6 subtitle">
          I design products that are more than pretty. I make them shippable and
          usable, ttempor non mollit dolor et do aute
        </p>
      </div>
      <div className="portfolio_wrapper grid sm:grid-cols-2 gap-4 lg:gap-7.5">
        <div className="relative item z-1 group md:col-span-2">
          <Link
            href="#"
            className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
          >
            <div className="img-wrapper">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/GoodData_Logo%2C_black.svg"
                width={800}
                height={300}
                alt="project"
                decoding="async"
                className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
              />
              <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100" />
            </div>
            <div className="info absolute top-1/2 left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 z-10">
              Design
              <br />
              <span>Specialization</span>
            </div>
          </Link>
        </div>
        <div className="relative item z-1 group md:col-span-1">
          <Link
            href="#"
            className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
          >
            <div className="img-wrapper">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/GoodData_Logo%2C_black.svg"
                width={800}
                height={300}
                alt="project"
                decoding="async"
                className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
              />
              <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100" />
            </div>
            <div className="info absolute top-1/2 left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 z-10">
              Design
              <br />
              <span>Specialization</span>
            </div>
          </Link>
        </div>
        <div className="relative item z-1 group md:col-span-1">
          <Link
            href="#"
            className="flex items-center justify-center p-3 overflow-hidden border md:p-4 rounded-xl border-platinum dark:border-greyBlack"
          >
            <div className="img-wrapper">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/GoodData_Logo%2C_black.svg"
                width={800}
                height={300}
                alt="project"
                decoding="async"
                className="rounded-lg max-md:min-h-[17rem] max-md:w-full max-md:object-cover max-md:object-center transition-all duration-300 group-hover:blur-xs"
              />
              <div className="absolute inset-0 transition-all duration-300 opacity-0 overlay bg-gradient-to-t from-white dark:from-black to-transparent rounded-xl group-hover:opacity-100" />
            </div>
            <div className="info absolute top-1/2 left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 text-center position-center max-lg:text-3xl text-lead font-semibold text-black dark:text-white leading-1.15 transition duration-500 scale-110 opacity-0 group-hover:scale-100 group-hover:opacity-100 z-10">
              Design
              <br />
              <span>Specialization</span>
            </div>
          </Link>
        </div>
      </div>
    </Section>
  );
};
