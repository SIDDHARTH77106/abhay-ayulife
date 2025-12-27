import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, Phone, Menu, X, Calendar, ArrowRight, 
  MapPin, Mail, CheckCircle2 
} from 'lucide-react';

// --- ANIMATION VARIANTS ---
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// --- DATA ---
const servicesData = [
  {
    id: 1,
    title: "Infertility Solutions (Baanjhpan)",
    desc: "10-15 saal purane cases mein safalta. Hum root cause pe kaam karte hain - Fallopian tube blockage, PCOD, ya Low AMH.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1000",
    tags: ["Female Infertility", "Male Infertility", "Tube Blockage"]
  },
  {
    id: 2,
    title: "Paralysis & Nerve Care (Lakwa)",
    desc: "Special Marma Therapy aur Ayurvedic oils se nervous system ko reactivate karte hain. 7-15 din mein fark dekhein.",
    image: "Paralysis & Nerve Care (Lakwa).png",
    tags: ["Facial Palsy", "Hemiplegia", "Nerve Strength"]
  },
  {
    id: 3,
    title: "Chronic Pain Relief",
    desc: "Sciatica, Slip Disc, aur Ghutno ke dard (Knee Pain) ka bina operation ilaj. Arand mool aur Potli massage se turant aaram.",
    image: "Chronic Pain Relief.png",
    tags: ["Sciatica", "Arthritis", "Spondylitis"]
  }
];

// --- COMPONENTS ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navs = [
    { name: 'Home', path: '/' },
    { name: 'Treatments', path: '/services' },
    { name: 'About Dr.', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* LOGO DESIGN */}
          <Link to="/" className="flex items-center gap-3 group z-50">
             <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-ayur-green opacity-10 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                <Leaf className="text-ayur-green w-6 h-6 md:w-8 md:h-8 relative z-10 transform group-hover:rotate-12 transition-transform duration-500" />
                <span className="absolute -bottom-1 -right-1 text-[10px] md:text-xs font-bold bg-stone-800 text-white px-1 rounded">Dr.</span>
             </div>
             <div>
                <h1 className="text-xl md:text-2xl font-serif font-bold text-stone-800 tracking-tight leading-none">
                  ABHAY <span className="text-ayur-green">AYULIFE</span>
                </h1>
                <p className="text-[8px] md:text-[10px] text-stone-500 tracking-[0.2em] uppercase mt-0.5">Holistic Healing</p>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navs.map((nav) => (
              <Link 
                key={nav.name} 
                to={nav.path} 
                className={`text-sm font-medium transition-colors duration-300 ${location.pathname === nav.path ? 'text-ayur-green font-bold' : 'text-stone-600 hover:text-ayur-green'}`}
              >
                {nav.name}
              </Link>
            ))}
            <a href="tel:8383877712" className="bg-ayur-green text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-all duration-300 shadow-lg shadow-green-200 flex items-center gap-2 text-sm font-bold">
              <Phone className="w-4 h-4" /> 83838-77712
            </a>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-stone-800 p-2 z-50">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-0 left-0 w-full bg-white z-40 pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col space-y-6">
              {navs.map((nav) => (
                <Link 
                  key={nav.name} 
                  to={nav.path} 
                  className="text-2xl font-serif font-medium text-stone-800 border-b border-stone-100 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {nav.name}
                </Link>
              ))}
              <a href="tel:8383877712" className="bg-ayur-green text-white py-4 rounded-xl text-center font-bold text-lg flex justify-center items-center gap-2 mt-4">
                 <Phone className="w-5 h-5"/> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-stone-900 text-stone-400 py-12 md:py-16 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">
      <div className="space-y-4">
        <h3 className="text-2xl font-serif text-white font-bold">ABHAY AYULIFE</h3>
        <p className="leading-relaxed text-sm max-w-xs mx-auto md:mx-0">
          Advanced Ayurveda Centre in Kasganj. <br/>
          Specializing in chronic diseases with modern diagnosis and ancient wisdom.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          <li><Link to="/" className="hover:text-ayur-green transition block py-1">Home</Link></li>
          <li><Link to="/services" className="hover:text-ayur-green transition block py-1">Treatments</Link></li>
          <li><Link to="/about" className="hover:text-ayur-green transition block py-1">About Dr. Abhay</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <div className="space-y-4 text-sm flex flex-col items-center md:items-start">
          <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-ayur-green"/> +91 83838-77712</p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-ayur-green"/> Kasganj, Uttar Pradesh</p>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-ayur-green"/> contact@abhayayulife.com</p>
        </div>
      </div>
    </div>
    <div className="text-center mt-12 pt-8 border-t border-stone-800 text-xs">
      © 2025 Abhay Ayulife. All Rights Reserved.
    </div>
  </footer>
);

