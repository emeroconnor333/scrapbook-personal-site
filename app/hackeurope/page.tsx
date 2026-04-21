import Image from "next/image";
import SubpageLayout from "../components/subpage-layout";
import NoteCard from "../components/note-card";
import PinnedPhoto from "../components/pinned-photo";

export default function HackEuropePage() {
  return (
    <SubpageLayout patternSrc="/patterns/pink-brown-gingham-pattern.png">

      <NoteCard>
        <Image
          src="/hackeurope/HackEurope-logo-black.png"
          alt="HackEurope"
          width={240}
          height={80}
          className="h-14 w-auto mb-3"
        />
        <p>
          Europe has incredible tech and entrepreneurial talent, but the problem is that it&apos;s so spread out. Our goal with <a href="https://hackeurope.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-rose-300 transition-colors">HackEurope</a> was to create a community for young people who are passionate about CS and startups.
        </p>
        <p className="mt-3">
          We had over 1,000 of Europe&apos;s top CS student talent take part across 3 in-person locations (Dublin, Paris, and Stockholm) and raised €250K from sponsors like Stripe, Google, Intercom, and SIG.
        </p>
        <p className="mt-3">
          As a co-founder and Head of Design, I led the branding for the event and helped design and implement the websites.
        </p>
      </NoteCard>

      <PinnedPhoto src="/hackeurope/hack-selfie-with-banner.png" alt="Selfie with HackEurope banner" caption="Our Sponsors" rotate="rotate-1" />

      <PinnedPhoto src="/hackeurope/hackeurope-team.jpg" alt="HackEurope team" caption="The team" rotate="-rotate-1" />

      <PinnedPhoto src="/hackeurope/hackeurope-sig-post.png" alt="SIG's HackEurope post" caption="SIG's LinkedIn post" rotate="-rotate-1" />

      <NoteCard>
        <p>
          I got to work with such a talented and motivated team, meet founders and engineers genuinely passionate about European tech, and see incredible projects get built and be continued after the event.
        </p>
      </NoteCard>

      <PinnedPhoto src="/hackeurope/hackeurope-celcius-cans.png" alt="Selfie with Celsius cans" caption="So many Celsius cans..." rotate="rotate-1" />

      {/* <div className="mb-8 inline-block w-full">
        <Image
          src="/hackeurope/web-summit-founder-selfies.png"
          alt="Founder selfies at Web Summit"
          width={600}
          height={600}
          className="object-contain w-full h-auto block"
        />
      </div> */}

      <PinnedPhoto src="/hackeurope/hack-sig-merch.png" alt="Merch at HackEurope" caption="SIG's merch" rotate="rotate-1" />

    </SubpageLayout>
  );
}
