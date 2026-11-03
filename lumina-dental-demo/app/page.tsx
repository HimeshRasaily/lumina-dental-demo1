"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3,
  Heart, Instagram, MapPin, Menu, Phone, ShieldCheck, Sparkles, X
} from "lucide-react";

const services = [
  { no: "01", title: "Preventive care", desc: "Thoughtful checkups and cleanings that keep your smile feeling its best.", tag: "The foundation", icon: "✳" },
  { no: "02", title: "Cosmetic dentistry", desc: "Subtle, confidence-building enhancements designed around you.", tag: "Feel like yourself", icon: "✧" },
  { no: "03", title: "Dental implants", desc: "A considered approach to restoring comfort, function and confidence.", tag: "Made to feel natural", icon: "◌" },
  { no: "04", title: "Clear aligners", desc: "A more discreet way to move toward the smile you have in mind.", tag: "A clearer path", icon: "⌁" }
];

const faqs = [
  ["Are you accepting new patients?", "Yes. We welcome new patients and would love to meet you. Send an appointment request and our front desk team will help find a time that works."],
  ["Do you accept dental insurance?", "We are happy to help you understand your benefits. Please contact our team with your provider details before your visit so we can walk you through the process."],
  ["What should I expect at my first visit?", "Your first visit is about listening. We’ll discuss your goals, review your dental history, complete an exam and create a care plan together."],
  ["Can I request an appointment online?", "Absolutely. Use the appointment form on this page and our team will follow up to confirm availability. Your request is not a confirmed appointment."]
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "General checkup", date: "", message: "" });

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="demo-bar"><span>CONCEPT WEBSITE · FICTIONAL PRACTICE</span><span>DESIGNED FOR AUSTIN, TX <span className="demo-dot">●</span></span></div>
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">l<span>✳</span></span><span className="brand-name">lumina<span> DENTAL STUDIO</span></span></a>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#services" onClick={closeMenu}>Treatments</a>
          <a href="#team" onClick={closeMenu}>Your dentist</a>
          <a href="#reviews" onClick={closeMenu}>Kind words</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#appointment" className="nav-mobile-cta" onClick={closeMenu}>Request a visit <ArrowUpRight size={15}/></a>
        </nav>
        <a href="#appointment" className="header-cta">Request an appointment <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> DENTISTRY, REIMAGINED IN AUSTIN</div>
          <h1>A little more<br/><em>you.</em> A lot more<br/>at ease.</h1>
          <p className="hero-lede">Thoughtful dentistry for the way you want to feel. Modern care, genuine connection, and a reason to look forward to your next visit.</p>
          <div className="hero-actions"><a className="button button-dark" href="#appointment">Find your appointment <ArrowUpRight size={16}/></a><a className="text-link" href="#approach">Get to know us <ArrowDown size={15}/></a></div>
          <div className="hero-note"><span className="note-star">✳</span><span>GOOD CARE SHOULD FEEL<br/><b>LIKE A BREATH OF FRESH AIR.</b></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-image" role="img" aria-label="Sunlit, calm modern dental studio interior"/>
          <div className="image-caption"><span>01 / 04</span><span>A calmer kind of care</span></div>
          <div className="floating-card"><span className="floating-icon"><Sparkles size={17}/></span><span><b>Care that feels different.</b><small>From your first hello.</small></span><ArrowUpRight size={17}/></div>
          <div className="hero-vertical">LUMINA DENTAL STUDIO — AUSTIN, TEXAS</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
      </section>

      <section className="intro section-pad" id="approach">
        <div className="section-kicker">01 / THE LUMINA WAY</div>
        <div className="intro-content">
          <h2>Good dentistry is about more than <em>teeth.</em></h2>
          <div className="intro-right"><p>It’s about feeling heard. Knowing you’re in good hands. And leaving with a little more confidence than you came in with.</p><p>We bring modern expertise and a human touch together to make every part of your care feel considered.</p><a className="underlined-link" href="#team">A little about us <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="values-row">
          <div><span>✳</span><b>People, first.</b><small>We listen before we recommend.</small></div>
          <div><span>◌</span><b>Thoughtfully modern.</b><small>Technology with a human touch.</small></div>
          <div><span>♡</span><b>Always in your corner.</b><small>Your comfort guides every decision.</small></div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading"><div><div className="section-kicker">02 / WHAT WE DO</div><h2>Care for every<br/><em>kind of smile.</em></h2></div><p>From the everyday to the transformative, we make room for the care that matters to you.</p></div>
        <div className="service-grid">{services.map((s, i) => <motion.a href="#appointment" className="service-card" key={s.no} initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08,duration:.5}}><div className="service-top"><span>{s.no} / TREATMENT</span><span className="service-symbol">{s.icon}</span></div><div><span className="service-tag">{s.tag}</span><h3>{s.title}</h3><p>{s.desc}</p></div><div className="service-bottom"><span>EXPLORE TREATMENT</span><ArrowUpRight size={18}/></div></motion.a>)}</div>
        <div className="services-foot"><span>Not sure what you need? That’s what we’re here for.</span><a href="#appointment" className="underlined-link">Let’s talk <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="quote-band">
        <div className="quote-image"/>
        <div className="quote-content"><span className="quote-mark">“</span><h2>We believe the best smile is the one that feels <em>like yours.</em></h2><p>Never rushed. Never one-size-fits-all. Just good people, good care, and a plan that makes sense for you.</p><span className="quote-sign">THE LUMINA PROMISE</span></div>
      </section>

      <section className="dentist section-pad" id="team">
        <div className="dentist-photo"><div className="dentist-image"/><span className="photo-label">DR. OLIVIA BENNETT · LEAD DENTIST</span></div>
        <div className="dentist-copy"><div className="section-kicker">03 / THE PERSON BEHIND YOUR CARE</div><h2>Expert hands.<br/><em>Open heart.</em></h2><p className="dentist-lede">“I want every patient to feel like they have a partner in their health — someone who listens, explains, and genuinely cares.”</p><p>Dr. Olivia Bennett believes great dentistry starts with trust. Her approach blends modern clinical care with the kind of warmth that makes you feel right at home.</p><div className="credentials"><span><ShieldCheck size={17}/> Patient-first philosophy</span><span><Heart size={17}/> Gentle, considered care</span></div><a className="underlined-link" href="#appointment">Come say hello <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="reviews section-pad" id="reviews">
        <div className="section-heading"><div><div className="section-kicker">04 / KIND WORDS</div><h2>It’s nice to feel<br/><em>the difference.</em></h2></div><div className="review-aside"><div className="stars">★★★★★</div><span>ILLUSTRATIVE DEMO CONTENT</span><p>Sample review cards shown for layout preview only. Replace with verified patient feedback before launch.</p></div></div>
        <div className="review-grid"><article><span className="review-stars">★★★★★</span><p>“The entire experience felt calm and personal. Every step was explained and I never felt rushed.”</p><div className="review-person"><b>Jamie R.</b><small>GENERAL DENTISTRY · SAMPLE</small></div></article><article><span className="review-stars">★★★★★</span><p>“I used to dread dental visits. The team made me feel comfortable from the moment I walked in.”</p><div className="review-person"><b>Alex M.</b><small>PREVENTIVE CARE · SAMPLE</small></div></article><article><span className="review-stars">★★★★★</span><p>“A beautiful space, kind people, and a treatment plan that actually made sense to me.”</p><div className="review-person"><b>Taylor K.</b><small>COSMETIC CONSULTATION · SAMPLE</small></div></article></div>
      </section>

      <section className="appointment section-pad" id="appointment">
        <div className="appointment-copy"><div className="section-kicker">05 / YOUR NEXT STEP</div><h2>Let’s make room<br/>for a <em>better visit.</em></h2><p>Tell us a little about what you’re looking for. Our front desk team will be in touch to find a time that works.</p><div className="appointment-detail"><Clock3 size={17}/><span>MON–FRI · 8:00 AM–5:00 PM<br/>SATURDAY · BY APPOINTMENT</span></div><div className="appointment-detail"><Phone size={17}/><span>(512) 555-0148<br/>AUSTIN, TEXAS</span></div></div>
        <form className="booking-form" onSubmit={handleSubmit}>
          {submitted ? <div className="success-state"><span className="success-icon"><Check size={24}/></span><h3>Thank you, {form.name.split(" ")[0] || "there"}.</h3><p>Your demo request has been captured in this preview. No appointment has been sent or booked. Connect a form service to receive real enquiries.</p><button type="button" className="button button-dark" onClick={() => {setSubmitted(false);setForm({name:"",email:"",phone:"",service:"General checkup",date:"",message:""});}}>Send another request</button></div> : <>
            <div className="form-heading"><h3>Request a visit</h3><span>WE’LL BE IN TOUCH SOON</span></div>
            <div className="form-row"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Jane Smith"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="jane@email.com"/></label></div>
            <div className="form-row"><label>Phone number<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="(512) 555-0000"/></label><label>I'm interested in<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>General checkup</option><option>Cosmetic dentistry</option><option>Dental implants</option><option>Clear aligners</option><option>Other / not sure</option></select></label></div>
            <label>Preferred date<input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></label>
            <label>Anything you'd like us to know? <span className="optional">(OPTIONAL)</span><textarea rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us a little about what brings you in..."/></label>
            <button className="button button-dark form-submit" type="submit">Send appointment request <ArrowUpRight size={16}/></button>
            <small className="form-disclaimer">This is a fictional demo. Please don't enter real personal or health information.</small>
          </>}
        </form>
      </section>

      <section className="faq section-pad">
        <div className="section-kicker">A FEW THINGS YOU MIGHT BE WONDERING</div><div className="faq-layout"><h2>Good to<br/><em>know.</em></h2><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{q}</span><ChevronDown className={faqOpen===i?"chevron rotated":"chevron"}/></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-top"><div className="footer-brand"><a href="#home" className="brand brand-light"><span className="brand-mark">l<span>✳</span></span><span className="brand-name">lumina<span> DENTAL STUDIO</span></span></a><p>A calmer kind of dental care.<br/>Right here in Austin.</p></div><div className="footer-col"><span>FIND US</span><p>1234 Westlake Drive<br/>Austin, TX 78703</p><a href="https://maps.google.com/?q=1234+Westlake+Drive+Austin+TX" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={13}/></a></div><div className="footer-col"><span>SAY HELLO</span><p>(512) 555-0148<br/>hello@luminadental.example</p><a href="mailto:hello@luminadental.example">Send an email <ArrowUpRight size={13}/></a></div><div className="footer-col"><span>FOLLOW ALONG</span><p>Little moments, brighter smiles.</p><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <Instagram size={13}/></a></div></div>
        <div className="footer-bottom"><span>© 2026 LUMINA DENTAL STUDIO · FICTIONAL DEMO</span><span>MADE WITH CARE, IN AUSTIN, TX</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
      <a href="#appointment" className="mobile-book">Request an appointment <ArrowUpRight size={16}/></a>
    </main>
  );
}
