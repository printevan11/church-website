import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactSection({ visibleSections, formData, setFormData, formSent, handleContactFormSubmit }) {
  const { nameInput, emailInput, messageInput } = formData;

  return (
    <section id="contact-us" data-section className={`relative bg-neutral-50 py-24 px-6 transition-all duration-700 ${
      visibleSections['contact-us'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-neutral-400 mb-3 block">
            REACH OUT
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Contact Us
          </h2>
          <p className="text-neutral-500 mt-4 max-w-xl mx-auto">
            We would be honored to hear from you. Whether you have a question or simply wish to connect, please feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-[#1b2a4a]" />
            <p className="font-bold text-neutral-900 text-center mb-2">Visit Us</p>
            <p className="text-neutral-500 text-sm text-center">
              10020 113 Avenue<br />
              Grande Prairie, AB<br />
              Canada T8V 7B3
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Phone className="w-10 h-10 mx-auto mb-4 text-[#1b2a4a]" />
            <p className="font-bold text-neutral-900 text-center mb-2">Call Us</p>
            <p className="text-neutral-500 text-sm text-center">
              +1 (780) 123-4567<br />
              Mon - Fri: 9AM - 5PM
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <Mail className="w-10 h-10 mx-auto mb-4 text-[#1b2a4a]" />
            <p className="font-bold text-neutral-900 text-center mb-2">Email Us</p>
            <p className="text-neutral-500 text-sm text-center">
              info@jilgrandeprairie.ca<br />
              We reply within 24 hours
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-black text-neutral-900 mb-2">Send a Message</h3>
              <p className="text-neutral-500 text-sm mb-6">Please fill out the form below and we will respond to you shortly.</p>
              {formSent && (
                <div className="bg-green-50 text-green-800 text-sm p-4 rounded-lg font-medium border border-green-100 mb-4">
                  Thank you! Your message has been sent successfully. We will be in touch soon.
                </div>
              )}
              {formSent ? null : (
                <form onSubmit={handleContactFormSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Full Name</label>
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setFormData('nameInput', e.target.value)}
                      placeholder="John Doe"
                      required
                      className="w-full border border-neutral-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#1b2a4a] bg-neutral-50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setFormData('emailInput', e.target.value)}
                      placeholder="john@example.com"
                      required
                      className="w-full border border-neutral-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#1b2a4a] bg-neutral-50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Message</label>
                    <textarea
                      value={messageInput}
                      onChange={(e) => setFormData('messageInput', e.target.value)}
                      placeholder="How may we assist you?"
                      rows="4"
                      required
                      className="w-full border border-neutral-200 rounded-md p-3 text-sm focus:outline-none focus:border-[#1b2a4a] bg-neutral-50 resize-none"
                    />
                  </div>
                  <button type="submit" className="bg-[#1b2a4a] text-white text-sm font-bold uppercase tracking-wider py-3.5 rounded-md hover:bg-[#2a4070] transition-colors mt-2">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div className="hidden md:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4300!2d-118.8028!3d55.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1d-118.8028!2d55.1699!4f13.1!5e0!3m2!1sen!2sca!4v0!3m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
