import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary rounded-sm font-label-md text-label-md mb-6 tracking-widest uppercase">
              Ecosystem Engineering
            </span>
            <h1 className="font-display-lg text-display-lg text-on-primary mb-8 leading-tight">
              Precision Engineering for <span className="text-secondary">Digital Assurance</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-10 max-w-2xl">
              We don't just test; we architect reliability. Rubric provides the critical infrastructure for quality that scales with your ambition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-32 px-margin-desktop max-w-max-width mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">Core Specializations</h2>
            <p className="font-body-md text-body-md text-outline">
              Our modular services integrate seamlessly into your engineering lifecycle, providing high-precision quality checkpoints and architectural oversight.
            </p>
          </div>
          <div className="flex items-center gap-4 border-l border-outline-variant pl-8">
            <div className="text-right">
              <p className="font-label-lg text-label-lg text-primary">99.9% Success Rate</p>
              <p className="font-body-sm text-body-sm text-outline">In Enterprise QA Deployments</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bento Grid Pattern */}
        <div className="grid grid-cols-12 gap-gutter">
          {/* IT QA - Large Card */}
          <ScrollReveal className="col-span-12 md:col-span-8 group">
            <div className="service-card h-full bg-white border border-outline-variant/30 rounded-lg p-10 flex flex-col justify-between border-t-4 border-t-secondary relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <span className="material-symbols-outlined text-[120px] fill-1">analytics</span>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md">IT QA</h3>
                </div>
                <p className="font-body-lg text-body-lg text-outline max-w-lg mb-8">
                  Comprehensive quality assurance frameworks designed for complex enterprise landscapes. We provide end-to-end validation strategies that ensure system integrity across every layer of your stack.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="font-body-md">Enterprise Test Strategy</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="font-body-md">Regression Optimization</span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    <span className="font-body-md">UAT Orchestration</span>
                  </li>
                </ul>
              </div>
              <Link className="flex items-center gap-2 text-secondary font-label-lg text-label-lg group-hover:gap-4 transition-all" href="#">
                EXPLORE FRAMEWORK <span className="material-symbols-outlined">arrow_right_alt</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Specialist Technical Consulting */}
          <ScrollReveal className="col-span-12 md:col-span-4" delay={0.1}>
            <div className="service-card h-full bg-primary-container rounded-lg p-10 flex flex-col border border-outline-variant/10 text-on-primary">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-on-primary mb-6">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4">Specialist Technical Consulting</h3>
                <p className="font-body-sm text-body-sm text-on-primary-container leading-relaxed">
                  High-impact architectural audits and performance engineering for mission-critical systems. Our specialists solve the bottlenecks that others can't see.
                </p>
              </div>
              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 rounded text-[10px] font-label-md border border-white/10 uppercase">Security Audit</span>
                  <span className="px-3 py-1 bg-white/5 rounded text-[10px] font-label-md border border-white/10 uppercase">Load Balance</span>
                  <span className="px-3 py-1 bg-white/5 rounded text-[10px] font-label-md border border-white/10 uppercase">Architecture</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* QA Consulting */}
          <ScrollReveal className="col-span-12 md:col-span-4" delay={0.2}>
            <div className="service-card h-full bg-white border border-outline-variant/30 rounded-lg p-10 flex flex-col border-t-4 border-t-secondary-fixed">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">settings_suggest</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4 text-primary">QA Consulting</h3>
                <p className="font-body-sm text-body-sm text-outline leading-relaxed">
                  Strategic advisory to mature your QA capabilities. We build the processes, select the tools, and train the teams to foster a culture of quality.
                </p>
              </div>
              <Link className="mt-auto flex items-center justify-between group" href="#">
                <span className="font-label-lg text-label-lg text-primary">Learn More</span>
                <span className="material-symbols-outlined text-secondary transition-transform group-hover:translate-x-2">trending_flat</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Staff Augmentation */}
          <ScrollReveal className="col-span-12 md:col-span-4" delay={0.3}>
            <div className="service-card h-full bg-white border border-outline-variant/30 rounded-lg p-10 flex flex-col border-t-4 border-t-secondary-fixed">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4 text-primary">Staff Augmentation</h3>
                <p className="font-body-sm text-body-sm text-outline leading-relaxed">
                  On-demand access to the industry's top 1% of QA engineers. Scalable teams that integrate within 48 hours to accelerate your delivery cycles.
                </p>
              </div>
              <Link className="mt-auto flex items-center justify-between group" href="#">
                <span className="font-label-lg text-label-lg text-primary">Request Talent</span>
                <span className="material-symbols-outlined text-secondary transition-transform group-hover:translate-x-2">trending_flat</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Managed Testing Services */}
          <ScrollReveal className="col-span-12 md:col-span-4" delay={0.4}>
            <div className="service-card h-full bg-white border border-outline-variant/30 rounded-lg p-10 flex flex-col border-t-4 border-t-secondary-fixed">
              <div className="mb-8">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">cloud_done</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4 text-primary">Managed Testing Services</h3>
                <p className="font-body-sm text-body-sm text-outline leading-relaxed">
                  A fully outsourced quality ecosystem. We take complete ownership of your testing lifecycle, delivering predictable results with zero overhead.
                </p>
              </div>
              <Link className="mt-auto flex items-center justify-between group" href="#">
                <span className="font-label-lg text-label-lg text-primary">Service Models</span>
                <span className="material-symbols-outlined text-secondary transition-transform group-hover:translate-x-2">trending_flat</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-desktop max-w-max-width mx-auto">
        <ScrollReveal className="bg-primary rounded-xl overflow-hidden relative min-h-[400px] flex items-center">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-40">
            <img
              className="w-full h-full object-cover"
              alt="Digital control room"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz2c012mCqpjDfnsSz2nDBcXjvuvgB9MCcm91bdzP49pN59rD4cZmXpr_6Ygltc1wBgRF1PvGIE4f08AHBreAu6LysnlaD5B43qF_QedwU1iuH-FmteRvf8BSiR0FoCuv42_xLCQbFaGEC2mnCpOgBPoj-RQO7WzsIlAG0G3YG6WR0229QumpAhbG-NimhRNPzaNUclEatGKG35WPJ3kjVUlkQAws6gz_7TOl-rChxofTwduc54ipL5-ChRa_NGj2gAFDseG4u"
            />
          </div>
          <div className="relative z-10 p-16 max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-6">Ready to fortify your digital infrastructure?</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-10">
              Schedule an architectural audit with our specialists and discover how Rubric can stabilize your ecosystem.
            </p>
            <div className="flex gap-4">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:bg-secondary-container transition-all">
                Book a Consultation
              </button>
              <button className="border border-outline-variant text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:bg-white/10 transition-all">
                Download Services PDF
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
