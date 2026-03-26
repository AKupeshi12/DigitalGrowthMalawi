export default function Footer() {
  return (
    <footer className="bg-[#0d1625] py-[2.5rem] border-t border-[rgba(245,166,35,.15)]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="footer-inner flex justify-between items-center flex-wrap gap-[1rem] flex-col sm:flex-row text-center sm:text-left">
          <div className="footer-logo">
            <img src="logo.png" alt="AJ Digital Growth" className="h-[38px]"
              onError={(e) => { (e.target as HTMLImageElement).style.display='none'; (e.target as HTMLImageElement).nextElementSibling && ((e.target as HTMLImageElement).nextElementSibling as HTMLElement).style.setProperty('display', 'block'); }} />
            <span style={{ display: 'none' }} className="font-['Syne'] text-[1rem] font-extrabold text-[#F5A623]">AJ Digital Growth</span>
          </div>
          <p className="footer-copy text-[.85rem] text-[rgba(255,255,255,.4)]">© 2025 AJ Digital Growth Malawi. All rights reserved.</p>
          <div className="footer-links flex gap-[1.5rem]">
            <a href="#services" className="text-[.85rem] text-[rgba(255,255,255,.5)] transition-colors duration-200 hover:text-[#F5A623]">Services</a>
            <a href="#pricing" className="text-[.85rem] text-[rgba(255,255,255,.5)] transition-colors duration-200 hover:text-[#F5A623]">Pricing</a>
            <a href="https://wa.me/265987808110" target="_blank" rel="noreferrer" className="text-[.85rem] text-[rgba(255,255,255,.5)] transition-colors duration-200 hover:text-[#F5A623]">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
