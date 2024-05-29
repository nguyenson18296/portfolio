"use client";
import { AboutMe } from "@/components/AboutMe/about-me";
import { MyServices } from "@/components/MyServices/my-services";
import { WorkExperience } from "@/components/WorkExperience/work-experience";
import { Portfolio } from "@/components/Portfolio/portfolio";
import { ContactMe } from "@/components/ContactMe/contact-me";
import { SideInfo } from "@/components/SideInfo/side-info";

export default function Home() {
  return (
    <main>
      <SideInfo />
      <div className="relative mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-[65rem]">
        <AboutMe />
        <MyServices />
        <WorkExperience />
        <Portfolio />
        <ContactMe />
      </div>
    </main>
  );
}
