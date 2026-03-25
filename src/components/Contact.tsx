import { useState, useEffect, useRef, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const business = formData.get('business') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const waMessage = encodeURIComponent(
      `Hi AJ! I submitted a message from your website.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Business: ${business || 'Not provided'}\n` +
      `Service needed: ${service || 'Not selected'}\n` +
      `Message: ${message || 'Not provided'}`
    );

    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/265987808110?text=${waMessage}`, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="section bg-[#1B2A4A] py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="contact-inner grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[4rem] items-start">
          <div className="contact-info reveal" ref={el => revealRefs.current[0] = el}>
            <div className="section-label">Get In Touch</div>
            <h2 className="text-white mb-[1rem] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">Let's Talk About<br />Your Business</h2>
            <p className="text-[rgba(255,255,255,.7)] mb-[2rem] leading-[1.75]">Send us a message and AJ will personally review your situation and get back to you within a few hours. WhatsApp is always the fastest.</p>
            <div className="contact-details flex flex-col gap-[1.25rem]">
              <div className="contact-item flex items-start gap-[14px]">
                <div className="contact-item-icon w-[44px] h-[44px] rounded-[8px] bg-[rgba(245,166,35,.15)] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] text-[#F5A623]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <div>
                  <div className="contact-item-label text-[.8rem] text-[rgba(255,255,255,.5)] mb-[2px] font-medium uppercase tracking-[.05em]">WhatsApp (fastest)</div>
                  <div className="contact-item-value text-[.95rem] text-white font-medium">+265 987 808 110</div>
                </div>
              </div>
              <div className="contact-item flex items-start gap-[14px]">
                <div className="contact-item-icon w-[44px] h-[44px] rounded-[8px] bg-[rgba(245,166,35,.15)] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] text-[#F5A623]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="contact-item-label text-[.8rem] text-[rgba(255,255,255,.5)] mb-[2px] font-medium uppercase tracking-[.05em]">Based in</div>
                  <div className="contact-item-value text-[.95rem] text-white font-medium">Mzuzu, Northern Malawi</div>
                </div>
              </div>
              <div className="contact-item flex items-start gap-[14px]">
                <div className="contact-item-icon w-[44px] h-[44px] rounded-[8px] bg-[rgba(245,166,35,.15)] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] text-[#F5A623]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div className="contact-item-label text-[.8rem] text-[rgba(255,255,255,.5)] mb-[2px] font-medium uppercase tracking-[.05em]">Response time</div>
                  <div className="contact-item-value text-[.95rem] text-white font-medium">Within 2–4 hours on WhatsApp</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form bg-white rounded-[12px] p-[2.5rem] reveal reveal-delay-2" ref={el => revealRefs.current[1] = el}>
            <h3 className="text-[1.3rem] text-[#1B2A4A] font-bold mb-[.5rem]">Send Us a Message</h3>
            <p className="form-sub text-[.875rem] text-[#666] mb-[1.75rem]">Or WhatsApp us directly for the fastest response: <strong>0987 808 110</strong></p>
            {submitted && (
              <div className="form-success bg-[#e8f8f0] border border-[#a8e6c2] rounded-[8px] p-[1rem_1.25rem] text-center text-[.9rem] text-[#0a6b3c] font-medium mb-[1.5rem]" id="formSuccess">
                ✅ Thank you! We'll WhatsApp you within a few hours. For faster response, message us directly on WhatsApp.
              </div>
            )}
            {!submitted && (
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-row grid grid-cols-1 sm:grid-cols-2 gap-[1rem]">
                  <div className="form-group mb-[1.25rem]">
                    <label htmlFor="name" className="block text-[.85rem] font-semibold text-[#1B2A4A] mb-[.4rem]">Your Name</label>
                    <input type="text" name="name" id="name" placeholder="e.g. Thembi Mwale" required className="w-full p-[.8rem_1rem] border-[1.5px] border-[#e0e0e0] rounded-[8px] font-['DM_Sans'] text-[.925rem] text-[#1a1a2e] transition-colors duration-200 bg-[#fafafa] outline-none focus:border-[#F5A623] focus:bg-white" />
                  </div>
                  <div className="form-group mb-[1.25rem]">
                    <label htmlFor="phone" className="block text-[.85rem] font-semibold text-[#1B2A4A] mb-[.4rem]">WhatsApp Number</label>
                    <input type="tel" name="phone" id="phone" placeholder="e.g. 0999 123 456" required className="w-full p-[.8rem_1rem] border-[1.5px] border-[#e0e0e0] rounded-[8px] font-['DM_Sans'] text-[.925rem] text-[#1a1a2e] transition-colors duration-200 bg-[#fafafa] outline-none focus:border-[#F5A623] focus:bg-white" />
                  </div>
                </div>
                <div className="form-group mb-[1.25rem]">
                  <label htmlFor="business" className="block text-[.85rem] font-semibold text-[#1B2A4A] mb-[.4rem]">Business Name</label>
                  <input type="text" name="business" id="business" placeholder="e.g. Mwale Lodge & Restaurant" className="w-full p-[.8rem_1rem] border-[1.5px] border-[#e0e0e0] rounded-[8px] font-['DM_Sans'] text-[.925rem] text-[#1a1a2e] transition-colors duration-200 bg-[#fafafa] outline-none focus:border-[#F5A623] focus:bg-white" />
                </div>
                <div className="form-group mb-[1.25rem]">
                  <label htmlFor="service" className="block text-[.85rem] font-semibold text-[#1B2A4A] mb-[.4rem]">What do you need help with?</label>
                  <select name="service" id="service" className="w-full p-[.8rem_1rem] border-[1.5px] border-[#e0e0e0] rounded-[8px] font-['DM_Sans'] text-[.925rem] text-[#1a1a2e] transition-colors duration-200 bg-[#fafafa] outline-none focus:border-[#F5A623] focus:bg-white">
                    <option value="">Select a service...</option>
                    <option>Free digital audit</option>
                    <option>Google visibility</option>
                    <option>Facebook / social media management</option>
                    <option>WhatsApp booking system</option>
                    <option>Website design</option>
                    <option>Monthly retainer package</option>
                    <option>I'm not sure — I need advice</option>
                  </select>
                </div>
                <div className="form-group mb-[1.25rem]">
                  <label htmlFor="message" className="block text-[.85rem] font-semibold text-[#1B2A4A] mb-[.4rem]">Tell us about your business</label>
                  <textarea name="message" id="message" placeholder="What does your business do? What's your biggest challenge getting customers online?" className="w-full p-[.8rem_1rem] border-[1.5px] border-[#e0e0e0] rounded-[8px] font-['DM_Sans'] text-[.925rem] text-[#1a1a2e] transition-colors duration-200 bg-[#fafafa] outline-none focus:border-[#F5A623] focus:bg-white resize-y min-h-[110px]"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center p-[1rem] text-[1rem] rounded-[8px]">
                  Send Message — We'll Reply on WhatsApp
                </button>
                <p className="form-note text-center text-[.8rem] text-[#888] mt-[.75rem]">By submitting, you agree to be contacted via WhatsApp. No spam — ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
