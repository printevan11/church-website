import JIL1 from '../assets/JIL-1.jpg';
import JIL2 from '../assets/JIL-2.jpg';
import JIL3 from '../assets/JIL-3.jpg';
import man1 from '../assets/man1.avif';
import girl from '../assets/girl.jpg';
import man2 from '../assets/man2.jpg';

const LEADERSHIP_TEAM = [
  {
    name: 'John Doe',
    role: 'Presiding Bishop',
    image: man1,
    note: 'Providing spiritual guidance, pastoral care, and vision for the church family.'
  },
  {
    name: 'Maria Sy',
    role: 'Regional Director',
    image: girl,
    note: 'Leading ministry alignment, discipleship direction, and regional church initiatives.'
  },
  {
    name: 'Samuel Cruz',
    role: 'CYN Coordinator',
    image: man2,
    note: 'Equipping young people to love God, serve others, and live with purpose.'
  }
];

export default function AboutChurch({ visibleSections }) {
  return (
    <section id="about-cyn" data-section className={`relative bg-white py-20 px-6 transition-all duration-700 ${
      visibleSections['about-cyn'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 mb-4">
            About the CYN
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-black tracking-tight text-neutral-900 mb-4">
              JIL Grande Prairie
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We are a vibrant community of believers dedicated to spreading the Full Gospel of the Lord Jesus Christ. Our church was established with a vision to reach the youth and inspire them to live for Christ, offering their prime years in service to God and Country.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              As part of the Jesus Is Lord (JIL) movement, we believe in raising up leaders who will make a difference in their communities and nations. We are committed to excellence in everything we do, from worship to community service.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Join us every Sunday at 9:00 AM and Wednesday at 7:00 PM for fellowship, worship, and growth in faith.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
            <img
              src={JIL1}
              alt="Church Worship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </div>

        <div id="about-lifegroup" data-section className={`mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          visibleSections['about-lifegroup'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden md:order-first">
            <img
              src={JIL2}
              alt="LifeGroup fellowship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
              DISCIPLESHIP
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900 mb-4">
              About LifeGroup
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              LifeGroup is where faith, friendship, and discipleship grow in a more personal setting. It is a place to study God's Word, pray together, and encourage one another through every season of life.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Each gathering helps people build Christ-centered relationships and become faithful disciples who can serve their family, campus, workplace, and community.
            </p>
          </div>
        </div>

        <div id="contact-person" data-section className={`mt-24 transition-all duration-700 ${
          visibleSections['contact-person'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-neutral-50 rounded-xl p-8 md:p-10 border border-neutral-100">
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
              GET CONNECTED
            </span>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight text-neutral-900 mb-4">
              Contact Person
            </h3>
            <p className="text-neutral-600 leading-relaxed max-w-3xl">
              For LifeGroup, youth, and church connection inquiries, please reach out to the assigned ministry contact person. Contact details can be updated here once the final information is available.
            </p>
          </div>
        </div>

        <div id="leadership-team" data-section className={`mt-24 transition-all duration-700 ${
          visibleSections['leadership-team'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
              SERVANT LEADERS
            </span>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-[#1b2a4a]">
              Leadership Staff
            </h3>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              Guided by faith, driven by purpose, and united in God's calling to serve the church and community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {LEADERSHIP_TEAM.map((leader) => (
              <article
                key={leader.name}
                className="group relative min-h-[430px] overflow-hidden rounded-xl bg-[#1b2a4a] shadow-lg"
              >
                <div className="absolute inset-0">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101a35] via-black/20 to-transparent" />
                </div>

                <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-end p-5">
                  <div className="border-t border-white/25 pt-4">
                    <h4 className="text-xl font-black text-white">{leader.name}</h4>
                    <p className="mt-1 text-sm font-bold text-white/90">
                      {leader.role}
                    </p>
                    <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/75">
                      {leader.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-center">
            <p className="text-sm font-semibold text-neutral-600">
              Names, photos, and official titles can be updated once the final leadership details are provided.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
