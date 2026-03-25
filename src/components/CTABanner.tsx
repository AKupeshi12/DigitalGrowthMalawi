import { useEffect, useRef } from 'react';

export default function CTABanner() {
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
    <section id="cta-banner" className="bg-gradient-to-br from-[#C94B20] to-[#1B2A4A] py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="cta-inner text-center reveal" ref={el => revealRefs.current[0] = el}>
          <div className="section-label justify-center text-[#FFBE4F] before:bg-[#FFBE4F]">Ready to Grow?</div>
          <h2 className="text-white mb-[1rem] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">Your Competitors Are Already<br />Getting Found Online. Are You?</h2>
          <p className="text-[rgba(255,255,255,.8)] text-[1.1rem] mb-[2.5rem] max-w-[600px] mx-auto leading-[1.75]">Send your business name on WhatsApp right now. AJ will personally audit your online presence and send you a full report within 24 hours — completely free.</p>
          <div className="cta-actions flex flex-wrap gap-[1rem] justify-center">
            <a className="btn btn-wa" href="https://wa.me/265987808110?text=Hi%20AJ%2C%20please%20audit%20my%20business%20online%20presence" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp AJ: 0987 808 110
            </a>
            <a className="btn btn-outline" href="#pricing">See Pricing</a>
          </div>
          <p className="cta-sub text-[.85rem] text-[rgba(255,255,255,.6)] mt-[1.25rem]">Free audit. No commitment. No credit card. Just honest advice from AJ.</p>
        </div>
      </div>
    </section>
  );
}
