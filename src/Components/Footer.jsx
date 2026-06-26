import { MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer({ navItems }) {
  return (
    <footer id="contact-us" className="bg-white text-black pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-2">
            <div className="flex items-center gap-3.5 mb-4">
              <img src={logo} alt="Logo" className="w-40 h-40 object-contain" />
            </div>

            {/* Social Media Icons - between logo and text */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://www.facebook.com/profile.php?id=61552474822518"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden bg-neutral-100 hover:bg-[#1877f2] transition-all"
                aria-label="Facebook"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-5 h-5 object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/yan.cyn.jilgp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden bg-neutral-100 hover:bg-[#e4405f] transition-all"
                aria-label="Instagram"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-5 h-5 object-contain"
                />
              </a>
              <a
                href="https://www.tiktok.com/@cyn.yan.jilgp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden bg-neutral-100 hover:bg-black transition-all"
                aria-label="TikTok"
              >
                <img
                  src="src/assets/tiktok.webp"
                  alt="TikTok"
                  className="w-5 h-5 object-contain"
                />
              </a>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
              Fostering authentic worship, building intergenerational community, and equipping believers to walk in their kingdom identity.
            </p>
          </div>

          <div>
            <h5 className="font-extrabold text-sm uppercase tracking-wider mb-6 text-neutral-600">
              Quick Links
            </h5>
            <ul className="flex flex-col gap-3.5 text-sm text-neutral-600">
              {navItems && navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-black transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-extrabold text-sm uppercase tracking-wider mb-6 text-neutral-600">
              Connect
            </h5>
            <ul className="flex flex-col gap-3.5 text-sm text-neutral-600 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>10020 113 Avenue, Grande Prairie, AB</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>+1 (780) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>info@jilgrandeprairie.ca</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} JIL Grande Prairie. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built in community for His kingdom.</p>
        </div>
      </div>
    </footer>
  );
}