import { AboutMe } from "@/components/AboutMe/about-me";
import { MyServices } from "@/components/MyServices/my-services";
import { WorkExperience } from "@/components/WorkExperience/work-experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative mx-auto minfo__contentBox max-w-container xl:max-2xl:max-w-65rem">
        <AboutMe />
        <MyServices />
        <WorkExperience />
      </div>
    </main>
  );
}
