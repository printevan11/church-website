import { BookOpen } from 'lucide-react';

const SCHOOLS = [
  { name: 'School Ministry 1', detail: 'Details from Kuya Sam to be added.' },
  { name: 'School Ministry 2', detail: 'Details from Kuya Sam to be added.' }
];

export default function SchoolMinistry({ visibleSections }) {
  return (
    <section id="school-ministry" data-section className={`relative bg-white py-24 px-6 transition-all duration-700 ${
      visibleSections['school-ministry'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
            CAMPUS OUTREACH
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900">
            School Ministry
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SCHOOLS.map((school) => (
            <article key={school.name} className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
              <BookOpen className="w-10 h-10 text-[#1b2a4a] mb-5" />
              <h3 className="text-xl font-black text-neutral-900 mb-3">{school.name}</h3>
              <p className="text-neutral-600 leading-relaxed">{school.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
