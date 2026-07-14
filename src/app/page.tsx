import { data } from '@/data/content';
import React from 'react';

export default function Home() {
  return (
    <div id="top">
      {/* NAV */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '30px 40px 0' }}>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 999, padding: '9px 9px 9px 20px' }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--green)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>3R</span>
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em' }}>Renewable Resource Recovery</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="#solutions" style={{ fontSize: 13, color: 'var(--muted)', padding: '8px 12px' }}>Solutions</a>
            <a href="#recognition" style={{ fontSize: 13, color: 'var(--muted)', padding: '8px 12px' }}>Recognition</a>
            <a href="#platform" style={{ fontSize: 13, color: 'var(--muted)', padding: '8px 12px' }}>Platform</a>
            <a href="#contact" style={{ background: 'var(--green)', color: '#fff', fontSize: 13, fontWeight: 500, padding: '11px 20px', borderRadius: 999 }}>Get in Touch</a>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '36px 40px 0' }}>
        <div style={{ background: 'var(--cardalt)', borderRadius: 22, padding: '72px 40px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 28 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--olive)' }}></span>India’s integrated waste management leader
          </div>
          <h1 style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.16, letterSpacing: '-0.02em', maxWidth: 820, margin: '0 auto', color: 'var(--ink)' }}>
            Turning waste into resources. <span style={{ color: 'var(--olive)' }}>Cities into models.</span>
          </h1>
          <p style={{ maxWidth: 560, margin: '24px auto 0', fontSize: 15, color: 'var(--muted)', lineHeight: 1.7 }}>
            3R designs, builds, and operates end-to-end solid waste management systems across India — from daily collection to scientific landfills. Technology-enabled. Performance-backed. Built to last.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
            <a href="#solutions" style={{ background: 'var(--green)', color: '#fff', fontSize: 14, fontWeight: 500, padding: '13px 26px', borderRadius: 999 }}>Explore Solutions</a>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, letterSpacing: '.05em', color: 'var(--muted)' }}>
              <span style={{ display: 'flex' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--green2)', border: '2px solid var(--cardalt)' }}></span>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--olive)', border: '2px solid var(--cardalt)', marginLeft: -8 }}></span>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--green)', border: '2px solid var(--cardalt)', marginLeft: -8 }}></span>
              </span>
              CURRENTLY OPERATING · AMRITSAR · SILVASSA · LEH · KARGIL
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '18px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {data.stats.map((s, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 16, padding: '22px 22px' }}>
              <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--green)' }}>{s.v}</div>
              <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 10.5, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--faint)', marginTop: 8 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RECOGNITION */}
      <section id="recognition" style={{ scrollMarginTop: 20, maxWidth: 1240, margin: '40px auto 0', padding: '88px 40px 0' }}>
        <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 10 }}>◦ Recognition</div>
        <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 24 }}>Validated by India's highest offices</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
          {data.recognition.map((r, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 18, padding: 12, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: 180, borderRadius: 12, overflow: 'hidden' }}>
                <img src={r.img} alt={r.title} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.85)' }} />
                <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(63,82,50,0.92)', color: '#fff', fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 10, letterSpacing: '.05em', padding: '5px 11px', borderRadius: 999 }}>{r.tag}</div>
              </div>
              <div style={{ padding: '20px 12px 12px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.22, letterSpacing: '-0.01em', marginBottom: 10 }}>{r.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.68 }}>{r.desc}</p>
                <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                  <span style={{ display: 'inline-block', background: 'var(--cardalt)', color: 'var(--olive)', fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, padding: '6px 13px', borderRadius: 999 }}>{r.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {data.accolades.map((a, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 16, padding: 20 }}>
              <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 10, color: 'var(--olive)', marginBottom: 10 }}>{a.k}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 5 }}>{a.t}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.55 }}>{a.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" style={{ scrollMarginTop: 20, maxWidth: 1240, margin: '40px auto 0', padding: '88px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 10 }}>◦ What We Do</div>
            <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em' }}>Full waste lifecycle. Integrated or individual.</h2>
          </div>
          <p style={{ maxWidth: 320, fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7 }}>Our core strength is integrated SWM — one of India's rarest credentials. We also deliver every component as a standalone solution.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {data.solutions.map((s, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 18, padding: 12, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: 160, borderRadius: 12, overflow: 'hidden' }}>
                <img src={s.img} alt={s.t} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                {s.tag && <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(246,244,236,0.92)', borderRadius: 999, padding: '4px 11px', fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 10, fontWeight: 500, color: 'var(--green)' }}>{s.tag}</div>}
              </div>
              <div style={{ padding: '16px 8px 8px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 6 }}>{s.t}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>{s.d}</div>
                <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
                  <a href="#contact" style={{ flex: 1, textAlign: 'center', border: '1px solid var(--line)', borderRadius: 999, padding: 9, fontSize: 12.5, fontWeight: 500, color: 'var(--ink)' }}>More Info</a>
                  <a href="#contact" style={{ flex: 1, textAlign: 'center', background: 'var(--green)', color: '#fff', borderRadius: 999, padding: 9, fontSize: 12.5, fontWeight: 500 }}>Enquire ↗</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={{ scrollMarginTop: 20, maxWidth: 1240, margin: '88px auto 0', padding: '0 40px' }}>
        <div style={{ background: 'var(--cardalt)', borderRadius: 22, padding: '56px 44px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 40, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 20 }}>
              <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 12 }}>◦ Digital Platform</div>
              <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 16 }}>Every project IT-enabled from day one.</h2>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.72, maxWidth: 380 }}>Ecosmartly is our proprietary command platform — connecting collection vehicles, processing plants, user fees, and sanitation into one unified real-time dashboard. Every 3R project runs on it.</p>
              <div style={{ display: 'flex', gap: 28, marginTop: 22 }}>
                <div><div style={{ fontSize: 22, fontWeight: 600, color: 'var(--green)' }}>4</div><div style={{ fontSize: 11, color: 'var(--faint)', marginTop: 2 }}>Connected apps</div></div>
                <div><div style={{ fontSize: 22, fontWeight: 600, color: 'var(--green)' }}>Live</div><div style={{ fontSize: 11, color: 'var(--faint)', marginTop: 2 }}>Real-time ops</div></div>
                <div><div style={{ fontSize: 22, fontWeight: 600, color: 'var(--green)' }}>ERP</div><div style={{ fontSize: 11, color: 'var(--faint)', marginTop: 2 }}>Internal backbone</div></div>
              </div>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 22, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, letterSpacing: '.04em', color: 'var(--green)', borderBottom: '1px solid var(--green)', paddingBottom: 3 }}>Explore Ecosmartly ↗</a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {data.apps.map((ap, i) => (
                <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 16, padding: '24px 26px', display: 'flex', alignItems: 'center', gap: 20 }}>
                  <span style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 12, color: 'var(--olive)', width: 28, flexShrink: 0 }}>{ap.n}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 3 }}>{ap.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{ap.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMERGING */}
      <section style={{ maxWidth: 1240, margin: '40px auto 0', padding: '88px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--olive)', marginBottom: 10 }}>◦ Active Development</div>
            <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em' }}>Streams we're building now</h2>
          </div>
          <p style={{ maxWidth: 320, fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7 }}>Beyond SWM, 3R is actively developing adjacent sustainability capabilities — several already in progress across India.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }}>
          {data.emerging.map((e, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 16, padding: 24 }}>
              <div style={{ display: 'inline-block', fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 10, background: 'var(--cardalt)', color: 'var(--olive)', padding: '4px 11px', borderRadius: 999, marginBottom: 14 }}>{e.pill}</div>
              <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 7 }}>{e.t}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{e.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + PRESENCE */}
      <section id="contact" style={{ scrollMarginTop: 20, maxWidth: 1240, margin: '40px auto 0', padding: '88px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, alignItems: 'stretch' }}>
          <div style={{ background: 'var(--green)', borderRadius: 22, padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.2, maxWidth: 420 }}>Ready to transform your city's waste system?</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', marginTop: 14, maxWidth: 400 }}>Speak with our team — ULBs, investors, and international partners welcome.</p>
            <div style={{ display: 'flex', gap: 10, marginTop: 26, flexWrap: 'wrap' }}>
              <a href="mailto:connect@3rmanagement.in" style={{ background: '#fff', color: 'var(--green)', fontSize: 14, fontWeight: 600, padding: '14px 30px', borderRadius: 999 }}>Get in Touch ↗</a>
              <a href="mailto:connect@3rmanagement.in" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', fontSize: 14, fontWeight: 600, padding: '14px 30px', borderRadius: 999 }}>Download Credentials</a>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 148px', gap: 12 }}>
            <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', minHeight: 200 }}>
              <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80&auto=format&fit=crop" alt="Across India" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(43,46,37,0.6),transparent 60%)' }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 10.5, letterSpacing: '.06em', color: '#fff' }}>AMRITSAR · SILVASSA · INTEGRATED SWM</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&q=80&auto=format&fit=crop" alt="Remote areas" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(43,46,37,0.6),transparent 60%)' }}></div>
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 10.5, letterSpacing: '.06em', color: '#fff' }}>LEH & KARGIL</div>
              </div>
              <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80&auto=format&fit=crop" alt="Bioenergy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(43,46,37,0.6),transparent 60%)' }}></div>
                <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 10.5, letterSpacing: '.06em', color: '#fff' }}>CBG · BIOENERGY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ maxWidth: 1240, margin: '64px auto 0', padding: '44px 40px 56px', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 30, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--green)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>3R</span>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Renewable Resource Recovery</div>
            <div style={{ fontSize: 12, color: 'var(--faint)' }}>Integrated Waste Management · India</div>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontSize: 11.5, color: 'var(--faint)', lineHeight: 1.9, textAlign: 'right' }}>
          #5F Vandhna Building, 11 Tolstoy Road, New Delhi – 110001<br />
          connect@3rmanagement.in · +91 11 43029300<br />
          © 2025 3R Management Ltd.
        </div>
      </footer>
    </div>
  );
}
