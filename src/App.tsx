import { useState } from 'react';

const IMAGES = {
  hero: 'https://image.qwenlm.ai/generated-images/16c79630-b296-49ac-b5ca-037223b42870/_result.png',
  entrepreneurs: 'https://image.qwenlm.ai/generated-images/a8beafd1-c37f-4e6c-8d18-ecb019f8daed/_result.png',
  webdev: 'https://image.qwenlm.ai/generated-images/9d5d9429-4d23-4c9d-a838-32cc283f0179/_result.png',
  ai: 'https://image.qwenlm.ai/generated-images/4cc39f59-6080-47d0-933f-f228ddb7778b/_result.png',
  support: 'https://image.qwenlm.ai/generated-images/b9c895d2-04f1-43e0-99bc-5be41999572a/_result.png',
};

const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Digital Skills Training',
    description: 'Computer literacy, Microsoft Office, AI, web development, and Python programming courses designed for all skill levels.',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Career Development',
    description: 'Professional CV revamping, cover letters, LinkedIn profile optimisation, and interview preparation to land your dream job.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Website Design & Development',
    description: 'Business websites, e-commerce solutions, domain registration, hosting, and WhatsApp integration for your online presence.',
  },
  {
    icon: 'fas fa-palette',
    title: 'Graphic Design & Branding',
    description: 'Logo design, business cards, flyers, and company profiles that make your brand stand out from the competition.',
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Digital Marketing',
    description: 'Social media management, content creation, Google Business Profile setup, and online advertising to grow your reach.',
  },
  {
    icon: 'fas fa-robot',
    title: 'AI Solutions',
    description: 'AI training, productivity tools, content creation, and business automation to keep you ahead in the digital age.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Business Support',
    description: 'Business plans, company profiles, funding applications, and digital transformation strategies for growth.',
  },
];

const whyChooseUs = [
  { icon: 'fas fa-hand-holding-usd', title: 'Affordable', desc: 'Quality tech solutions accessible to everyone' },
  { icon: 'fas fa-users', title: 'Community-Focused', desc: 'Built for young people, job seekers & entrepreneurs' },
  { icon: 'fas fa-award', title: 'Practical Training', desc: 'Hands-on learning with real-world applications' },
  { icon: 'fas fa-headset', title: 'Ongoing Support', desc: 'We don\'t just train — we support your journey' },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">Kasi Tech Hub</span>
                <span className="hidden sm:block text-xs text-gray-500 -mt-1">Skills That Open Doors</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Gallery</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">Get a Quote</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl text-gray-700`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Gallery</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block bg-blue-600 text-white px-5 py-2.5 rounded-lg text-center font-medium">Get a Quote</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt="Digital skills training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              <span className="text-blue-200 text-sm font-medium">Empowering Communities Through Technology</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Skills That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Open Doors</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Empowering individuals, entrepreneurs, and businesses through technology, practical training, and affordable digital solutions in Refilwe, Cullinan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/25">
                Explore Our Services
              </a>
              <a href="#contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white/10 transition-all">
                Request a Quote
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">7+</div>
                <div className="text-sm text-gray-400">Services</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Making Technology Accessible for Everyone
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Kasi Tech Hub (Pty) Ltd is a South African technology, digital skills, and business solutions company based in Refilwe, Cullinan, Gauteng.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our mission is to empower individuals, entrepreneurs, and businesses through technology, practical training, and affordable digital solutions. We aim to make technology accessible, affordable, and practical — particularly for young people, job seekers, entrepreneurs, and small businesses.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Practical Training</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Affordable Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Community Driven</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-check text-blue-600"></i>
                  </div>
                  <span className="text-gray-700 font-medium">Expert Instructors</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={IMAGES.entrepreneurs} alt="Young entrepreneurs collaborating" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-white"></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Since 2024</div>
                    <div className="text-sm text-gray-500">Empowering Communities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              From digital skills training to AI solutions, we provide everything you need to thrive in the digital economy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-gray-300 text-lg">
              We're committed to making technology work for you, not the other way around.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  <i className={`${item.icon} text-2xl text-blue-400 group-hover:text-white transition-colors`}></i>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              See What We Do
            </h2>
            <p className="text-gray-600 text-lg">
              Real moments from our training sessions, projects, and community impact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMAGES.hero} alt="Computer training" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Digital Skills Training</span>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMAGES.entrepreneurs} alt="Entrepreneurs collaborating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Entrepreneur Collaboration</span>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMAGES.webdev} alt="Web development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Website Development</span>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:col-span-2">
              <img src={IMAGES.ai} alt="AI and technology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">AI & Innovation Solutions</span>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img src={IMAGES.support} alt="IT Support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-medium">Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Digital Journey?
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Whether you need skills training, a new website, or business support — we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started Today
                </a>
                <a href="https://wa.me/27799491794" target="_blank" rel="noopener noreferrer" className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                  <i className="fab fa-whatsapp text-xl"></i>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Let's Work Together
              </h2>
              <p className="text-gray-600 text-lg mb-10">
                Ready to take the next step? Get in touch with us today and let's discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Refilwe, Cullinan, Gauteng, South Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone / WhatsApp</h4>
                    <a href="tel:0799491794" className="text-gray-600 hover:text-blue-600 transition-colors">079 949 1794</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:thabangseloane97@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">thabangseloane97@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="https://wa.me/27799491794" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
                <a href="mailto:thabangseloane97@gmail.com" className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                  <i className="fas fa-envelope text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h3>
              <p className="text-gray-600 mb-8">Fill in the form below and we'll get back to you within 24 hours.</p>

              {formSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  <p className="text-green-700 font-medium">Thank you! We'll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="079 949 1794"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="training">Digital Skills Training</option>
                    <option value="career">Career Development</option>
                    <option value="website">Website Design & Development</option>
                    <option value="graphic">Graphic Design & Branding</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="ai">AI Solutions</option>
                    <option value="business">Business Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project or what you need help with..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors hover:shadow-lg hover:shadow-blue-600/25"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold">Kasi Tech Hub</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Empowering individuals, entrepreneurs, and businesses through technology, practical training, and affordable digital solutions. Skills That Open Doors.
              </p>
              <div className="flex gap-3">
                <a href="https://wa.me/27799491794" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="mailto:thabangseloane97@gmail.com" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors">
                  <i className="fas fa-envelope"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Training</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Graphic Design</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">AI Solutions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Kasi Tech Hub (Pty) Ltd. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Refilwe, Cullinan, Gauteng, South Africa
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/27799491794"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
    </div>
  );
}
