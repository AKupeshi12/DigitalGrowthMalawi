import { useEffect, useRef } from 'react';

export default function Pricing() {
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

  return (
    <section id="pricing" className="section bg-[#1B2A4A] py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="pricing-header text-center max-w-[640px] mx-auto mb-[3.5rem] reveal" ref={el => revealRefs.current[0] = el}>
          <div className="section-label justify-center text-[#F5A623]"><span className="bg-[#F5A623] w-[24px] h-[2px] inline-block"></span>Simple, Transparent Pricing</div>
          <h2 className="text-white text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">No Hidden Fees. No Surprises.<br /><span className="text-[#F5A623]">Just Results.</span></h2>
          <p className="text-[rgba(255,255,255,.7)] mt-[1rem] leading-[1.75]">Choose the package that fits your business now. Upgrade anytime. Cancel anytime. No long contracts.</p>
        </div>
        <div className="pricing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          <div className="pricing-card bg-[rgba(255,255,255,.05)] border-[1.5px] border-[rgba(255,255,255,.1)] rounded-[12px] p-[2rem] transition-all duration-300 hover:border-[rgba(245,166,35,.5)] hover:translate-y-[-4px] reveal reveal-delay-1" ref={el => revealRefs.current[1] = el}>
            <div className="pricing-tag text-[11px] font-bold tracking-[.1em] uppercase text-[rgba(255,255,255,.6)] mb-[1rem]">For small businesses just starting</div>
            <div className="pricing-name font-['Syne'] text-[1.4rem] font-extrabold text-white mb-[.25rem]">Starter</div>
            <div className="pricing-price font-['Syne'] text-[2rem] font-extrabold text-[#F5A623] my-[.75rem]">MWK 55K<span className="text-[1rem] font-normal text-[rgba(255,255,255,.6)]">/month</span></div>
            <div className="pricing-desc text-[.875rem] text-[rgba(255,255,255,.65)] mb-[1.5rem] leading-[1.7]">Get found online and start building a professional presence. Perfect if you just need the basics done right.</div>
            <ul className="pricing-list flex flex-col gap-[.75rem] mb-[2rem]">
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Google Business Profile setup & management</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Facebook page optimisation</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">3 Facebook posts per week</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">WhatsApp button integration</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Monthly performance report</li>
            </ul>
            <a className="btn btn-outline w-full justify-center" href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20am%20interested%20in%20the%20Starter%20package" target="_blank" rel="noreferrer">Get Started →</a>
          </div>
          <div className="pricing-card featured bg-[#F5A623] border-[#F5A623] rounded-[12px] p-[2rem] transition-all duration-300 scale-[1.03] hover:translate-y-[-4px] reveal reveal-delay-2" ref={el => revealRefs.current[2] = el}>
            <div className="pricing-tag text-[11px] font-bold tracking-[.1em] uppercase text-[#1B2A4A] mb-[1rem]">Most popular — best value</div>
            <div className="pricing-name font-['Syne'] text-[1.4rem] font-extrabold text-[#1B2A4A] mb-[.25rem]">Growth</div>
            <div className="pricing-price font-['Syne'] text-[2rem] font-extrabold text-[#1B2A4A] my-[.75rem]">MWK 90K<span className="text-[1rem] font-normal text-[rgba(27,42,74,.6)]">/month</span></div>
            <div className="pricing-desc text-[.875rem] text-[rgba(27,42,74,.8)] mb-[1.5rem] leading-[1.7]">Full digital presence management. Everything in Starter plus content creation, WhatsApp automation, and active lead generation.</div>
            <ul className="pricing-list flex flex-col gap-[.75rem] mb-[2rem]">
              <li className="flex items-start gap-[10px] text-[.875rem] text-[#1B2A4A] before:content-['✓'] before:text-[#1B2A4A] before:font-bold before:shrink-0">Everything in Starter</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[#1B2A4A] before:content-['✓'] before:text-[#1B2A4A] before:font-bold before:shrink-0">WhatsApp booking flow setup</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[#1B2A4A] before:content-['✓'] before:text-[#1B2A4A] before:font-bold before:shrink-0">Content creation (photos + captions)</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[#1B2A4A] before:content-['✓'] before:text-[#1B2A4A] before:font-bold before:shrink-0">Google review management</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[#1B2A4A] before:content-['✓'] before:text-[#1B2A4A] before:font-bold before:shrink-0">Competitor analysis report</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[#1B2A4A] before:content-['✓'] before:text-[#1B2A4A] before:font-bold before:shrink-0">Weekly performance update</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[#1B2A4A] before:content-['✓'] before:text-[#1B2A4A] before:font-bold before:shrink-0">Priority WhatsApp support</li>
            </ul>
            <a className="btn btn-orange w-full justify-center" href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20want%20the%20Growth%20package" target="_blank" rel="noreferrer">Start Growing Today →</a>
          </div>
          <div className="pricing-card bg-[rgba(255,255,255,.05)] border-[1.5px] border-[rgba(255,255,255,.1)] rounded-[12px] p-[2rem] transition-all duration-300 hover:border-[rgba(245,166,35,.5)] hover:translate-y-[-4px] reveal reveal-delay-3" ref={el => revealRefs.current[3] = el}>
            <div className="pricing-tag text-[11px] font-bold tracking-[.1em] uppercase text-[rgba(255,255,255,.6)] mb-[1rem]">For serious growth & visibility</div>
            <div className="pricing-name font-['Syne'] text-[1.4rem] font-extrabold text-white mb-[.25rem]">Dominate</div>
            <div className="pricing-price font-['Syne'] text-[2rem] font-extrabold text-[#F5A623] my-[.75rem]">MWK 150K<span className="text-[1rem] font-normal text-[rgba(255,255,255,.6)]">/month</span></div>
            <div className="pricing-desc text-[.875rem] text-[rgba(255,255,255,.65)] mb-[1.5rem] leading-[1.7]">Full service digital growth partner. Website, content, ads, Google, Facebook — everything managed. For businesses ready to lead their market.</div>
            <ul className="pricing-list flex flex-col gap-[.75rem] mb-[2rem]">
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Everything in Growth</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Professional website design & hosting</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Facebook & Google ad management</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Professional photography session (quarterly)</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">SEO — rank on Google organically</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Monthly strategy call with AJ</li>
              <li className="flex items-start gap-[10px] text-[.875rem] text-[rgba(255,255,255,.8)] before:content-['✓'] before:text-[#F5A623] before:font-bold before:shrink-0">Dedicated account manager</li>
            </ul>
            <a className="btn btn-primary w-full justify-center" href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20want%20the%20Dominate%20package" target="_blank" rel="noreferrer">Dominate Your Market →</a>
          </div>
        </div>
        <div className="text-center mt-[2rem]">
          <p className="text-[rgba(255,255,255,.5)] text-[.9rem]">Not sure which package fits? <a href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20need%20help%20choosing%20the%20right%20package" className="text-[#F5A623] font-semibold" target="_blank" rel="noreferrer">Message AJ for a free recommendation →</a></p>
        </div>
      </div>
    </section>
  );
}
