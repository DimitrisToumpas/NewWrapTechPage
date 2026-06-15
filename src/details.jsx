import React, { useState } from 'react';
import {
  Car,
  Paintbrush,
  Phone,
  ArrowLeft
} from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function ServiceDetailsPage() {
  const { serviceId } = useParams();

  const [activeService, setActiveService] = useState(
    serviceId || 'total-partial'
  );

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Πόσο διαρκεί η τοποθέτηση της μεμβράνης;",
      a: "Η διάρκεια εξαρτάται από την υπηρεσία..."
    },
    {
      q: "Υπάρχει κίνδυνος να χαλάσει το χρώμα;",
      a: "Όχι, εφόσον είναι εργοστασιακή βαφή..."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          <a
            href="https://new-wrap-tech-page.vercel.app"
            className="flex items-center gap-2 text-slate-400"
          >
            <ArrowLeft size={16} />
            Επιστροφή
          </a>

          <div className="flex gap-2">
            <button onClick={() => setActiveService('total-partial')}>
              Wrap
            </button>
            <button onClick={() => setActiveService('interior')}>
              Interior
            </button>
            <button onClick={() => setActiveService('commercial')}>
              Ads
            </button>
          </div>

          <a href="tel:+302310304583" className="flex items-center gap-2">
            <Phone size={14} />
            2310 304583
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16 text-center border-b border-slate-900">
        <h1 className="text-4xl font-bold">
          {activeService === 'total-partial' && "Ολική & Μερική Κάλυψη"}
          {activeService === 'interior' && "Εσωτερικές Επενδύσεις"}
          {activeService === 'commercial' && "Διαφημιστική Κάλυψη"}
        </h1>
      </section>

      {/* CONTENT */}
      <main className="max-w-5xl mx-auto p-6 space-y-12">

        {/* WRAP */}
        {activeService === 'total-partial' && (
          <section>
            <div className="flex items-center gap-2 text-cyan-400">
              <Car size={24} />
              <span>Car Wrapping</span>
            </div>

            <p className="mt-4 text-slate-300">
              Τα τελευταία χρόνια οι μεμβράνες...
            </p>
          </section>
        )}

        {/* INTERIOR */}
        {activeService === 'interior' && (
          <section>
            <div className="flex items-center gap-2 text-cyan-400">
              <Paintbrush size={24} />
              <span>Interior Restyling</span>
            </div>

            <p className="mt-4 text-slate-300">
              Αναβάθμιση εσωτερικού οχήματος...
            </p>
          </section>
        )}

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">FAQ</h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-800 p-4 rounded"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left"
              >
                {faq.q}
              </button>

              {openFaq === index && (
                <p className="mt-2 text-slate-400">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}    
