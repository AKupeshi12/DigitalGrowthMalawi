import { useEffect, useRef } from 'react';

export default function Problem() {
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
    <section id="problem" className="section bg-[#FDF8F2] py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="problem-intro text-center max-w-[700px] mx-auto mb-[3.5rem] reveal" ref={el => revealRefs.current[0] = el}>
          <div className="section-label">What We Find In Every Audit</div>
          <h2 className="text-[#1B2A4A] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">Your Business Is Online.<br />But Customers Can't <span className="text-[#C94B20]">Find You.</span></h2>
          <p className="text-[1.1rem] mt-[1rem] leading-[1.75] text-[#444]">We audit hundreds of businesses across Malawi. Here are the five silent problems costing you customers every single day — you may not even know they exist.</p>
        </div>
        <div className="problem-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          <div className="problem-card bg-white rounded-[12px] p-[1.75rem] border-[1.5px] border-[#eee] transition-all duration-300 relative overflow-hidden reveal reveal-delay-1" ref={el => revealRefs.current[1] = el}>
            <div className="problem-icon w-[52px] h-[52px] rounded-[8px] bg-gradient-to-br from-[rgba(201,75,32,.1)] to-[rgba(245,166,35,.1)] flex items-center justify-center text-[24px] mb-[1rem]">🔍</div>
            <h3 className="text-[1.1rem] text-[#1B2A4A] font-bold mb-[.5rem]">You're Invisible on Google</h3>
            <p className="text-[.9rem] leading-[1.75] text-[#444]">When someone in Malawi searches for what you offer, your business doesn't appear. That customer books your competitor instead — because they showed up and you didn't.</p>
            <div className="problem-signal mt-[1rem] pt-[1rem] border-t border-[#f0f0f0] text-[.85rem] font-semibold text-[#C94B20] flex items-center gap-[6px]">⚡ This is the #1 cause of lost bookings</div>
          </div>
          <div className="problem-card bg-white rounded-[12px] p-[1.75rem] border-[1.5px] border-[#eee] transition-all duration-300 relative overflow-hidden reveal reveal-delay-2" ref={el => revealRefs.current[2] = el}>
            <div className="problem-icon w-[52px] h-[52px] rounded-[8px] bg-gradient-to-br from-[rgba(201,75,32,.1)] to-[rgba(245,166,35,.1)] flex items-center justify-center text-[24px] mb-[1rem]">📱</div>
            <h3 className="text-[1.1rem] text-[#1B2A4A] font-bold mb-[.5rem]">Your Facebook Page Is Inactive</h3>
            <p className="text-[.9rem] leading-[1.75] text-[#444]">An inactive or poorly managed Facebook page tells potential customers you're either out of business or not serious. First impressions online are permanent.</p>
            <div className="problem-signal mt-[1rem] pt-[1rem] border-t border-[#f0f0f0] text-[.85rem] font-semibold text-[#C94B20] flex items-center gap-[6px]">⚡ 67% of Malawian buyers check Facebook first</div>
          </div>
          <div className="problem-card bg-white rounded-[12px] p-[1.75rem] border-[1.5px] border-[#eee] transition-all duration-300 relative overflow-hidden reveal reveal-delay-3" ref={el => revealRefs.current[3] = el}>
            <div className="problem-icon w-[52px] h-[52px] rounded-[8px] bg-gradient-to-br from-[rgba(201,75,32,.1)] to-[rgba(245,166,35,.1)] flex items-center justify-center text-[24px] mb-[1rem]">💬</div>
            <h3 className="text-[1.1rem] text-[#1B2A4A] font-bold mb-[.5rem]">No WhatsApp Booking System</h3>
            <p className="text-[.9rem] leading-[1.75] text-[#444]">Customers ready to buy right now have no easy way to reach you. No WhatsApp button, no clear number, no instant response — they move on in 30 seconds.</p>
            <div className="problem-signal mt-[1rem] pt-[1rem] border-t border-[#f0f0f0] text-[.85rem] font-semibold text-[#C94B20] flex items-center gap-[6px]">⚡ 80% of Malawi business happens on WhatsApp</div>
          </div>
          <div className="problem-card bg-white rounded-[12px] p-[1.75rem] border-[1.5px] border-[#eee] transition-all duration-300 relative overflow-hidden reveal reveal-delay-1" ref={el => revealRefs.current[4] = el}>
            <div className="problem-icon w-[52px] h-[52px] rounded-[8px] bg-gradient-to-br from-[rgba(201,75,32,.1)] to-[rgba(245,166,35,.1)] flex items-center justify-center text-[24px] mb-[1rem]">⭐</div>
            <h3 className="text-[1.1rem] text-[#1B2A4A] font-bold mb-[.5rem]">Zero Reviews or Social Proof</h3>
            <p className="text-[.9rem] leading-[1.75] text-[#444]">New customers can't trust a business they've never heard of unless others have vouched for it. Without reviews, you are asking strangers to take a leap of faith.</p>
            <div className="problem-signal mt-[1rem] pt-[1rem] border-t border-[#f0f0f0] text-[.85rem] font-semibold text-[#C94B20] flex items-center gap-[6px]">⚡ Reviews increase conversions by 270%</div>
          </div>
          <div className="problem-card bg-white rounded-[12px] p-[1.75rem] border-[1.5px] border-[#eee] transition-all duration-300 relative overflow-hidden reveal reveal-delay-2" ref={el => revealRefs.current[5] = el}>
            <div className="problem-icon w-[52px] h-[52px] rounded-[8px] bg-gradient-to-br from-[rgba(201,75,32,.1)] to-[rgba(245,166,35,.1)] flex items-center justify-center text-[24px] mb-[1rem]">📸</div>
            <h3 className="text-[1.1rem] text-[#1B2A4A] font-bold mb-[.5rem]">Poor or No Visual Content</h3>
            <p className="text-[.9rem] leading-[1.75] text-[#444]">Your products, your space, your team — if customers can't see them online, they don't exist. Professional content is the difference between a browser and a buyer.</p>
            <div className="problem-signal mt-[1rem] pt-[1rem] border-t border-[#f0f0f0] text-[.85rem] font-semibold text-[#C94B20] flex items-center gap-[6px]">⚡ Posts with photos get 3× more enquiries</div>
          </div>
          <div className="problem-card bg-[#1B2A4A] border-[#1B2A4A] flex flex-col justify-center items-center text-center min-h-[200px] rounded-[12px] p-[1.75rem] reveal reveal-delay-3" ref={el => revealRefs.current[6] = el}>
            <h3 className="text-[#F5A623] mb-[1rem] font-bold text-[1.1rem]">Sound familiar?</h3>
            <p className="text-[rgba(255,255,255,.75)] mb-[1.5rem] text-[.9rem] leading-[1.75]">We'll send you a free audit showing exactly which of these apply to your business — within 24 hours.</p>
            <a className="btn btn-primary" href="https://wa.me/265987808110?text=Hi%20AJ%2C%20please%20audit%20my%20business" target="_blank" rel="noreferrer">Get Free Audit Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
