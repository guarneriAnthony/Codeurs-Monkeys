import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";

import { RiAmazonFill } from "react-icons/ri";

export default function DesignSystem() {
  return (
    <>
      <Seo
        title="DesignSystem is now online"
        description="DesignSystem description"
      />

      <Navigation />

      <Container className="space-y-5">
        {/*Typography */}
        <div className="text-center">
          <Typography theme="primary" variant="display" component="div">
            Codeurs Monkeys
          </Typography>
          <Typography theme="gray" variant="h1" component="div">
            Codeurs Monkeys
          </Typography>
          <Typography theme="secondary" variant="lead" component="div">
            Codeurs Monkeys
          </Typography>
          <Typography variant="caption4" component="div">
            Codeurs Monkeys
          </Typography>
          <Typography variant="caption4" weight="medium" component="div">
            Codeurs Monkeys
          </Typography>
        </div>

        {/*Logo */}
        <div className="flex items-center justify-center gap-4 p-10">
          <Logo size="small"></Logo>
          <Logo></Logo>
          <Logo size="large"></Logo>
        </div>

        {/*Avatar */}
        <div className="flex items-center justify-center gap-4 p-10">
          <Avatar
            size="small"
            src="assets/images/cat.png"
            alt="Image Profile"
          />
          <Avatar src="assets/images/profil.png" alt="Image Profile" />
          <Avatar
            size="large"
            src="assets/images/siga.png"
            alt="Image Profile"
          />
        </div>

        {/*Buttons */}
        <div className="flex items-center justify-center gap-4 p-10">
          <Button size="small">Accent</Button>
          <Button size="small" variant="secondary">
            Secondary
          </Button>
          <Button size="small" variant="outline">
            Outline
          </Button>
          <Button size="small" variant="disabled" disabled>
            Disabled
          </Button>
          <Button size="small" variant="ico" icon={{ icon: RiAmazonFill }} />
        </div>

        {/*Spinner */}
        <div className="flex items-center justify-center gap-4 p-10">
          <Button isLoading size="small">
            Accent
          </Button>
          <Button isLoading size="small" variant="secondary">
            Secondary
          </Button>
          <Button isLoading size="small" variant="outline">
            Outline
          </Button>
          <Button isLoading size="small" variant="disabled" disabled>
            Disabled
          </Button>
          <Button
            isLoading
            size="small"
            variant="ico"
            icon={{ icon: RiAmazonFill }}
          />
        </div>
        <div className="flex items-center justify-center gap-4 p-10">
          <Button>Accent</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="disabled" disabled>
            Disabled
          </Button>
          <Button variant="ico" icon={{ icon: RiAmazonFill }} />
        </div>
        <div className="flex items-center justify-center gap-4 p-10">
          <Button size="large">Accent</Button>
          <Button size="large" variant="secondary">
            Secondary
          </Button>
          <Button size="large" variant="outline">
            Outline
          </Button>
          <Button size="large" variant="disabled" disabled>
            Disabled
          </Button>
          <Button size="large" variant="ico" icon={{ icon: RiAmazonFill }} />
        </div>

        {/*Buttons */}
        <div className=" flex items-center justify-center gap-4 p-10">
          <Button
            isLoading
            size="small"
            variant="ico"
            iconTheme="accent"
            icon={{ icon: RiAmazonFill }}
          />
          <Button
            isLoading
            variant="ico"
            iconTheme="secondary"
            icon={{ icon: RiAmazonFill }}
          />
          <Button
            isLoading
            size="large"
            variant="ico"
            iconTheme="gray"
            icon={{ icon: RiAmazonFill }}
          />
          <Button size="large" variant="outline" icon={{ icon: RiAmazonFill }}>
            lenghtMore
          </Button>
        </div>
      </Container>
    </>
  );
}
