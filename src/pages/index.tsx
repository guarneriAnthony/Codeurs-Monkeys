import { Seo } from "@/ui/components/seo";
import { RiAncientGateFill, RiAmazonFill } from "react-icons/ri";

import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import { Spinner } from "@/ui/design-system/ spinner/spinner";


export default function Home() {
  return (
    <>
      <Seo  title="Codeurs Monkeys is now online" description="Codeurs Monkeys 'Description'"/>
      

    <div className="flex items-center gap-4 p-10">
      <Button size="small">Accent</Button>
      <Button size="small" variant="secondary">Secondary</Button>
      <Button size="small" variant="outline">Outline</Button>
      <Button size="small" variant="disabled" disabled>Disabled</Button>
      <Button size="small" variant="ico" icon={{icon: RiAmazonFill}}/>
    </div>
    <div className="flex items-center gap-4 p-10">
      <Button isLoading size="small">Accent</Button>
      <Button isLoading size="small" variant="secondary">Secondary</Button>
      <Button isLoading size="small" variant="outline">Outline</Button>
      <Button isLoading size="small" variant="disabled" disabled>Disabled</Button>
      <Button isLoading size="small" variant="ico" icon={{icon: RiAmazonFill}}/>
    </div>
    <div className="flex items-center gap-4 p-10">
      <Button >Accent</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="disabled" disabled>Disabled</Button>
      <Button variant="ico" icon={{icon: RiAmazonFill}}/>
    </div>
    <div className="flex items-center gap-4 p-10">
      <Button size="large">Accent</Button>
      <Button size="large" variant="secondary">Secondary</Button>
      <Button size="large" variant="outline">Outline</Button>
      <Button size="large" variant="disabled" disabled>Disabled</Button>
      <Button size="large" variant="ico" icon={{icon: RiAmazonFill}}/>
      <Button size="large" variant="outline" icon={{icon: RiAmazonFill}}>lenghtMore</Button>    
    </div>

    <div className=" flex items-center gap-4 p-10">
      <Button size="large" variant="ico" iconTheme="accent" icon={{icon: RiAmazonFill}}/>
      <Button size="large" variant="ico" iconTheme="secondary" icon={{icon: RiAmazonFill}}/>
      <Button size="large" variant="ico" iconTheme="secondary" icon={{icon: RiAmazonFill}}/>
      <Button size="large" variant="ico" iconTheme="gray" icon={{icon: RiAmazonFill}}/>
    </div>
    <div className=" flex items-center gap-4 p-10">
      <Button isLoading size="large" variant="ico" iconTheme="accent" icon={{icon: RiAmazonFill}}/>
      <Button isLoading size="large" variant="ico" iconTheme="secondary" icon={{icon: RiAmazonFill}}/>
      <Button isLoading size="large" variant="ico" iconTheme="secondary" icon={{icon: RiAmazonFill}}/>
      <Button isLoading size="large" variant="ico" iconTheme="gray" icon={{icon: RiAmazonFill}}/>
    </div>
    


      {/*
      <div className="space-y-5">
        <Typography theme="primary" variant="display" component="div">Codeurs Monkeys</Typography>
        <Typography theme="gray" variant="h1" component="div">Codeurs Monkeys</Typography>
        <Typography theme="secondary" variant="lead" component="div">Codeurs Monkeys</Typography>
        <Typography variant="caption4" component="div">Codeurs Monkeys</Typography>
        <Typography variant="caption4" weight="medium"  component="div">Codeurs Monkeys</Typography>
      </div>
      */}
    </>
  );
}
