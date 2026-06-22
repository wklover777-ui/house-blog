export default function Contact() {
  return (
    <div className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-element-gap text-center md:text-left">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          Contact Us
        </h1>
        <p className="font-headline-lg-mobile md:font-headline-md text-headline-lg-mobile md:text-headline-md text-surface-tint">
          당신의 꿈을 함께 설계합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Contact Form */}
        <div className="md:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_4px_24px_rgba(93,64,55,0.08)]">
          {/* Supabase Action Structure: Action will be connected later */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors"
              />
            </div>

            <div>
              <label htmlFor="inquiry-type" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                Inquiry Type
              </label>
              <select
                id="inquiry-type"
                name="inquiry-type"
                className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors"
              >
                <option value="building">Building</option>
                <option value="purchasing">Purchasing</option>
                <option value="consulting">Consulting</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-widest">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-surface-container-lowest border-0 border-b border-primary/30 focus:border-primary focus:ring-0 px-0 py-2 font-body-md text-body-md text-on-surface transition-colors resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full w-full hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details & Map */}
        <div className="md:col-span-5 space-y-element-gap">
          <div className="bg-secondary-container/30 p-8 rounded-xl">
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Studio Details</h3>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <p className="font-bold text-on-surface">M LINE Studio</p>
                  <p>123 Timbercraft Way</p>
                  <p>Design District, City 10001</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">call</span>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">mail</span>
                <a href="mailto:hello@m-line.com" className="hover:text-primary transition-colors">
                  hello@m-line.com
                </a>
              </div>
            </div>
          </div>
          <div className="h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant/30">
            <img
              className="w-full h-full object-cover"
              alt="Map"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCstTPzOjeDI-RMunR8uP8-79cJf5QLpVlg1L5_h581nx-UMvmAFkyWHf3fcUvq_XIasqp3jmFvqC0_rheLws7yYzXBe-K7gyVJWoy5WeAiu--HFTNogUbV9vHk5_rhGQK5sWbvYHKQg9b8nvuLC5JrN4C2qzwHdJYMON840L7cBCCr1iGhP8uzWtTTRbJdyFNoawQOgf_ZCE1SXXBi1B_dozU6m7o5MkzvbPH9aVnYzK4ECSXnjHWpaJS9G7ZBkPWK4-75BoWLI1v7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
