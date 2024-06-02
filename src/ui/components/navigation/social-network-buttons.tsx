import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";
import { LinkTypes } from "@/lib/link-type";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

const action = () => {
    console.log("Function action work")
};

export const SocialNetworkButtons = ({
  className,
  theme = "accent",
}: Props) => {
  const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
      }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
      action={action} // Useless action for the moment 
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
};
