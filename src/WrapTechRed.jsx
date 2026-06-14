import { useState, useEffect, useRef, useCallback } from "react";
import logo from "./assets/WrapTechThumbnail.jpg";
import carInterior from "./assets/carIn.svg" ;
import carWrap from "./assets/WhiteWtap.svg" ;
const NAV_LINKS = ["Services", "Portfolio", "About", "Contact"];
import redCar from "./assets/red-car-wraps-31726338474095.jpg";
import audi from "./assets/audi-4.png";
import interior from "./assets/picsvg_download.svg";
import wrapInstall from  "./assets/IanWrapTech.jpg";
import wrapMotorbike from  "./assets/motorbikeWrap.jpg";

const portfolioGreek= [
"Πορτφόλιο",
"Έργα",
"Δείγματα έργων",
"Η δουλειά μας",
"Τα έργα μας",
"Το έργο μας",
"Δημιουργίες",
];

// Τα επίσημα λογότυπα σε μορφή SVG path
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/wraptech.gr?igsh=MTB6MHZpd2wxOGh4NQ==",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/Wraptech.gr",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@wraptech_gr?lang=el-GR&is_from_webapp=1&sender_device=mobile&sender_web_id=7604732021122795030",
    svg: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.62 4.2 1.23 1.4 2.97 2.2 4.83 2.42v3.78c-1.57-.15-3.09-.77-4.35-1.74-.18-.14-.35-.29-.51-.45v5.52c.02 1.77-.38 3.51-1.22 5.02-1.39 2.53-3.9 4.31-6.75 4.79-1.3.22-2.64.13-3.91-.25-2.73-.8-4.99-2.82-5.94-5.43C-.54 15.04-.32 12 1.34 9.56c1.47-2.15 3.86-3.56 6.47-3.72v3.8c-1.38.13-2.71.86-3.51 2.01-.89 1.28-1.07 2.97-.52 4.41.49 1.27 1.54 2.27 2.85 2.64 1.13.32 2.36.14 3.37-.5 1.09-.69 1.76-1.87 1.77-3.16V.02z" />
      </svg>
    ),
  },
  ];

function ResponsiveSocials({ isMobile }) {
  const mobileStyle = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginRight: "4px"
  };

  const desktopStyle = {
    position: "fixed",
    left: "15px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
  };

  return (
    <div style={isMobile ? mobileStyle : desktopStyle}>
      
<style>{`      
.social-icon-link {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  color: #fff !important;
  /* Όταν ξε-πατάς το κουμπί, επιστρέφει αργά (0.4s) */
  transition: all 0.4s ease-in-out !important;
}

/* Mobile Touch Feedback */
.social-icon-link:active {
  /* Όταν το πατάς, γίνεται ΚΟΚΚΙΝΟ ακαριαία (0 δευτερόλεπτα) για να "προλάβει" το κλικ */
  transition: none !important; 
  background: #DC2626 !important;
  color: #fff !important;
  border-color: #DC2626 !important;
  transform: scale(0.88) !important; /* Λίγο πιο βαθύ κλικ */
}

/* Desktop Hover & Active Effects */
@media (hover: hover) {
  .social-icon-link:hover {
    background: #DC2626 !important;
    border-color: #DC2626 !important;
    color: #000 !important;
    transition: all 0.2s ease !important;
  }
  .social-icon-link:active {
    background: #B91C1C !important;
    border-color: #B91C1C !important;
    color: #000 !important;
    transform: scale(0.92) !important;
  }
  .desktop-sidebar-link:hover {
    transform: translateX(5px) !important;
  }
}
`}</style>


      {SOCIAL_LINKS.map((social) => {
        const itemStyle = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          transition: "all 0.3s ease",
          width: isMobile ? "36px" : "44px",
          height: isMobile ? "36px" : "44px",
          borderRadius: "8px",
          cursor: "pointer"
        };

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={itemStyle}
            className={`social-icon-link ${!isMobile ? 'desktop-sidebar-link' : ''}`}
            title={social.name}
          >
            {social.svg}
          </a>
        );
      })}
    </div>
  );
}




