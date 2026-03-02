import React from 'react';
import { Clock, ArrowLeft, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SEO from '../components/SEO';

const Resources = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col">
      <SEO 
        title="Resources Coming Soon - ZK Rehab Sphere" 
        description="Our comprehensive library of rehabilitation resources, books, and study notes is coming soon." 
      />
      
      {/* HERO SECTION / COMING SOON CONTENT */}
      <section className="flex-grow relative flex items-center justify-center py-20 bg-primary overflow-hidden">
         {/* Abstract Background Elements */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
 
        <div className="container mx-auto px-4 text-center relative z-10 text-white animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 mb-8 shadow-2xl">
             <Clock size={48} className="text-accent animate-pulse-slow" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Knowledge Hub <br/>
            <span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-300">Coming Soon</span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
             We are currently curating a comprehensive library of evidence-based physiotherapy resources, clinical guides, and structured study materials. 
             <br/><br/>
             Our team is working hard to ensure only the highest quality content reaches you. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link to="/">
                <Button variant="secondary" className="px-8 py-3.5 flex items-center gap-2 group border-white/20 hover:bg-white hover:text-primary transition-all duration-300">
                   <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
                </Button>
             </Link>
             <Link to="/contact">
                <Button className="bg-accent hover:bg-accent-light text-primary font-bold px-8 py-3.5 shadow-xl hover:shadow-accent/40 transition-all duration-300">
                   Notify Me
                </Button>
             </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center gap-3 text-blue-200/60 text-sm font-medium">
             <Construction size={16} /> <span>Under Active Curation</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;
