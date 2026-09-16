import { createFileRoute, Link } from "@tanstack/react-router";
import crockeyProjectAsset from "@/assets/crockey-real-project.png.asset.json";
import dogWeddingAsset from "@/assets/dog-wedding-real.png.asset.json";
import portrait from "@/assets/ananya-portrait.jpg";
import { ArrowMark, DogDoodle, PageShell } from "@/components/portfolio-shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ananya Singh — Graphic Designer" },
      { name: "description", content: "Graphic designer creating visual identities, editorial experiences, catalogues and playful posters." },
      { property: "og:title", content: "Ananya Singh — Graphic Designer" },
      { property: "og:description", content: "A warm, editorial portfolio of visual identities, catalogues and playful poster design." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-screen-2xl flex-col justify-between px-5 pb-10 pt-10 md:px-10 md:pb-14 md:pt-14">
        <div className="flex items-start justify-between">
          <p className="max-w-52 text-xs uppercase leading-relaxed text-muted-foreground">Independent graphic designer<br />Based in India · 2026</p>
          <DogDoodle className="doodle-drift hidden w-24 stroke-wine stroke-[1.6] text-wine md:block" />
        </div>
        <div className="py-12 md:py-16">
          <h1 className="font-display text-[22vw] font-medium leading-[0.7] text-foreground md:text-[17vw]">ANANYA</h1>
          <div className="mt-2 flex items-end justify-between gap-5 md:mt-5">
            <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">Designing visual identities, editorial experiences, and little things that make people stop scrolling.</p>
            <h1 aria-hidden="true" className="font-display text-[22vw] font-medium italic leading-[0.7] text-wine md:text-[17vw]">SINGH</h1>
          </div>
        </div>
        <div className="editorial-rule flex flex-col gap-6 pt-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase text-muted-foreground">Graphic Designer · Visual Storyteller · Creative Explorer</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed md:hidden">Designing visual identities, editorial experiences, and little things that make people stop scrolling.</p>
          </div>
          <a href="#work" className="group flex items-center gap-4 text-sm font-bold">VIEW MY WORK <span className="text-xl transition-transform group-hover:translate-y-1">↓</span></a>
        </div>
      </section>

      <section id="work" className="bg-foreground px-5 py-20 text-background md:px-10 md:py-32">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex items-end justify-between border-b border-background/30 pb-5">
            <h2 className="font-display text-5xl md:text-8xl">Selected <em>Work</em></h2>
            <p className="text-xs uppercase">2024—2026</p>
          </div>
          <div className="mt-12 grid gap-16 md:grid-cols-12 md:gap-y-28">
            <Link to="/work/crockey" className="group md:col-span-8">
              <div className="overflow-hidden bg-paper"><img src={crockeyProjectAsset.url} width={969} height={1214} alt="Crockey curated ceramic collection with blossom branches" className="aspect-[969/1214] w-full object-cover" /></div>
              <div className="mt-5 flex items-start justify-between border-t border-background/30 pt-4">
                 <div><p className="text-xs uppercase text-background/60">01 · Catalogue Design</p><h3 className="mt-1 font-display text-4xl md:text-6xl">Crockery Catalogue&nbsp;</h3></div>
                <span className="text-2xl"><ArrowMark /></span>
              </div>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-background/70">A catalogue designed to bring products, visuals and information together through a clean editorial layout.</p>
            </Link>
            <Link to="/work/dog-wedding" className="group md:col-span-4 md:col-start-9 md:mt-40">
              <div className="overflow-hidden bg-paper"><img src={dogWeddingAsset.url} width={748} height={977} loading="lazy" alt="The Dog Wedding poster — two dogs in wedding attire under a floral arch" className="aspect-[748/977] w-full object-cover" /></div>
              <div className="mt-5 flex items-start justify-between border-t border-background/30 pt-4">
                <div><p className="text-xs uppercase text-background/60">02 · Poster Design</p><h3 className="mt-1 font-display text-4xl md:text-5xl">The Dog Wedding</h3></div>
                <span className="text-2xl"><ArrowMark /></span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-background/70">A playful wedding poster created for a very important four-legged celebration.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-2xl">
          <p className="text-xs uppercase text-muted-foreground">The archive is growing</p>
           <h2 className="mt-3 font-display text-5xl md:text-7xl">More work........<em></em></h2>
          <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
             {["Medical Catalogue", "Social Media Design", "Editorial Design", "Illustration"].map((item, i) => (
              <div key={item} className="group flex aspect-[4/3] flex-col justify-between border-b border-r border-border p-5 transition-colors hover:bg-peach/40 md:aspect-[3/4] md:p-7">
                <span className="text-xs text-muted-foreground">0{i + 3}</span>
                 <div><h3 className="font-display text-3xl">{item}</h3><p className="mt-2 text-xs uppercase text-muted-foreground">{"\n"}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-screen-2xl gap-12 md:grid-cols-12">
          <div className="md:col-span-5"><p className="text-xs uppercase text-muted-foreground">About · 03</p><h2 className="reveal-text mt-4 font-display text-6xl leading-none md:text-8xl">A little<br /><em>about me</em></h2></div>
          <div className="md:col-span-4 md:col-start-7">
            <p className="font-display text-2xl leading-relaxed md:text-3xl">Hi, I'm Ananya — a graphic designer who enjoys turning ideas into visuals that feel intentional, expressive and memorable.</p>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">I’m interested in graphic design, branding, editorial layouts, posters and visual storytelling. I like experimenting with typography, composition and color while keeping the final design clear and purposeful.</p>
            <p className="mt-10 -rotate-2 font-display text-xl italic text-wine">currently designing things &amp; collecting fonts ↗</p>
          </div>
          <figure className="relative md:col-span-3"><img src={portrait} width={1200} height={1504} loading="lazy" alt="Ananya Singh in her creative studio" className="aspect-[4/5] w-full object-cover grayscale-[15%]" /><figcaption className="mt-2 text-[10px] uppercase text-muted-foreground">At the desk, probably changing the typeface again.</figcaption></figure>
        </div>
      </section>

      <section className="bg-peach/40 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-2xl"><h2 className="font-display text-5xl md:text-7xl">How I like to <em>design</em></h2>
          <div className="mt-12 grid border-t border-wine/30 md:grid-cols-3">
            {[["01", "Curious", "I like exploring different visual directions before settling on an idea."], ["02", "Intentional", "Every typeface, color and composition should have a reason behind it."], ["03", "Playful", "Good design doesn't always have to take itself too seriously."]].map(([n,t,d]) => <article key={n} className="border-b border-wine/30 py-7 md:border-r md:p-8 md:first:pl-0 md:last:border-r-0"><p className="text-xs text-wine">{n}</p><h3 className="mt-14 font-display text-4xl uppercase">{t}</h3><p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-24"><div className="mx-auto max-w-screen-2xl"><p className="text-xs uppercase text-muted-foreground">Selected capabilities</p><div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-display text-3xl leading-tight md:text-5xl">{["Graphic Design", "Branding", "Catalogue Design", "Poster Design", "Typography", "Layout Design", "Visual Identity", "Social Media Design", "Figma", "\n"].map((s,i)=><span key={s} className={i%3===1?"italic text-wine":""}>{s}{i<8&&<span className="ml-7 text-border">/</span>}</span>)}</div></div></section>

      <section className="border-t border-border px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div><p className="text-xs uppercase text-muted-foreground">Ways to work together</p><h2 className="mt-4 font-display text-6xl leading-none md:text-8xl">Pick a good<br /><em>starting point.</em></h2></div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:justify-self-end">Every project is shaped around what you need. These are flexible starting packages; final quotes follow a quick conversation.</p>
          </div>
          <div className="mt-14 grid border-l border-t border-border lg:grid-cols-3">
            {[
              { number: "01", name: "The Quick Edit", price: "From ₹8,000", note: "For one focused piece that needs to look considered and complete.", items: ["Poster or key visual", "2 creative directions", "Final print & digital files"] },
              { number: "02", name: "The Editorial", price: "From ₹18,000", note: "For stories, products and information that deserve room to breathe.", items: ["Catalogue or publication", "Layout system", "Up to 16 designed pages"] },
              { number: "03", name: "The Identity", price: "From ₹30,000", note: "For a new idea ready to become a clear, memorable visual world.", items: ["Logo suite", "Colour & typography system", "Essential brand guidelines"] },
            ].map((offer) => (
              <article key={offer.name} className="flex min-h-[31rem] flex-col border-b border-r border-border p-6 md:p-8">
                <div className="flex items-center justify-between text-xs uppercase text-muted-foreground"><span>{offer.number}</span><span>Starting at</span></div>
                <h3 className="mt-14 font-display text-4xl md:text-5xl">{offer.name}</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{offer.note}</p>
                <ul className="mt-8 space-y-3 border-t border-border pt-5 text-xs uppercase text-muted-foreground">{offer.items.map((item) => <li key={item}>— {item}</li>)}</ul>
                <div className="mt-auto flex items-end justify-between pt-12"><p className="font-display text-3xl text-wine">{offer.price}</p><a href="mailto:ananya61012@gmail.com?subject=Project%20enquiry" aria-label={`Enquire about ${offer.name}`} className="flex size-11 items-center justify-center border border-wine text-xl text-wine transition-colors hover:bg-wine hover:text-primary-foreground">↗</a></div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Need something different? Tell me what you have in mind and I’ll put together a custom quote.</p>
        </div>
      </section>

      <section id="contact" className="bg-wine px-5 py-20 text-primary-foreground md:px-10 md:py-28">
        <div className="mx-auto max-w-screen-2xl"><p className="text-xs uppercase text-primary-foreground/65">Have an idea? Say hello.</p><h2 className="reveal-text mt-8 max-w-6xl font-display text-[15vw] leading-[0.8] md:text-[10vw]">Let’s make<br /><em>something good.</em></h2><div className="mt-16 grid gap-8 border-t border-primary-foreground/30 pt-8 md:grid-cols-2"><p className="max-w-md text-sm leading-relaxed text-primary-foreground/75">Have a project, collaboration, or simply an interesting idea? I'd love to hear about it.</p><div><a href="mailto:ananya61012@gmail.com" className="font-display text-2xl underline decoration-1 underline-offset-8 md:text-4xl">ananya61012@gmail.com</a><div className="mt-10 flex flex-wrap gap-3"><a className="border border-primary-foreground/50 px-5 py-3 text-xs uppercase transition hover:bg-primary-foreground hover:text-wine" href="mailto:ananya61012@gmail.com">Email me</a><a className="border border-primary-foreground/50 px-5 py-3 text-xs uppercase transition hover:bg-primary-foreground hover:text-wine" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a><a className="border border-primary-foreground/50 px-5 py-3 text-xs uppercase transition hover:bg-primary-foreground hover:text-wine" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div></div>
      </section>
    </PageShell>
  );
}