// --- PAGES ---

const Home = () => {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] md:h-[90vh] flex items-center justify-center overflow-hidden pb-10 md:pb-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000" 
            alt="Ayurveda" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-white pt-32 md:pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="bg-ayur-green text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase mb-4 inline-block">
              New In Kasganj
            </span>
            <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight mb-6">
              Heal Without <br/> <span className="text-ayur-green">Fear.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-8 font-light max-w-md md:max-w-full">
              Mera lakshya patients ko fast, safe & permanent Ayurvedic relief dena hai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Link to="/contact" className="bg-ayur-green text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition flex justify-center items-center gap-2 text-center">
                 Book Appointment <ArrowRight className="w-4 h-4"/>
               </Link>
               <Link to="/services" className="border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-stone-900 transition text-center">
                 View Treatments
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <div className="bg-ayur-green py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around text-white text-center gap-8 md:gap-4">
           <div className="flex flex-col items-center">
             <span className="text-3xl font-bold">100%</span>
             <span className="text-sm opacity-80 uppercase tracking-wide">Natural Herbs</span>
           </div>
           <div className="bg-white/20 w-32 h-px md:w-px md:h-12 mx-auto md:mx-0"></div>
           <div className="flex flex-col items-center">
             <span className="text-3xl font-bold">2025</span>
             <span className="text-sm opacity-80 uppercase tracking-wide">Latest Research</span>
           </div>
           <div className="bg-white/20 w-32 h-px md:w-px md:h-12 mx-auto md:mx-0"></div>
           <div className="flex flex-col items-center">
             <span className="text-3xl font-bold">Fast</span>
             <span className="text-sm opacity-80 uppercase tracking-wide">Recovery Rate</span>
           </div>
        </div>
      </div>

      {/* SHORT INTRO */}
      <section className="py-16 md:py-24 bg-ayur-cream px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Leaf className="w-10 h-10 text-ayur-green mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
            Welcome to Abhay Ayulife
          </h2>
          <p className="text-stone-600 leading-loose text-base md:text-lg text-justify md:text-center">
            Dr. Abhay Pratap Singh (B.A.M.S) brings a fresh perspective to Ayurveda. 
            We don't just manage symptoms; we treat the root cause. Whether it's 
            <strong> chronic infertility</strong> or <strong>sudden paralysis</strong>, our protocols 
            are designed for the modern body.
          </p>
        </div>
      </section>

    </motion.div>
  );
};

