import JIL1 from '../assets/JIL-1.jpg';

export default function AboutChurch({ visibleSections }) {
  return (
    <section id="about-church" data-section className={`relative bg-white py-20 px-6 transition-all duration-700 ${
      visibleSections['about-church'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
            WHO WE ARE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 mb-4">
            About the Church
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
      </div>
    </section>
  );
}