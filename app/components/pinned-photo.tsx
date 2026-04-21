import Image from "next/image";

interface PinnedPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  rotate?: string;
  priority?: boolean;
}

export default function PinnedPhoto({ src, alt, caption, rotate = "rotate-1", priority = false }: PinnedPhotoProps) {
  return (
    <div className={`mb-4 ${rotate} transition-transform duration-200 hover:rotate-2 inline-block w-full`}>
      <div className="bg-white pt-2 px-2 pb-2 shadow-md">
        <Image
          src={src}
          alt={alt}
          width={600}
          height={600}
          className="object-contain w-full h-auto block"
          sizes="(max-width: 800px) 100vw, 420px"
          priority={priority}
        />
        {caption && (
          <p className="text-center text-xs text-stone-500 mt-2 font-playfair italic">{caption}</p>
        )}
      </div>
    </div>
  );
}
