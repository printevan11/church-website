import Event1 from '../assets/Event-1.jpg';
import Event2 from '../assets/Event-2.jpg';
import Event3 from '../assets/Event-3.jpg';

const EVENTS = [
  { img: Event1, title: "Sunday Service", subtitle: "Worship & Fellowship" },
  { img: Event2, title: "Midweek", subtitle: "Prayer & Bible Study" },
  { img: Event3, title: "Youth Night", subtitle: "Games & Discipleship" }
];

export default function EventsSection({ visibleSections }) {
  return (
    <section id="activities" data-section className={`relative bg-[#f5f5f7] py-24 px-6 transition-all duration-700 ${
      visibleSections['activities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
            LATEST HAPPENINGS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 mb-4">
            Recent Events
          </h2>
          <p className="text-xs md:text-sm font-semibold text-neutral-500 max-w-2xl mx-auto">
            Stay engaged and grow in community by joining JIL's upcoming events designed to inspire, connect, and strengthen your faith.
          </p>
        </div>

        {/* Triple card boxes representation exactly matching the look/feel of image_bac505.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {EVENTS.map((event, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-neutral-900">{event.title}</h3>
                <p className="text-sm text-neutral-500 mt-1">{event.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}