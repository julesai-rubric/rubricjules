import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-primary py-32 overflow-hidden">
        <div className="relative z-10 max-w-max-width mx-auto px-margin-desktop text-on-primary">
          <ScrollReveal className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider mb-6">
              Open Roles
            </span>
            <h1 className="font-display-lg text-display-lg mb-8 leading-tight">Join the Architecture of the Future</h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-10 max-w-2xl">
              We're building an ecosystem of technical excellence. Rubric is where architectural precision meets radical engineering growth. We
              don't just write code; we design foundations.
            </p>
            <div className="flex items-center gap-6">
              <Link
                className="bg-on-primary text-primary px-8 py-4 font-label-lg text-label-lg rounded-lg hover:bg-secondary hover:text-on-secondary transition-all"
                href="#open-positions"
              >
                View Openings
              </Link>
              <Link className="group flex items-center gap-2 font-label-lg text-label-lg text-on-primary hover:text-secondary transition-colors" href="#">
                Learn about our tech stack
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Technical Excellence Stats */}
      <section className="bg-surface-container py-16">
        <div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter text-center">
          <ScrollReveal>
            <p className="font-display-lg text-display-lg text-secondary mb-2">99.9%</p>
            <p className="font-label-lg text-label-lg text-on-primary-container uppercase">Uptime Mandate</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-display-lg text-display-lg text-secondary mb-2">12</p>
            <p className="font-label-lg text-label-lg text-on-primary-container uppercase">Global Ecosystems</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-display-lg text-display-lg text-secondary mb-2">20k+</p>
            <p className="font-label-lg text-label-lg text-on-primary-container uppercase">Deploys / Year</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-display-lg text-display-lg text-secondary mb-2">0</p>
            <p className="font-label-lg text-label-lg text-on-primary-container uppercase">Technical Debt Tolerance</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Rubric? Bento Grid */}
      <section className="py-32 architectural-grid">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <ScrollReveal className="mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary border-l-4 border-secondary pl-6">Why Rubric?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-xl">
              Engineering isn't a job here; it's a discipline. We provide the structural support for you to reach your peak performance.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Bento Card 1: Technical Excellence */}
            <ScrollReveal className="md:col-span-2 bg-white border border-outline-variant/30 p-10 hover-card-effect flex flex-col justify-between">
              <div className="">
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">architecture</span>
                <h3 className="font-headline-md text-headline-md mb-4 text-primary">Technical Excellence</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Work with the latest in cloud-native architecture, distributed systems, and AI-driven infrastructure. Our stack is modern, our
                  standards are high, and our impact is measurable.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="bg-surface-container-high px-3 py-1 rounded text-body-sm font-label-md">Rust</span>
                <span className="bg-surface-container-high px-3 py-1 rounded text-body-sm font-label-md">Kubernetes</span>
                <span className="bg-surface-container-high px-3 py-1 rounded text-body-sm font-label-md">WebAssembly</span>
                <span className="bg-surface-container-high px-3 py-1 rounded text-body-sm font-label-md">Go</span>
              </div>
            </ScrollReveal>
            {/* Bento Card 2: Growth */}
            <ScrollReveal className="bg-primary text-on-primary p-10 hover-card-effect" delay={0.1}>
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">trending_up</span>
              <h3 className="font-headline-md text-headline-md mb-4">Radical Growth</h3>
              <p className="font-body-md text-body-md text-on-primary-container">
                $5,000 annual learning stipend, dedicated "Research Fridays," and internal mentorship from industry veterans.
              </p>
            </ScrollReveal>
            {/* Bento Card 3: Impact */}
            <ScrollReveal className="bg-white border border-outline-variant/30 p-10 hover-card-effect" delay={0.2}>
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">bolt</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">Global Impact</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our engineering solutions power critical infrastructure for millions. When we ship, the world notices.
              </p>
            </ScrollReveal>
            {/* Bento Card 4: Benefits */}
            <ScrollReveal className="md:col-span-2 bg-surface-container-low border border-outline-variant/30 p-10 hover-card-effect" delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-headline-md text-headline-md mb-4 text-primary">Ecosystem Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-md text-body-md">Remote-First Culture</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-md text-body-md">Equity &amp; Profit Sharing</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">check_circle</span>
                      <span className="font-body-md text-body-md">Top-tier Health &amp; Wellness</span>
                    </li>
                  </ul>
                </div>
                <div className="h-48 rounded-lg overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPTxvc6fK6m8hDPl0wPDjk3kzdOTLw_DQueBLu6JT36qdpa21DZKJcEJzK6k-MKXEN73_pxUw71TZWKkJvN6u_g8mrFDUYR_j71mmkwDDGW399lJn1aG3KST_LYQnCfGy3PL0SoQ1Jwl6t7rICsLXi10tMFKhDsGZ5CTAeW2oAsh_7UNg_8OW3C22ZOmhb8KL_tsJoTplYdjkMyrPXH37uwGj_5xLIwoFkZ6ugJMPUD2oNfr1Gli-kRxb6opXFKfyBfSNWPngI')",
                    }}
                  ></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 bg-primary text-on-primary">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal>
              <h2 className="font-display-lg text-display-lg mb-8">Our Culture is our Operating System</h2>
              <p className="font-body-lg text-body-lg text-on-primary-container mb-8">
                At Rubric, we value clarity over consensus and results over activity. We foster an environment of high-trust and high-autonomy, where
                the best architectural idea wins, regardless of hierarchy.
              </p>
              <div className="space-y-8">
                <div className="border-l-2 border-secondary pl-6">
                  <h4 className="font-headline-sm text-headline-sm mb-2">Radical Transparency</h4>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    We share everything—from technical roadmaps to financial metrics—so everyone has the context to lead.
                  </p>
                </div>
                <div className="border-l-2 border-secondary pl-6">
                  <h4 className="font-headline-sm text-headline-sm mb-2">Sustainable Intensity</h4>
                  <p className="font-body-md text-body-md text-on-primary-container">
                    We work hard because the problems are exciting, not because we have to. We guard our time and mental energy fiercely.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-x-0 space-y-4 pt-12">
                <ScrollReveal className="h-80 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    alt="Team brainstorming"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaicyyDlv7x6yQ5lhRNhYCZud7lHXPwiDV4saVu6FdVjpKHZGcpV8gtRVbyCpSYG4dpCLOMo6CcJZfx08SUNkpx-qeKlW-pCRSxS9CuJcJso8cyw1PKDFGX1OTL7OPoAto2QwdGa55eJ-292Fu2WgHWXQggL3ZQGmjm4-87k0xmx9joK7B3sE1TlbU1b6VS2k7lcmcy6GaQmxusC41BQRXtB9XNsDyJz_QhfSI25R7sm3GoRLrErDAH7h6MZULnNiPlr4dHuzb"
                  />
                </ScrollReveal>
                <ScrollReveal className="h-48 rounded-lg overflow-hidden" delay={0.1}>
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    alt="Server rack"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhQj_lueu41CryAvBzEB08MuWzU8a-hYEKnTq4N0apBO2vEsB59ANAKqJ0CN1XQ2bYQftX_CxnUTe-_w2Ici2Bzhfz2pYnVDPe2mffj9w9PBimYfJ8y3OP8VhMfRMbKT3RTQ507GPU5jUOP2VV-yomZlHkK33eXCPPCoy_lPUfDcbczPIn1aUrl91mx7LMq68Lns1rjUb85yK5JA14rV1BGR_6B4Y-egmRCxzH-jHgoVRzKZUbXeA5RGVZhsy-yXlBt7oznZma"
                  />
                </ScrollReveal>
              </div>
              <div className="space-x-0 space-y-4">
                <ScrollReveal className="h-48 rounded-lg overflow-hidden" delay={0.2}>
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    alt="Remote work"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMwMz70LDDx1v1R_6v2TMDNqsr91Ubq3MtDX69FZb-OrEVTiCZoCtNk_NoiTnT-P_5blvdug-Um4b3KAb7SRBhmw1MYRAS55QodeOSankesP6btN7vSQl7O9cZHwoZvin_i6Z8rS3XfO1PiO4L2FBoXpSFKvxgK60C9Skc02SftnZscpQy8g2n9i0onqpwGKXd8EIwGuc1L5h6TKeCouolwFJj3FsIBZhWxzKwSP82Z7ZN2qydKPYHmhwUd83mRR4kWYPpDWVr"
                  />
                </ScrollReveal>
                <ScrollReveal className="h-80 rounded-lg overflow-hidden" delay={0.3}>
                  <img
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    alt="Blueprints and code"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzJER9sDtkyYU6SgpExFEvfNmHX5XJaJK1D6fp6H7SThNaq0EpG6OaoW_3ASb69uKgYHdZoc1ictpYLn5dLT2YXnTJ5cddEVBjigY-7VrlLCW4-HioCnzk9pPoaHbGRsXpq1koeA84KYNmOzP-0nnKEmHtQiK7Sc1RD5YCz5ZD21XXWsrWK4iO8HbvQvVQbBu7JpKpC8xq_S8WtvC87yFA6YYc2hK54zHCyGRw5gg4rd-rJwoI5vV56vMCpvrxFZMl0qgRNG1t"
                  />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-32 architectural-grid" id="open-positions">
        <div className="max-w-max-width mx-auto px-margin-desktop">
          <ScrollReveal className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary">Open Architectures</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Find your place in our ecosystem.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-outline text-label-lg font-label-lg rounded hover:bg-surface-container transition-colors">
                All Departments
              </button>
              <button className="px-4 py-2 border border-outline text-label-lg font-label-lg rounded hover:bg-surface-container transition-colors">
                Remote
              </button>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {/* Job Card 1 */}
            <ScrollReveal>
              <div className="group bg-white border border-outline-variant/30 p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-secondary transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded">
                    <span className="material-symbols-outlined text-primary">terminal</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      Senior Distributed Systems Engineer
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Engineering • Remote • Full-time</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-4">
                  <span className="px-3 py-1 bg-surface-container text-label-md font-label-md rounded">Rust / K8s</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary group-hover:translate-x-2 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            </ScrollReveal>
            {/* Job Card 2 */}
            <ScrollReveal delay={0.1}>
              <div className="group bg-white border border-outline-variant/30 p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-secondary transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded">
                    <span className="material-symbols-outlined text-primary">shield</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      Cloud Security Architect
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Security • Remote • Full-time</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-4">
                  <span className="px-3 py-1 bg-surface-container text-label-md font-label-md rounded">Zero Trust / AWS</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary group-hover:translate-x-2 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            </ScrollReveal>
            {/* Job Card 3 */}
            <ScrollReveal delay={0.2}>
              <div className="group bg-white border border-outline-variant/30 p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-secondary transition-all cursor-pointer">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded">
                    <span className="material-symbols-outlined text-primary">brush</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                      Senior Product Designer (UI/UX)
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Design • Remote • Full-time</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex items-center gap-4">
                  <span className="px-3 py-1 bg-surface-container text-label-md font-label-md rounded">Design Systems / Figma</span>
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary group-hover:translate-x-2 transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal className="mt-16 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Don't see a perfect fit? We're always looking for exceptional talent.</p>
            <button className="font-label-lg text-label-lg text-primary border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all pb-1 uppercase tracking-widest">
              Submit a General Application
            </button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
