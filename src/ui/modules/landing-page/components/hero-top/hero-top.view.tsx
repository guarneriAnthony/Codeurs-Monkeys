import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="relative pt-40 pb-40 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="max-w-lg">
          Rejoins les codeurs Monkeys
        </Typography>
        <Typography
          variant="body-lg"
          theme="gray"
          component="p"
          className="max-w-xl"
        >
          Ici, on se prend pas la tete mais on code commes des betes. Rejoins
          notre tribu des codeurs Monkeys, partage tes projets les plus fous et
          fait tou de nouveaux amis développeurs
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="">Commencer</Button>
          <Button baseUrl="" variant="secondary">
            En savoir plus{" "}
          </Button>
        </div>
      </div>
      <Image
        src="/assets/svg/rocket.svg"
        alt="illustration dune fusée"
        width={811}
        height={596}
        className="absolute top-0 right-0 z-0"
      />
    </Container>
  );
};
