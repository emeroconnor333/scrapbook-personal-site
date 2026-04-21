import Image from "next/image";

interface ComingSoonCardProps {
  logoSrc: string;
  logoAlt: string;
  label: string;
}

export default function ComingSoonCard({ logoSrc, logoAlt, label }: ComingSoonCardProps) {
  return (
    <div className="mb-8 inline-block w-full">
      <div className="bg-amber-50 border-4 border-dashed border-stone-400 p-6 text-center shadow-md">
        <p className="font-playfair text-xs uppercase tracking-widest text-stone-400 mb-3">Coming Soon</p>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={160}
          height={60}
          className="h-10 w-auto mx-auto mb-3"
        />
        <p className="font-playfair text-stone-600 text-sm">{label}</p>
      </div>
    </div>
  );
}
