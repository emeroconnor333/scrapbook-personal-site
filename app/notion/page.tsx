import SubpageLayout from "../components/subpage-layout";
import NoteCard from "../components/note-card";
import PinnedPhoto from "../components/pinned-photo";

export default function NotionPage() {
  return (
    <SubpageLayout patternSrc="/patterns/pink-yellow-gingham-pattern.png" columnWidth="420px">

      <NoteCard>
        <p>
          I&apos;ve had (basically) my entire life organised in Notion since I created an account at 15. It&apos;s my favourite software to use because of how intentional the design is, and how you can build really specific templates from such simple components.
        </p>
        <p className="mt-3">
          A friend asked me to share a template I made for grocery shopping and meal planning in college, so I put it on the Notion marketplace and it ended up getting 30K+ downloads. I&apos;ve made some more templates since.
        </p>
      </NoteCard>

      <PinnedPhoto src="/notion/template-metrics.png" alt="Template metrics" rotate="rotate-0" />

      <PinnedPhoto src="/notion/template-reviews.png" alt="Template reviews" rotate="rotate-0" />

      <PinnedPhoto src="/notion/meal-planner-template.png" alt="The Ultimate Meal Planner" rotate="rotate-0" />

      <PinnedPhoto src="/notion/goal-planner-template.png" alt="Goal Planner" rotate="rotate-0" />

      <PinnedPhoto src="/notion/reading-tracker-template.png" alt="Reading Tracker" rotate="rotate-0" />

    </SubpageLayout>
  );
}
