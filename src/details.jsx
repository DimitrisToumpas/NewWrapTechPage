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
  <div className="min-h-screen w-full bg-white text-[#e53d3d]">

    {/* HEADER */}
    <header className="sticky top-0 z-50 bg-white border-b border-[#e53d3d]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between flex-wrap gap-3">

        <a
          href="https://new-wrap-tech-page.vercel.app"
          className="flex items-center gap-2 text-[#e53d3d] hover:opacity-70 transition"
        >
          <ArrowLeft size={16} />
          Επιστροφή
        </a>

        <div className="flex gap-2 flex-wrap">

          <button
            onClick={() => setActiveService('total-partial')}
            className="px-4 py-2 rounded-lg font-semibold bg-[#e53d3d] text-white hover:opacity-90 transition"
          >
            Wrap
          </button>

          <button
            onClick={() => setActiveService('interior')}
            className="px-4 py-2 rounded-lg font-semibold bg-[#e53d3d] text-white hover:opacity-90 transition"
          >
            Interior
          </button>

          <button
            onClick={() => setActiveService('commercial')}
            className="px-4 py-2 rounded-lg font-semibold bg-[#e53d3d] text-white hover:opacity-90 transition"
          >
            Ads
          </button>

        </div>

        <a
          href="tel:+302310304583"
          className="flex items-center gap-2 text-[#e53d3d] hover:opacity-70 transition"
        >
          <Phone size={14} />
          2310 304583
        </a>

      </div>
    </header>

    {/* HERO */}
    <section className="py-12 sm:py-16 text-center border-b border-[#e53d3d]/20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e53d3d]">

        {activeService === 'total-partial' &&
          "Ολική & Μερική Κάλυψη"}

        {activeService === 'interior' &&
          "Εσωτερικές Επενδύσεις"}

        {activeService === 'commercial' &&
          "Διαφημιστική Κάλυψη"}

      </h1>
    </section>

    {/* CONTENT */}
    <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

      {/* WRAP */}
      {activeService === 'total-partial' && (
        <section>

          <div className="flex items-center gap-2 font-semibold text-[#e53d3d]">
            <Car size={24} />
            <span>Car Wrapping</span>
          </div>

          <p className="mt-4 text-[#e53d3d]">
            Τα τελευταία χρόνια οι μεμβράνες...
          </p>

        </section>
      )}

      {/* INTERIOR */}
      {activeService === 'interior' && (
        <section>

          <div className="flex items-center gap-2 font-semibold text-[#e53d3d]">
            <Paintbrush size={24} />
            <span>Interior Restyling</span>
          </div>

          <p className="mt-4 text-[#e53d3d]">
            Αναβάθμιση εσωτερικού οχήματος...
          </p>

        </section>
      )}

      {/* FAQ */}
      <section className="space-y-4">

        <h2 className="text-2xl font-bold border-l-4 border-[#e53d3d] pl-3">
          FAQ
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-[#e53d3d]/20 rounded-lg p-4"
          >

            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left font-medium bg-[#e53d3d] text-white px-4 py-2 rounded-lg"
            >
              {faq.q}
            </button>

            {openFaq === index && (
              <p className="mt-3 text-[#e53d3d]">
                {faq.a}
              </p>
            )}

          </div>
        ))}

      </section>

    </main>

  </div>
);            href="https://new-wrap-tech-page.vercel.app"
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
                  ? 'bg-[#e53d3d] text-white'
                  : 'text-black hover:text-[#e53d3d]'
              }`}
            >
              Wrap
            </button>

            <button
              onClick={() => setActiveService('interior')}
              className={`px-3 py-1 rounded font-semibold transition ${
                activeService === 'interior'
                  ? 'bg-[#e53d3d] text-white'
                  : 'text-black hover:text-[#e53d3d]'
              }`}
            >
              Interior
            </button>

            <button
              onClick={() => setActiveService('commercial')}
              className={`px-3 py-1 rounded font-semibold transition ${
                activeService === 'commercial'
                  ? 'bg-[#e53d3d] text-white'
                  : 'text-black hover:text-[#e53d3d]'
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
          <span className="text-[#e53d3d]">
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
          <h2 className="text-RedPublic font-bold border-l-4 border-[#e53d3d] pl-3">
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
