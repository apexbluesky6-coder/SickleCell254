import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import MissionStrip from "@/components/sections/MissionStrip";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Testimonial from "@/components/sections/Testimonial";
import WhatIsSickleCell from "@/components/sections/WhatIsSickleCell";
import Partners from "@/components/sections/Partners";
import DonateAppeal from "@/components/sections/DonateAppeal";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionStrip />
      <WhatWeDo />
      <Testimonial />
      <WhatIsSickleCell />
      <Partners />
      <DonateAppeal />
      <NewsletterSignup />
    </>
  );
}
