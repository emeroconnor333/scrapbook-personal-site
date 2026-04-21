interface NoteCardProps {
  children: React.ReactNode;
}

export default function NoteCard({ children }: NoteCardProps) {
  return (
    <div className="mb-8 inline-block w-full">
      <div className="relative bg-white shadow-md p-5 font-playfair text-stone-700 leading-relaxed">
        {/* Lined paper effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 27px, #1c1c1c18 28px)",
            backgroundPositionY: "12px",
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
