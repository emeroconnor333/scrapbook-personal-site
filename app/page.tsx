import BioCard from "./landing-page/bio-card";
import PageLinkCard from "./landing-page/page-link-card";

const pageLinks = [
  { id: "bsc", title: "immersive software engineering", href: "/ise", painting: "/landing-page/paintings/hokusai-1.jpeg" },
  { id: "internships", title: "internships", href: "/internships", painting: "/landing-page/paintings/hokusai-2.jpeg" },
  { id: "hackeurope", title: "hackeurope", href: "/hackeurope", painting: "/landing-page/paintings/hokusai-3.jpeg" },
  { id: "sewing", title: "sewing & crochet", href: "/sewing", painting: "/landing-page/paintings/hokusai-4.jpeg" },
  { id: "notion", title: "notion templates", href: "/notion", painting: "/landing-page/paintings/hokusai-5.jpeg" },
];

function PinHead() {
  return (
    <div
      className="absolute top-[calc(0.75rem-0.625rem)] left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full shadow-md"
      style={{ background: "radial-gradient(circle at 40% 35%, #fda4af, #FF637E)" }}
    />
  );
}

export default function Home() {
  return (
    <div
      className="flex-1 p-8 md:p-12 flex items-center"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 19px,
            rgba(251, 207, 232, 0.4) 19px,
            rgba(251, 207, 232, 0.4) 20px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 19px,
            rgba(251, 207, 232, 0.4) 19px,
            rgba(251, 207, 232, 0.4) 20px
          )
        `,
        backgroundColor: "#fffbeb",
      }}
    >
      <div className="grid grid-cols-1 800:grid-cols-2 1210:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* Bio card */}
        <div className="relative aspect-[6/4] pt-3">
          <PinHead />
          <div className="h-full w-full shadow-lg overflow-hidden border border-stone-200">
            <BioCard />
          </div>
        </div>

        {/* Page link cards */}
        {pageLinks.map((card) => (
          <div key={card.id} className="relative aspect-[6/4] pt-3">
            <PinHead />
            <div className="h-full w-full shadow-lg overflow-hidden border border-stone-200 transition-transform duration-200 hover:rotate-2">
              <PageLinkCard title={card.title} href={card.href} painting={card.painting} />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
