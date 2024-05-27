import { useCallback, useState, KeyboardEvent } from "react";
import {
  GithubLogo,
  Globe,
  Icon,
  Phone,
  SkypeLogo,
  Envelope,
  XCircle
} from "@phosphor-icons/react";
import cx from "classnames";

import { Input } from "../commons/input";

type TContact = "github" | "language" | "phone" | "skype" | "email";

interface IContact {
  id: TContact;
  name: string;
  icon: Icon;
}

interface IContactInfo extends IContact {
  value: string;
}

const LIST_CONTACT_ITEM: IContact[] = [
  {
    id: "github",
    name: "Github",
    icon: GithubLogo,
  },
  {
    id: "language",
    name: "Language",
    icon: Globe,
  },
  {
    id: "phone",
    name: "Phone",
    icon: Phone,
  },
  {
    id: "skype",
    name: "Skype",
    icon: SkypeLogo,
  },
  {
    id: "email",
    name: "Email",
    icon: Envelope,
  },
];

export const Contact: React.FC = () => {
  const [initContacts, setInitContacts] = useState(LIST_CONTACT_ITEM);
  const [contacts, setContacts] = useState<IContactInfo[]>([]);
  const [activeType, setActiveType] = useState<IContactInfo>();
  const [contactText, setContactText] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);

  const onAddContact = useCallback((type: TContact) => {
    const selectedType = LIST_CONTACT_ITEM?.find(
      (contact) => contact.id === type
    );
    if (selectedType) {
      setActiveType({
        ...selectedType,
        value: "",
      });
    }
  }, []);

  const onPushContact = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        let cloneContacts = [...contacts];
        const newContact: IContactInfo = {
          ...activeType,
          value: contactText,
        };
        if (activeType) {
          if (isEditing) {
            const editedTypeIndex = cloneContacts.findIndex(contact => contact.id === activeType.id)
            if (editedTypeIndex > -1) {
              cloneContacts[editedTypeIndex].value = contactText;
            }
            setIsEditing(false)
          } else {
            cloneContacts = cloneContacts.concat(newContact);
          }
          setContacts(cloneContacts);
          setContactText("");
          setActiveType(undefined);
          const restContact = [...initContacts].filter(
            (item) => item.id !== activeType.id
          );
          setInitContacts(restContact);
        }
      }
    },
    [contacts, isEditing, initContacts, contactText, activeType]
  );

  const onEditContactItem = useCallback(
    (id: TContact) => {
      setIsEditing(true);
      const activeType = contacts.find((item) => item.id === id);
      setActiveType(activeType);
      setContactText(activeType?.value || '');
    },
    [contacts]
  );

  const onBlur = useCallback(() => {
    setIsEditing(false)
  }, []);

  const onRemoveContact = useCallback((removedType: TContact) => {
    const cloneInitContact = [...initContacts];
    const removedContact = LIST_CONTACT_ITEM.find(item => item.id === removedType);
    if (removedContact) {
      setInitContacts([...cloneInitContact, removedContact])
    }
    const newContacts = [...contacts].filter(type => type.id !== removedType)
    setContacts(newContacts);
  }, [contacts, initContacts]);

  return (
    <div>
      <h4>Add Contact Information</h4>
      <div className="mt-2 inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">
        {initContacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <span
              onClick={() => onAddContact(contact.id)}
              key={contact.id}
              className="flex items-center cursor-pointer inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md: md:py-2 hover:text-theme dark:hover:text-white"
            >
              <Icon />
              <span className="ml-1">{contact.name}</span>
            </span>
          );
        })}
      </div>
      <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3">
        {contacts?.map((contact) => (
          <li key={contact.id} className="flex items-center">
            <div className="group relative w-1/3 min-w-max">
              <span className="flex-[0_0_6rem]">{contact?.name}</span>
              <span className="flex-[0_0_2rem]">:</span>
              {(isEditing && activeType?.id === contact.id) ? (
                <Input
                  onBlur={onBlur}
                  onKeyDown={onPushContact}
                  text={contactText}
                  setText={setContactText}
                />
              ) : (
                <span
                  className={cx(
                    "text-black dark:text-white py-1 px-2",
                    "hover:bg-[#f0f2f3]",
                  )}
                  onClick={() => onEditContactItem(contact.id)}
                >
                  <XCircle size={16} onClick={() => onRemoveContact(contact.id)} className='absolute top-0 right-0 hidden group-hover:block cursor-pointer' />
                  {contact.value}
                </span>
              )}
            </div>
          </li>
        ))}
        {activeType && !isEditing && (
          <li className="flex items-center">
            <span className="flex-[0_0_6rem]">{activeType?.name}</span>
            <span className="flex-[0_0_2rem]">:</span>
            <Input
              onBlur={onBlur}
              onKeyDown={onPushContact}
              text={contactText}
              setText={setContactText}
            />
          </li>
        )}
      </ul>
    </div>
  );
};
