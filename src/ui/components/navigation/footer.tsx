import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
export const Footer = () => {
  const curentYear = new Date().getFullYear();

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
        <div className="">Liste de liens</div>
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
