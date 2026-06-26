const GALLERY_IMAGES = [
  'src/assets/JIL-1.jpg',
  'src/assets/JIL-2.jpg',
  'src/assets/JIL-3.jpg',
  'src/assets/JIL-4.jpg',
  'src/assets/JIL-5.jpg',
  'src/assets/JIL-6.jpg',
  'src/assets/JIL-7.jpg',
  'src/assets/JIL-8.jpg',
  'src/assets/JIL-9.jpg',
];

export default function GallerySection({ visibleSections, onImageClick }) {
  return (
    <section id="gallery" data-section className={`relative bg-white py-20 px-6 transition-all duration-700 ${
      visibleSections['gallery'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="block text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3">
            Our
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-900">
            Gallery
          </h2>
        </div>

        {/* Masonry Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, idx) => {
              const sizes = [
                'aspect-[3/4]', // tall portrait
                'aspect-video',  // wide landscape
                'aspect-square',  // square
                'aspect-[4/3]',  // standard
                'aspect-[3/5]',  // very tall
                'aspect-[16/9]', // ultrawide
              ];
              const size = sizes[idx % sizes.length];
              return (
                <div
                  key={idx}
                  className={`${size} rounded-xl overflow-hidden shadow-md group cursor-pointer break-inside-avoid`}
                  onClick={() => onImageClick(idx)}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}