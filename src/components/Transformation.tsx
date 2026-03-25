import { useEffect, useRef } from 'react';

export default function Transformation() {
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
    <section id="transformation" className="section bg-gradient-to-br from-[#C94B20] via-[#8B2500] to-[#1B2A4A] text-white py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="transform-inner grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center">
          <div className="transform-content reveal" ref={el => revealRefs.current[0] = el}>
            <div className="section-label text-[#FFBE4F] before:bg-[#FFBE4F]">The Transformation</div>
            <h2 className="text-white mb-[1.25rem] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">We Don't Just Tell You What's Wrong. <span className="text-[#F5A623]">We Fix It.</span></h2>
            <p className="text-[rgba(255,255,255,.8)] mb-[2rem] leading-[1.75]">Most digital agencies give you a report and leave you to figure it out. AJ Digital Growth executes every change on your behalf. You tell us your goal — we make it happen online.</p>
            <div className="transform-list flex flex-col gap-[1rem] mb-[2rem]">
              <div className="transform-item flex items-start gap-[14px]">
                <div className="transform-check w-[28px] h-[28px] rounded-full bg-[#F5A623] flex items-center justify-center shrink-0 mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-[14px] h-[14px] text-[#1B2A4A]"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="text-[rgba(255,255,255,.9)] text-[.95rem] leading-[1.75]"><strong>More customers find you</strong> — because you appear where they're already searching</p>
              </div>
              <div className="transform-item flex items-start gap-[14px]">
                <div className="transform-check w-[28px] h-[28px] rounded-full bg-[#F5A623] flex items-center justify-center shrink-0 mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-[14px] h-[14px] text-[#1B2A4A]"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="text-[rgba(255,255,255,.9)] text-[.95rem] leading-[1.75]"><strong>More trust, fewer lost leads</strong> — professional presence that converts visitors into buyers</p>
              </div>
              <div className="transform-item flex items-start gap-[14px]">
                <div className="transform-check w-[28px] h-[28px] rounded-full bg-[#F5A623] flex items-center justify-center shrink-0 mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-[14px] h-[14px] text-[#1B2A4A]"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="text-[rgba(255,255,255,.9)] text-[.95rem] leading-[1.75]"><strong>More time for you</strong> — we manage all digital channels so you focus on delivery</p>
              </div>
              <div className="transform-item flex items-start gap-[14px]">
                <div className="transform-check w-[28px] h-[28px] rounded-full bg-[#F5A623] flex items-center justify-center shrink-0 mt-[2px]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-[14px] h-[14px] text-[#1B2A4A]"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="text-[rgba(255,255,255,.9)] text-[.95rem] leading-[1.75]"><strong>Measurable results every month</strong> — you see exactly what your investment is producing</p>
              </div>
            </div>
            <a className="btn btn-primary" href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20want%20to%20transform%20my%20business%20online" target="_blank" rel="noreferrer">Start Your Transformation</a>
          </div>
          <div className="transform-visual relative reveal reveal-delay-2" ref={el => revealRefs.current[1] = el}>
            <div className="transform-img-wrap border-radius-[20px] overflow-hidden border-[3px] border-[rgba(245,166,35,.4)] shadow-[0_24px_60px_rgba(0,0,0,.4)]">
              <img src="aj-portrait.png" alt="AJ Siminga — Digital Growth Expert Malawi" className="w-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display='none'; (e.target as HTMLImageElement).nextElementSibling && ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.setProperty('display', 'flex'); }} />
              <div className="transform-img-placeholder w-full h-[400px] bg-[rgba(255,255,255,.1)] flex items-center justify-center" style={{ display: 'none' }}>
                <div className="text-center text-white p-[2rem]">
                  <div className="font-['Syne'] text-[1.5rem] font-extrabold">AJ Siminga</div>
                  <div className="text-[1rem] opacity-[.7] mt-[.5rem]">Digital Growth Expert</div>
                </div>
              </div>
            </div>
            <div className="before-after grid grid-cols-2 gap-[1rem] mt-[-1rem] relative z-[1]">
              <div className="ba-card before bg-[rgba(255,255,255,.1)] backdrop-blur-[10px] rounded-[8px] p-[1rem] border border-[rgba(255,255,255,.15)]">
                <div className="ba-label text-[10px] font-bold tracking-[.1em] uppercase mb-[.5rem] text-[rgba(255,255,255,.5)]">❌ Before AJ</div>
                <p className="text-[.8rem] text-[rgba(255,255,255,.8)] leading-[1.5]">Invisible on Google, no reviews, inconsistent social media, losing customers to competitors</p>
              </div>
              <div className="ba-card after bg-[rgba(255,255,255,.1)] backdrop-blur-[10px] rounded-[8px] p-[1rem] border border-[rgba(255,255,255,.15)]">
                <div className="ba-label text-[10px] font-bold tracking-[.1em] uppercase mb-[.5rem] text-[#F5A623]">✅ After AJ</div>
                <p className="text-[.8rem] text-[rgba(255,255,255,.8)] leading-[1.5]">Top 3 on Google, active presence, WhatsApp enquiries weekly, brand people trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
