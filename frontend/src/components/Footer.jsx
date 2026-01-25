import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-primary-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="bg-secondary p-1.5 rounded-lg">
                 <Activity size={24} className="text-white" />
               </div>
              <span className="text-xl font-bold tracking-tight">ZK REHAB SPHERE</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering recovery through advanced diagnostics, personalized therapy, and compassionate care. Your health is our mission.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white/70 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white/70 hover:text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white/70 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors text-white/70 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Meet Experts', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`} // specific logic might be needed for 'meet experts' -> 'experts'
                    className="text-slate-300 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 text-sm"
                  >
                     <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 transition-all" /> 
                     {item === 'Meet Experts' ? 'Experts' : item}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-slate-300 hover:text-secondary hover:translate-x-1 transition-all inline-flex items-center gap-2 text-sm">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-300 text-sm">
                <MapPin size={20} className="text-secondary shrink-0 mt-1" />
                <span>123 Recovery Lane, Health City,<br/>Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4 text-slate-300 text-sm">
                <Phone size={20} className="text-secondary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 text-slate-300 text-sm">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>contact@zkrehabsphere.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-slate-300 text-sm mb-4">Subscribe to get the latest health tips and updates.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all placeholder:text-slate-500"
              />
              <button className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 rounded-lg transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center bg-primary-dark">
            <p className="text-slate-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ZK Rehab Sphere. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
