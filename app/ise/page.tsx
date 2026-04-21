import SubpageLayout from "../components/subpage-layout";
import NoteCard from "../components/note-card";
import PinnedPhoto from "../components/pinned-photo";

export default function IsePage() {
  return (
    <SubpageLayout patternSrc="/patterns/blue-check-pattern.png">

      <NoteCard>
        <p className="font-semibold text-stone-900 mb-1">Immersive Software Engineering</p>
        <p className="text-stone-400 text-sm">University of Limerick</p>
        <p className="text-stone-400 text-sm mb-3">September 2024 &ndash; May 2027</p>
        <p>
          I&apos;m a second year student in Immersive Software Engineering at the University of Limerick. It&apos;s a new course designed by industry leaders including John Collison where students get to spend half their college time on a software engineering placement, get graded mostly on group projects rather than exams, and can graduate in 3 years with a bachelor&apos;s degree.
        </p>
      </NoteCard>

      <PinnedPhoto src="/ise/ise-my-yeargroup.png" alt="My year group" caption="My ISE cohort" rotate="-rotate-1" />

      <PinnedPhoto src="/ise/hackupc-barcelona.png" alt="HackUPC Barcelona" caption="HackUPC Barcelona" rotate="rotate-1" />

      <NoteCard>
        <p className="font-semibold text-stone-900 mb-3">Modules</p>
        <ul className="space-y-2 list-disc list-outside pl-5">
          <li>Data Structures and Algorithms</li>
          <li>Operating Systems</li>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Ecosystem Scaling and Commercialisation</li>
          <li>Blockchain Technology and Applications</li>
          <li>Computer Networks and Cybersecurity</li>
          <li>Cryptography</li>
        </ul>
      </NoteCard>

      <NoteCard>
        <p className="font-semibold text-stone-900 mb-3">Projects</p>
        <ul className="space-y-2 list-disc list-outside pl-5">
          <li>A Kotlin meal planner app</li>
          <li>A full-stack system that collects metrics from multiple devices, exposes data via a REST API and visualises it in a web app</li>
          <li>A physical study timer using an Arduino with a 3D printed shell</li>
        </ul>
      </NoteCard>

      <PinnedPhoto src="/ise/ise-cohort.png" alt="ISE cohort" caption="  " rotate="rotate-1" />
      

      <PinnedPhoto src="/ise/ise-cheerleaders.png" alt="ISE cheerleaders" caption="Cheerleading at the annual ISE 1st vs 2nd year soccer match" rotate="rotate-1" />

      <PinnedPhoto src="/ise/ais-scholarship.png" alt="All Ireland Scholarship" caption="All Ireland Scholarship" rotate="-rotate-1" />

      <NoteCard>
        <p className="font-semibold text-stone-900 mb-3">Leaving Certificate</p>
        <p className="text-stone-600 mb-3">625 points, 100% in Maths, Chemistry and French</p>
        <ul className="space-y-1 list-disc list-outside pl-5 mb-3">
          <li>Maths (Higher)</li>
          <li>Physics (Higher)</li>
          <li>Chemistry (Higher)</li>
          <li>Art (Higher)</li>
          <li>French (Higher)</li>
          <li>English (Higher)</li>
          <li>Irish (Ordinary)</li>
        </ul>
        <p className="mt-2">Awarded the All Ireland Scholarship and received Senior Academic and Maths awards from my secondary school.</p>
      </NoteCard>

    </SubpageLayout>
  );
}