const Services = () => (
  <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="pt-28 md:pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">Our Specializations</h1>
        <p className="text-stone-500 mt-2 text-sm md:text-base">Targeted treatments for complex conditions</p>
      </div>

      <div className="space-y-16 md:space-y-20">
        {servicesData.map((service, index) => (
          <motion.div 
            key={service.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 group overflow-hidden rounded-2xl shadow-xl relative">
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-64 md:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
            
            {/* Content */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] md:text-xs font-bold text-ayur-green bg-green-50 px-2 py-1 rounded uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">{service.title}</h2>
              <p className="text-base md:text-lg text-stone-600 leading-relaxed">{service.desc}</p>
              <Link to="/contact" className="inline-flex items-center text-ayur-green font-bold hover:underline underline-offset-4">
                Consult Now <ArrowRight className="w-4 h-4 ml-2"/>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const About = () => (
  <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="pt-28 md:pt-32 pb-20 bg-stone-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="bg-white p-6 md:p-16 rounded-3xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
         <div className="w-full md:w-1/3 relative">
            <div className="aspect-[3/4] bg-stone-200 rounded-xl overflow-hidden relative group shadow-md">
               {/* Placeholder for Dr Image */}
               <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400">
                  <span className="font-bold">Dr. Photo Here</span>
               </div>
               <div className="absolute inset-0 bg-ayur-green/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
            </div>
         </div>
         <div className="w-full md:w-2/3 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">Dr. Abhay Pratap Singh</h1>
            <p className="text-lg md:text-xl text-ayur-green font-medium">B.A.M.S (Ayurvedacharya) - 2025</p>
            
            <p className="text-stone-600 leading-relaxed text-base md:text-lg text-justify md:text-left">
               Dr. Abhay is a visionary young doctor based in <strong>Kasganj, UP</strong>. 
               He combines the aggressive diagnostic tools of modern science with the healing 
               touch of Ayurveda. His approach is simple: 
               <em> "Don't just suppress the pain, eliminate the cause."</em>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
               <div className="p-4 bg-stone-50 rounded-lg border border-stone-100 text-left">
                  <h3 className="font-bold text-stone-800 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-ayur-green"/> Diagnosis</h3>
                  <p className="text-sm text-stone-500 mt-1">Nadi Pariksha Expert</p>
               </div>
               <div className="p-4 bg-stone-50 rounded-lg border border-stone-100 text-left">
                  <h3 className="font-bold text-stone-800 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-ayur-green"/> Results</h3>
                  <p className="text-sm text-stone-500 mt-1">Focus on Fast Recovery</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  </motion.div>
);

const Contact = () => (
  <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="pt-28 md:pt-32 pb-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 md:mb-12">Get In Touch</h1>
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
         {/* Contact Info */}
         <div className="space-y-6 md:space-y-8 p-6 md:p-8 bg-ayur-green text-white rounded-2xl shadow-xl h-fit">
            <div>
               <h3 className="text-lg md:text-xl font-bold mb-2">Clinic Location</h3>
               <p className="flex items-start gap-3 opacity-90 text-sm md:text-base">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0"/> 
                  Abhay Ayulife Clinic,<br/>Kasganj, Uttar Pradesh
               </p>
            </div>
            <div>
               <h3 className="text-lg md:text-xl font-bold mb-2">Phone</h3>
               <p className="flex items-center gap-3 opacity-90 text-sm md:text-base">
                  <Phone className="w-5 h-5"/> +91 83838-77712
               </p>
               <p className="text-xs mt-2 opacity-70">Available 10 AM - 7 PM</p>
            </div>
            <div>
               <h3 className="text-lg md:text-xl font-bold mb-2">Email</h3>
               <p className="flex items-center gap-3 opacity-90 text-sm md:text-base break-all">
                  <Mail className="w-5 h-5 flex-shrink-0"/> contact@abhayayulife.com
               </p>
            </div>
         </div>

         {/* Simple Form */}
         <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-stone-100">
            <form className="space-y-4 md:space-y-6">
               <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-ayur-green transition" placeholder="Enter name" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-ayur-green transition" placeholder="Enter number" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Problem (Optional)</label>
                  <textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-ayur-green transition h-24 md:h-32" placeholder="Describe your issue"></textarea>
               </div>
               <button className="w-full bg-stone-800 text-white font-bold py-3 md:py-4 rounded-lg hover:bg-ayur-green transition duration-300">
                  Send Message
               </button>
            </form>
         </div>
      </div>
    </div>
  </motion.div>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-stone-800 bg-ayur-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;