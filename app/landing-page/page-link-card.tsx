import Image from "next/image";
import Link from "next/link";

interface PageLinkCardProps {
  title: string;
  href: string;
  painting: string;
}

export default function PageLinkCard({ title, href, painting }: PageLinkCardProps) {
  return (
    <Link href={href} className="block h-full">
      <div className="relative h-full w-full overflow-hidden flex items-center justify-center bg-amber-100">
        {/* Painting background */}
        <Image src={painting} alt="" fill className="object-cover" sizes="(max-width: 800px) 100vw, (max-width: 1210px) 50vw, 33vw" priority />

        {/* Inset white border */}
        <div className="absolute inset-0 border-6 border-white z-10 pointer-events-none" />

        {/* Title — centred across the middle */}
        <div className="relative z-10 w-full px-6 text-center">
          <span className="font-playfair text-3xl font-semibold text-white leading-tight [text-shadow:_0_2px_6px_rgba(0,0,0,0.5),_0_4px_12px_rgba(0,0,0,0.35)]">
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}
