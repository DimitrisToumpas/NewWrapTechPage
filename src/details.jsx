import React, { useState } from 'react';
import { Car, Paintbrush, ShieldCheck, ChevronRight, CheckCircle2, Phone, ArrowLeft, Sparkles, Megaphone, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function ServiceDetailsPage() {
  // Tabs: 'total-partial', 'interior', 'commercial'
  const [activeService, setActiveService] = useState('total-partial');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Πόσο διαρκεί η τοποθέτηση της μεμβράνης;",
      a: "Η διάρκεια εξαρτάται από την υπηρεσία. Για μερικές καλύψεις ή εσωτερικές επενδύσεις η εργασία ολοκληρώνεται συνήθως σε 1 εργάσιμη ημέρα. Για ολική αλλαγή χρώματος (Total Car Wrap) απαιτούνται 3 έως 5 εργάσιμες ημέρες, καθώς δίνουμε ιδιαίτερη έμφαση στη λεπτομέρεια, την αποσυναρμολόγηση των μερών και τον τελικό ποιοτικό έλεγχο."
    },
    {
      q: "Υπάρχει κίνδυνος να χαλάσει το εργοστασιακό χρώμα κατά την αφαίρεση;",
      a: "Όχι, απολύτως κανένας, εφόσον το όχημα φέρει την εργοστασιακή του βαφή. Στη WrapTech χρησιμοποιούμε αποκλειστικά premium cast μεμβράνες κορυφαίων κατασκευαστών. Όταν αποφασίσετε να την αφαιρέσετε, η μεμβράνη αποκολλάται με ασφάλεια χωρίς να αφήνει υπολείμματα κόλλας και αποκαλύπτει το αρχικό χρώμα του αυτοκινήτου σας ακριβώς στην κατάσταση που ήταν πριν την τοποθέτηση."
    },
    {
      q: "Πώς πρέπει να πλένω το όχημα μετά την εφαρμογή;",
      a: "Το όχημα μπορεί να πλυθεί κανονικά, ωστόσο συνιστάται το πλύσιμο στο χέρι με ήπιο σαμπουάν για τη μέγιστη διάρκεια ζωής του υλικού. Αν χρησιμοποιείτε πιεστικό μηχάνημα, η κάνη θα πρέπει να κρατείται σε απόσταση τουλάχιστον 30-40 εκατοστών από την επιφάνεια και ποτέ κάθετα στις ενώσεις της μεμβράνης. Αποφύγετε τα αυτόματα πλυντήρια με σκληρές βούρτσες."
    },
    {
      q: "Πόσα χρόνια διαρκεί το αποτέλεσμα και τι εγγύηση δίνετε;",
      a: "Οι premium μεμβράνες που επιλέγουμε έχουν εργοστασιακή αντοχή από 5 έως 7 έτη ενάντια στο ξεθώριασμα από τον ήλιο και το σκάσιμο. Στη WrapTech, πέρα από την εγγύηση του υλικού, σας παρέχουμε γραπτή εγγύηση σωστής τοποθέτησης, καθώς η εφαρμογή γίνεται σε απόλυτα ελεγχόμενο περιβάλλον από εξειδικευμένους τεχνικούς."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* MINI NAVIGATION / BACK BUTTON */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a 
            href="https://wraptech.gr" 
            className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Επιστροφή στην Αρχική</span>
          </a>
          
          <div className="hidden md:flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button 
              onClick={() => setActiveService('total-partial')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeService === 'total-partial' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/10' : 'text-slate-400 hover:text-white'}`}
            >
              Ολική / Μερική Κάλυψη
            </button>
            <button 
              onClick={() => setActiveService('interior')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeService === 'interior' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/10' : 'text-slate-400 hover:text-white'}`}
            >
              Εσωτερικές Επενδύσεις
            </button>
            <button 
              onClick={() => setActiveService('commercial')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${activeService === 'commercial' ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/10' : 'text-slate-400 hover:text-white'}`}
            >
              Διαφημιστική Κάλυψη
            </button>
          </div>

          <a 
            href="tel:+302310304583" 
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-850 text-cyan-400 font-bold px-4 py-2 rounded-xl text-sm border border-slate-800 transition-all"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">Καλέστε μας:</span> 2310 304583
          </a>
        </div>
      </header>

      {/* HERO TITLE BLOCK */}
      <section className="relative overflow-hidden py-16 border-b border-slate-900 bg-gradient-to-b from-slate-900/30 to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Αναλυτικές Πληροφορίες Υπηρεσιών
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            {activeService === 'total-partial' && "Ολική & Μερική Κάλυψη Οχημάτων"}
            {activeService === 'interior' && "Εσωτερικές Επενδύσεις Οχημάτων"}
            {activeService === 'commercial' && "Διαφημιστική Κάλυψη Οχημάτων"}
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* SERVICE 1: TOTAL / PARTIAL */}
            {activeService === 'total-partial' && (
              <article className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Car size={28} />
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Car Wrapping / Αλλαγή Χρώματος</span>
                </div>
                
                <p className="text-lg text-slate-300 leading-relaxed font-medium">
                  Τα τελευταία χρόνια οι μεμβράνες κερδίζουν τις εντυπώσεις αφού μπορούμε να αλλάξουμε το χρώμα ή ακόμα και την υφή του οχήματός μας εύκολα και γρήγορα με εγγυημένο αποτέλεσμα ανανέωσης χωρίς όμως να είναι κάτι μόνιμο και τετελεσμένο όπως η βαφή, με αποτέλεσμα το όχημά μας να μπορεί να επιστρέψει στην αρχική του μορφή όποτε το θελήσουμε.
                </p>
                
                <p className="text-base text-slate-400 leading-relaxed">
                  Τα είδη μεμβρανών ποικίλουν τόσο σε χρώματα όσο και σε υφές αφού υπάρχει μεγάλη γκάμα για να διαλέξει κάποιος. Στη WrapTech θα βρείτε αυτό που ψάχνετε γνωρίζοντας πως το όχημά σας βρίσκεται στα κατάλληλα χέρια αφού η ποιότητα των υλικών, η κατάρτισή μας στο αντικείμενο αλλά και το σωστό περιβάλλον συντάσσουν την επιτυχία του αποτελέσματος και την ευχαρίστηση του πελάτη τα οποία είναι και οι κύριοι στόχοι μας.
                </p>

                <div className="pt-6 border-t border-slate-900 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-900">
                    <h5 className="font-bold text-white mb-1 text-sm">100% Αναστρέψιμο</h5>
                    <p className="text-xs text-slate-400">Αφαίρεση ανά πάσα στιγμή χωρίς καμία ζημιά στο εργοστασιακό χρώμα.</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-900">
                    <h5 className="font-bold text-white mb-1 text-sm">Απεριόριστες Επιλογές</h5>
                    <p className="text-xs text-slate-400">Gloss, Matte, Satin, Metallic και ειδικές υφές (carbon, brushed).</p>
                  </div>
                </div>
              </article>
            )}

            {/* SERVICE 2: INTERIOR */}
            {activeService === 'interior' && (
              <article className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 text-cyan-400">
                  <Paintbrush size={28} />
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-400">Interior Restyling / Καμπίνα</span>
                </div>
                
                <p className="text-lg text-slate-300 leading-relaxed font-medium">
                  Με το πέρασμα του χρόνου τα εσωτερικά μέρη των οχημάτων υφίστανται φθορές είτε λόγω των θερμοκρασιών είτε λόγω ατυχημάτων όπως οι γρατζουνιές, τα χτυπήματα κλπ. Για την κάλυψη των εσωτερικών μερών των οχημάτων λοιπόν μπορεί να χρησιμοποιηθεί μεγάλη γκάμα μεμβρανών διαφορετικών αποχρώσεων και υφών οι οποίες μπορούν να καλύψουν τις υπάρχουσες ατέλειες του εσωτερικού του οχήματός σας είτε απλά να ανανεώσουν το στυλ της καμπίνας σας.
                </p>
                
                <p className="text-base text-slate-400 leading-relaxed">
                  Στη WrapTech λοιπόν μπορείτε να βρείτε μία μεγάλη γκάμα χρωμάτων και υφών που σε συνδυασμό με την καθοδήγηση, την τεχνογνωσία αλλά και την κατάρτισή μας στο αντικείμενο θα σας αφήσουν απόλυτα ικανοποιημένους με το αποτέλεσμα.
                </p>

                <div className="pt-6 border-t border-slate-900 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-900">
                    <h5 className="font-bold text-white mb-1 text-sm">Κάλυψη Ατελειών</h5>
                    <p className="text-xs text-slate-400">Εξαφάνιση ξεθωριασμένων πλαστικών, Chrome Delete εσωτερικού & γρατζουνιών.</p>
            
