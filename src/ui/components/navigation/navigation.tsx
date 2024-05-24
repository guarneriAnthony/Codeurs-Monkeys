import { Children } from "react";
import { Container } from "../container/container";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className=" border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <Link href={"/"}>
          <div className="flex items-center gap-2">
            <Logo size="small" />
            <div className=" flex flex-col">
              <div className=" text-gray font-extrabold text-[24px]">
                Codeurs Monkeys
              </div>
              <Typography variant="caption4" theme="gray" component="span">
                Trouve de linspiration & recois des feedBacks !
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="lead"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href={"/design-system"}> DesignSystems </ActiveLink>
            <Link href={"/projets"}> Projets </Link>
            <Link href={"/formations"}> Formations </Link>
            <Link href={"/contacts"}> Contacts </Link>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small" variant="secondary">
              Connexion
            </Button>
            <Button size="small">Rejoindre</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
