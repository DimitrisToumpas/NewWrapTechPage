import { useState, useEffect, useRef, useCallback } from "react";
import logo from "./assets/WrapTechLogo.jpg";
const NAV_LINKS = ["Services", "Portfolio", "About", "Contact"];

const SERVICES = [
  {
    icon: "🎨",
    title: "Μεμβράνες Αλλαγής Χρώματος",
    desc: "Ολική – Μερική κάλυψη οχημάτων, Εσωτερικών επενδύσεων οχημάτων, Διαφημιστική κάλυψη οχημάτων",
    tag: "Popular",
  },
  {
    icon: "🛡️",
    title: "Αντιηλιακές Μεμβράνες",
    desc: "Οι μεμβράνες φαναριών υφίστανται είτε για να προστατεύσουν τα φανάρια του οχήματός σας είτε για να το διακοσμήσουν αλλάζοντας το χρώμα ακόμα και το σχέδιό τους.",
    tag: "PPF",
  },
  {
    icon: "🏙️",
    title: "Εφαρμογές Κτηρίων",
    desc: "Professional-grade nano-ceramic coating delivering hydrophobic protection, mirror-like gloss, and years of effortless maintenance.",
    tag: "Pro",
  },
  {
    icon: "✨",
    title: "Best Car Wrapping Services",
    desc: "Περιποίηση & Ηλεκτροστατική βαφή ζαντών.",
    tag: "Detail",
  },
];

const STATS = [
  { value: 1200, suffix: "+", label: "Οχήματα που Εξυπηρετήθηκαν" },
  { value: 8, suffix: "+", label: "Χρόνια Εμπειρίας" },
  { value: 250, suffix: "+", label: "Τοποθετήσεις PPF" },
  { value: 4.9, suffix: "", label: "Αξιολόγηση Πελατών" },
];

const TESTIMONIALS = [
  {
    name: "Νικόλαος Παπαδόπουλος",
    role: "Citroën C4 Owner",
    initials: "ΝΠ",
    rating: 5,
    text: "WrapTech transformed my C4 with a deep crimson wrap. The attention to detail is unmatched — every panel is perfect. My car stops traffic wherever it goes.",
    color: "#DC2626",
  },
  {
    name: "Sophia Laurent",
    role: "Lamborghini Urus Owner",
    initials: "SL",
    rating: 5,
    text: "The PPF installation on my Urus was flawless. You can't even tell it's there, but I have complete peace of mind on the road. Worth every penny.",
    color: "#DC2626",
  },
  {
    name: "James Okafor",
    role: "BMW M4 Owner",
    initials: "JO",
    rating: 5,
    text: "Ceramic coating has made washing my M4 an absolute joy. Water just slides right off. Three years later and it still looks showroom fresh.",
    color: "#991B1B",
  },
];

