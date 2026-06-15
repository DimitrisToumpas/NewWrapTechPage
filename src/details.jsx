import React, { useState } from 'react';
import { Car, Paintbrush, Phone, ArrowLeft } from 'lucide-react';
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
    <div className="service-text-red">
      
      {/* HEADER */}
<header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          <a
            href="https://new-wrap-tech-page.vercel.app"
            className="flex items-center gap-2 text-black hover:text-RedPublic transition"
          >
            <ArrowLeft size={16} />
            Επιστροφή
          </a>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveService('total-partial')}
              className={`px-3 py-1 rounded font-semibold transition ${
                activeService === 'total-partial'
                  ? 'bg-[#2596be] text-white'
                  : 'text-black hover:text-[#2596be]'
              }`}
            >
              Wrap
            </button>

            <button
              onClick={() => setActiveService('interior')}
              className={`px-3 py-1 rounded font-semibold transition ${
                activeService === 'interior'
                  ? 'bg-[#2596be] text-white'
                  : 'text-black hover:text-[#2596be]'
              }`}
            >
              Interior
            </button>

            <button
              onClick={() => setActiveService('commercial')}
              className={`px-3 py-1 rounded font-semibold transition ${
                activeService === 'commercial'
                  ? 'bg-[#2596be] text-white'
                  : 'text-black hover:text-[#2596be]'
              }`}
            >
              Ads
            </button>
          </div>

          <a
            href="tel:+302310304583"
            className="flex items-center gap-2 text-black hover:text-[#e53d3d]"
          >
            <Phone size={14} />
            2310 304583
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="py-16 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold">
          <span className="text-[#2596be]">
            {activeService === 'total-partial' && "Ολική & Μερική Κάλυψη"}
            {activeService === 'interior' && "Εσωτερικές Επενδύσεις"}
            {activeService === 'commercial' && "Διαφημιστική Κάλυψη"}
          </span>
        </h1>
      </section>

      {/* CONTENT */}
      <main className="max-w-5xl mx-auto p-6 space-y-12">

        {/* WRAP */}
        {activeService === 'total-partial' && (
          <section>
            <div className="flex items-center gap-2 text-[#e53d3d] font-semibold">
              <Car size={24} />
              <span>Car Wrapping</span>
            </div>

            <p className="mt-4 text-gray-800">
              Τα τελευταία χρόνια οι μεμβράνες...
            </p>
          </section>
        )}

        {/* INTERIOR */}
        {activeService === 'interior' && (
          <section>
            <div className="flex items-center gap-2 text-[#e53d3d] font-semibold">
              <Paintbrush size={24} />
              <span>Interior Restyling</span>
            </div>

            <p className="mt-4 text-gray-800">
              Αναβάθμιση εσωτερικού οχήματος...
            </p>
          </section>
        )}

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold border-l-4 border-[#e53d3d] pl-3">
            FAQ
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded p-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left font-medium hover:text-[#e53d3d]"
              >
                {faq.q}
              </button>

              {openFaq === index && (
                <p className="mt-2 text-gray-700">
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
