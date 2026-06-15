import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Car, Paintbrush, Megaphone , Home , Phone, ArrowLeft, Shield, Sparkles, Clock, CheckCircle2, ChevronDown, MessageSquare } from 'lucide-react';


export default function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const [activeService, setActiveService] = useState(serviceId || 'total-partial');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Πόσο διαρκεί η τοποθέτηση της μεμβράνης;",
      a: "Η διάρκεια εξαρτάται από το μέγεθος του οχήματος και την υπηρεσία. Συνήθως μια ολική κάλυψη απαιτεί 3-5 εργάσιμες ημέρες για να διασφαλιστεί η τέλεια εφαρμογή και το στέγνωμα."
    },
    {
      q: "Υπάρχει κίνδυνος να χαλάσει το εργοστασιακό χρώμα;",
      a: "Όχι, αντιθέτως η μεμβράνη προστατεύει το εργοστασιακό χρώμα από γρατζουνιές, UV ακτινοβολία και χτυπήματα από πέτρες. Όταν αφαιρεθεί, το χρώμα θα είναι όπως την ημέρα που τοποθετήθηκε."
    },
    {
      q: "Πώς συντηρείται ένα όχημα με wrap;",
      a: "Συνιστάται πλύσιμο στο χέρι ή με πιεστικό (σε απόσταση) και χρήση ειδικών προϊόντων φροντίδας για μεμβράνες. Αποφύγετε τα αυτόματα βουρτσάκια."
    }
  ];

  // Δεδομένα ανάλογα με την επιλεγμένη υπηρεσία
  const serviceContent = {
    'total-partial': {
      title: "Ολικη & Μερικη Καλυψη",
      subtitle: "TOTAL & PARTIAL CAR WRAPPING",
      description: "Αλλάξτε πλήρως ή μερικώς την εμφάνιση του οχήματός σας με τις κορυφαίες μεμβράνες της αγοράς. Επιλέξτε ανάμεσα σε gloss, matte, satin, chrome ή color-shifting αποχρώσεις και δώστε μοναδικό χαρακτήρα στο αυτοκίνητό σας, προστατεύοντας παράλληλα την εργοστασιακή του βαφή.",
      icon: <Car className="text-[#e53d3d]" size={32} />,
      features: [
        { title: "Προστασία Βαφής", desc: "Θωράκιση από πετραδάκια, γρατζουνιές και καιρικές συνθήκες." },
        { title: "100% Αναστρέψιμο", desc: "Αφαίρεση ανά πάσα στιγμή χωρίς κανένα ίχνος ή ζημιά στο χρώμα." },
        { title: "Premium Φινίρισμα", desc: "Αποτέλεσμα που μπερδεύεται εύκολα με ακριβή εργοστασιακή βαφή." },
        { title: "Εγγυημένη Διάρκεια", desc: "Υλικά κορυφαίας ποιότητας με αντοχή στο χρόνο και τον ήλιο." }
      ],
      steps: [
        { num: "01", title: "Καθαρισμός & Απολύμανση", desc: "Λεπτομερές πλύσιμο και απολίπανση της επιφάνειας για μέγιστη πρόσφυση." },
        { num: "02", title: "Αποσυναρμολόγηση", desc: "Αφαίρεση φαναριών, χειρολαβών και σημάτων για εργοστασιακό τελείωμα στις άκρες." },
        { num: "03", title: "Τοποθέτηση Μεμβράνης", desc: "Εξειδικευμένη εφαρμογή με προσοχή στις καμπύλες και τις λεπτομέρειες." },
        { num: "04", title: "Ποιοτικός Έλεγχος", desc: "Θερμική σταθεροποίηση και έλεγχος όλων των ακρών πριν την παράδοση." }
      ]
    },
    'interior': {
      title: "Εσωτερικες Επενδυσεις",
      subtitle: "INTERIOR RESTYLING & PROTECTION",
      description: "Αναβαθμίστε την καμπίνα του οχήματός σας αντικαθιστώντας τις φθαρμένες ή βαρετές επιφάνειες. Χρησιμοποιούμε εξειδικευμένες premium μεμβράνες με υφές όπως Carbon Fiber, Brushed Aluminum, Piano Black ή Wood Grain για ένα απόλυτα custom εσωτερικό.",
      icon: <Paintbrush className="text-[#e53d3d]" size={32} />,
      features: [
        { title: "Αισθητική Αναβάθμιση", desc: "Κάλυψη των φθαρμένων πλαστικών ή των standard εργοστασιακών trims." },
        { title: "Υφές Υψηλής Πιστότητας", desc: "Ρεαλιστική αίσθηση στην αφή (π.χ. ανάγλυφο carbon ή ματ μέταλλο)." },
        { title: "Προστασία Anti-Scratch", desc: "Ιδανικό για την προστασία ευαίσθητων επιφανειών όπως το Piano Black." },
        { title: "Custom Λεπτομέρειες", desc: "Εφαρμογή σε κονσόλα, ταμπλό, πόρτες και οποιοδήποτε σταθερό low-wear τμήμα." }
      ],
         steps: [
        { num: "01", title: "Ανάλυση & Σχεδιασμός", desc: "Επιλογή της κατάλληλης υφής που δένει με το σαλόνι του αυτοκινήτου." },
        { num: "02", title: "Προετοιμασία Surfaces", desc: "Σχολαστικός καθαρισμός θυλάκων και γωνιών από σκόνη και σιλικόνες." },
        { num: "03", title: "Micro-Wrapping", desc: "Εφαρμογή ακριβείας με ειδικά εργαλεία για άψογα κοψίματα χωρίς κενά." },
        { num: "04", title: "Συναρμολόγηση", desc: "Επανατοποθέτηση των trims και τελικός έλεγχος λειτουργικότητας των κουμπιών." }
      ]
    },
      'ktirio': {
      title: "Ασφαλειας κτηριων & Διακοσμησης επιπλων η συσκευων",
      subtitle: "BUILDING PROTECTION & FERNITURE RESTYLING",
      description: "Οι μεμβράνες ασφαλείας ενισχύουν τα τζάμια, προσφέροντας προστασία από χτυπήματα και συγκρατώντας τα θραύσματα σε περίπτωση θραύσης. Παράλληλα, οι διακοσμητικές μεμβράνες δίνουν νέα αισθητική σε έπιπλα και συσκευές, με μεγάλη ποικιλία χρωμάτων, σχεδίων και υφών. Αποτελούν μια πρακτική και οικονομική λύση ανανέωσης χώρων χωρίς αντικατάσταση εξοπλισμού. Συνδυάζουν ασφάλεια, αντοχή και σύγχρονο σχεδιασμό για κάθε επαγγελματικό ή οικιακό περιβάλλον."
      ,
      icon: <Home className="text-[#e53d3d]" size={32} />,
     features: [
    {title: "Ενισχυμένη Προστασία", desc: "Οι μεμβράνες ασφαλείας ενισχύουν τα τζάμια και αυξάνουν την αντοχή τους σε χτυπήματα."},
    {title: "Συγκράτηση Θραυσμάτων",desc: "Σε περίπτωση θραύσης, τα κομμάτια του γυαλιού παραμένουν συγκρατημένα για μεγαλύτερη ασφάλεια."},
    {title: "Αισθητική Ανανέωση",desc: "Μεγάλη ποικιλία χρωμάτων, σχεδίων και υφών για αναβάθμιση επίπλων και συσκευών."},
    {title: "Οικονομική Λύση",desc: "Ανανεώστε τον χώρο σας χωρίς την ανάγκη αντικατάστασης επίπλων ή εξοπλισμού."}
      ],
     steps: [
  {num: "01",title: "Μελέτη Χώρου", desc: "Αξιολόγηση των επιφανειών και επιλογή της κατάλληλης μεμβράνης σύμφωνα με τις ανάγκες ασφάλειας ή διακόσμησης."},
  {num: "02",title: "Προετοιμασία Επιφανειών", desc: "Σχολαστικός καθαρισμός των τζαμιών, επίπλων ή συσκευών για άριστη πρόσφυση της μεμβράνης."},
  {num: "03",title: "Εφαρμογή Μεμβράνης", desc: "Τοποθέτηση με εξειδικευμένες τεχνικές για άψογο φινίρισμα χωρίς φυσαλίδες ή ατέλειες."},
  {num: "04",title: "Τελικός Έλεγχος", desc: "Έλεγχος της εφαρμογής και των λεπτομερειών για μέγιστη αντοχή, αισθητική και λειτουργικότητα."}
]
    },
    '': {
      title: "Διαφημιστικη Καλυψη",
      subtitle: "COMMERCIAL VEHICLE BRANDING",
      description: "Μετατρέψτε τον εταιρικό σας στόλο στο πιο αποτελεσματικό, κινούμενο μέσο διαφήμισης. Από απλά cut-out γράμματα και λογότυπα μέχρι πλήρη ψηφιακή εκτύπωση (full wrap), σχεδιάζουμε και εφαρμόζουμε λύσεις που θα απογειώσουν την αναγνωρισιμότητα της επιχείρησής σας.",
      icon: <Megaphone className="text-[#e53d3d]" size={32} />,
      features: [
        { title: "Κινούμενη Διαφήμιση", desc: "Χιλιάδες ιμπρέσιονς καθημερινά στους δρόμους με ένα fixed εφάπαξ κόστος." },
        { title: "Εταιρική Ταυτότητα", desc: "Απόλυτη χρωματική πιστότητα με τα λογότυπα και το brand σας." },
        { title: "Στόλος On-Model", desc: "Ομοιομορφία σε όλα τα οχήματα της εταιρείας, ανεξαρτήτως μεγέθους." },
        { title: "Υψηλή Αντοχή", desc: "Cast μεμβράνες εκτύπωσης με extra πλαστικοποίηση UV για προστασία από τον ήλιο." }
      ],
      steps: [
        { num: "01", title: "Μελέτη & Διάσταση", desc: "Ακριβής μέτρηση του οχήματος και δημιουργία 3D blueprint (πατρόν)." },
        { num: "02", title: "Μακέτα & Σχεδιασμός", desc: "Προσαρμογή του δημιουργικού σας πάνω στις γραμμές του συγκεκριμένου οχήματος." },
        { num: "03", title: "Εκτύπωση & Lamination", desc: "Παραγωγή σε high-end εκτυπωτές και τοποθέτηση ματ ή γυαλιστερής προστασίας." },
        { num: "04", title: "Εγκατάσταση", desc: "Τοποθέτηση από το έμπειρο προσωπικό μας για ομοιόμορφο και ευθυγραμμισμένο αποτέλεσμα." }
      ]
    }
  };

  const current = serviceContent[activeService];

 return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-gray-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">

          {/* BACK */}
          <a
            href="https://new-wrap-tech-page.vercel.app"
            className="flex items-center text-gray-400 hover:text-[#e53d3d]"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline ml-2 text-sm uppercase">
              Επιστροφη
            </span>
          </a>

   <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">

  <button
    onClick={() => setActiveService('total-partial')}
    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
      activeService === 'total-partial'
        ? 'bg-[#e53d3d] text-white shadow-lg shadow-[#e53d3d]/20'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    Wrap
  </button>

  <button
    onClick={() => setActiveService('interior')}
    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
      activeService === 'interior'
        ? 'bg-[#e53d3d] text-white shadow-lg shadow-[#e53d3d]/20'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    Interior
  </button>

  <button
    onClick={() => setActiveService('commercial')}
    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
      activeService === ''
        ? 'bg-[#e53d3d] text-white shadow-lg shadow-[#e53d3d]/20'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    Ads
  </button>

  <button
    onClick={() => setActiveService('ktirio')}
    className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
      activeService === 'ktirio'
        ? 'bg-[#e53d3d] text-white shadow-lg shadow-[#e53d3d]/20'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    Safety & Decor
  </button>

