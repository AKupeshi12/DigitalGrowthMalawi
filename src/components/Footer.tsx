export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1B2A4A] text-white pt-[5rem] pb-[2rem] border-t border-[rgba(245,166,35,0.1)]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-[4rem] mb-[4rem]">
          
          {/* BRAND COLUMN */}
          <div className="footer-brand">
            <img 
              src="/logo.png" 
              alt="AJ Digital Growth" 
              className="h-[50px] w-auto mb-[1.5rem]" 
              onError={(e) => { 
                (e.target as HTMLImageElement).style.display='none'; 
              }} 
            />
            <p className="text-[rgba(255,255,255,0.7)] text-[0.95rem] leading-[1.6] max-w-[300px]">
              Helping Malawian businesses bridge the gap between their services and their online customers through expert digital strategy.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-links">
            <h4 className="text-[#F5A623] font-bold mb-[1.5rem] uppercase tracking-wider text-[0.85rem]">Navigation</h4>
            <ul className="flex flex-col gap-[0.8rem]">
              <li><a href="#problem" className="text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">The Problem</a></li>
              <li><a href="#services" className="text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">Our Services</a></li>
              <li><a href="#about" className="text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">About AJ</a></li>
              <li><a href="#pricing" className="text-[rgba(255,255,255,0.8)] hover:text-[#F5A623] transition-colors">Plans</a></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="footer-contact">
            <h4 className="text-[#F5A623] font-bold mb-[1.5rem] uppercase tracking-wider text-[0.85rem]">Get In Touch</h4>
            <p className="text-[rgba(255,255,255,0.8)] mb-[0.5rem]">📍 Mzuzu, Malawi</p>
          <a href="https://digitalgrowthmalawi.netlify.app"
              className="text-[#F5A623] font-bold flex items-center gap-2 hover:underline"
            >
              digitalgrowthmalawi.com </a>
            <a 
              href="https://wa.me/265987808110" 
              className="text-[#F5A623] font-bold flex items-center gap-2 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-[2rem] border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center gap-[1rem]">
          <p className="text-[rgba(255,255,255,0.5)] text-[0.85rem]">
            © {currentYear} AJ Digital Growth. All rights reserved.
          </p>
          <div className="flex gap-[1.5rem]">
            <a href="#" className="text-[rgba(255,255,255,0.4)] hover:text-white text-[0.75rem]">Privacy Policy</a>
            <a href="#" className="text-[rgba(255,255,255,0.4)] hover:text-white text-[0.75rem]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