const SERVICES = [
  {
    icon: carWrap,
    title: "Μεμβράνες Αλλαγής Χρώματος",
    desc: "Ολική – Μερική κάλυψη οχημάτων, Εσωτερικών επενδύσεων οχημάτων, Διαφημιστική κάλυψη οχημάτων, PPF",
    tag: "Popular",
  },
 {
    icon: carInterior,
    title: "Best Car Wrapping Services",
    desc: "Περιποίηση & Ηλεκτροστατική βαφή ζαντών.",
    tag: "Detail",
  },
  {
    icon: interior,
    title: "Εφαρμογές Κτηρίων",
    desc: "Εξειδικευμένες λύσεις μεμβρανών που συνδυάζουν κομψότητα και προστασία. Οι μεμβράνες ασφαλείας ενισχύουν τα τζάμια ενάντια σε χτυπήματα. Ενώ οι διακοσμητικές μεμβράνες ανανεώνουν ριζικά έπιπλα και συσκευές. Μια ολοκληρωμένη αναβάθμιση για κάθε χώρο.",
    tag: "Spaces",
  },
];


const STATS = [
  { value: 1200, suffix: "+", label: "Οχηματα που Εξυπηρετηθηκαν"},
  { value: 6, suffix: "+", label: "Χρονια Εμπειριας" },
  { value: 250, suffix: "+", label: "Τοποθετησεις PPF" },
  { value: 5.0, suffix: "", label: "Αξιολογηση Πελατων" },
];

