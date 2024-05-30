import React from "react";
import {
  AddressBook,
  MapPin,
  EnvelopeOpen,
  Phone,
} from "@phosphor-icons/react";

import { Section } from "../section/section";

export const ContactMe: React.FC = () => {
  return (
    <Section
      sectionId="contacts"
      icon={<AddressBook size={14} color="#00bc91" />}
      iconText="Contact"
    >
      <div className="mb-8 mt-7 md:my-10 section-title">
        <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
          Contact&nbsp;
          <span className="font-semibold text-[#00bc91]">Me.</span>
        </h2>
        <p className="max-w-2xl mt-4 md:mt-6 subtitle">
          Please contact me for works
        </p>
      </div>
      <div className="grid gap-12 mt-8 mb-10 md:my-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <ul className="space-y-6 md:space-y-10 2xl:space-y-12 contact-info">
            <li className="flex flex-wrap items-center gap-5 ">
              <div className="flex justify-center w-12 icon">
                <MapPin size={40} color="#00bc91" />
              </div>
              <div className="flex-1">
                <h6 className="text-lg text-black dark:text-white">Location</h6>
                <p className="text-sm">Ly Thuong Kiet, TPHCM</p>
              </div>
            </li>
            <li className="flex flex-wrap items-center gap-5 ">
              <div className="flex justify-center w-12 icon">
                <EnvelopeOpen size={40} color="#00bc91" />
              </div>
              <div className="flex-1">
                <h6 className="text-lg text-black dark:text-white">E-mail</h6>
                <p className="text-sm">nguyenson18296@gmail.com</p>
              </div>
            </li>
            <li className="flex flex-wrap items-center gap-5 ">
              <div className="flex justify-center w-12 icon">
                <Phone size={40} color="#00bc91" />
              </div>
              <div className="flex-1">
                <h6 className="text-lg text-black dark:text-white">Phone</h6>
                <p className="text-sm">0773927608</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:col-span-7">
          <form className="space-y-4">
            <div className="form-group">
              <input
                placeholder="Name"
                className="w-full p-5 border-[#e8e8e8] border text-sm outline-none h-13 focus:border-[#e8e8e8] dark:focus:border-[#e8e8e8] dark:placeholder:text-white/40"
                required
                type="text"
                value=""
                name="fullName"
              />
            </div>
            <div className="form-group">
              <input
                placeholder="Email Address"
                className="w-full p-5 text-sm border-[#e8e8e8] border outline-none h-13 focus:border-[#e8e8e8] dark:focus:border-[#e8e8e8] dark:placeholder:text-white/40"
                required
                type="email"
                value=""
                name="email"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Message"
                name="message"
                className="w-full border-[#e8e8e8] border px-5 py-4 text-sm outline-none focus:border-[#e8e8e8] dark:placeholder:text-white/40"
                rows={5}
                required
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-[15px] font-medium border border-[#00bc91] bg-[#00bc91] text-white py-3 px-8 rounded-3xl leading-none transition-all duration-300 hover:bg-[#069c7a] hover:border-[#069c7a]"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
