import React from 'react';
import { Book, FileText, Download, ArrowRight, BookOpen } from 'lucide-react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import SEO from '../components/SEO';
import blogBg from '../assets/blog-bg.png';
import bookCover from '../assets/book-cover.png';

const Resources = () => {
  return (
    <div className="w-full">
      <SEO 
        title="Resources - ZK Rehab Sphere" 
        description="Access our library of blogs, books, and study notes for rehabilitation and physiotherapy." 
      />
      
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
         {/* Abstract Background Elements */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
         <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Learning & Knowledge Hub</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
             Empowering your recovery with expert insights, books, and study materials.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Latest Articles" subtitle="Insights and updates from the world of rehabilitation." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden p-0 border-none group">
                {/* Blog Image Placeholder */}
                <div className="h-56 relative overflow-hidden cursor-pointer">
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>
                   
                   <img 
                      src={blogBg} 
                      alt="Blog Article" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                   />
                   
                   {/* Interactive Floating Button */}
                   <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-lg hover:bg-primary hover:text-white transition-colors">
                         <BookOpen size={28} />
                      </div>
                   </div>

                   {/* Tag */}
                   <div className="absolute top-4 left-4 z-20">
                      <span className="bg-primary/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                         PHYSIOTHERAPY
                      </span>
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-grow relative bg-white">
                   <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                     Understanding Chronic Pain Mechanisms
                   </h3>
                   <p className="text-gray-600 mb-4 text-sm flex-grow leading-relaxed line-clamp-3">
                     A deep dive into the physiological processes behind chronic pain and modern management strategies to improve patient outcomes.
                   </p>
                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500 font-medium">5 min read</span>
                      <a href="#" className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                        Read More <ArrowRight size={16} />
                      </a>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BOOKS & PDFS SECTION */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50"></div>
        <div className="container mx-auto px-4">
          <SectionTitle title="Essential Reads" subtitle="Books and guides recommended by our experts." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-2xl shadow-soft hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100 group">
                 {/* Book Cover Placeholder */}
                 <div className="w-32 h-48 mb-6 relative shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img src={bookCover} alt="Rehab Science" className="w-full h-full object-cover rounded" />
                 </div>
                 
                 <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">Rehab Science Vol. {item}</h3>
                 <p className="text-slate-500 text-sm mb-6">by Dr. Zohaib Khan</p>
                 
                 <Button className="w-full text-sm py-2.5 flex items-center justify-center gap-2 mt-auto bg-white text-secondary border border-secondary hover:bg-secondary hover:text-white shadow-none hover:shadow-md">
                    <Download size={16} /> Download
                 </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STUDY NOTES SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Quick Study Notes" subtitle="Concise clinical pearls for students and professionals." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               { title: "Upper Limb Anatomy", topic: "Anatomy", size: "2.5 MB" },
               { title: "Neuroplasticity Basics", topic: "Neurology", size: "1.2 MB" },
               { title: "Gait Analysis Cheat Sheet", topic: "Biomechanics", size: "3.0 MB" },
               { title: "Common Sports Injuries", topic: "Sports Med", size: "4.1 MB" }
             ].map((note, index) => (
               <div key={index} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm transition-all group">
                  <div className="flex items-center gap-5">
                     <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:border-blue-100 group-hover:scale-105 transition-transform">
                        <FileText size={24} />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-primary transition-colors">{note.title}</h4>
                        <p className="text-sm text-slate-500 font-medium">{note.topic} • {note.size}</p>
                     </div>
                  </div>
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-slate-400 border border-slate-200 hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-sm active:scale-95">
                     <Download size={20} />
                  </button>
               </div>
             ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Resources;
