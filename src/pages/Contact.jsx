import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import SEO from '../components/SEO';
import heroImg from '../assets/hero.png';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Simulation)");
  };

  return (
    <div className="w-full">
      <SEO 
        title="Contact Us - ZK Rehab Sphere" 
        description="Get in touch with ZK Rehab Sphere for appointments, inquiries, and support." 
      />
      
      {/* HERO SECTION */}
      <section className="relative py-28 lg:py-36 bg-primary overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-primary/80 z-10 mix-blend-multiply"></div> 
            <img src={heroImg} alt="Contact Us" className="w-full h-full object-cover opacity-60" />
         </div>

         {/* Abstract Background Elements */}
         <div className="absolute inset-0 z-10 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
         
        <div className="container mx-auto px-4 text-center relative z-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">Contact ZK Rehab Sphere</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow-sm font-medium">
             Get in touch with us for specialized care and inquiries. We are here to help you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* LEFT COLUMN: CONTACT INFO */}
            <div className="lg:w-1/3 space-y-8">
              <SectionTitle title="Get In Touch" subtitle="Reach out via any of these channels." className="text-left" />
              
              <div className="space-y-6">
                <Card className="flex items-start gap-4 p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Service Area</h4>
                    <p className="text-gray-600">Chandigarh, Mohali, Panchkula, Zirakpur & Kharar</p>
                  </div>
                </Card>

                <Card className="flex items-start gap-4 p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                    <p className="text-gray-600">zkrehabsphere@gmail.com</p>
                    <p className="text-gray-500 text-sm mt-1">We reply within 24 hours.</p>
                  </div>
                </Card>

                <Card className="flex items-start gap-4 p-6 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                    <p className="text-gray-600">+91 9430594683</p>
                    <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 7pm</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:w-2/3">
              <Card className="p-8 lg:p-10 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                       <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number (Optional)</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                     <textarea 
                        id="message" 
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                        placeholder="How can we help you?"
                        required
                     ></textarea>
                  </div>

                  <Button type="submit" className="w-full md:w-auto px-8 py-3 flex items-center justify-center gap-2 text-lg">
                    <Send size={18} /> Send Message
                  </Button>
                </form>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* MAP SECTION PLACEHOLDER */}
      <section className="h-96 w-full bg-gray-200 flex items-center justify-center relative">
         <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-2 opacity-50" />
            <h3 className="text-xl font-bold">Google Map Placeholder</h3>
            <p className="text-sm">Map integration coming in future updates.</p>
         </div>
         {/* <iframe ... ></iframe> */}
      </section>

    </div>
  );
};

export default Contact;
