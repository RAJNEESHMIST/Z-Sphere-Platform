import React from 'react';
import { Heart, Target, Shield, GraduationCap, Users } from 'lucide-react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import aboutImg from '../assets/about.png';

import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="w-full">
      <SEO 
        title="About Us - ZK Rehab Sphere" 
        description="Learn about our mission, vision, and the expert team dedicated to your recovery." 
      />
      
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 bg-primary overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Learn about our mission, vision, and the expert team dedicated to your recovery.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE (Vision, Mission, Why) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 px-4">
               <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mx-auto">
                 <Target size={32} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
               <p className="text-gray-600 leading-relaxed">
                 To be the global standard in accessible, evidence-based rehabilitation, fostering a world where quality care is within everyone's reach.
               </p>
            </div>
            <div className="space-y-4 px-4">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                 <Users size={32} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
               <p className="text-gray-600 leading-relaxed">
                 To provide exceptional patient care while simultaneously equipping students with the practical knowledge needed to excel in their careers.
               </p>
            </div>
            <div className="space-y-4 px-4">
               <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto">
                 <Heart size={32} />
               </div>
               <h3 className="text-2xl font-bold text-gray-900">Why We Exist</h3>
               <p className="text-gray-600 leading-relaxed">
                 The gap between academic theory and clinical practice is wide. We exist to bridge that gap for students and provide holistic care for patients.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PURPOSE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Core Purpose" subtitle=" The pillars that define our commitment to you." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Patient-Centered Care</h3>
              <p className="text-gray-600">
                Every treatment plan is tailored to the individual, focusing on their unique goals, lifestyle, and recovery speed.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Education</h3>
              <p className="text-gray-600">
                We believe in the power of knowledge. We empower patients with understanding and students with mentorship.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ethical Practice</h3>
              <p className="text-gray-600">
                Integrity is at our core. We adhere to the highest standards of professional conduct and clinical transparency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: FOUNDER SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary-dark rounded-3xl overflow-hidden shadow-2xl text-white">
             <div className="flex flex-col md:flex-row">
                
                {/* Founder Image Placeholder */}
                <div className="md:w-1/3 relative min-h-[400px]">
                    <img src={aboutImg} alt="About ZK Rehab" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent"></div>
                </div>

                {/* Founder Content */}
                <div className="md:w-2/3 p-10 md:p-16 flex flex-col justify-center">
                   <h2 className="text-3xl md:text-4xl font-bold mb-2">Dr. Zohaib Khan</h2>
                   <p className="text-accent font-semibold uppercase tracking-wider mb-8">Founder & Lead Physiotherapist</p>
                   
                   <div className="space-y-6 text-lg leading-relaxed text-blue-50">
                      <p>
                        "I started ZK Rehab Sphere with a simple belief: rehabilitation shouldn't just be about fixing injuries; it should be about building resilience."
                      </p>
                      <p>
                        With over 15 years of clinical experience, Dr. Khan saw a need for a space that not only treated patients with cutting-edge techniques but also nurtured the next generation of healers. His dual passion for clinical excellence and education drives everything we do.
                      </p>
                   </div>
                   
                   <div className="mt-10 pt-8 border-t border-primary-light flex items-center gap-4">
                      {/* Signature placeholder or simple text */}
                      <span className="font-serif italic text-2xl opacity-80">Zohaib Khan</span>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
