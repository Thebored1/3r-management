"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [cookie, setCookie] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((s) => (s === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const dismissCookie = () => setCookie(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quotes = [
    {
      q: "The team has new-age solutions and technologies. 3RM is and will play a critical role in the world of waste and solutions.",
      a: "Rohtas Goel",
      r: "Omaxe Ltd",
    },
    {
      q: "I liked the clarity and long-term vision, which established that this is not a fly-by-night association. We got the right people to work with.",
      a: "Omita Paul",
      r: "Secretary to Former President of India, Pranab Mukherjee",
    },
  ];
  const curQuote = quotes[activeTestimonial];

  const mechanisms = [
    {
      title: "Integrated Waste Management",
      desc: "Comprehensive, end-to-end handling of waste with minimal environmental impact.",
      category: "End-to-End",
      img: "/images/slide-2.png",
      location: "3RM Facilities, India",
    },
    {
      title: "Smart BioCNG",
      desc: "Converting organic waste into clean, renewable compressed natural gas.",
      category: "Renewable",
      img: "/images/factory.png",
      location: "BioCNG Plant, Gujarat",
    },
    {
      title: "Sorting & Segregation",
      desc: "Automated and manual sorting to maximise recycling and resource recovery.",
      category: "Efficiency",
      img: "/images/p-1.png",
      location: "Recycling Hub, Delhi",
    },
    {
      title: "Waste Management 4.0",
      desc: "IoT, AI and analytics to optimise collection and processing routes.",
      category: "Digital",
      img: "/images/syne.png",
      location: "Control Center, HQ",
    },
    {
      title: "Waste Transportation",
      desc: "Efficient logistics to safely transport materials with low emissions.",
      category: "Logistics",
      img: "/images/white-bear.jpg",
      location: "Transport Fleet, Pan-India",
    },
    {
      title: "Circular Economy",
      desc: "Transforming waste streams into valuable resources, closing the loop.",
      category: "Sustainability",
      img: "/images/cycle.png",
      location: "Global Initiative",
    },
  ];

  const roadItems = [
    {
      k: "REDUCE",
      h: "Entropy",
      t: "In a hyper-consumerist world, the gatekeepers of waste, water and land struggle to keep pace with waste creation. We need a guiding framework to navigate these challenges.",
    },
    {
      k: "REUSE",
      h: "Experience",
      t: "Instead of reinventing the wheel each time, we share best practices and success stories across the world, with societies and innovation circuits.",
    },
    {
      k: "RECYCLE",
      h: "Possibilities",
      t: "Combine forces and core capabilities to solve unique challenges for ever-growing waste scenarios on land, water and air — the road to zero.",
    },
  ];

  const expertise = [
    {
      tag: "for business",
      icon: "🏢",
      title: "Solid Waste Management",
      text: "The experience of commercially and viably recovering materials from waste for simpler economic feasibility.",
      cta: "Explore",
    },
    {
      tag: "for sustainability",
      icon: "♻️",
      title: "Recyclable Management",
      text: "Strong experience consulting and advising organisations to reach their sustainability goals and standards.",
      cta: "Explore",
    },
    {
      tag: "for efficiency",
      icon: "📊",
      title: "Increased Transparency",
      text: "Waste Management 4.0 provides real-time data tracking and analytics for operational efficiency.",
      cta: "Learn More",
    },
    {
      tag: "for the future",
      icon: "🌍",
      title: "Tailor Your Solution",
      text: "Every business is unique. We customise waste strategies to fit your operational needs and goals.",
      cta: "Learn More",
    },
  ];

  const smartItems = [
    { img: "/images/man.jpg", label: "Optimized Resources" },
    { img: "/images/in-bag.jpg", label: "Cleaner Ecosystems" },
    { img: "/images/CIRCLE.jpg", label: "Do More With Less" },
    { img: "/images/clock.jpg", label: "Increased Transparency" },
  ];

  const foundations = [
    { img: "/images/he.jpg", label: "Harmonious Ecosystem" },
    { img: "/images/ig.jpg", label: "Inclusive Growth" },
    { img: "/images/ow-2.jpg", label: "Ownership" },
    { img: "/images/in.jpg", label: "Innovation" },
    { img: "/images/cd.jpg", label: "Customer Delight" },
  ];

  return (
    <div
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        background: "#f5f4f0",
        boxShadow: "0 0 80px rgba(0,0,0,.06)",
        overflow: "hidden",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: "#16241c",
          color: "#cbc9c1",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px 40px",
          fontSize: 12.5,
          letterSpacing: ".01em",
        }}
      >
        <span>
          Call now for a{" "}
          <strong style={{ color: "#e7c979", fontWeight: 400 }}>
            free consultation
          </strong>{" "}
          &nbsp;·&nbsp;{" "}
          <a
            href="tel:+911143029300"
            style={{ color: "#fff" }}
            className="r-underline"
          >
            +91 11 43029300
          </a>
        </span>
        <span style={{ display: "flex", gap: 22 }}>
          <a href="#" style={{ color: "#cbc9c1" }} className="r-underline">
            LinkedIn
          </a>
          <a href="#" style={{ color: "#cbc9c1" }} className="r-underline">
            Facebook
          </a>
          <a href="#" style={{ color: "#cbc9c1" }} className="r-underline">
            Instagram
          </a>
        </span>
      </div>

      {/* Header */}
      <header
        className="header-container"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 40px",
          background: "rgba(245,244,240,.82)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e4e2da",
        }}
      >
        <Image
          src="/images/logo-01.png"
          alt="3R Management"
          width={150}
          height={38}
          style={{ height: 38, width: "auto" }}
          priority
        />
        <nav
          className="hide-on-mobile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            background: "#fff",
            border: "1px solid #e4e2da",
            borderRadius: 999,
            padding: 5,
          }}
        >
          <a
            href="#"
            style={{
              padding: "9px 18px",
              borderRadius: 999,
              background: "#16241c",
              color: "#fff",
              fontSize: 13.5,
              fontWeight: 400,
            }}
          >
            Home
          </a>
          <a
            href="#services"
            style={{
              padding: "9px 18px",
              borderRadius: 999,
              fontSize: 13.5,
              fontWeight: 400,
              color: "#3e4c44",
            }}
            className="r-hover-lift"
          >
            Services & Solutions
          </a>
          <a
            href="#impact"
            style={{
              padding: "9px 18px",
              borderRadius: 999,
              fontSize: 13.5,
              fontWeight: 400,
              color: "#3e4c44",
            }}
            className="r-hover-lift"
          >
            Impact
          </a>
          <a
            href="#foundations"
            style={{
              padding: "9px 18px",
              borderRadius: 999,
              fontSize: 13.5,
              fontWeight: 400,
              color: "#3e4c44",
            }}
            className="r-hover-lift"
          >
            Career
          </a>
          <a
            href="#footer"
            style={{
              padding: "9px 18px",
              borderRadius: 999,
              fontSize: 13.5,
              fontWeight: 400,
              color: "#3e4c44",
            }}
            className="r-hover-lift"
          >
            Contact Us
          </a>
        </nav>
        <a
          href="#footer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#2f7d4f",
            color: "#fff",
            padding: "12px 22px",
            borderRadius: 999,
            fontSize: 13.5,
            fontWeight: 400,
          }}
          className="r-hover-lift"
        >
          Make an Enquiry <span style={{ fontSize: 15 }}>→</span>
        </a>
      </header>

      {/* Hero */}
      <section style={{ padding: "64px 40px 48px" }}>
        <div
          className="grid-hero"
          style={{
            gap: 48,
            alignItems: "end",
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "7px 15px",
                border: "1px solid #cdd6cf",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: ".06em",
                textTransform: "uppercase",
                color: "#2f7d4f",
                marginBottom: 26,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#2f7d4f",
                  display: "inline-block",
                }}
              ></span>{" "}
              Champions of a zero-waste society
            </div>
            <h1
              className="font-heading text-hero"
              style={{
                lineHeight: 1.02,
                letterSpacing: "-.03em",
                fontWeight: 400,
                color: "#16241c",
              }}
            >
              Integrated <span style={{ color: "#2f7d4f" }}>waste</span>
              <br />
              management, done right.
            </h1>
          </div>
          <div style={{ paddingBottom: 8 }}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#4c5a52",
                marginBottom: 22,
              }}
            >
              Solutions that promote recycling, reduce landfill impact and support
              sustainability — from segregation and collection through to
              recovery.
            </p>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 400,
                fontSize: 14,
                color: "#16241c",
              }}
              className="r-underline"
            >
              Explore what we do <span style={{ fontSize: 16 }}>↓</span>
            </a>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            width: "100%",
            height: 560,
            borderRadius: 26,
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/slide-2.png"
            alt="We champion the voices of a zero-waste society"
            fill
            style={{ objectFit: "cover", filter: "grayscale(.15) contrast(1.02)" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg,rgba(0,0,0,.35) 0%,transparent 32%,transparent 55%,rgba(0,0,0,.55) 100%)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 28,
              left: 30,
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "rgba(255,255,255,.16)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,.28)",
              color: "#fff",
              padding: "8px 15px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 400,
            }}
          >
            Sustainability in action
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 34,
              left: 30,
              right: 30,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 20,
            }}
          >
            <div style={{ color: "#fff", maxWidth: 520 }}>
              <div
                className="font-heading"
                style={{
                  fontSize: 30,
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-.02em",
                }}
              >
                We believe in our waste-management results.
              </div>
            </div>
            <div style={{ display: "flex", gap: 26, color: "#fff" }}>
              <div>
                <div
                  className="font-heading"
                  className="text-large" style={{ fontWeight: 400, lineHeight: 1 }}
                >
                  5%
                </div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>
                  of turnover lost to waste
                </div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,.3)" }}></div>
              <div>
                <div
                  className="font-heading"
                  className="text-large" style={{ fontWeight: 400, lineHeight: 1 }}
                >
                  2030
                </div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>
                  the change we can make
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "start",
            marginBottom: 48,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#2f7d4f",
                marginBottom: 16,
              }}
            >
              Who we are
            </div>
            <h2
              className="font-heading"
              style={{
                fontSize: 48,
                lineHeight: 1.06,
                letterSpacing: "-.025em",
                fontWeight: 400,
              }}
            >
              Our vision &amp; mission
            </h2>
          </div>
          <div style={{ maxWidth: 520 }}>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "#4c5a52",
                marginBottom: 18,
              }}
            >
              <strong style={{ color: "#16241c", fontWeight: 400 }}>
                Vision.
              </strong>{" "}
              When it&apos;s about the environment and waste management, 3RM
              should be the name to reckon with — making a real impact through our
              contribution to society, directly and indirectly.
            </p>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "#4c5a52",
                marginBottom: 26,
              }}
            >
              <strong style={{ color: "#16241c", fontWeight: 400 }}>
                Mission.
              </strong>{" "}
              To attain a substantial market share in Integrated Waste Management
              through unceasing innovation, spread across multiple technology
              spectrums.
            </p>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "#16241c",
                color: "#fff",
                padding: "13px 24px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 400,
              }}
              className="r-hover-lift"
            >
              About Us <span>→</span>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 22,
          }}
        >
          <div
            style={{
              position: "relative",
              height: 440,
              borderRadius: 22,
              overflow: "hidden",
            }}
            className="r-hover-lift"
          >
            <Image
              src="/images/factory.png"
              alt="Recycling"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg,transparent 55%,rgba(0,0,0,.55))",
              }}
            ></div>
            <div
              className="font-heading"
              style={{
                position: "absolute",
                bottom: 26,
                left: 26,
                color: "#fff",
                fontSize: 22,
                fontWeight: 400,
              }}
            >
              Recycling
            </div>
          </div>
          <div
            style={{
              position: "relative",
              height: 440,
              borderRadius: 22,
              overflow: "hidden",
            }}
            className="r-hover-lift"
          >
            <Image
              src="/images/white-bear.jpg"
              alt="Sustainability"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg,transparent 55%,rgba(0,0,0,.55))",
              }}
            ></div>
            <div
              className="font-heading"
              style={{
                position: "absolute",
                bottom: 26,
                left: 26,
                color: "#fff",
                fontSize: 22,
                fontWeight: 400,
              }}
            >
              Sustainability
            </div>
          </div>
          <div
            style={{
              height: 440,
              borderRadius: 22,
              background: "#16241c",
              color: "#fff",
              padding: 36,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            className="r-hover-lift"
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#8fbf9e",
              }}
            >
              Perspective
            </span>
            <h3
              className="font-heading"
              style={{
                fontSize: 27,
                lineHeight: 1.2,
                fontWeight: 400,
                letterSpacing: "-.01em",
              }}
            >
              Will waste management 4.0 drive growth in 2024 and 2025?
            </h3>
            <a
              href="#"
              style={{
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                fontWeight: 400,
                fontSize: 14,
              }}
            >
              <span
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "#2f7d4f",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                →
              </span>{" "}
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Customer Delight */}
      <section
        style={{
          margin: "0 40px",
          background: "#e6e4dc",
          borderRadius: 30,
          padding: "72px 56px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 44,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ display: "flex", gap: 9, marginBottom: 24 }}>
            <span
              style={{
                background: "#fff",
                padding: "6px 13px",
                borderRadius: 999,
                fontSize: 11.5,
                fontWeight: 400,
                color: "#4c5a52",
              }}
            >
              Sustainability
            </span>
            <span
              style={{
                background: "#fff",
                padding: "6px 13px",
                borderRadius: 999,
                fontSize: 11.5,
                fontWeight: 400,
                color: "#4c5a52",
              }}
            >
              Environment
            </span>
            <span
              style={{
                background: "#fff",
                padding: "6px 13px",
                borderRadius: 999,
                fontSize: 11.5,
                fontWeight: 400,
                color: "#4c5a52",
              }}
            >
              2025
            </span>
          </div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: "#2f7d4f",
              marginBottom: 14,
            }}
          >
            Customer Delight
          </div>
          <h2
            className="font-heading"
            style={{
              fontSize: 27,
              lineHeight: 1.25,
              fontWeight: 400,
              letterSpacing: "-.01em",
              color: "#16241c",
            }}
          >
            Landfill space is getting scarcer and scarcer, yet businesses continue
            to produce solid waste.
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 290,
              background: "#f7f6f3",
              borderRadius: 22,
              padding: 24,
              boxShadow: "0 24px 48px rgba(0,0,0,.12)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <h3
                className="font-heading"
                style={{ fontSize: 18, fontWeight: 400 }}
              >
                Waste Reduction
              </h3>
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "#2f7d4f",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ↗
              </span>
            </div>
            <p
              style={{
                fontSize: 12.5,
                color: "#4c5a52",
                lineHeight: 1.5,
                marginBottom: 18,
              }}
            >
              Reduce up to 5% of your business turnover lost to inefficient waste
              management.
            </p>
            <div style={{ position: "relative", width: "100%", height: 230 }}>
              <Image
                src="/images/cycle.png"
                alt="Circular material flow"
                fill
                style={{ objectFit: "cover", borderRadius: 14 }}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={scrollToTop}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
              marginBottom: 32,
              cursor: "pointer",
              fontSize: 16,
              border: "none",
            }}
            className="r-hover-lift"
          >
            ↑
          </button>
          <p
            style={{
              fontSize: 14,
              color: "#4c5a52",
              lineHeight: 1.6,
              marginBottom: 16,
            }}
          >
            This doesn&apos;t come cheap — a huge concern even for owners not
            otherwise invested in environmental efforts.
          </p>
          <p
            style={{
              fontSize: 14,
              color: "#4c5a52",
              lineHeight: 1.6,
              marginBottom: 26,
            }}
          >
            We provide strategies for efficient waste segregation, collection and
            recycling to help you cut costs and save the environment.
          </p>
          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#2f7d4f",
              color: "#fff",
              padding: "13px 24px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 400,
            }}
            className="r-hover-lift"
          >
            Learn how we can help <span>→</span>
          </a>
        </div>
      </section>

      {/* Services header */}
      <section id="services" style={{ padding: "88px 40px 64px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#4c5a52",
                marginBottom: 22,
              }}
            >
              <span style={{ color: "#cf9a3d" }}>★</span> Services &amp; Solutions
            </div>
            <h2
              className="font-heading"
              style={{
                fontSize: 52,
                lineHeight: 1.05,
                letterSpacing: "-.025em",
                fontWeight: 400,
                marginBottom: 22,
              }}
            >
              Innovative <span style={{ color: "#9aa89f" }}>waste solutions</span>{" "}
              for a cleaner future.
            </h2>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "#4c5a52",
                maxWidth: 440,
              }}
            >
              From integrated management and BioCNG to sorting, transportation
              and Waste Management 4.0 — one partner across the entire value
              chain.
            </p>
          </div>
          <div
            style={{
              position: "relative",
              height: 420,
              borderRadius: 24,
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/p-2.png"
              alt="Our facility"
              fill
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "rgba(255,255,255,.18)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,.3)",
                color: "#fff",
                padding: "7px 15px",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 400,
              }}
            >
              01 · Our Facility
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                display: "flex",
                gap: 10,
              }}
            >
              <button
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.22)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                  border: "none",
                }}
              >
                ‹
              </button>
              <button
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,.22)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                  border: "none",
                }}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Mechanism */}
      <section id="impact" style={{ padding: "24px 40px 88px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 36,
          }}
        >
          <h2
            className="font-heading"
            style={{ fontSize: 40, letterSpacing: "-.025em", fontWeight: 400 }}
          >
            3RM Impact Mechanism
          </h2>
          <span style={{ fontSize: 13.5, color: "#4c5a52" }}>
            Six pillars of end-to-end waste management
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {mechanisms.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 24,
                padding: 28,
                border: "1px solid #ece9e1",
                display: "flex",
                flexDirection: "column",
                height: 500,
              }}
              className="r-hover-lift"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    background: "#16241c",
                    color: "#fff",
                    padding: "6px 14px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 400,
                  }}
                >
                  {m.category}
                </span>
              </div>
              <h3
                className="font-heading"
                style={{
                  fontSize: 25,
                  fontWeight: 400,
                  letterSpacing: "-.01em",
                  lineHeight: 1.15,
                  marginBottom: 12,
                }}
              >
                {m.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#66736a",
                  lineHeight: 1.55,
                  marginBottom: 22,
                }}
              >
                {m.desc}
              </p>
              <div
                style={{
                  position: "relative",
                  flex: 1,
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={m.img}
                  alt={m.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg,transparent 45%,rgba(0,0,0,.7))",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    color: "#fff",
                    fontSize: 13.5,
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  ◍ {m.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Road to Zero */}
      <section
        style={{
          background: "#16241c",
          color: "#fff",
          margin: "0 40px",
          borderRadius: 30,
          padding: "76px 56px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "#8fbf9e",
              marginBottom: 14,
            }}
          >
            A guiding framework
          </div>
          <h2
            className="font-heading"
            style={{ fontSize: 48, letterSpacing: "-.025em", fontWeight: 400 }}
          >
            The Road to Zero
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 26,
          }}
        >
          {roadItems.map((r, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.1)",
                borderRadius: 22,
                padding: 36,
              }}
            >
              <div
                className="font-heading"
                style={{
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#8fbf9e",
                  marginBottom: 8,
                }}
              >
                {r.k}
              </div>
              <div
                className="font-heading"
                style={{
                  fontSize: 28,
                  fontWeight: 400,
                  letterSpacing: "-.01em",
                  marginBottom: 18,
                }}
              >
                {r.h}
              </div>
              <p
                style={{ fontSize: 14.5, lineHeight: 1.6, color: "#c4cdc6" }}
              >
                {r.t}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Expertise */}
      <section style={{ padding: "88px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: ".9fr 1.1fr",
            gap: 56,
            alignItems: "start",
          }}
        >
          <div style={{ position: "sticky", top: 96 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#4c5a52",
                marginBottom: 22,
              }}
            >
              <span style={{ color: "#cf9a3d" }}>★</span> Key Expertise
            </div>
            <h2
              className="font-heading"
              style={{
                fontSize: 46,
                lineHeight: 1.08,
                letterSpacing: "-.025em",
                fontWeight: 400,
                marginBottom: 20,
              }}
            >
              Solid waste, recyclables and transparency —{" "}
              <span style={{ color: "#9aa89f" }}>we&apos;ve got it all.</span>
            </h2>
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.65,
                color: "#4c5a52",
                marginBottom: 30,
              }}
            >
              Tailor your solution today and be the change with 3R Management.
            </p>
            <a
              href="#services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "#2f7d4f",
                color: "#fff",
                padding: "13px 24px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 400,
              }}
              className="r-hover-lift"
            >
              Explore Services <span>↗</span>
            </a>
          </div>
          <div
            className="grid-2" style={{ gap: 20 }}
          >
            {expertise.map((e, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  border: "1px solid #ece9e1",
                  borderRadius: 20,
                  padding: 28,
                }}
                className="r-hover-lift"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 22,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 400,
                      color: "#9aa89f",
                      textTransform: "uppercase",
                      letterSpacing: ".05em",
                    }}
                  >
                    {e.tag}
                  </span>
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#f0efe9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 19,
                    }}
                  >
                    {e.icon}
                  </span>
                </div>
                <h3
                  className="font-heading"
                  style={{ fontSize: 19, fontWeight: 400, marginBottom: 10 }}
                >
                  {e.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#66736a",
                    lineHeight: 1.55,
                    marginBottom: 16,
                  }}
                >
                  {e.text}
                </p>
                <a
                  href="#"
                  style={{ fontSize: 13, fontWeight: 400, color: "#2f7d4f" }}
                  className="r-underline"
                >
                  {e.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Waste */}
      <section
        style={{
          margin: "0 40px",
          background: "#e6e4dc",
          borderRadius: 30,
          padding: "72px 56px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <h2
            className="font-heading"
            style={{
              fontSize: 56,
              lineHeight: 1,
              letterSpacing: "-.03em",
              fontWeight: 400,
              color: "#16241c",
            }}
          >
            SMART
            <br />
            WASTE
            <br />
            MANAGEMENT
          </h2>
          <div
            style={{
              width: 84,
              height: 4,
              background: "#2f7d4f",
              borderRadius: 2,
              margin: "26px 0 40px",
            }}
          ></div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 30,
              marginBottom: 44,
            }}
          >
            {smartItems.map((s, idx) => (
              <div key={idx}>
                <div
                  style={{
                    width: 70,
                    height: 70,
                    background: "#fff",
                    borderRadius: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 20px rgba(0,0,0,.06)",
                    marginBottom: 14,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={s.img}
                    alt={s.label}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className="font-heading"
                  style={{ fontSize: 16, fontWeight: 400, color: "#16241c" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#16241c",
              color: "#fff",
              padding: "15px 30px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 400,
            }}
            className="r-hover-lift"
          >
            Learn more <span>↗</span>
          </a>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/images/mobile.png"
            alt="Smart waste app"
            width={400}
            height={800}
            style={{ maxWidth: "100%", height: "auto" }}
            className="animate-floaty"
          />
        </div>
      </section>

      {/* Core Foundations */}
      <section
        id="foundations"
        style={{ padding: "88px 40px", textAlign: "center" }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#2f7d4f",
            marginBottom: 14,
          }}
        >
          What holds us together
        </div>
        <h2
          className="font-heading"
          style={{
            fontSize: 44,
            letterSpacing: "-.025em",
            fontWeight: 400,
            marginBottom: 44,
          }}
        >
          3RM Core Foundations
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {foundations.map((f, idx) => (
            <div
              key={idx}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 22px 12px 12px",
                background: "#fff",
                border: "1px solid #ece9e1",
                borderRadius: 999,
                fontSize: 15,
                fontWeight: 400,
                color: "#16241c",
              }}
              className="r-hover-lift"
            >
              <Image
                src={f.img}
                alt={f.label}
                width={38}
                height={38}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              {f.label}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "24px 40px 96px" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #ece9e1",
            borderRadius: 30,
            padding: "64px 56px",
            maxWidth: 860,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#9aa89f",
              marginBottom: 28,
            }}
          >
            What people say
          </div>
          <div
            className="font-heading"
            style={{
              fontSize: 80,
              lineHeight: 0.4,
              color: "#cbe0d1",
              height: 44,
            }}
          >
            &ldquo;
          </div>
          <p
            className="font-heading"
            style={{
              fontSize: 27,
              lineHeight: 1.4,
              fontWeight: 400,
              letterSpacing: "-.01em",
              color: "#16241c",
              marginBottom: 32,
            }}
          >
            {curQuote.q}
          </p>
          <div style={{ fontSize: 16, fontWeight: 400, color: "#16241c" }}>
            {curQuote.a}
          </div>
          <div
            style={{ fontSize: 13.5, color: "#66736a", marginBottom: 32 }}
          >
            {curQuote.r}
          </div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
            <button
              onClick={() => setActiveTestimonial(0)}
              aria-label="Testimonial 1"
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: activeTestimonial === 0 ? "#16241c" : "#cfd4ce",
              }}
            ></button>
            <button
              onClick={() => setActiveTestimonial(1)}
              aria-label="Testimonial 2"
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: activeTestimonial === 1 ? "#16241c" : "#cfd4ce",
              }}
            ></button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        style={{ background: "#16241c", color: "#fff", padding: "80px 56px 40px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            marginBottom: 56,
          }}
        >
          <div>
            <h2
              className="font-heading"
              style={{
                fontSize: 64,
                letterSpacing: "-.03em",
                fontWeight: 400,
                lineHeight: 0.95,
                marginBottom: 32,
              }}
            >
              BE THE
              <br />
              CHANGE
            </h2>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.7,
                color: "#a7b3ab",
                marginBottom: 20,
              }}
            >
              <strong style={{ color: "#fff", fontWeight: 400 }}>
                3R Management Ltd
              </strong>
              <br />
              #5F, Vandhna Building, 11 Tolstoy Road,
              <br />
              New Delhi – 110001
            </p>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.7,
                color: "#a7b3ab",
                marginBottom: 28,
              }}
            >
              E: connect@3rmanagement.in
              <br />
              P: +91 11 43029300
            </p>
            <div style={{ display: "flex", gap: 22 }}>
              <a
                href="#"
                style={{
                  color: "#fff",
                  opacity: 0.85,
                  fontSize: 13.5,
                  fontWeight: 400,
                }}
                className="r-underline"
              >
                LinkedIn
              </a>
              <a
                href="#"
                style={{
                  color: "#fff",
                  opacity: 0.85,
                  fontSize: 13.5,
                  fontWeight: 400,
                }}
                className="r-underline"
              >
                Facebook
              </a>
              <a
                href="#"
                style={{
                  color: "#fff",
                  opacity: 0.85,
                  fontSize: 13.5,
                  fontWeight: 400,
                }}
                className="r-underline"
              >
                Instagram
              </a>
            </div>
          </div>
          <div style={{ maxWidth: 420, justifySelf: "end", width: "100%" }}>
            <h3
              className="font-heading"
              style={{ fontSize: 24, fontWeight: 400, marginBottom: 22 }}
            >
              Make an Enquiry
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              <input
                type="text"
                placeholder="Job ID Number"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.14)",
                  borderRadius: 12,
                  padding: "14px 16px",
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "inherit",
                }}
              />
              <input
                type="text"
                placeholder="Name"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.14)",
                  borderRadius: 12,
                  padding: "14px 16px",
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "inherit",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.14)",
                  borderRadius: 12,
                  padding: "14px 16px",
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "inherit",
                }}
              />
              <textarea
                placeholder="Your message"
                style={{
                  width: "100%",
                  minHeight: 110,
                  resize: "vertical",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.14)",
                  borderRadius: 12,
                  padding: "14px 16px",
                  color: "#fff",
                  fontSize: 14,
                  fontFamily: "inherit",
                }}
              ></textarea>
              <button
                style={{
                  alignSelf: "flex-start",
                  background: "#2f7d4f",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 999,
                  fontWeight: 400,
                  fontSize: 14,
                  cursor: "pointer",
                  border: "none",
                }}
                className="r-hover-lift"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,.12)",
            paddingTop: 28,
            fontSize: 12.5,
            color: "#8a968e",
          }}
        >
          <span>© 2025 3R Management. All rights reserved.</span>
          <a href="#" style={{ color: "#8a968e" }} className="r-underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
