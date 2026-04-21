import SubpageLayout from "../components/subpage-layout";
import NoteCard from "../components/note-card";
import PinnedPhoto from "../components/pinned-photo";

export default function CreativePage() {
  return (
    <SubpageLayout patternSrc="/patterns/yellow-pink-polka-pattern.png">

      <NoteCard>
        <p>
            Here are some of the things I've sewn, crocheted, painted, and sketched recently.
        </p>
      </NoteCard>

      <PinnedPhoto src="/creative/blue-dress.png" alt="Sewn blue dress" rotate="rotate-1" />

      <PinnedPhoto src="/creative/blue-top.png" alt="Blue top" rotate="rotate-1" />

      <PinnedPhoto src="/creative/crochet-duck.png" alt="Crochet duck" rotate="rotate-1" />

      <PinnedPhoto src="/creative/gracie-abrams-painting.png" alt="Gracie Abrams painting" rotate="rotate-1" />

      <PinnedPhoto src="/creative/pink-satin-set.png" alt="Sewn pink set" rotate="-rotate-1" />

      <PinnedPhoto src="/creative/swan-painting.png" alt="Swan painting" rotate="-rotate-1" />

      <PinnedPhoto src="/creative/crochet-turtle.png" alt="Crochet turtle" rotate="-rotate-1" />

      <PinnedPhoto src="/creative/cow-sketch.png" alt="Cow sketch" rotate="rotate-1" />

      <PinnedPhoto src="/creative/deer-sketch.png" alt="Deer sketch" rotate="-rotate-1" />

      <PinnedPhoto src="/creative/profile-sketch.png" alt="Profile sketch" rotate="rotate-1" />

    </SubpageLayout>
  );
}
