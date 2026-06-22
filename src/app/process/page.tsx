export default function Process() {
  return (
    <div className="flex-grow pt-32 md:pt-48 pb-section-gap">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap text-center md:text-left">
        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6 text-balance">
          The Architecture of Craft
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-balance">
          Our construction methodology bridges the gap between raw, natural materials and refined architectural elegance. Explore the meticulous four-stage journey from bare earth to a completed, bespoke sanctuary.
        </p>
      </section>

      {/* Staggered Timeline Section */}
      <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop timeline-line">
        <div className="flex flex-col gap-section-gap">
          {/* Stage 1 */}
          <article className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-element-gap items-center group">
            {/* Timeline Node */}
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20"></div>
            {/* Image Card */}
            <div className="w-full pl-12 md:pl-0 md:pr-element-gap">
              <div className="overflow-hidden rounded-lg ambient-shadow bg-surface-container aspect-[4/3] relative">
                <img
                  alt="Site Selection and Foundation Phase"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/process-01-foundation.jpg"
                />
              </div>
            </div>
            {/* Content */}
            <div className="pl-12 md:pl-element-gap flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-primary font-label-md text-label-md">01</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md text-primary">대지 선정 및 기초</h2>
              </div>
              <h3 className="font-body-lg text-body-lg text-outline mb-4">Site Selection &amp; Foundation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-balance">
                A meticulous survey of the terrain ensures optimal orientation and structural integrity. Ground preparation involves precise excavation and laying a robust foundation, setting the unshakeable bedrock for the timber structure. We respect the natural topography, allowing the architecture to emerge organically from the site.
              </p>
            </div>
          </article>

          {/* Stage 2 */}
          <article className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-element-gap items-center group">
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20"></div>
            {/* Content (Reversed on Desktop) */}
            <div className="pl-12 md:pl-0 md:pr-element-gap flex flex-col justify-center md:order-1 order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary-container text-primary font-label-md text-label-md">02</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md text-primary">골조 및 목조 시공</h2>
              </div>
              <h3 className="font-body-lg text-body-lg text-outline mb-4">Framing &amp; Wood Construction</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-balance">
                The soul of the building takes shape. Premium, sustainably sourced timber is expertly jointed and erected. This phase highlights bespoke craftsmanship, where every structural beam and column is meticulously placed to form a resilient and aesthetically breathtaking skeleton, celebrating the raw, tactile nature of wood.
              </p>
            </div>
            {/* Image Card */}
            <div className="w-full pl-12 md:pl-element-gap md:order-2 order-1">
              <div className="overflow-hidden rounded-lg ambient-shadow bg-surface-container aspect-[4/3] relative">
                <img
                  alt="Framing and Wood Construction Phase"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/process-02-framing.jpg"
                />
              </div>
            </div>
          </article>

          {/* Stage 3 */}
          <article className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-element-gap items-center group">
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-outline-variant transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20 transition-colors duration-500 hover:bg-primary"></div>
            {/* Image Card */}
            <div className="w-full pl-12 md:pl-0 md:pr-element-gap">
              <div className="overflow-hidden rounded-lg ambient-shadow bg-surface-container aspect-[4/3] relative">
                <img
                  alt="Interior and Exterior Finishing Phase"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/process-03-finishing.jpg"
                />
              </div>
            </div>
            {/* Content */}
            <div className="pl-12 md:pl-element-gap flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">03</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md text-on-surface">내외장 마감</h2>
              </div>
              <h3 className="font-body-lg text-body-lg text-outline mb-4">Interior &amp; Exterior Finishing</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-balance">
                The transition from structure to sanctuary. High-end finishes, custom millwork, and advanced fenestration are seamlessly integrated. The marriage of tactile wood surfaces with modern glass and minimal metal elements creates a harmonious balance of light, warmth, and structural clarity.
              </p>
            </div>
          </article>

          {/* Stage 4 */}
          <article className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-element-gap items-center group">
            <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-outline-variant transform -translate-x-1/2 -translate-y-1/2 border-4 border-background z-20 transition-colors duration-500 hover:bg-primary"></div>
            {/* Content (Reversed on Desktop) */}
            <div className="pl-12 md:pl-0 md:pr-element-gap flex flex-col justify-center md:order-1 order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md">04</span>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md text-on-surface">준공 및 완성</h2>
              </div>
              <h3 className="font-body-lg text-body-lg text-outline mb-4">Completion</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-balance">
                The final culmination of design and engineering. Rigorous quality checks and precision detailing finalize the architectural vision. The completed structure stands as a testament to modern organicism, ready to gracefully age and deepen in character within its natural surroundings.
              </p>
            </div>
            {/* Image Card */}
            <div className="w-full pl-12 md:pl-element-gap md:order-2 order-1">
              <div className="overflow-hidden rounded-lg ambient-shadow bg-surface-container aspect-[4/3] relative">
                <img
                  alt="Final Completion Phase"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  src="/home-main.jpg?v=2"
                />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap text-center">
        <div className="bg-secondary-container/30 rounded-xl p-12 md:p-24 border border-outline-variant/30 ambient-shadow backdrop-blur-sm">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary mb-6 text-balance">
            Begin Your Architectural Journey
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8 text-balance">
            Partner with us to translate your vision into a structural masterpiece crafted from nature's finest materials.
          </p>
          <button className="bg-primary text-on-primary font-label-md text-label-md tracking-widest uppercase px-10 py-4 rounded-DEFAULT hover:opacity-90 hover:-translate-y-1 transition-all duration-300 ambient-shadow">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
