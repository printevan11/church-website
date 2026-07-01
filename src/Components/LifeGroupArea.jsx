import { MapPin, Users } from 'lucide-react';

const AREAS = [
  'Grande Prairie',
  'Family LifeGroup',
  'Youth LifeGroup',
  'Online Connection'
];

export default function LifeGroupArea({ visibleSections }) {
  return (
    <section id="lifegroup-area" data-section className={`relative bg-[#1b2a4a] text-white py-24 px-6 transition-all duration-700 ${
      visibleSections['lifegroup-area'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-white/50 mb-3 block">
            FIND YOUR GROUP
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            LifeGroup Area
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Connect with a LifeGroup near you and grow with people who can walk with you in faith.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AREAS.map((area) => (
            <article key={area} className="rounded-xl border border-white/15 bg-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-white/70" />
                <h3 className="font-black">{area}</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Schedule and leader details to be updated.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contact-us" className="inline-flex items-center gap-2 bg-white text-[#1b2a4a] text-sm font-black uppercase tracking-wider px-6 py-3 rounded-md">
            <Users className="w-4 h-4" />
            Join a LifeGroup
          </a>
        </div>
      </div>
    </section>
  );
}