const PORTFOLIO_ITEMS = [
  { id: 1, label: "Matte Black Supra", tag: "Wrap", tall: true, hue: "20,20,20" },
  { id: 2, label: "Satin PPF Porsche", tag: "PPF", tall: false, hue: "30,30,30" },
  { id: 3, label: "Chrome Delete G-Wagon", tag: "Wrap", tall: false, hue: "15,15,15" },
  { id: 4, label: "Ceramic Coated R8", tag: "Ceramic", tall: true, hue: "25,25,25" },
  { id: 5, label: "Crimson Red GT-R", tag: "Wrap", tall: false, hue: "18,18,18" },
  { id: 6, label: "Full PPF McLaren 720S", tag: "PPF", tall: false, hue: "22,22,22" },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const isDecimal = target % 1 !== 0;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? parseFloat((eased * target).toFixed(1))
        : Math.floor(eased * target);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, inView }) {
  const count = useCountUp(stat.value, 2000, inView);
  return (
    <div style={{
      textAlign: "center",
      padding: "2rem 1rem",
    }}>
      <div style={{
        fontSize: "clamp(2.5rem, 6vw, 4rem)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        background: "linear-gradient(135deg, #fff 0%, #DC2626 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1,
        marginBottom: "0.5rem",
      }}>
        {stat.value % 1 !== 0 ? count.toFixed(1) : count.toLocaleString()}{stat.suffix}
      </div>
      <div style={{
        color: "#888",
        fontSize: "0.9rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontWeight: 500,
      }}>{stat.label}</div>
    </div>
  );
}

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const sliderRef = useRef(null);
  const dragging = useRef(false);

  const getPos = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    return Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
  };

  const onMove = useCallback((e) => {
    if (!dragging.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setPos(getPos(clientX));
  }, []);

  const onUp = () => { dragging.current = false; };

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [onMove]);

  return (
    <div
      ref={sliderRef}
      onMouseDown={(e) => { dragging.current = true; setPos(getPos(e.clientX)); }}
      onTouchStart={(e) => { dragging.current = true; setPos(getPos(e.touches[0].clientX)); }}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 800,
        margin: "0 auto",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
        border: "1px solid rgba(220,38,38,0.3)",
        boxShadow: "0 0 80px rgba(0,0,0,0.8)",
        aspectRatio: "16/9",
      }}
    >
      {/* BEFORE */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #111 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: 120, height: 60, margin: "0 auto 1rem",
            background: "linear-gradient(90deg, #c0c0c0 0%, #888 100%)",
            borderRadius: 8, opacity: 0.6,
          }} />
          <div style={{ color: "#666", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Factory Silver
          </div>
        </div>
      </div>

      {/* AFTER */}
      <div style={{
        position: "absolute", inset: 0,
        clipPath: `inset(0 ${100 - pos}% 0 0)`,
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #050505 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{
            width: 120, height: 60, margin: "0 auto 1rem",
            background: "linear-gradient(90deg, #DC2626 0%, #EF4444 50%, #991B1B 100%)",
            borderRadius: 8,
            boxShadow: "0 0 30px rgba(220,38,38,0.5)",
          }} />
          <div style={{ color: "#DC2626", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Deep Red Wrap
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div style={{
        position: "absolute",
        top: 0, bottom: 0,
        left: `${pos}%`,
        width: 2,
        background: "linear-gradient(180deg, transparent, #DC2626, transparent)",
        transform: "translateX(-50%)",
        pointerEvents: "none",
      }} />

      {/* Handle */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: `${pos}%`,
        transform: "translate(-50%, -50%)",
        width: 48, height: 48,
        borderRadius: "50%",
        background: "#DC2626",
        display: "flex", alignItems: "center", justifyContent: "center",
        pointerEvents: "none",
        boxShadow: "0 0 20px rgba(220,38,38,0.6)",
        zIndex: 10,
      }}>
        <span style={{ color: "#000", fontSize: 14, fontWeight: 800 }}>⟺</span>
      </div>

      {/* Labels */}
      <div style={{ position: "absolute", bottom: 16, left: 16, color: "#aaa", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Before</div>
      <div style={{ position: "absolute", bottom: 16, right: 16, color: "#DC2626", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>After</div>
    </div>
  );
}

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function ScrollReveal({ children, delay = 0, direction = "up" }) {
  const [ref, inView] = useInView(0.15);
  const transforms = {
    up: "translateY(40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
    none: "none",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : transforms[direction],
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function WrapTech() {
  const [navSolid, setNavSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [statsRef, statsInView] = useInView(0.3);
  const storyRef = useRef(null);
  const [storyProgress, setStoryProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setNavSolid(window.scrollY > 60);
      if (storyRef.current) {
        const rect = storyRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (window.innerHeight + rect.height)));
        setStoryProgress(progress);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{
      background: "#080808",
      color: "#fff",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      overflowX: "hidden",
      minHeight: "100vh",
    }}>
      {/* ─────────── NAV ─────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "1.25rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: navSolid ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: navSolid ? "blur(20px)" : "none",
        borderBottom: navSolid ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}>

        <div style={{ display: "flex", alignItems: "center" }}>
  <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>
    <span style={{ color: "#DC2626" }}>W</span>rapTech
  </span>
</div>
        {/* <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, #DC2626, #EF4444)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 900, color: "#000",
          }}>W</div>
          <span style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>WrapTech</span>
        </div>*/}

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2.5rem" }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#aaa", fontSize: "0.875rem", letterSpacing: "0.05em",
                transition: "color 0.2s",
                padding: 0,
              }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#aaa"}
            >{l}</button>
          ))}
        </div>

        <button onClick={() => scrollTo("contact")} style={{
          background: "#DC2626",
          color: "#000",
          border: "none",
          padding: "0.6rem 1.4rem",
          borderRadius: 40,
          fontWeight: 700,
          fontSize: "0.85rem",
          cursor: "pointer",
          letterSpacing: "0.02em",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
          onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; e.target.style.boxShadow = "0 0 20px rgba(220,38,38,0.5)"; }}
          onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}
        >Επικοινωνία</button>
      </nav>

      {/* ─────────── HERO ─────────── */}
      <section id="hero" style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative",
        textAlign: "center",
        padding: "0 1.5rem",
        overflow: "hidden",
      }}>
        {/* Cinematic bg */}
        <div style={{
          position: "absolute", inset: 0,
          background: `
            radial-gradient(ellipse 80% 50% at 50% 30%, rgba(220,38,38,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 80%, rgba(50,50,50,0.3) 0%, transparent 60%),
            linear-gradient(180deg, #080808 0%, #0d0d0d 50%, #080808 100%)
          `,
        }} />

        {/* Animated grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }} />

        {/* Glowing orb */}
        <div style={{
          position: "absolute",
          top: "20%", left: "50%",
          transform: "translateX(-50%)",
          width: 600, height: 300,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(220,38,38,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(220,38,38,0.1)",
            border: "1px solid rgba(220,38,38,0.3)",
            borderRadius: 40,
            padding: "0.35rem 1rem",
            fontSize: "0.75rem",
            color: "#DC2626",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "2rem",
            animation: "fadeUp 0.8s ease 0.2s both",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#DC2626" }} />
            Μεταμορφωση αυτοκινητου
          </div>

          <h1 style={{
            fontSize: "clamp(3rem, 9vw, 7.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            marginBottom: "1.5rem",
            animation: "fadeUp 0.8s ease 0.4s both",
          }}>
            Wrap Beyond<br />
            <span style={{
              background: "linear-gradient(135deg, #DC2626 0%, #EF4444 40%, #991B1B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>Expectations</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#888",
            maxWidth: 560,
            margin: "0 auto 3rem",
            lineHeight: 1.6,
            animation: "fadeUp 0.8s ease 0.6s both",
          }}>
            Αλλαγή Χρώματος Οχημάτων, Μεμβράνες Προστασίας Χρώματος και Εξειδικευμένη Περιποίηση.
          </p>

          <div style={{
            display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap",
            animation: "fadeUp 0.8s ease 0.8s both",
          }}>
            <button onClick={() => scrollTo("portfolio")} style={{
              background: "#fff",
              color: "#000",
              border: "none",
              padding: "0.9rem 2.2rem",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.target.style.background = "#DC2626"; e.target.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { e.target.style.background = "#fff"; e.target.style.transform = "scale(1)"; }}
            >Δείτε τη δουλειά μας</button>
            <button onClick={() => scrollTo("contact")} style={{
              background: "transparent",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "0.9rem 2.2rem",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
              letterSpacing: "0.02em",
              transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#DC2626"; e.target.style.color = "#DC2626"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.3)"; e.target.style.color = "#fff"; }}
            >Λάβετε Προσφορά</button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          animation: "fadeUp 0.8s ease 1.2s both",
        }}>
          <span style={{ color: "#555", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{
            width: 1, height: 50,
            background: "linear-gradient(180deg, #DC2626, transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }} />
        </div>
      </section>

      {/* ─────────── STORYTELLING ─────────── */}
      <section ref={storyRef} id="about" style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, #080808 0%, #0e0e0e 50%, #080808 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, textAlign: "center" }}>
          <ScrollReveal>
            <div style={{
              color: "#555",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "3rem",
            }}>Our Philosophy</div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1rem",
              color: storyProgress > 0.2 ? "#fff" : "#333",
              transition: "color 0.5s ease",
            }}>
              We don't just change<br />the color.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "3rem",
              color: storyProgress > 0.4 ? "#DC2626" : "#222",
              transition: "color 0.5s ease",
            }}>
              We transform the entire<br />presence of your vehicle.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p style={{
              color: "#666",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              maxWidth: 600,
              margin: "0 auto",
            }}>
              Στόχος μας είναι η άριστη εξυπηρέτησή σας,
              με σωστή καθοδήγηση και επιλογή ποιοτικών επώνυμων υλικών,
              σε ένα φιλικό και ευχάριστο περιβάλλον.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── BEFORE/AFTER ─────────── */}
      <section style={{
        padding: "6rem 2rem",
        position: "relative",
        background: "#060606",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}>The Transformation</h2>
              <p style={{ color: "#666", fontSize: "1rem" }}>Drag the slider to reveal the difference</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <BeforeAfterSlider />
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section id="services" style={{
        padding: "8rem 2rem",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "60%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3), transparent)",
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{
                color: "#DC2626", fontSize: "0.75rem", letterSpacing: "0.2em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>What We Do</div>
              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}>Precision Services</h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}>
            {SERVICES.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <ServiceCard service={s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── STATS ─────────── */}
      <section style={{
        padding: "6rem 2rem",
        background: "#060606",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(220,38,38,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div ref={statsRef} style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          position: "relative", zIndex: 1,
        }}>
          {STATS.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <StatCard stat={s} inView={statsInView} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─────────── PORTFOLIO ─────────── */}
      <section id="portfolio" style={{ padding: "8rem 2rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{
                color: "#DC2626", fontSize: "0.75rem", letterSpacing: "0.2em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>Our Work</div>
              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800, letterSpacing: "-0.03em",
              }}>Portfolio</h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "220px",
            gap: "0.75rem",
          }}>
            {PORTFOLIO_ITEMS.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08} direction="none">
                <PortfolioCard item={item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section style={{
        padding: "8rem 2rem",
        background: "#060606",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{
                color: "#DC2626", fontSize: "0.75rem", letterSpacing: "0.2em",
                textTransform: "uppercase", marginBottom: "1rem",
              }}>Client Stories</div>
              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 800, letterSpacing: "-0.03em",
              }}>What They Say</h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <TestimonialCard testimonial={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

{/* ─────────── LOGO ─────────── */}
<section
  style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#080808",
    overflow: "hidden",
  }}
>
  <img
    src={logo}
    alt="WrapTech Logo"
    className="logo-hero"
    style={{
      width: "min(85vw, 700px)",
      height: "auto",
    }}
  />
</section>

      {/* ─────────── LOCATION ─────────── */}
      <section
  style={{
    padding: "6rem 2rem",
    background: "#080808",
    textAlign: "center",
  }}
>
  <ScrollReveal>
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2rem",
      }}
    >

            <a 
  href="https://www.google.com/maps/search/?api=1&query=%CE%A4%CE%B6%CF%89%CE%BD+%CE%9A%CE%AD%CE%BD%CE%BD%CE%B5%CE%BD%CF%84%CF%85+12%2C+%CE%A0%CF%85%CE%BB%CE%B1%CE%AF%CE%B1+555+35"
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: "none", display: "block" }}
>
  <div
    style={{
      padding: "2rem",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid #DC2626", // Κόκκινο περίγραμμα εξ ορισμού
      borderRadius: "16px",
      cursor: "pointer",
      transition: "all 0.2s ease", // Ομαλή μετάβαση για το border και το background
    }}
    // Όταν το ποντίκι μπαίνει, το περίγραμμα φωτίζει και το background αλλάζει ελαφρώς
    onMouseEnter={(e) => {
      e.currentTarget.style.border = "1px solid #EF4444";
      e.currentTarget.style.background = "rgba(220, 38, 38, 0.05)"; // Ελαφρύ κόκκινο tint στο background
    }}
    // Όταν το ποντίκι βγαίνει, επιστρέφει στην αρχική κατάσταση
    onMouseLeave={(e) => {
      e.currentTarget.style.border = "1px solid #DC2626";
      e.currentTarget.style.background = "rgba(255,255,255,0.02)";
    }}
  >
    <h3 style={{ color: "#DC2626", marginBottom: "1rem" }}>
      📍 Διεύθυνση
    </h3>

    <p style={{ color: "#ccc", lineHeight: 1.8 }}>
      Τζων Κέννεντυ 12
      <br />
      Πυλαία 555 35
    </p>
  </div>
