import Image from "next/image";

export default function BioCard() {
  return (
    <div className="relative h-full w-full px-5 py-4 flex flex-row gap-4 items-center">
      {/* Postcard back background */}
      <Image src="/landing-page/postcard-back-lined.png" alt="" fill className="object-cover" sizes="(max-width: 800px) 100vw, (max-width: 1210px) 50vw, 33vw" />

      {/* Bio text */}
      <div className="relative z-10 flex-1 space-y-1.5 text-base leading-relaxed text-stone-700 font-playfair">
        <p>
          Hey, I&apos;m Emer ♡ 
        </p>
        <p>  
          I&apos;m an ISE student with a passion for creating things that are both useful
          and beautiful. I&apos;ve developed these skills through an AWS frontend internship and
          leading design for HackEurope. I&apos;m currently looking forward to interning at Stripe
          this summer.
        </p>
      </div>
    </div>
  );
}
