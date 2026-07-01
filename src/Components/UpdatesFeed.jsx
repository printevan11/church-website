import { Heart, MessageCircle, Share2 } from 'lucide-react';
import JIL4 from '../assets/JIL-4.jpg';
import JIL5 from '../assets/JIL-5.jpg';
import JIL6 from '../assets/JIL-6.jpg';

const POSTS = [
  {
    image: JIL4,
    title: 'Sunday Worship Highlight',
    date: 'Latest update',
    body: 'A quick look at our recent worship and fellowship moments with the CYN family.'
  },
  {
    image: JIL5,
    title: 'LifeGroup Gathering',
    date: 'Community post',
    body: 'Encouraging one another through prayer, discipleship, and meaningful conversations.'
  },
  {
    image: JIL6,
    title: 'Youth Fellowship',
    date: 'Ministry update',
    body: 'Building friendships and growing together in faith through youth-centered activities.'
  }
];

export default function UpdatesFeed({ visibleSections }) {
  return (
    <section id="updates" data-section className={`relative bg-[#f5f5f7] py-24 px-6 transition-all duration-700 ${
      visibleSections['updates'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
            TIMELINE
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900 mb-4">
            Our Life Group
          </h2>
          <p className="text-sm font-semibold text-neutral-500 max-w-2xl mx-auto">
            A feed-style space for announcements, recaps, and community posts.
          </p>
        </div>

        <div className="space-y-6">
          {POSTS.map((post) => (
            <article key={post.title} className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
              <div className="p-5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#1b2a4a] text-white flex items-center justify-center text-sm font-black">
                  CYN
                </div>
                <div>
                  <h3 className="font-black text-neutral-900 leading-tight">{post.title}</h3>
                  <p className="text-xs font-semibold text-neutral-400">{post.date}</p>
                </div>
              </div>
              <p className="px-5 pb-4 text-sm text-neutral-600 leading-relaxed">
                {post.body}
              </p>
              <div className="aspect-video overflow-hidden bg-neutral-100">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-3 border-t border-neutral-100">
                {[
                  { label: 'Like', icon: Heart },
                  { label: 'Comment', icon: MessageCircle },
                  { label: 'Share', icon: Share2 }
                ].map(({ label, icon: Icon }) => (
                  <button key={label} className="flex items-center justify-center gap-2 py-3 text-xs font-bold text-neutral-500 hover:bg-neutral-50">
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
