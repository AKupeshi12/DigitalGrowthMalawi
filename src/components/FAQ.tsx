import { useState, useEffect, useRef } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What exactly is a free audit and what will I receive?",
      a: "You send us your business name on WhatsApp. Within 24 hours, we send you a detailed report showing your current Google visibility, Facebook page performance, and exactly what is stopping customers from finding you. No cost, no obligation — just honest insights about your digital presence."
    },
    {
      q: "Do I need a website before you can help me?",
      a: "No. Many of our most successful clients started with just a Facebook page and a WhatsApp number. We can generate leads and grow your customer base without a website. If you need a website, we build it as part of our Dominate package or as a one-off project."
    },
    {
      q: "How long before I start seeing results?",
      a: "Most clients see their first results within 2–4 weeks — new Google enquiries, Facebook page growth, or WhatsApp messages from customers who found them online. Significant, consistent growth typically builds from month 2 onwards. We track and report everything so you can see exactly what is happening."
    },
    {
      q: "I am not technical. Will I understand what you are doing?",
      a: "Absolutely. We explain everything in plain language. Our monthly reports show simple numbers — how many people searched for your business, how many called, how many followed your page. No jargon. AJ communicates directly with every client on WhatsApp so you always know what is being done and why."
    },
    {
      q: "Can I cancel if I am not satisfied?",
      a: "Yes. There are no long-term contracts. If you are not satisfied with the service or results after giving it a fair chance (we recommend at least 3 months), you can cancel at any time with 30 days notice. We are confident in our results — but we never hold clients hostage with contracts."
    },
    {
      q: "Do you work with businesses outside Mzuzu?",
      a: "Yes. We work with businesses across Malawi — Lilongwe, Blantyre, Nkhata Bay, Rumphi, Karonga, and everywhere in between. All communication is done through WhatsApp and video call, so location is never a barrier. Our content and photography services are currently focused on northern Malawi."
    }
  ];

  return (
    <section id="faq" className="section bg-[#FDF8F2] py-[5rem]">
      <div className="container mx-auto px-[1.5rem] max-w-[1140px]">
        <div className="faq-inner max-w-[800px] mx-auto">
          <div className="faq-header text-center mb-[3rem] reveal" ref={el => revealRefs.current[0] = el}>
            <div className="section-label justify-center">Common Questions</div>
            <h2 className="text-[#1B2A4A] text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.1]">Everything You Need to <span className="text-[#C94B20]">Know</span></h2>
          </div>
          <div id="faqList">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item bg-white rounded-[8px] mb-[.75rem] border border-[#eee] overflow-hidden reveal ${openIndex === index ? 'open' : ''}`} ref={el => revealRefs.current[index + 1] = el}>
                <div className="faq-q p-[1.25rem_1.5rem] cursor-pointer flex justify-between items-center font-['Syne'] text-[1rem] font-bold text-[#1B2A4A] transition-colors duration-200 hover:bg-[#FDF8F2] select-none" onClick={() => toggleFaq(index)}>
                  {faq.q}
                  <div className="faq-icon w-[24px] h-[24px] rounded-full bg-[#F5A623] flex items-center justify-center shrink-0 transition-transform duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[12px] h-[12px] text-[#1B2A4A]"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                </div>
                <div className="faq-a max-h-0 overflow-hidden transition-[max-height,padding] duration-350 ease-in-out" style={{ maxHeight: openIndex === index ? '300px' : '0' }}>
                  <div className="faq-a-inner p-[0_1.5rem_1.25rem] text-[.925rem] color-[#555] leading-[1.8]">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
