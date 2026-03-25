import { useEffect, useRef } from 'react';

export default function Services() {
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
    <section id="services" className="section bg-white py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="services-header text-center max-w-[700px] mx-auto mb-[3.5rem] reveal" ref={el => revealRefs.current[0] = el}>
          <div className="section-label">What We Do For You</div>
          <h2 className="text-[#1B2A4A] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">One Agency. Everything<br />Your Business Needs <span className="text-[#F5A623]">Online.</span></h2>
          <p className="mt-[1rem] text-[1.05rem] leading-[1.75] text-[#444]">We don't consult and leave — we execute and manage every service below on your behalf, month after month, so you can focus on running your business.</p>
        </div>
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]">
          <div className="service-card bg-[#1B2A4A] rounded-[12px] p-[2rem] text-white transition-transform duration-300 relative overflow-hidden reveal reveal-delay-1" ref={el => revealRefs.current[1] = el}>
            <div className="service-num font-['Syne'] text-[3.5rem] font-extrabold text-[rgba(245,166,35,.2)] leading-none mb-[.5rem]">01</div>
            <h3 className="text-[#F5A623] mb-[.75rem] text-[1.2rem] font-bold">Google Visibility</h3>
            <p className="text-[rgba(255,255,255,.75)] text-[.9rem] leading-[1.7]">We set up and optimise your Google Business Profile so customers searching for your type of business in your area find you first — before your competitors.</p>
            <div className="service-what mt-[1.25rem] pt-[1.25rem] border-t border-[rgba(255,255,255,.1)]">
              <div className="service-what-label text-[10px] font-bold tracking-[.1em] text-[#F5A623] uppercase mb-[.5rem]">What this means for your business</div>
              <ul className="flex flex-col gap-[4px]">
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">You appear in Google Maps when nearby customers search</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Your hours, photos, and contact are always up to date</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">We collect and respond to reviews on your behalf</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">More calls and walk-ins without paying for ads</li>
              </ul>
            </div>
          </div>
          <div className="service-card bg-[#1B2A4A] rounded-[12px] p-[2rem] text-white transition-transform duration-300 relative overflow-hidden reveal reveal-delay-2" ref={el => revealRefs.current[2] = el}>
            <div className="service-num font-['Syne'] text-[3.5rem] font-extrabold text-[rgba(245,166,35,.2)] leading-none mb-[.5rem]">02</div>
            <h3 className="text-[#F5A623] mb-[.75rem] text-[1.2rem] font-bold">Facebook & Social Media</h3>
            <p className="text-[rgba(255,255,255,.75)] text-[.9rem] leading-[1.7]">We manage your Facebook presence completely — professional posts 3× per week, community engagement, and content that turns followers into paying customers.</p>
            <div className="service-what mt-[1.25rem] pt-[1.25rem] border-t border-[rgba(255,255,255,.1)]">
              <div className="service-what-label text-[10px] font-bold tracking-[.1em] text-[#F5A623] uppercase mb-[.5rem]">What this means for your business</div>
              <ul className="flex flex-col gap-[4px]">
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Consistent posting even when you're too busy to think about it</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Content that shows your real products and real results</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Replies to comments and messages managed for you</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Monthly growth report so you see exactly what's happening</li>
              </ul>
            </div>
          </div>
          <div className="service-card bg-[#1B2A4A] rounded-[12px] p-[2rem] text-white transition-transform duration-300 relative overflow-hidden reveal reveal-delay-3" ref={el => revealRefs.current[3] = el}>
            <div className="service-num font-['Syne'] text-[3.5rem] font-extrabold text-[rgba(245,166,35,.2)] leading-none mb-[.5rem]">03</div>
            <h3 className="text-[#F5A623] mb-[.75rem] text-[1.2rem] font-bold">WhatsApp Booking System</h3>
            <p className="text-[rgba(255,255,255,.75)] text-[.9rem] leading-[1.7]">We build a professional WhatsApp flow so customers can enquire, get information, and book — all without you having to be available 24/7.</p>
            <div className="service-what mt-[1.25rem] pt-[1.25rem] border-t border-[rgba(255,255,255,.1)]">
              <div className="service-what-label text-[10px] font-bold tracking-[.1em] text-[#F5A623] uppercase mb-[.5rem]">What this means for your business</div>
              <ul className="flex flex-col gap-[4px]">
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Automated welcome and pricing messages</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Booking confirmation system via WhatsApp</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">WhatsApp button added to all your online platforms</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Never miss a lead because you didn't reply fast enough</li>
              </ul>
            </div>
          </div>
          <div className="service-card bg-[#1B2A4A] rounded-[12px] p-[2rem] text-white transition-transform duration-300 relative overflow-hidden reveal reveal-delay-1" ref={el => revealRefs.current[4] = el}>
            <div className="service-num font-['Syne'] text-[3.5rem] font-extrabold text-[rgba(245,166,35,.2)] leading-none mb-[.5rem]">04</div>
            <h3 className="text-[#F5A623] mb-[.75rem] text-[1.2rem] font-bold">Website Design & SEO</h3>
            <p className="text-[rgba(255,255,255,.75)] text-[.9rem] leading-[1.7]">A fast, professional website that ranks on Google and converts visitors into customers — built specifically for your business in Malawi's market.</p>
            <div className="service-what mt-[1.25rem] pt-[1.25rem] border-t border-[rgba(255,255,255,.1)]">
              <div className="service-what-label text-[10px] font-bold tracking-[.1em] text-[#F5A623] uppercase mb-[.5rem]">What this means for your business</div>
              <ul className="flex flex-col gap-[4px]">
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Clean design that works perfectly on mobile phones</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Built to rank for local searches in your area</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Clear call-to-action that drives WhatsApp and phone enquiries</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Hosted and maintained — no technical knowledge needed</li>
              </ul>
            </div>
          </div>
          <div className="service-card bg-[#1B2A4A] rounded-[12px] p-[2rem] text-white transition-transform duration-300 relative overflow-hidden reveal reveal-delay-2" ref={el => revealRefs.current[5] = el}>
            <div className="service-num font-['Syne'] text-[3.5rem] font-extrabold text-[rgba(245,166,35,.2)] leading-none mb-[.5rem]">05</div>
            <h3 className="text-[#F5A623] mb-[.75rem] text-[1.2rem] font-bold">Content & Photography</h3>
            <p className="text-[rgba(255,255,255,.75)] text-[.9rem] leading-[1.7]">Professional photos and video content of your business, products, or property — produced in partnership with our media team in Mzuzu.</p>
            <div className="service-what mt-[1.25rem] pt-[1.25rem] border-t border-[rgba(255,255,255,.1)]">
              <div className="service-what-label text-[10px] font-bold tracking-[.1em] text-[#F5A623] uppercase mb-[.5rem]">What this means for your business</div>
              <ul className="flex flex-col gap-[4px]">
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">High-quality images that make customers want to visit</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Short videos for Facebook and WhatsApp marketing</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">Content scheduled and published for you</li>
                <li className="text-[.85rem] text-[rgba(255,255,255,.7)] flex items-start gap-[6px] before:content-['→'] before:text-[#F5A623] before:shrink-0">One investment, months of marketing material</li>
              </ul>
            </div>
          </div>
          <div className="service-card bg-gradient-to-br from-[#C94B20] to-[#8B2500] border-2 border-[#F5A623] rounded-[12px] p-[2rem] text-white transition-transform duration-300 relative overflow-hidden reveal reveal-delay-3" ref={el => revealRefs.current[6] = el}>
            <div className="service-num font-['Syne'] text-[3.5rem] font-extrabold text-[rgba(255,255,255,.2)] leading-none mb-[.5rem]">06</div>
            <h3 className="text-[#F5A623] mb-[.75rem] text-[1.2rem] font-bold">Monthly Growth Retainer</h3>
            <p className="text-[rgba(255,255,255,.75)] text-[.9rem] leading-[1.7]">One fixed monthly fee. We handle everything — Google, Facebook, WhatsApp, content, reporting. You focus on your business. We handle your digital growth.</p>
            <div className="service-what mt-[1.25rem] pt-[1.25rem] border-t border-[rgba(255,255,255,.15)]">
              <div className="service-what-label text-[10px] font-bold tracking-[.1em] text-[#F5A623] uppercase mb-[.5rem]">Starting from</div>
              <div className="font-['Syne'] text-[2rem] font-extrabold text-[#F5A623] my-[.5rem]">MWK 90K<span className="text-[1rem] text-[rgba(255,255,255,.6)] font-normal">/month</span></div>
              <a className="btn btn-primary mt-[.75rem]" href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20am%20interested%20in%20the%20monthly%20retainer" target="_blank" rel="noreferrer">Start Today →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
