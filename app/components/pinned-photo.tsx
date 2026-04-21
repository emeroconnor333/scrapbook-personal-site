import Image from "next/image";

interface PinnedPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  rotate?: string;
}

export default function PinnedPhoto({ src, alt, caption, rotate = "rotate-1" }: PinnedPhotoProps) {
  return (
    <div className={`mb-8 ${rotate} transition-transform duration-200 hover:scale-[1.02] inline-block w-full`}>
      <div className="bg-white pt-2 px-2 pb-2 shadow-md">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={600}
          className="object-contain w-full h-auto block"
        />
        {caption && (
          <p className="text-center text-xs text-stone-500 mt-2 font-playfair italic">{caption}</p>
        )}
      </div>
    </div>
  );
}
