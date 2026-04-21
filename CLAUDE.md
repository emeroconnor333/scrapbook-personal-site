@AGENTS.md
# Personal site for Emer O'Connor.

Modular and easy to edit.
No m dashes.

She is:
* a second year Immersive Software Engineering student
* a previous software engineering intern at AWS for 6 months
* an incoming Stripe intern for summer 2026
* a HackEurope co-founder and the Head of Design
* in her spare time, she likes to sew and crochet clothes and read
* makes Notion Templates, her Ultimate Meal Planner has 30K+ downloads

## Scrapbook Theme
There is patterned paper in the background, stickers, postcards and ribbons.

## Colour Palette
Always try to use tailwind for colours. If you can't use tailwind variables and have to use hex codes, use tailwind's corresponding hex codes.
The primary colours are light pink, light blue and denim blue. The neutral colours are cream, grey, and unsaturated brown. 
* Blue: Tailwind Blue
* Pink: Tailwind Rose
* Cream: Tailwind Amber 50
* Brown: Tailwind Taupe (500-700)
* Grey: Tailwind Neutral

## Pages
* Landing page
* Bsc Immersive Software Engineering
* Internships
* HackEurope Head of Design
* Sewing and Crochet
* Notion Templates

Each page's name should match the names of the folders in /public, e.g. /ise for Bsc Immersive Software Engineering. The header is a pink ribbon with my name on the left and social media logos in white on the right (LinkedIn, GitHub, TikTok).

### Landing Page
This page looks like a pinboard with 6 postcards pinned to it. Each postcard has a painting on it and a title written over it. When you hover on it, it twists a few degrees. When you click on it, it takes you to a page. There are 6 cards that fill most of the screen.

All the other pages will be a horizontal scroll with a different colour of patterned paper accross the middle. Text will be on notepaper pinned on and images will be pinned on. Stickers, pressed flowers and washi tape for decoration too.

### Subpages
The layout will be a grid with 2 colums that expands to the right. There will be images that are formatted like the postcards as they have thin white borders and twitch on hover, make a reusable component for that, and try to avoid cropping photos. There will be text in white boxes. There will also we decorations which will be images of bows/ stickers/ flowers from the public/decorations folder. 

#### ISE Page
(done)

#### Internships
(done)

#### HackEurope
(done)

#### Creative
I've always had a lot of creative hobbies since I was a child. I like to sew, crochet, draw, and paint in my free time. I find it a great way to rest and there's nothing more satisfying than coming up with an idea and then seeing it in real life. Here are some of the things I've made: (pictures with captions)

#### Notion
I've had (basically) my entire life organised in Notion templates since I was 15, it's my favourite software to use because of how intentional the design is, and how you can build really unique templates perfect for a use case from simple parts. A friend asked me to share a template I had made to make grocery shopping and meal planning easier in college, so I put it on the Notion marketplace and it ended up getting 30K+ downloads, so I've made some more templates since.

## Plan
1. Make this a detailed plan, make things as modular as possible (done)
2. Create each of the pages blank (done)
3. Add 6 divs with titles to the landing page, set up routing (done)
4. Create svg patterened paper backgrounds for each page (done)
5. Add a pink strip along the top of pages that will be the header (done)
6. Fill in content of subpages. 