const TESTIMONIALS = [
  {
    name: "Konstantinos Konstantinou",
    role: "BMW X2 U10",
    initials: "KK",
    rating: 5,
    text: "Εξαιρετικός επαγγελματίας ο Γιάννης… απίστευτη εφαρμογή του PPF… πάνω απ όλα φιλικός κ πρόθυμος να σε καθοδηγήσει κ να σου λύσει τις οποίες απορίες.συστήνω ανεπιφύλακτα wraptech!", 
    color: "#DC2626",
  },
  {
    name: "Βασίλης Λολης",
    role: "BMW E92",
    initials: "ΒΛ",
    rating: 5,
    text: "Άριστοι επαγγελματίες του είδους με διάφορα από τους υπόλοιπους εξυπηρετικοι και σε φυσιολογικές τιμές !Στο αυτοκίνητο μου έγινε ολική κάλυψη με αυτοκόλλητη μεμβράνη, τοποθετήθηκαν αντιηλιακές μεμβράνες στα τζάμπα , προστατευτική μεμβράνη στα φανάρια και έγινε ντύσιμο στα εσωτερικά πλαστικά.",
    color: "#DC2626",
  },
  {
    name: "Chrysostomos Tasios",
    role: "Opel Corsa",
    initials: "CT",
    rating: 5,
    text: "Πήγα στα παιδιά να βάλω μεμβράνες στο αυτοκίνητο μου, πέραν της απίστευτα καλής δουλειάς τους, είναι και πάρα πολύ ευχάριστοι και ευγενικοί άνθρωποι!! Πέραν αυτού ενδιαφέρονται για τα αυτοκίνητα των πελατών τους και προσφέρουν απόλυτη διαφάνεια και ενημερώνουν σε περίπτωση που βρουν κάποια υπάρχουσα ατέλεια (έγινε και στην δικιά μου περίπτωση) Χάρηκα πολύ για την γνωριμία και την συνεργασία!",
    color: "#991B1B",
  },
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    label: "Matte Black Supra",
    tag: "Wrap",
    tall: false,
    image: redCar,
  },
  {
    id: 2,
    label: "Satin PPF Porsche",
    tag: "PPF",
    tall: false,
    image: redCar,
  },
  {
    id: 3,
    label: "Chrome Delete G-Wagon",
    tag: "Wrap",
    tall: false,
    image: wrapInstall,
  },
  {
    id: 4,
    label: "Ceramic Coated R8",
    tag: "Ceramic",
    tall: true,
    image: wrapMotorbike,
  },
  {
    id: 5,
    label: "Crimson Red GT-R",
    tag: "Wrap",
    tall: false,
    image: audi,
  },
  {
    id: 6,
    label: "Full PPF McLaren 720S",
    tag: "PPF",
    tall: false,
    image: wrapInstall,
  },
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
    <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
      
      <div style={{
        fontSize: "clamp(2.5rem, 6vw, 4rem)",
        fontWeight: 800,
        letterSpacing: "-0.02em",
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        gap: "0.2rem",
        marginBottom: "0.5rem",
      }}>
        
        {/* NUMBER */}
        <span style={{
          background: "linear-gradient(135deg, #fff 0%, #DC2626 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          lineHeight: 1.2,
        }}>
          {stat.value % 1 !== 0
            ? count.toFixed(1)
            : count.toLocaleString()}
        </span>

        {/* + SYMBOL */}
        <span style={{
          color: "#DC2626",
          fontWeight: 800,
          lineHeight: 1.2,
        }}>
          {stat.suffix}
        </span>

      </div>

      <div style={{
        color: "#888",
        fontSize: "0.9rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontWeight: 500,
      }}>
        {stat.label}
      </div>
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

      const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

        return (
    <div style={{
      background: "#080808",
      color: "#fff",
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      overflowX: "hidden",
      minHeight: "100vh",
    }}>
      
      {/* Αν ΕΙΝΑΙ desktop, δείξε την κλασική μπάρα αριστερά */}
      {!isMobile && <ResponsiveSocials isMobile={false} />}

      {/* ─────────── NAV ─────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: isMobile ? "0.75rem 1rem" : "1.25rem 2rem", // Λίγο πιο μαζεμένο padding στο κινητό
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: navSolid || isMobile ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: navSolid || isMobile ? "blur(20px)" : "none",
        borderBottom: navSolid || isMobile ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
      }}>

        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>
            <span style={{ color: "#DC2626" }}>W</span>rapTech
          </span>
        </div>


        {/* Desktop Navigation Links */}
  {!isMobile && (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          onClick={() => scrollTo(link.toLowerCase())}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "0.9rem",
            fontWeight: 500,
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#DC2626")}
          onMouseLeave={(e) => (e.target.style.color = "#fff")}
        >
          {link}
        </button>
      ))}
    </div>
  )}

        {/* Δεξιά πλευρά του Nav: Social + Κουμπί Επικοινωνίας */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          
          {/* Αν ΕΙΝΑΙ κινητό, εμφάνισε τα social εδώ, ακριβώς αριστερά από την Επικοινωνία */}
          {isMobile && <ResponsiveSocials isMobile={true} />}

          <button onClick={() => scrollTo("contact")} style={{
            background: "#DC2626",
            color: "#FFFFFF",
            border: "none",
            padding: isMobile ? "0.5rem 1rem" : "0.6rem 1.4rem", // Πιο μαζεμένο κουμπί στα κινητά
            borderRadius: 40,
            fontWeight: 700,
            fontSize: isMobile ? "0.75rem" : "0.85rem",
            cursor: "pointer",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap", // Για να μην σπάει η λέξη στα δύο στο κινητό
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; e.target.style.boxShadow = "0 0 20px rgba(220,38,38,0.5)"; }}
            onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "none"; }}
          >
            Επικοινωνία
          </button>
        </div>
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
              Δεν αλλάζουμε απλώς<br />το χρώμα.
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
              Δημιουργούμε την<br />προσωπικότητα του οχήματός σου.
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
              }}>Υπηρεσίες</h2>
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
          color: "#DC2626",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>
          Our Work
        </div>

        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}>
          Η δουλειά μας 
        </h2>
      </div>
    </ScrollReveal>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gridAutoRows: "220px",
      gridAutoFlow: "dense",
      gap: "0.75rem",
    }}>
      
      {PORTFOLIO_ITEMS.map((item, i) => (
        <div
          key={item.id}
          style={{
            gridRow: item.tall ? "span 2" : "span 1",
            height: "100%",
            width: "100%",
          }}
        >
          <ScrollReveal delay={i * 0.08} direction="none" style={{ height: "100%" }}>
            <div style={{
              height: "100%",
              width: "100%",
              position: "relative"
            }}>
              <PortfolioCard item={item} />
            </div>
          </ScrollReveal>
        </div>
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
              }}>Τι λένε για εμάς</h2>
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
      
      {/* 📍 ADDRESS CARD */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=%CE%A4%CE%B6%CF%89%CE%BD+%CE%9A%CE%AD%CE%BD%CE%BD%CE%B5%CE%BD%CF%84%CF%85+12%2C+%CE%A0%CF%85%CE%BB%CE%B1%CE%AF%CE%B1+555+35"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          display: "block",
        }}
      >
        <div
          style={{
            padding: "2rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            cursor: "pointer",
            transition: "all 0.25s ease",
            transform: "translateY(0px)",
            boxShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "1px solid #EF4444";
            e.currentTarget.style.background = "rgba(220, 38, 38, 0.06)";
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow =
              "0 10px 30px rgba(220, 38, 38, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = "none";
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
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}>
              Έτοιμος να μεταμορφώσεις<br />
              <span style={{
                background: "linear-gradient(135deg, #DC2626, #EF4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>το όχημά σου;</span>
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
              <a href="mailto:info@wraptech.gr" style={{ textDecoration: "none" }}>
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

  // Έλεγχος αν το icon είναι emoji (μικρό string) ή URL από το import του SVG
  const isEmoji = typeof service.icon === 'string' && service.icon.length < 5;

  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "rgba(16, 12, 12, 0.6)",
        border: hovered ? "1px solid rgba(205,56,55,0.3)" : "1px solid rgba(205,56,55,0.1)",
        padding: "2.5rem",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        position: "relative",
      }}
    >
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}>
        {/* Εικονίδιο: Είτε Emoji είτε το SVG σου μέσω <img> */}
        <div style={{ 
          fontSize: "2rem", 
          display: "flex", 
          alignItems: "center", 
          minHeight: "40px" 
        }}>
          {isEmoji ? (
            service.icon
          ) : (
            <img 
              src={service.icon} 
              alt={service.title} 
              style={{ 
                width: "80px", 
                height: "80px", 
                objectFit: "contain",
                // Αν θες να κοκκινίζει ελαφρώς στο hover (προαιρετικό):
                filter: hovered ? "brightness(0) drop-shadow(0 0 4px rgba(205,56,55,0.8))" : "none",
                transition: "filter 0.3s"
              }} 
            />
          )}
        </div>

        {/* Το Tag της κάρτας */}
        <span style={{
          fontSize: "0.7rem",
          color: "#CD3837",
          background: "rgba(205,56,55,0.1)",
          textTransform: "uppercase",
          padding: "0.3rem 0.7rem",
          borderRadius: 20,
          border: "1px solid rgba(205,56,55,0.2)",
        }}>{service.tag}</span>
      </div>

      {/* Τίτλος */}
      <h3 style={{
        fontSize: "1.2rem",
        fontWeight: 700,
        marginBottom: "0.75rem",
        letterSpacing: "-0.02em",
        color: hovered ? "#CD3837" : "#fff",
        transition: "color 0.3s",
      }}>{service.title}</h3>

      {/* Περιγραφή */}
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
        background: patterns[(item.id - 1) % patterns.length],
        boxShadow: hovered ? "0 4px 20px rgba(220,38,38,0.15)" : "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.35s ease",
        cursor: "pointer",
        position: "relative",
        gridRow: isLarge ? "span 2" : "span 1",
        height: "100%",
        minHeight: isLarge ? 460 : 220,
        display: "flex", 
        alignItems: "flex-end",
        transform: hovered ? "scale(1.01)" : "scale(1)",
        willChange: "transform",
        boxSizing: "border-box"
      }}
    >
      {/* 1. Container Φωτογραφίας */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 1 }}>
        <img
          src={item.image}
          alt={item.label}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hovered ? 0.9 : 0.75,
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "all 0.35s ease",
          }}
        />
      </div>
      
      {/* 2. Gradient Σκότους στο κάτω μέρος */}
      <div style={{
        position: "absolute", 
        inset: 0,
        zIndex: 2, 
        background: hovered
          ? "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 60%)"
          : "linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 80%)",
        transition: "all 0.35s ease",
      }} />

      {/* 3. Container Κειμένου */}
      <div style={{
        position: "relative", 
        zIndex: 3, 
        padding: "1.25rem",
        width: "100%",
        boxSizing: "border-box",
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
          letterSpacing: "-0.01em",
          color: "#fff"
        }}>{item.label}</div>
      </div>

      {/* 4. OVERLAY ΠΕΡΙΓΡΑΜΜΑΤΟΣ */}
      {/* ΤΟ ΔΙΟΡΘΩΜΕΝΟ OVERLAY */}
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: 12,
          pointerEvents: "none", 
          boxShadow: hovered
            ? "inset 0 0 0 2px rgba(220,38,38,0.95)" // Αυξημένο πάχος και ένταση
            : "inset 0 0 0 1px rgba(255,255,255,0.2)", 
          transition: "box-shadow 0.35s ease",
          zIndex: 4, // <- ΑΛΛΑΓΗ: Από 1 το κάνεις 4 για να βγει πάνω από το μαύρο gradient
        }} />

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

/*function PortfolioTitle() {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % portfolioGreek.length);
  };

  return (
    <span
      onClick={handleClick}
      style={{
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {portfolioGreek[index]}
    </span>
  );
} */
