import { useEffect, useRef } from 'react';

export default function Proof() {
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
    <section id="proof" className="section bg-white py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="proof-header text-center max-w-[640px] mx-auto mb-[3.5rem] reveal" ref={el => revealRefs.current[0] = el}>
          <div className="section-label">What Clients Say</div>
          <h2 className="text-[#1B2A4A] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">Real Businesses. <span className="text-[#C94B20]">Real Results.</span></h2>
        </div>
        <div className="proof-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          <div className="proof-card bg-[#FDF8F2] rounded-[12px] p-[1.75rem] border border-[#eee] transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_8px_32px_rgba(0,0,0,.06)] reveal reveal-delay-1" ref={el => revealRefs.current[1] = el}>
            <div className="proof-stars text-[#F5A623] text-[1.1rem] mb-[1rem] tracking-[2px]">★★★★★</div>
            <p className="proof-text text-[.95rem] leading-[1.8] text-[#444] mb-[1.25rem] italic">"Before AJ, nobody could find our lodge online. Within 3 weeks of working together, we had 6 new enquiries from Google alone. That had never happened before."</p>
            <div className="proof-author flex items-center gap-[12px]">
              <div className="proof-avatar w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[#C94B20] to-[#1B2A4A] flex items-center justify-center font-['Syne'] text-[1rem] font-extrabold text-white">TM</div>
              <div><div className="proof-name text-[.9rem] font-semibold text-[#1B2A4A]">Thembi Mwale</div><div className="proof-biz text-[.8rem] text-[#6B7280]">Lodge Owner, Nkhata Bay</div></div>
            </div>
            <div className="proof-result mt-[1rem] pt-[1rem] border-t border-[#e8e8e8] text-[.8rem] font-bold text-[#C94B20] flex items-center gap-[6px]">📈 6 new Google enquiries in month 1</div>
          </div>
          <div className="proof-card bg-[#FDF8F2] rounded-[12px] p-[1.75rem] border border-[#eee] transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_8px_32px_rgba(0,0,0,.06)] reveal reveal-delay-2" ref={el => revealRefs.current[2] = el}>
            <div className="proof-stars text-[#F5A623] text-[1.1rem] mb-[1rem] tracking-[2px]">★★★★★</div>
            <p className="proof-text text-[.95rem] leading-[1.8] text-[#444] mb-[1.25rem] italic">"I used to spend hours trying to post on Facebook and still get no response. AJ took over and our page went from 200 to 900 followers in 2 months. Bookings are up."</p>
            <div className="proof-author flex items-center gap-[12px]">
              <div className="proof-avatar w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[#C94B20] to-[#1B2A4A] flex items-center justify-center font-['Syne'] text-[1rem] font-extrabold text-white">BK</div>
              <div><div className="proof-name text-[.9rem] font-semibold text-[#1B2A4A]">Brian Kumwenda</div><div className="proof-biz text-[.8rem] text-[#6B7280]">Restaurant Owner, Mzuzu</div></div>
            </div>
            <div className="proof-result mt-[1rem] pt-[1rem] border-t border-[#e8e8e8] text-[.8rem] font-bold text-[#C94B20] flex items-center gap-[6px]">📈 200 → 900 followers in 60 days</div>
          </div>
          <div className="proof-card bg-[#FDF8F2] rounded-[12px] p-[1.75rem] border border-[#eee] transition-all duration-300 hover:border-[#F5A623] hover:shadow-[0_8px_32px_rgba(0,0,0,.06)] reveal reveal-delay-3" ref={el => revealRefs.current[3] = el}>
            <div className="proof-stars text-[#F5A623] text-[1.1rem] mb-[1rem] tracking-[2px]">★★★★★</div>
            <p className="proof-text text-[.95rem] leading-[1.8] text-[#444] mb-[1.25rem] italic">"AJ doesn't just manage social media — he understands business. He told me exactly what was wrong with how I was presenting myself and fixed it. My WhatsApp enquiries tripled."</p>
            <div className="proof-author flex items-center gap-[12px]">
              <div className="proof-avatar w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[#C94B20] to-[#1B2A4A] flex items-center justify-center font-['Syne'] text-[1rem] font-extrabold text-white">GN</div>
              <div><div className="proof-name text-[.9rem] font-semibold text-[#1B2A4A]">Grace Nyirenda</div><div className="proof-biz text-[.8rem] text-[#6B7280]">Agri-Tourism Farm, Rumphi</div></div>
            </div>
            <div className="proof-result mt-[1rem] pt-[1rem] border-t border-[#e8e8e8] text-[.8rem] font-bold text-[#C94B20] flex items-center gap-[6px]">📈 3× WhatsApp enquiries per month</div>
          </div>
        </div>
      </div>
    </section>
  );
}
