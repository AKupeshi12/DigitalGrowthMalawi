import { motion } from 'framer-motion';

export default function Hero() {
  const sentence = "Get More Customers Online in Malawi";
  
  // Animation variants for the typing effect
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 }
    }
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 }
    },
    hidden: { opacity: 0, y: 20 }
  };

  return (
    <section id="hero" className="bg-[#1B2A4A] min-h-screen flex items-center pt-[70px] relative overflow-hidden">
      <div className="hero-bg-pattern absolute inset-0 z-0"></div>
      <div className="hero-grid-lines absolute inset-0 z-0 opacity-[.04]"></div>
      
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="hero-inner relative z-[1] grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center py-[4rem] pb-[3rem]">
          
          <div className="hero-content">
            <div className="hero-badge inline-flex items-center gap-[8px] bg-[rgba(245,166,35,.15)] border border-[rgba(245,166,35,.3)] rounded-[100px] px-[1rem] py-[.4rem] text-[12px] font-semibold text-[#F5A623] tracking-[.08em] uppercase mb-[1.5rem]">
              🇲🇼 Based in Mzuzu, Malawi
            </div>

            {/* TYPING EFFECT HEADLINE */}
            <motion.h1 
              variants={container}
              initial="hidden"
              animate="visible"
              className="hero-title text-white mb-[1.5rem] text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold leading-[1.1]"
            >
              {sentence.split(" ").map((word, i) => (
                <motion.span key={i} variants={child} className="inline-block mr-3">
                  {word === "Customers" || word === "Online" ? (
                    <em className="not-italic text-[#F5A623] bg-gradient-to-br from-[#F5A623] to-[#E05A28] bg-clip-text text-transparent">
                      {word}
                    </em>
                  ) : word}
                </motion.span>
              ))}
            </motion.h1>

            <p className="hero-sub text-[rgba(255,255,255,.75)] text-[1.1rem] mb-[2rem] max-w-[480px] leading-[1.75]">
              We identify exactly what is stopping your business from being found online — and fix it for you. More visibility. More enquiries. More revenue.
            </p>

            {/* CTA SECTION WITH ANIMATED ARROW & BOUNCE BUTTON */}
            <div className="hero-actions flex flex-wrap items-center gap-[1.5rem] mb-[2.5rem] group">
              <div className="animate-arrow-slide text-[#F5A623]">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              <a 
  className="btn btn-primary animate-bounce-trigger flex items-center gap-3" 
  href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20want%20a%20free%20digital%20audit%20for%20my%20business" 
  target="_blank" 
  rel="noreferrer"
>
  {/* NEW HIGH-VISIBILITY ICON */}
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-[22px] h-[22px] shrink-0 drop-shadow-sm text-[#1B2A4A]"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
  
  <span className="tracking-tight">Get Free Audit</span>
</a>
              <a className="btn btn-outline" href="#services">See What We Do</a>
            </div>

            {/* STATS SECTION */}
            <div className="hero-stats flex gap-[2rem] flex-wrap">
              <div className="hero-stat text-center">
                <div className="hero-stat-num font-['Syne'] text-[1.8rem] font-extrabold text-[#F5A623] leading-none">50+</div>
                <div className="hero-stat-label text-[12px] text-[rgba(255,255,255,.6)] mt-[4px]">Businesses Helped</div>
              </div>
              <div className="hero-stat-divider w-[1px] bg-[rgba(255,255,255,.15)] self-stretch"></div>
              <div className="hero-stat text-center">
                <div className="hero-stat-num font-['Syne'] text-[1.8rem] font-extrabold text-[#F5A623] leading-none">3×</div>
                <div className="hero-stat-label text-[12px] text-[rgba(255,255,255,.6)] mt-[4px]">Avg Enquiry Increase</div>
              </div>
              <div className="hero-stat-divider w-[1px] bg-[rgba(255,255,255,.15)] self-stretch"></div>
              <div className="hero-stat text-center">
                <div className="hero-stat-num font-['Syne'] text-[1.8rem] font-extrabold text-[#F5A623] leading-none">24h</div>
                <div className="hero-stat-label text-[12px] text-[rgba(255,255,255,.6)] mt-[4px]">Free Audit Turnaround</div>
              </div>
            </div>
          </div>

          {/* HERO IMAGE SECTION */}
          <div className="hero-image-wrap relative hidden md:block">
            <div className="hero-img-bg absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#C94B20] to-[#243660] rotate-[3deg]"></div>
            <div className="hero-img-card relative z-[1] rounded-[20px] overflow-hidden border-[3px] border-[rgba(245,166,35,.3)] shadow-[0_32px_80px_rgba(0,0,0,.4)]">
              <img 
                src="/banner.png" 
                alt="AJ Digital Growth — Get More Customers Online" 
                className="w-full h-[400px] object-cover object-top"
                onError={(e) => { 
                  (e.target as HTMLImageElement).style.display='none'; 
                  if ((e.target as HTMLImageElement).nextElementSibling) {
                    ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }} 
              />
              <div className="hero-img-placeholder w-full h-[400px] bg-gradient-to-br from-[#C94B20] to-[#8B2500] flex flex-col items-center justify-center" style={{ display: 'none' }}>
                <div className="text-center text-white">
                  <div className="font-['Syne'] text-[2rem] font-extrabold leading-[1.2]">GET MORE<br /><span className="text-[#F5A623]">CUSTOMERS</span><br />ONLINE!</div>
                </div>
              </div>
            </div>
            <div className="hero-badge-float absolute bottom-[-20px] left-[-20px] z-[2] bg-[#F5A623] rounded-[16px] px-[1.25rem] py-[1rem] shadow-[0_12px_32px_rgba(245,166,35,.4)]">
              <div className="hero-badge-float-num font-['Syne'] text-[1.5rem] font-extrabold text-[#1B2A4A] leading-none">24h</div>
              <div className="hero-badge-float-text text-[11px] font-semibold text-[#1B2A4A] mt-[2px]">Free Audit</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
