"use client";

import { useDragScroll } from "../hooks/useDragScroll";

interface SubpageLayoutProps {
  children?: React.ReactNode;
  patternSrc: string;
  columnWidth?: string;
}

export default function SubpageLayout({ children, patternSrc, columnWidth = "280px" }: SubpageLayoutProps) {
  const { ref, onMouseDown, onMouseUp, onMouseLeave, onMouseMove } = useDragScroll();

  return (
    <div
      ref={ref}
      className="flex-1 overflow-x-auto overflow-y-hidden flex items-center"
      style={{ cursor: "grab" }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {/* Pattern band — fixed to viewport, always centred, always full width */}
      <div
        className="fixed inset-x-0 pointer-events-none z-0"
        style={{
          top: "15%",
          bottom: "15%",
          backgroundImage: `url(${patternSrc})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />

      {/* Masonry content — py keeps items within the pattern band */}
      <div
        className="relative z-10 px-16 py-8"
        style={{
          columns: columnWidth,
          columnGap: "2rem",
          columnFill: "auto",
          maxHeight: "74vh",
          minWidth: "100vw",
        }}
      >
        {children}
      </div>
    </div>
  );
}
