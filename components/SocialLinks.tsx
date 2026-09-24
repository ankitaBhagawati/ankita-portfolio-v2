import { Fragment } from "react";
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "@/components/SocialIcons";
import { social } from "@/lib/site-config";

const links = [
  {
    key: "email",
    label: "Email",
    href: `mailto:${social.email}`,
    render: (cls: string, brand: boolean) => (
      <MailIcon className={`${cls} ${brand ? "text-[#EA4335]" : ""}`} />
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    href: social.instagram,
    render: (cls: string, brand: boolean) => (
      <InstagramIcon colored={brand} className={cls} />
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: social.linkedin,
    render: (cls: string, brand: boolean) => (
      <LinkedInIcon className={`${cls} ${brand ? "text-[#0A66C2]" : ""}`} />
    ),
  },
  {
    key: "x",
    label: "X",
    href: social.x,
    render: (cls: string, brand: boolean) => (
      <XIcon className={`${cls} ${brand ? "text-black" : ""}`} />
    ),
  },
];

export default function SocialLinks({ brand = false }: { brand?: boolean }) {
  const circle = brand
    ? "h-10 w-10 bg-[var(--cream)] transition-transform hover:scale-110 sm:h-12 sm:w-12"
    : "icon-btn h-9 w-9 border border-[rgba(237,234,226,0.35)] text-[var(--cream)] transition-colors";
  const iconCls = brand ? "h-5 w-5 sm:h-6 sm:w-6" : "h-[17px] w-[17px]";

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-5">
      {links.map(({ key, label, href, render }, i) => (
        <Fragment key={key}>
          {i > 0 && (
            <span
              aria-hidden="true"
              className="h-5 w-px flex-none bg-[rgba(237,234,226,0.35)]"
            />
          )}
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noopener" })}
            className={`flex flex-none items-center justify-center rounded-full ${circle}`}
          >
            {render(iconCls, brand)}
          </a>
        </Fragment>
      ))}
    </div>
  );
}
