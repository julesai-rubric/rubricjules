import ScrollReveal from "../components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center architectural-mask opacity-60"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZmYBkE92vIhptyXyCvpG9YMupURqr3P4XM50cBuypvkgPXcQB2bzaFpIJ0YGosi6uNQbolrQRlYbnsh7UAUsXbtRa5czGYV80opkL8mP5KqYUwZii-ZRqjI2FE1Ss7xJ2Soj_mGRmItl496Xr2u_gd7MNoRFr26yjZdhzcrzbvtUtI1JbKc5Pq1DdtNxABq2cA47y0konzK57x-sk_tR4578yb_Z0Hv9no6esFoHE8sJ2HUPOY_Ipy8NzZ3fGXjvVzsWmeCea')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop w-full">
          <ScrollReveal className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-secondary text-on-primary font-label-md text-label-md rounded mb-6 uppercase tracking-widest">
              Architectural Precision
            </span>
            <h1 className="font-display-lg text-display-lg text-on-primary mb-6 leading-tight">
              Engineering the future through <span className="text-secondary italic">measured impact.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-lg">
              Rubric is more than a firm; it's a technical ecosystem where architectural minimalism meets industrial execution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <ScrollReveal className="space-y-8 border-l-4 border-secondary pl-8">
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight">Our Mission</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              To architect high-precision digital and physical environments that foster sustainable growth and ecosystem stability. We eliminate
              decorative excess to prioritize the structural integrity of every project we touch.
            </p>
          </ScrollReveal>
          <ScrollReveal className="space-y-8 border-l-4 border-outline pl-8" delay={0.1}>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-outline">Our Vision</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Setting the global benchmark for technical excellence. We envision a world where structural logic and aesthetic minimalism converge to
              solve the most complex engineering challenges of the 21st century.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-surface-container py-32 px-margin-desktop">
        <div className="max-w-max-width mx-auto">
          <ScrollReveal className="text-center mb-20">
            <h2 className="font-display-lg text-display-lg mb-4">Core Values</h2>
            <div className="h-1 w-24 bg-secondary mx-auto"></div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Value 1 */}
            <ScrollReveal className="bg-surface p-10 border border-outline-variant/30 rounded-lg group hover:border-secondary transition-colors duration-500">
              <div className="w-16 h-16 bg-primary-container text-secondary flex items-center justify-center rounded-lg mb-8 group-hover:bg-secondary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">architecture</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Precision</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We believe in mathematical certainty. Every pixel and every beam is placed with absolute structural intent.
              </p>
            </ScrollReveal>
            {/* Value 2 */}
            <ScrollReveal className="bg-surface p-10 border border-outline-variant/30 rounded-lg group hover:border-secondary transition-colors duration-500" delay={0.1}>
              <div className="w-16 h-16 bg-primary-container text-secondary flex items-center justify-center rounded-lg mb-8 group-hover:bg-secondary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">hub</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Ecosystem</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Nothing exists in isolation. We design systems that integrate seamlessly into their wider environmental context.
              </p>
            </ScrollReveal>
            {/* Value 3 */}
            <ScrollReveal className="bg-surface p-10 border border-outline-variant/30 rounded-lg group hover:border-secondary transition-colors duration-500" delay={0.2}>
              <div className="w-16 h-16 bg-primary-container text-secondary flex items-center justify-center rounded-lg mb-8 group-hover:bg-secondary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-4xl">bolt</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 uppercase">Impact</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Results are our only metric. We measure success by the tangible efficiency and stability of our solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="py-32 px-margin-desktop max-w-max-width mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest mb-4 block">The Collective</span>
            <h2 className="font-display-lg text-display-lg">
              The minds behind <br />
              the precision.
            </h2>
          </div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
            Our team consists of industry-leading engineers, architects, and designers dedicated to the Rubric standard.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
          {/* Person 1 */}
          <ScrollReveal className="group">
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-surface-container-highest rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="Elena Vance"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxz2rl53oyI-kk2dxxy7ly6kWh6gF7Lx2jteFlhy9kzrXDT_px23Pbs5sgX3EOPMFxBjyKbWRS9DSEky2rAOV-5VC7pXN7TlVwYytukNILi6pHH-J_smwtzSWQE0w1Wf_fRkOC8toenYj92lLUCEyq-h_ukXEgCpxDFFkjKveZ3z1YtnnxjidPq7UXVtD4mZWDi4R7BccQz4mb-dvzeawCXFERSrSqpTiMKmTF0pYPeuf3D0xiCX0U9KJ3Qk73EpbJ-eh66hRU"
              />
            </div>
            <h4 className="font-headline-sm text-headline-sm">Elena Vance</h4>
            <p className="font-label-md text-label-md text-on-primary-container uppercase mt-1">Lead Structural Engineer</p>
          </ScrollReveal>
          {/* Person 2 */}
          <ScrollReveal className="group" delay={0.1}>
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-surface-container-highest rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="Marcus Thorne"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0GXfrQG8pZWngbXTVvSX9D-8T_CNejBHf2pl9RVV9v8tm0LzXHWJkCzuupaY3LMTHlJ9p94vjXjLTTpnzxy8s0AkkpS_5CxDhxvfOPT5uNQlxEu3DYPZ-649QohkScayWWOclfr9YlIOcAyziG6lDXxcRnDnLTPkRLkFf7qOPWEy_Ev9ufcXs2Zp6laSxSdlf5xktI9T6V-sK2XzvevCxi4HT6i5_9e2Wi-kCbBFRxdfUkb4MB2g5kEHub8pV7YqF8YBKl9AT"
              />
            </div>
            <h4 className="font-headline-sm text-headline-sm">Marcus Thorne</h4>
            <p className="font-label-md text-label-md text-on-primary-container uppercase mt-1">Chief Design Officer</p>
          </ScrollReveal>
          {/* Person 3 */}
          <ScrollReveal className="group" delay={0.2}>
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-surface-container-highest rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="Sarah Chen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1U1rteYz70_fzp0eGp-L3_bcrodHDfwlmAgfOkgnrBvJpeHb0vc4pd9SarDyMQI38DDdY2KYEwb0Icl9nyPWqHLuqf9IImv_rg-0pt63B4ijWDP7OLIx9JdAa4MwUl0GoH3MRg_ST8Idj3eSGz9iBxrcMfVwgdtgVQNPs4RwkU_N74usYdawIiPNa8sNsaOF7K_JPVgSDB9GbjpFvsrrdIPoN4HqUWjQxNj8zUV6c98ru7Q4Ly8Gq0H8vgSKSiBaTAjD_bchu"
              />
            </div>
            <h4 className="font-headline-sm text-headline-sm">Sarah Chen</h4>
            <p className="font-label-md text-label-md text-on-primary-container uppercase mt-1">Ecosystem Architect</p>
          </ScrollReveal>
          {/* Person 4 */}
          <ScrollReveal className="group" delay={0.3}>
            <div className="aspect-[3/4] mb-6 overflow-hidden bg-surface-container-highest rounded-lg grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                className="w-full h-full object-cover"
                alt="David Miller"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPyvR-ds9BzT3UYjJEupgKOj-BceugOgOGaQ-fpjiJA2W2kCd6MFlZNa49awauq3wPSDRcz127dIrGmgg0AQp2er2-totcDl80XRgvpxPokCbUYgbiGRg_HZO3cqV_33a5huW2m-H9fh30Lnc5QC40mN6vygiOYLUG3US9LG5cTzkfCxflTHNjkEqYrbuX2Owa261hOZV_s3SH_hnjNFEqj9rrN6Be_dizz69i2TYdN36rqKYEoVKLoa4bIvXVhqkubeSU-jXL"
              />
            </div>
            <h4 className="font-headline-sm text-headline-sm">David Miller</h4>
            <p className="font-label-md text-label-md text-on-primary-container uppercase mt-1">Operations Director</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-on-primary overflow-hidden relative">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[400px] absolute -right-20 -top-20 font-thin">foundation</span>
        </div>
        <ScrollReveal className="max-w-max-width mx-auto px-margin-desktop relative z-10 text-center">
          <h2 className="font-display-lg text-display-lg mb-8 max-w-3xl mx-auto">Ready to build something with absolute precision?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-secondary text-on-primary px-10 py-4 rounded-lg font-label-lg text-label-lg hover:bg-secondary/90 transition-all">
              Start Your Project
            </button>
            <button className="border border-outline-variant text-on-primary px-10 py-4 rounded-lg font-label-lg text-label-lg hover:bg-on-primary hover:text-primary transition-all">
              View Our Work
            </button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
