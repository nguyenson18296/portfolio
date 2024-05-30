import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  House,
  User,
  Bag,
  FileDoc,
  BookOpen,
  AddressBook,
  ShareNetwork,
  FacebookLogo,
  XLogo,
  InstagramLogo,
  LinkedinLogo,
  Icon,
} from "@phosphor-icons/react";
import cx from "classnames";

type TSection =
  | "Home"
  | "About Me"
  | "My Services"
  | "Experiences"
  | "Projects"
  | "Contacts";

interface INavigation {
  id: TSection;
  link: string;
  logo: Icon;
}

const NAVIGATION: INavigation[] = [
  {
    id: "Home",
    link: "#home",
    logo: House,
  },
  {
    id: "About Me",
    link: "#about-me",
    logo: User,
  },
  {
    id: "My Services",
    link: "#services",
    logo: Bag,
  },
  {
    id: "Experiences",
    link: "#experiences",
    logo: FileDoc,
  },
  {
    id: "Projects",
    link: "#projects",
    logo: BookOpen,
  },
  {
    id: "Contacts",
    link: "#contacts",
    logo: AddressBook,
  },
];

export const Navigation: React.FC = () => {
  const [active, setActive] = useState<INavigation>(NAVIGATION[0]);

  const onScrollToSection = useCallback((section: INavigation) => {
    setActive(section);
  }, []);

  return (
    <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4">
      <div className="flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack">
        <Link href="/">
          <Image
            src="https://minfo-nextjs.netlify.app/_next/static/media/site-logo.ffaeda1f.svg"
            alt="logo"
            width={30}
            height={30}
          />
        </Link>
      </div>
      <div className="my-4 menu">
        <ul className="space-y-2 text-center minfo__nav__items">
          {NAVIGATION.map((nav) => {
            const Icon = nav.logo;
            return (
              <li
                key={nav.id}
                className="relative group"
                onClick={() => onScrollToSection(nav)}
              >
                <Link
                  data-title={nav.id}
                  href={nav.link}
                  className={cx(
                    "w-9 h-9 block flex items-center text-[#00bc91] justify-center rounded-full dark:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:min-w-max before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100",
                    {
                      "bg-white": active.id === nav.id,
                    }
                  )}
                >
                  <span className="text-[#00bc91]">
                    <Icon
                      size={16}
                      color={active.id === nav.id ? "#00bc91" : "black"}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative share group">
        <button className="w-10 h-10 flex items-center justify-center text-sm border rounded-full border-platinum dark:border-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white">
          <ShareNetwork size={18} color="#000000" />
        </button>
        <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1">
          <Link
            href="#"
            className="flex transition duration-200 hover:text-theme"
            title="Share with Facebook"
          >
            <FacebookLogo size={16} />
          </Link>
          <Link
            href="#"
            className="flex transition duration-200 hover:text-theme"
            title="Share with twitter"
          >
            <XLogo size={16} />
          </Link>
          <Link
            href="#"
            className="flex transition duration-200 hover:text-theme"
            title="Share with Instagram"
          >
            <InstagramLogo size={16} />
          </Link>
          <Link
            href="#"
            className="flex transition duration-200 hover:text-theme"
            title="Share with LinkedIn"
          >
            <LinkedinLogo size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
