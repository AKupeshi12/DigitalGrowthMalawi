export default function Hero() {
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

            <h1 className="hero-title text-white mb-[1.5rem] text-[clamp(2.4rem,6vw,4.2rem)] font-extrabold leading-[1.1]">
              Get More<br />
              <em className="not-italic text-[#F5A623] bg-gradient-to-br from-[#F5A623] to-[#E05A28] bg-clip-text text-transparent">Customers Online</em><br />
              in Malawi
            </h1>

            <p className="hero-sub text-[rgba(255,255,255,.75)] text-[1.1rem] mb-[2rem] max-w-[480px] leading-[1.75]">
              We identify exactly what is stopping your business from being found online — and fix it for you. More visibility. More enquiries. More revenue.
            </p>

            <div className="hero-actions flex flex-wrap items-center gap-[1rem] mb-[2.5rem]">
              <a 
                className="btn btn-primary flex items-center gap-2" 
                href="https://wa.me/265987808110?text=Hi%20AJ%2C%20I%20want%20a%20free%20digital%20audit%20for%20my%20business" 
                target="_blank" 
                rel="noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Get Free Audit
              </a>
              <a className="btn btn-outline" href="#services">See What We Do</a>
            </div>

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

          <div className="hero-image-wrap relative hidden md:block">
            <div className="hero-img-bg absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#C94B20] to-[#243660] rotate-[3deg]"></div>
            <div className="hero-img-card relative z-[1] rounded-[20px] overflow-hidden border-[3px] border-[rgba(245,166,35,.3)] shadow-[0_32px_80px_rgba(0,0,0,.4)]">
              {/* Pointing to cover.png in the public folder */}
              <img 
                src="/banner.png" 
                alt="AJ Digital Growth" 
                className="w-full h-[400px] object-cover object-top"
                onError={(e) => { 
                  (e.target as HTMLImageElement).style.display='none'; 
                  const next = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                  if(next) next.style.display = 'flex'; 
                }} 
              />
              <div className="hero-img-placeholder w-full h-[500px] bg-gradient-to-br from-[#C94B20] to-[#8B2500] flex flex-col items-center justify-center" style={{ display: 'none' }}>
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
