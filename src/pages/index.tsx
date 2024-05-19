import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo  title="Codeurs Monkeys is now online" description="Codeurs Monkeys 'Description'"/>
      <div className="space-y-5">
        <Typography theme="primary" variant="display" component="div">Codeurs Monkeys</Typography>
        <Typography theme="gray" variant="h1" component="div">Codeurs Monkeys</Typography>
        <Typography theme="secondary" variant="lead" component="div">Codeurs Monkeys</Typography>
        <Typography variant="caption4" component="div">Codeurs Monkeys</Typography>
        <Typography variant="caption4" weight="medium"  component="div">Codeurs Monkeys</Typography>
      </div>
    </>
    
  );
}
