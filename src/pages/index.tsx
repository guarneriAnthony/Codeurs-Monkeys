import { Seo } from "@/ui/components/seo/seo";
import { RiAmazonFill, RiAncientGateFill } from "react-icons/ri";

import { Container } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Spinner } from "@/ui/design-system/ spinner/spinner";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo
        title="Codeurs Monkeys is now online"
        description="Codeurs Monkeys 'Description'"
      />

      <Navigation />
      <Footer/>
    </>
  );
}