</a>

            <div
        style={{
          padding: "2rem",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px",
        }}
      >
        <h3 style={{ color: "#DC2626", marginBottom: "1rem" }}>
          🕒 Ωράριο Λειτουργίας
        </h3>

        <p style={{ color: "#ccc", lineHeight: 1.8 }}>
          Δευτέρα – Παρασκευή
          <br />
          09:00 – 18:30
          <br />
          <br />
          Σάββατο
          <br />
          09:00 – 15:30
        </p>
      </div>

          </div>
  </ScrollReveal>
</section>

      {/* ─────────── CONTACT CTA ─────────── */}
      <section id="contact" style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "6rem 2rem",
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, rgba(220,38,38,0.08) 0%, transparent 70%),
            #080808
          `,
        }} />

        {/* Decorative rings */}
        {[300, 500, 700].map((size, i) => (
          <div key={i} style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: size, height: size,
            borderRadius: "50%",
            border: `1px solid rgba(220,38,38,${0.06 - i * 0.015})`,
            pointerEvents: "none",
            animation: `ringPulse ${3 + i}s ease-in-out infinite alternate`,
          }} />
        ))}

        <div style={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              marginBottom: "1.5rem",
            }}>
              Ready to transform<br />
              <span style={{
                background: "linear-gradient(135deg, #DC2626, #EF4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>your vehicle?</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p style={{
              color: "#666",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              marginBottom: "3rem",
              maxWidth: 480,
              margin: "0 auto 3rem",
            }}>
              Κλείστε ένα ραντεβού με τους επαγγελματίες μας και δες τι μπορεί η WrapTech να κάνει για το όχημα σου.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
              <a href="mailto:hello@wraptech.com" style={{ textDecoration: "none" }}>
                <button style={{
                  background: "linear-gradient(135deg, #DC2626, #EF4444)",
                  color: "#000",
                  border: "none",
                  padding: "1.1rem 3rem",
                  borderRadius: 50,
                  fontWeight: 800,
                  fontSize: "1rem",
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  transition: "all 0.25s",
                  boxShadow: "0 0 40px rgba(220,38,38,0.3)",
                }}
                  onMouseEnter={e => { e.target.style.transform = "scale(1.05)"; e.target.style.boxShadow = "0 0 60px rgba(220,38,38,0.5)"; }}
                  onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "0 0 40px rgba(220,38,38,0.3)"; }}
                >Κλείσε ραντεβού</button>
              </a>
              <a href="tel:+30 2310 304 583" style={{ textDecoration: "none" }}>
                <button style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "1.1rem 2.5rem",
                  borderRadius: 50,
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
                  onMouseEnter={e => { e.target.style.borderColor = "#DC2626"; e.target.style.color = "#DC2626"; }}
                  onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "#fff"; }}
                >Καλέστε μας</button>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <div style={{
              display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap",
              color: "#555", fontSize: "0.8rem", letterSpacing: "0.08em",
            }}>
              {["Δωρεάν Συμβουλευτική", "Χωρίς Δέσμευση", "Απάντηση την ίδια μέρα"].map((item) => (
                <span key={item} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <span style={{ color: "#DC2626" }}>✓</span> {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}

         <footer style={{
        padding: "3rem 2rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>

       <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>
        <span style={{ color: "#DC2626" }}>W</span>rapTech
       </span>
       </div>
           
           {/* <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: "linear-gradient(135deg, #DC2626, #EF4444)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 900, color: "#000",
          }}>W</div>
          <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>WrapTech</span>
        </div> */}
        
        <div style={{ color: "#444", fontSize: "0.8rem" }}>© 2026 WrapTech. All rights reserved.</div>
        
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy", "Terms", "Instagram"].map((l) => (
            <a 
              key={l} 
              href="https://share.google/kacKTfhbmqvG6RWdi" 
              style={{ 
                fontSize: "0.8rem", 
                textDecoration: "none",
                color: "#555",
                transition: "color 0.2s"
              }}
              onMouseEnter={e => e.target.style.color = "#DC2626"}
              onMouseLeave={e => e.target.style.color = "#555"}
            >
              {l}
            </a>
          ))}
        </div> 
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        @keyframes ringPulse {
          from { opacity: 0.4; transform: translate(-50%, -50%) scale(0.98); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1.02); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #080808; }
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
        }
        @media (max-width: 900px) {
          div[style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
</div> 
  );
}
  
function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2rem",
        borderRadius: 16,
        background: hovered
          ? "rgba(220,38,38,0.06)"
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(220,38,38,0.3)" : "rgba(255,255,255,0.06)"}`,
        backdropFilter: "blur(10px)",
        transition: "all 0.35s ease",
        cursor: "default",
        transform: hovered ? "translateY(-4px)" : "none",
        height: "100%",
      }}
    >
      <div style={{
        fontSize: "2rem",
        marginBottom: "1.25rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span>{service.icon}</span>
        <span style={{
          background: "rgba(220,38,38,0.12)",
          color: "#DC2626",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "0.3rem 0.7rem",
          borderRadius: 20,
          border: "1px solid rgba(220,38,38,0.2)",
        }}>{service.tag}</span>
      </div>
      <h3 style={{
        fontSize: "1.2rem",
        fontWeight: 700,
        marginBottom: "0.75rem",
        letterSpacing: "-0.02em",
        color: hovered ? "#DC2626" : "#fff",
        transition: "color 0.3s",
      }}>{service.title}</h3>
      <p style={{ color: "#777", fontSize: "0.9rem", lineHeight: 1.6 }}>{service.desc}</p>
    </div>
  );
}

function PortfolioCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = item.tall;
  const patterns = [
    "radial-gradient(circle at 30% 70%, rgba(220,38,38,0.15) 0%, transparent 60%), linear-gradient(135deg, #111 0%, #1a1a1a 100%)",
    "radial-gradient(circle at 70% 30%, rgba(220,38,38,0.1) 0%, transparent 60%), linear-gradient(225deg, #0d0d0d 0%, #1a1a1a 100%)",
    "radial-gradient(ellipse at 50% 50%, rgba(220,38,38,0.08) 0%, transparent 70%), linear-gradient(90deg, #111 0%, #181818 100%)",
    "radial-gradient(circle at 20% 80%, rgba(220,38,38,0.12) 0%, transparent 60%), linear-gradient(180deg, #131313 0%, #0a0a0a 100%)",
    "radial-gradient(circle at 80% 20%, rgba(220,38,38,0.1) 0%, transparent 60%), linear-gradient(315deg, #0e0e0e 0%, #1c1c1c 100%)",
    "radial-gradient(ellipse at 40% 60%, rgba(220,38,38,0.08) 0%, transparent 70%), linear-gradient(45deg, #121212 0%, #1a1a1a 100%)",
  ];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 12,
        overflow: "hidden",
        background: patterns[item.id - 1],
        border: `1px solid ${hovered ? "rgba(220,38,38,0.4)" : "rgba(255,255,255,0.05)"}`,
        transition: "all 0.35s ease",
        cursor: "pointer",
        position: "relative",
        gridRow: isLarge ? "span 2" : "span 1",
        height: "100%",
        minHeight: isLarge ? 460 : 220,
        display: "flex", alignItems: "flex-end",
        transform: hovered ? "scale(1.01)" : "scale(1)",
      }}
    >
      {/* Car silhouette */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <div style={{
          fontSize: isLarge ? 80 : 60,
          opacity: hovered ? 0.25 : 0.12,
          transform: `scale(${hovered ? 1.05 : 1})`,
          transition: "all 0.35s ease",
          filter: "drop-shadow(0 0 20px rgba(220,38,38,0.3))",
        }}>🚗</div>
      </div>

      <div style={{
        position: "absolute", inset: 0,
        background: hovered
          ? "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 60%)"
          : "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 80%)",
        transition: "all 0.35s ease",
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        padding: "1.25rem",
        width: "100%",
        transform: hovered ? "translateY(0)" : "translateY(4px)",
        transition: "transform 0.35s ease",
      }}>
        <div style={{
          display: "inline-block",
          background: "rgba(220,38,38,0.15)",
          color: "#DC2626",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "0.25rem 0.6rem",
          borderRadius: 12,
          border: "1px solid rgba(220,38,38,0.25)",
          marginBottom: "0.5rem",
        }}>{item.tag}</div>
        <div style={{
          fontWeight: 600,
          fontSize: "0.95rem",
          color: "#fff",
          letterSpacing: "-0.01em",
        }}>{item.label}</div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "2rem",
        borderRadius: 16,
        background: hovered ? "rgba(220,38,38,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(220,38,38,0.2)" : "rgba(255,255,255,0.06)"}`,
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-3px)" : "none",
      }}
    >
      <div style={{
        color: "#DC2626", fontSize: "1.1rem", letterSpacing: "0.05em",
        marginBottom: "1.25rem",
      }}>{"★".repeat(testimonial.rating)}</div>
      <p style={{
        color: "#bbb", fontSize: "0.95rem", lineHeight: 1.7,
        marginBottom: "1.5rem", fontStyle: "italic",
      }}>"{testimonial.text}"</p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{
          width: 42, height: 42, borderRadius: "50%",
          background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}88)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: "0.85rem", color: "#fff",
        }}>{testimonial.initials}</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{testimonial.name}</div>
          <div style={{ color: "#555", fontSize: "0.8rem" }}>{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
