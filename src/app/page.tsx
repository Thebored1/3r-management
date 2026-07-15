'use client';

import { data } from '../data/content';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const nav = document.getElementById('siteNav');
    if (!nav) return;
    
    const apply = () => {
      if (window.scrollY > 12) {
        nav.style.background = 'rgba(247,250,250,0.82)';
        nav.style.backdropFilter = 'blur(12px)';
        nav.style.borderBottomColor = 'var(--line)';
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.borderBottomColor = 'transparent';
      }
    };
    
    apply();
    window.addEventListener('scroll', apply, { passive: true });

    // Scroll reveal
    const top = document.getElementById('top');
    let io: IntersectionObserver | null = null;
    if (top) {
      const targets = Array.from(top.children).filter(el => el.tagName === 'SECTION' || el.tagName === 'DIV' || el.tagName === 'FOOTER') as HTMLElement[];
      targets.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity .8s cubic-bezier(.22,.61,.36,1), transform .8s cubic-bezier(.22,.61,.36,1)';
        el.style.willChange = 'opacity, transform';
      });
      const reveal = (el: Element) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      };
      io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io?.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      targets.forEach(el => io?.observe(el));
    }

    return () => {
      window.removeEventListener('scroll', apply);
      if (io) io.disconnect();
    };
  }, []);

  return (
    <div id="top" data-theme="ocean" data-imagery="color" data-mood="editorial" style={{ background: 'var(--panel)', minHeight: '100vh' }}>

      
      {/* NAV */}
      <nav id="siteNav" style={{ position: 'sticky', top: 0, zIndex: 200, background: 'transparent', backdropFilter: 'none', borderBottom: '1px solid transparent', transition: 'background .25s, border-color .25s, backdrop-filter .25s' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo-01.png" alt="3R Management" style={{ height: 38, width: 'auto', display: 'block' }} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <a href="#solutions" style={{ fontSize: 17.5, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--muted)', paddingBottom: 2, borderBottom: '1px solid transparent' }}>Solutions</a>
            <a href="#recognition" style={{ fontSize: 17.5, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--muted)', paddingBottom: 2, borderBottom: '1px solid transparent' }}>Recognition</a>
            <a href="#platform" style={{ fontSize: 17.5, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--muted)', paddingBottom: 2, borderBottom: '1px solid transparent' }}>Platform</a>
            <span style={{ width: 1, height: 20, background: 'var(--line)' }}></span>
            <a href="tel:+911143029300" style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 16, letterSpacing: '.02em', color: 'var(--muted)' }}>+91 11 43029300</a>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--green)', color: '#fff', fontSize: 17, fontWeight: 500, padding: '13px 24px', borderRadius: 999 }}>
              Get in Touch <span style={{ fontSize: 15 }}>↗</span>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '36px 40px 0' }}>
        <div style={{ background: 'var(--cardalt)', borderRadius: 10, padding: '120px 40px 0', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 15, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--olive)' }}></span>
            India’s integrated waste management leader
          </div>
          <h1 style={{ fontSize: 68, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: 1000, margin: '0 auto', color: 'var(--ink)' }}>
            Turning waste into resources. <span style={{ color: 'var(--olive)' }}>Cities into models.</span>
          </h1>
          <p style={{ maxWidth: 680, margin: '30px auto 0', fontSize: 18.5, color: 'var(--muted)', lineHeight: 1.7 }}>
            3R designs, builds, and operates end-to-end solid waste management systems across India — from daily collection to scientific landfills. Technology-enabled. Performance-backed. Built to last.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, margin: '42px 0 64px' }}>
            <a href="#solutions" style={{ background: 'var(--green)', color: '#fff', fontSize: 17.5, fontWeight: 500, padding: '15px 30px', borderRadius: 999 }}>Explore Solutions</a>
            <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 14.5, letterSpacing: '.05em', color: 'var(--muted)' }}>
              CURRENTLY OPERATING · AMRITSAR · SILVASSA · LEH · KARGIL
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, margin: '0 -40px' }}>
            <div style={{ position: 'relative', borderRadius: '0 0 0 10px', overflow: 'hidden', height: 320 }}>
              <img src="/images/slide-1.webp" alt="Zero-waste society" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', left: 12, bottom: 12, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, letterSpacing: '.06em', color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>CITY-WIDE SYSTEMS</span>
            </div>
            <div style={{ position: 'relative', overflow: 'hidden', height: 320 }}>
              <img src="/images/slide-2.png" alt="Waste management results" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', left: 12, bottom: 12, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, letterSpacing: '.06em', color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>CBG · CLEAN ENERGY</span>
            </div>
            <div style={{ position: 'relative', borderRadius: '0 0 10px 0', overflow: 'hidden', height: 320 }}>
              <img src="/images/slide-3.png" alt="Together we make it" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', left: 12, bottom: 12, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, letterSpacing: '.06em', color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>TECH-ENABLED OPS</span>
            </div>
          </div>
        </div>
      </div>

      {/* RECOGNITION */}
      <section id="recognition" style={{ scrollMarginTop: 20, maxWidth: 1440, margin: '80px auto 0', padding: '80px 40px 0' }}>
        <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 15, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 14 }}>◦ Recognition</div>
        <h2 style={{ fontSize: 38, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 32 }}>Validated by India's highest offices</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
          {data.recognition.map((r, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: 320, borderRadius: 6, overflow: 'hidden' }}>
                <img src={r.img} alt={r.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85)' }} />
                <div style={{ position: 'absolute', top: 16, left: 16, background: 'var(--green)', color: '#fff', fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 13.5, letterSpacing: '.05em', padding: '6px 14px', borderRadius: 999 }}>{r.tag}</div>
              </div>
              <div style={{ padding: '24px 12px 12px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: 24, fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.01em', marginBottom: 14 }}>{r.title}</h3>
                <p style={{ fontSize: 17.5, color: 'var(--muted)', lineHeight: 1.7 }}>{r.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: 20 }}>
                  <span style={{ display: 'inline-block', background: 'var(--cardalt)', color: 'var(--olive)', fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 14.5, padding: '7px 15px', borderRadius: 999 }}>{r.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {data.accolades.map((a, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 8, padding: 24 }}>
              <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 14, color: 'var(--olive)', marginBottom: 12 }}>{a.k}</div>
              <div style={{ fontSize: 18.5, fontWeight: 600, marginBottom: 8 }}>{a.t}</div>
              <div style={{ fontSize: 16.5, color: 'var(--muted)', lineHeight: 1.6 }}>{a.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" style={{ scrollMarginTop: 20, maxWidth: 1440, margin: '60px auto 0', padding: '80px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 15, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 14 }}>◦ What We Do</div>
            <h2 style={{ fontSize: 38, fontWeight: 500, letterSpacing: '-0.02em' }}>Full waste lifecycle. Integrated or individual.</h2>
          </div>
          <p style={{ maxWidth: 360, fontSize: 17.5, color: 'var(--muted)', lineHeight: 1.7 }}>
            Our core strength is integrated SWM — one of India's rarest credentials. We also deliver every component as a standalone solution.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {data.solutions.map((s, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: 200, borderRadius: 6, overflow: 'hidden' }}>
                <img src={s.img} alt={s.t} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                {s.tag && (
                  <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(246,244,236,0.92)', borderRadius: 999, padding: '6px 14px', fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 13.5, fontWeight: 500, color: 'var(--green)' }}>
                    {s.tag}
                  </div>
                )}
              </div>
              <div style={{ padding: '20px 8px 8px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 20 }}>{s.d}</div>
                <div style={{ marginTop: 'auto', display: 'flex', gap: 10 }}>
                  <a href="#contact" style={{ flex: 1, textAlign: 'center', border: '1px solid var(--line)', borderRadius: 999, padding: 11, fontSize: 16, fontWeight: 500, color: 'var(--ink)' }}>More Info</a>
                  <a href="#contact" style={{ flex: 1, textAlign: 'center', background: 'var(--green)', color: '#fff', borderRadius: 999, padding: 11, fontSize: 16, fontWeight: 500 }}>Enquire ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={{ scrollMarginTop: 20, maxWidth: 1440, margin: '100px auto 0', padding: '0 40px' }}>
        <div style={{ background: 'var(--cardalt)', borderRadius: 10, padding: '80px 52px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 40, alignItems: 'stretch' }}>
            <div style={{ position: 'sticky', top: 20 }}>
              <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 15, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 14 }}>◦ Digital Platform</div>
              <h2 style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 20 }}>Every project IT-enabled from day one.</h2>
              <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.72, maxWidth: 420 }}>
                Ecosmartly is our proprietary command platform — connecting collection vehicles, processing plants, user fees, and sanitation into one unified real-time dashboard. Every 3R project runs on it.
              </p>
              <div style={{ display: 'flex', gap: 32, marginTop: 28 }}>
                <div><div style={{ fontSize: 28, fontWeight: 600, color: 'var(--green)' }}>4</div><div style={{ fontSize: 15, color: 'var(--faint)', marginTop: 4 }}>Connected apps</div></div>
                <div><div style={{ fontSize: 28, fontWeight: 600, color: 'var(--green)' }}>Live</div><div style={{ fontSize: 15, color: 'var(--faint)', marginTop: 4 }}>Real-time ops</div></div>
                <div><div style={{ fontSize: 28, fontWeight: 600, color: 'var(--green)' }}>ERP</div><div style={{ fontSize: 15, color: 'var(--faint)', marginTop: 4 }}>Internal backbone</div></div>
              </div>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 16, letterSpacing: '.04em', color: 'var(--green)', borderBottom: '1px solid var(--green)', paddingBottom: 4 }}>
                Explore Ecosmartly ↗
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 16 }}>
              {data.apps.map((ap, i) => (
                <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 8, padding: '30px 32px', display: 'flex', alignItems: 'center', gap: 20 }}>
                  <span style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 16, color: 'var(--olive)', width: 32, flexShrink: 0 }}>{ap.n}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 6 }}>{ap.name}</div>
                    <div style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.6 }}>{ap.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMERGING */}
      <section style={{ maxWidth: 1440, margin: '60px auto 0', padding: '80px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 28, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 15, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 14 }}>◦ Active Development</div>
            <h2 style={{ fontSize: 38, fontWeight: 500, letterSpacing: '-0.02em' }}>Streams we're building now</h2>
          </div>
          <p style={{ maxWidth: 380, fontSize: 17.5, color: 'var(--muted)', lineHeight: 1.7 }}>
            Beyond SWM, 3R is actively developing adjacent sustainability capabilities — several already in progress across India.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {data.emerging.map((e, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 8, padding: 30 }}>
              <div style={{ display: 'inline-block', fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 13.5, background: 'var(--cardalt)', color: 'var(--olive)', padding: '6px 14px', borderRadius: 999, marginBottom: 16 }}>{e.pill}</div>
              <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8 }}>{e.t}</div>
              <div style={{ fontSize: 17, color: 'var(--muted)', lineHeight: 1.65 }}>{e.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + PRESENCE */}
      <section id="contact" style={{ scrollMarginTop: 20, maxWidth: 1440, margin: '60px auto 0', padding: '80px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, alignItems: 'stretch' }}>
          <div style={{ background: 'var(--green)', borderRadius: 10, padding: '60px 50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 38, fontWeight: 500, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.2, maxWidth: 460 }}>Ready to transform your city's waste system?</h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', marginTop: 18, maxWidth: 460 }}>Speak with our team — ULBs, investors, and international partners welcome.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <a href="mailto:connect@3rmanagement.in" style={{ background: '#fff', color: 'var(--green)', fontSize: 17.5, fontWeight: 600, padding: '16px 36px', borderRadius: 999 }}>Get in Touch ↗</a>
              <a href="mailto:connect@3rmanagement.in" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 17.5, fontWeight: 600, padding: '16px 36px', borderRadius: 999 }}>Download Credentials</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16, marginTop: 42, paddingTop: 36, borderTop: '1px solid rgba(255,255,255,0.22)' }}>
              {data.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em', color: '#fff' }}>{s.v}</div>
                  <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.62)', marginTop: 8, lineHeight: 1.4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 180px', gap: 16 }}>
            <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', minHeight: 240 }}>
              <img src="/images/integrated_swm_person.png" alt="Across India" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,46,37,0.6), transparent 60%)' }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 20, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 14, letterSpacing: '.06em', color: '#fff' }}>AMRITSAR · SILVASSA · INTEGRATED SWM</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden' }}>
                <img src="/images/composting-new.jpg" alt="Remote areas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,46,37,0.6), transparent 60%)' }}></div>
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 20, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 14, letterSpacing: '.06em', color: '#fff' }}>LEH & KARGIL</div>
              </div>
              <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden' }}>
                <img src="/images/unsplash-3.jpg" alt="Bioenergy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(43,46,37,0.6), transparent 60%)' }}></div>
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 20, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 14, letterSpacing: '.06em', color: '#fff' }}>CBG · BIOENERGY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ maxWidth: 1440, margin: '80px auto 0', padding: '60px 40px 40px', borderTop: '1px solid var(--line)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 30, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 12 }}>
            <img src="/images/logo-01.png" alt="3R Management" style={{ height: 42, width: 'auto', flexShrink: 0, display: 'block' }} />
            <div style={{ fontSize: 16, color: 'var(--faint)' }}>Integrated Waste Management · India</div>
          </div>
          <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 15, color: 'var(--faint)', lineHeight: 1.9, textAlign: 'right' }}>
            #5F Vandhna Building, 11 Tolstoy Road, New Delhi – 110001<br />
            connect@3rmanagement.in · +91 11 43029300<br />
            © 2025 3R Management Ltd.
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--line)', marginTop: 42, paddingTop: 28, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 30 }}>
          <a href="#solutions" style={{ fontSize: 17, fontWeight: 500, color: 'var(--muted)' }}>Solutions</a>
          <a href="#recognition" style={{ fontSize: 17, fontWeight: 500, color: 'var(--muted)' }}>Recognition</a>
          <a href="#platform" style={{ fontSize: 17, fontWeight: 500, color: 'var(--muted)' }}>Platform</a>
          <a href="#contact" style={{ fontSize: 17, fontWeight: 500, color: 'var(--muted)' }}>Get in Touch</a>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 24, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 15, color: 'var(--faint)' }}>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
