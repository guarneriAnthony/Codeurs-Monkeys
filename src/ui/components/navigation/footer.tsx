import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerApplicationLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import Link from "next/link";

export const Footer = () => {
  const curentYear = new Date().getFullYear();
  const footerNavigationList = footerApplicationLinks.map((element) => (
    <div key={uuidv4()}>{element.label}</div>
  ));

  return (
    <div className="bg-gray ">
      <Container className="flex justify-between pt-16">
        <div className=" flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formation Gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi à la chaine
          </Typography>
          <a
            href="https://www.linkedin.com/in/guarneri-anthony/"
            target="_blank"
          >
            <Image
              src="/assets/svg/YTB.svg"
              width={229}
              height={216}
              alt="Coders Monkeys"
            />
          </a>
        </div>
        <div className="">{footerLink()}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`Copyright © ${curentYear} | Propulsed by `}
            <a
              href="https://www.linkedin.com/in/guarneri-anthony/"
              target="_blank"
              className="underline"
            >
              Anthony Guarneri
            </a>
            {` - SigaCorp SASU`}
          </Typography>
          <div className=""></div>
        </div>
      </Container>
    </div>
  );
};

const footerLink = () => {
  const linksList = footerApplicationLinks.map((link) => (
    <div key={uuidv4()}>
      {link.type === "internal" && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        Titre
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linksList}
      </Typography>
    </div>
  );
};