</div>

          {/* PHONE */}
          <a
            href="tel:+302310304583"
            className="flex items-center gap-1 sm:gap-2 text-[#e53d3d]"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">2310 304583</span>
          </a>

        </div>
      </header>

      {/* HERO SECTION WITH CINEMATIC OVERLAY */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b border-white/5 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,61,61,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6">
          <span className="text-[#e53d3d] text-xs font-bold tracking-[0.3em] uppercase block">{current.subtitle}</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
            {current.title}
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed pt-2">
            {current.description}
          </p>
          
          {/* 
          <div className="flex justify-center gap-4 pt-6">
            <a href="tel:+302310304583" className="px-6 py-3 bg-[#e53d3d] hover:bg-[#c42f2f] text-white font-bold rounded-xl transition shadow-lg shadow-[#e53d3d]/20 text-sm tracking-wider uppercase">
              Ζητηστε Προσφορα
            </a> 
          </div>
          */}
          
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* SECTION 1: BENEFITS (GLASS CARDS) */}
        <section className="space-y-10">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase flex items-center justify-center md:justify-start gap-3">
              {current.icon}
              Πλεονεκτηματα Υπηρεσιας
            </h2>
            <p className="text-gray-500 text-sm">Γιατί να επιλέξετε τη συγκεκριμένη premium επεξεργασία.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {current.features.map((feat, idx) => (
              <div 
                key={idx} 
                className="bg-white/[0.02] backdrop-blur-md border border-white/5 hover:border-[#e53d3d]/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e53d3d]/10 flex items-center justify-center mb-4 group-hover:bg-[#e53d3d] transition-colors duration-300">
                  <CheckCircle2 className="text-[#e53d3d] group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: TIMELINE / PROCESS */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              Η Διαδικασια Μας
            </h2>
            <p className="text-gray-500 text-sm">Πώς φτάνουμε στο απόλυτο, εργοστασιακό αποτέλεσμα βήμα-βήμα.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {current.steps.map((step, idx) => (
              <div key={idx} className="relative space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-4xl md:text-5xl font-black text-white/5 block font-mono">{step.num}</span>
                  {idx < 3 && <div className="hidden lg:block absolute top-6 left-[calc(25%_+_2rem)] right-8 h-[1px] bg-gradient-to-r from-[#e53d3d]/40 to-transparent z-0" />}
                </div>
                <h3 className="text-lg font-bold text-white relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FAQ ACCORDION (GLASS EFFECT) */}
        <section className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
              Συχνες Ερωτησεις
            </h2>
            <p className="text-gray-500 text-sm">Λύστε κάθε σας απορία σχετικά με τις μεμβράνες.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden transition-colors duration-300 hover:bg-white/[0.04]"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 text-white focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base tracking-wide pr-4">{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      className={`text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#e53d3d]' : ''}`} 
                    />
                  </button>

                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-40 border-t border-white/5' : 'max-h-0'
                    }`}
                  >
                    <p className="p-5 sm:p-6 text-gray-400 text-sm leading-relaxed bg-black/20">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: BIG CALL TO ACTION */}
        <section className="relative rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-r from-[#111] via-[#1a0b0b] to-[#111] text-center py-16 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,61,61,0.12)_0%,transparent_60%)]" />
          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Ετοιμοι να μεταμορφωσετε το οχημα σας;
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Ελάτε σε επαφή μαζί μας σήμερα για μια δωρεάν μελέτη κοστολόγησης προσαρμοσμένη στις δικές σας ανάγκες.
            </p>
            <div className="pt-4">
              <a
                href="tel:+302310304583"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#e53d3d] hover:bg-[#c42f2f] text-white font-extrabold rounded-2xl transition-all duration-300 shadow-xl shadow-[#e53d3d]/30 text-base tracking-wider uppercase hover:scale-[1.02]"
              >
                <Phone size={18} />
                Ζητηστε Δωρεαν Προσφορα
              </a>
            </div>
          </div>
        </section>

      </main>

<footer className="border-t border-white/5 py-6">
  <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs text-gray-600">

    {/* LEFT */}
    <div>
      &copy; {new Date().getFullYear()} Wrap Tech. All rights reserved.
    </div>

    {/* RIGHT */}
    <a
      href="tel:+302310304583"
      className="text-[#e53d3d] hover:text-white transition font-semibold"
    >
      Tηλ: 2310 304583
    </a>

  </div>
</footer>
    </div>
  );
}
