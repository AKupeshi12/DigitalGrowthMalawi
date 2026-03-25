import { useEffect, useRef } from 'react';

export default function Process() {
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
    <section id="process" className="section bg-[#FDF8F2] py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="process-header text-center max-w-[640px] mx-auto mb-[3.5rem] reveal" ref={el => revealRefs.current[0] = el}>
          <div className="section-label">How It Works</div>
          <h2 className="text-[#1B2A4A] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">From Invisible to <span className="text-[#C94B20]">In-Demand</span> in 4 Steps</h2>
        </div>
        <div className="process-steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          <div className="process-step text-center px-[1.5rem] relative z-[1] reveal reveal-delay-1" ref={el => revealRefs.current[1] = el}>
            <div className="process-num w-[52px] h-[52px] rounded-full bg-[#1B2A4A] text-[#F5A623] font-['Syne'] text-[1.2rem] font-extrabold flex items-center justify-center mx-auto mb-[1.25rem] border-[3px] border-[#F5A623] shadow-[0_0_0_4px_#FDF8F2]">1</div>
            <h3 className="text-[1rem] text-[#1B2A4A] font-bold mb-[.5rem]">Free Audit</h3>
            <p className="text-[.875rem] text-[#666] leading-[1.75]">Send us your business name on WhatsApp. We analyse your Google, Facebook, and online presence within 24 hours and send you a full report — free.</p>
          </div>
          <div className="process-step text-center px-[1.5rem] relative z-[1] reveal reveal-delay-2" ref={el => revealRefs.current[2] = el}>
            <div className="process-num w-[52px] h-[52px] rounded-full bg-[#1B2A4A] text-[#F5A623] font-['Syne'] text-[1.2rem] font-extrabold flex items-center justify-center mx-auto mb-[1.25rem] border-[3px] border-[#F5A623] shadow-[0_0_0_4px_#FDF8F2]">2</div>
            <h3 className="text-[1rem] text-[#1B2A4A] font-bold mb-[.5rem]">Strategy Call</h3>
            <p className="text-[.875rem] text-[#666] leading-[1.75]">AJ calls you personally. We walk through exactly what needs to change, what it will cost, and what results to expect. No pressure. Just clarity.</p>
          </div>
          <div className="process-step text-center px-[1.5rem] relative z-[1] reveal reveal-delay-3" ref={el => revealRefs.current[3] = el}>
            <div className="process-num w-[52px] h-[52px] rounded-full bg-[#1B2A4A] text-[#F5A623] font-['Syne'] text-[1.2rem] font-extrabold flex items-center justify-center mx-auto mb-[1.25rem] border-[3px] border-[#F5A623] shadow-[0_0_0_4px_#FDF8F2]">3</div>
            <h3 className="text-[1rem] text-[#1B2A4A] font-bold mb-[.5rem]">We Execute</h3>
            <p className="text-[.875rem] text-[#666] leading-[1.75]">You approve the plan and we get to work. Google profile, Facebook page, WhatsApp system, website, content — handled completely by our team.</p>
          </div>
          <div className="process-step text-center px-[1.5rem] relative z-[1] reveal reveal-delay-4" ref={el => revealRefs.current[4] = el}>
            <div className="process-num w-[52px] h-[52px] rounded-full bg-[#1B2A4A] text-[#F5A623] font-['Syne'] text-[1.2rem] font-extrabold flex items-center justify-center mx-auto mb-[1.25rem] border-[3px] border-[#F5A623] shadow-[0_0_0_4px_#FDF8F2]">4</div>
            <h3 className="text-[1rem] text-[#1B2A4A] font-bold mb-[.5rem]">Monthly Growth</h3>
            <p className="text-[.875rem] text-[#666] leading-[1.75]">Every month you receive a report showing your growth — new Google views, more followers, leads generated. We keep improving. You keep growing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
