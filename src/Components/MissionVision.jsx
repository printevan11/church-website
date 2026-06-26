import logo from '../assets/logo.png';

export default function MissionVision({ visibleSections }) {
  return (
    <section id="mission" data-section className={`bg-white text-slate-900 py-20 px-4 transition-all duration-700 ${
      visibleSections['mission'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-4xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="JIL Logo" className="w-32 h-32 object-contain" tabIndex={-1} />
        </div>

        {/* Vision Section */}
        <article className="mb-20">
          <header className="text-center mb-10">
            <span className="block text-xl font-light text-slate-500 uppercase tracking-[0.2em]">Our</span>
            <h1 className="text-4xl md:text-5xl font-black text-[#1b2a4a] uppercase tracking-tighter">Vision</h1>
          </header>

          <div className="text-slate-800 leading-relaxed text-lg font-normal space-y-6">
            <p className="font-medium text-center max-w-2xl mx-auto">
              A glorious church evangelizing and discipling Filipinos and all the peoples of the world through teaching, preaching and living-out the full-Gospel of the Lord Jesus Christ.
            </p>
            <p className="text-base text-center max-w-2xl mx-auto">
              The JILCW is a channel of GOD's divine transforming power through the HOLY SPIRIT, manifested in the daily CHRIST-like lifestyle of its members.
            </p>
          </div>
        </article>

        {/* Divider */}
        <div className="flex items-center justify-center py-8">
          <div className="w-24 h-[2px] bg-[#1b2a4a]"></div>
          <div className="mx-6 text-[#1b2a4a] text-2xl">◆</div>
          <div className="w-24 h-[2px] bg-[#1b2a4a]"></div>
        </div>

        {/* Mission Section */}
        <article className="mt-20">
          <header className="text-center mb-10">
            <span className="block text-xl font-light text-slate-500 uppercase tracking-[0.2em]">Our</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1b2a4a] uppercase tracking-tighter">Mission</h2>
          </header>

          <div className="text-slate-800 leading-relaxed text-lg font-normal space-y-6">
            <p className="font-medium text-center max-w-2xl mx-auto">
              To bring all peoples to the kingdom of the living God regardless of race, status, belief and religious affiliations through the saving, healing, delivering, and transforming power of the Lord Jesus Christ.
            </p>
            <p className="text-base text-center max-w-2xl mx-auto">
              The Jesus Is Lord Church (Worldwide) exists to bring all peoples to the Kingdom of the Living GOD in obedience to the Great Commission of the LORD JESUS CHRIST.
            </p>
          </div>
        </article>

      </div>
    </section>
  );
}