import Image from "next/image";
import SubpageLayout from "../components/subpage-layout";
import NoteCard from "../components/note-card";
import PinnedPhoto from "../components/pinned-photo";

export default function InternshipsPage() {
  return (
    <SubpageLayout patternSrc="/patterns/pink-green-stripes-pattern.png">

      <NoteCard>
        <Image src="/internships/stripe-logo.png" alt="Stripe" width={240} height={80} className="w-full h-auto mb-3" />
        <p className="font-semibold text-stone-900 mb-1">Incoming Stripe Intern</p>
        <p className="text-stone-400 text-sm">June – September 2026</p>
        <p>I&apos;m really looking forward to a software engineering intership with Stripe this summer!</p>
      </NoteCard>

      <NoteCard>
        <Image src="/internships/aws-logo.png" alt="AWS" width={240} height={80} className="w-full h-auto mb-3" />
        <p className="font-semibold text-stone-900 mb-1">Software Engineering Intern</p>
        <p className="text-stone-400 text-sm mb-3">June – December 2025</p>
        <p>Interned on the Relational Database Services Console team for 6 months.</p>
        <ul className="mt-3 space-y-2 list-disc list-outside pl-5">
          <li>Gained experience in cloud computing and AWS infrastructure</li>
          <li>Acquired skills in modern web development by building with React, TypeScript, and GraphQL</li>
          <li>Learned best practices in code reviews, testing, and cross-team communication within a global tech organisation</li>
        </ul>
      </NoteCard>

      <PinnedPhoto src="/internships/outside-aws-office.jpg" alt="ISE interns at AWS" caption="ISE interns at AWS" rotate="rotate-1" />

      <PinnedPhoto src="/internships/intern-day.png" alt="Intern day" caption="Intern day" rotate="rotate-1" />

      <NoteCard>
        <p>
          My intern project at AWS was a POC for the RDS dashboard that replaced existing REST APIs with GraphQL to reduce latency for customers with a large number of databases. This POC cut page load time by 66% for large accounts.
        </p>
        <p className="mt-3">
          I also worked on production features including a customer survey end-to-end, frontend updates to reflect AWS API changes, and accessibility and bug fixes.
        </p>
        <p className="mt-3">
          I had a really great experience thanks to the support of my team and the positive learning environment AWS provided.
        </p>
      </NoteCard>
      
      <PinnedPhoto src="/internships/inside-aws-office.jpg" alt="Inside the AWS office" caption=" " rotate="-rotate-1" />

      <PinnedPhoto src="/internships/cafe-coding.png" alt="Cafe coding" caption="My fav place to code <3" rotate="rotate-1" />

      <PinnedPhoto src="/internships/flower-arranging.png" alt="Flower arranging workshop supporting Breast Cancer Ireland" caption="Flower arranging workshop supporting Breast Cancer Ireland" rotate="-rotate-1" />

      <PinnedPhoto src="/internships/uk-and-ireland-live.png" alt="UK and Ireland Amazon event" caption="UK and Ireland Amazon event" rotate="-rotate-1" />

    </SubpageLayout>
  );
}
