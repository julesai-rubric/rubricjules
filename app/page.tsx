import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary rounded-sm font-label-md text-label-md mb-6 tracking-widest uppercase">
              Digital Product Studio
            </span>
            <h1 className="font-display-lg text-display-lg text-on-primary mb-8 leading-tight">
              Architecting <span className="text-secondary italic">Exceptional</span> Software Experiences
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-10 max-w-2xl">
              Rubric is where architectural minimalism meets industrial execution. We combine precision engineering with human-centric design to build products that matter.
            </p>
            <div className="flex gap-4">
              <Link href="/work" className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:brightness-110 transition-all">
                View Our Work
              </Link>
              <Link href="/about" className="border border-outline-variant text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:bg-white/10 transition-all">
                Our Story
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[500px] font-thin">architecture</span>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-32 px-margin-desktop max-w-max-width mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">Core Capabilities</h2>
            <p className="font-body-md text-body-md text-outline">
              High-precision engineering for the world's most ambitious ecosystems.
            </p>
          </div>
          <Link href="/services" className="font-label-lg text-label-lg text-secondary uppercase tracking-widest border-b-2 border-secondary pb-1">
            Explore All Services
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <ScrollReveal className="bg-white border border-outline-variant/30 p-10 rounded-lg hover-card-effect">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">analytics</span>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">IT QA</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Comprehensive quality assurance frameworks designed for complex enterprise landscapes.
            </p>
          </ScrollReveal>
          <ScrollReveal className="bg-white border border-outline-variant/30 p-10 rounded-lg hover-card-effect" delay={0.1}>
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">architecture</span>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">Technical Consulting</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              High-impact architectural audits and performance engineering for mission-critical systems.
            </p>
          </ScrollReveal>
          <ScrollReveal className="bg-white border border-outline-variant/30 p-10 rounded-lg hover-card-effect" delay={0.2}>
            <span className="material-symbols-outlined text-secondary text-4xl mb-6">groups</span>
            <h3 className="font-headline-md text-headline-md mb-4 text-primary">Staff Augmentation</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              On-demand access to the industry's top 1% of QA engineers and architects.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
