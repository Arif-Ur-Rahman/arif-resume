import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiMongodb,
  SiRedux,
  SiFigma,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const stack = [
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Framer Motion", icon: TbBrandFramerMotion },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "FastAPI", icon: SiFastapi },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Redux", icon: SiRedux },
  { label: "Figma to Code", icon: SiFigma },
];

const qualities = [
  "Responsive",
  "Accessible",
  "Performant",
  "Pixel-perfect",
  "Type-safe",
  "Motion-rich",
  "SEO-ready",
  "Scalable",
];

/* Two crossing ribbons — a vivid gradient band of the stack, and a glass band of
   qualities drifting the other way behind it. */
export default function TechMarquee() {
  return (
    <section
      aria-label="Technologies and qualities"
      className="marquee-paused relative h-[200px] overflow-hidden md:h-[250px]"
    >
      {/* Back ribbon */}
      <div className="glass absolute left-[-5vw] top-1/2 w-[110vw] -translate-y-1/2 rotate-[2.5deg] border-x-0 py-3.5 md:py-4">
        <div className="animate-marquee-reverse flex w-max items-center [--marquee-duration:55s]">
          {[0, 1].map((dup) => (
            <div key={dup} aria-hidden={dup === 1} className="flex items-center">
              {[...qualities, ...qualities].map((q, i) => (
                <span key={i} className="flex items-center">
                  <span className="px-6 font-display text-2xl italic text-foreground/50 md:text-3xl">{q}</span>
                  <span className="text-gradient text-lg">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Front ribbon */}
      <div className="bg-signature absolute left-[-5vw] top-1/2 w-[110vw] -translate-y-1/2 -rotate-[3deg] py-4 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.6)] md:py-5">
        <div className="animate-marquee flex w-max items-center [--marquee-duration:45s]">
          {[0, 1].map((dup) => (
            <div key={dup} aria-hidden={dup === 1} className="flex items-center">
              {stack.map(({ label, icon: Icon }) => (
                <span key={label} className="flex items-center gap-3 px-7 text-[#0b0b10]">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="whitespace-nowrap text-lg font-semibold uppercase tracking-tight md:text-2xl">
                    {label}
                  </span>
                  <span className="pl-4 text-xl opacity-60">✺</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
