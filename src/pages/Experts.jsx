import React from 'react';
import { Award, Clock } from 'lucide-react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import SEO from '../components/SEO';
import expert1 from '../assets/expert-1.png';
import expert2 from '../assets/expert-2.png';
import expert3 from '../assets/expert-3.png';


const Experts = () => {
  return (
    <div className="w-full">
      <SEO 
        title="Our Experts - ZK Rehab Sphere" 
        description="Meet our team of experienced and compassionate physiotherapy professionals." 
      />
      <div className="bg-slate-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Experts" subtitle="Meet the team dedicated to your recovery." className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Expert 1 */}
            <Card className="text-center group p-0 overflow-hidden border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                 <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                     <img src={expert1} alt="Dr. Alex Smith" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Alex Smith</h3>
                    <p className="text-primary font-medium mb-4 uppercase text-sm tracking-wide">Senior Physiotherapist</p>
                    <div className="flex flex-col gap-2 text-gray-600 text-sm mb-6">
                        <div className="flex items-center justify-center gap-2"><Award size={16} className="text-secondary"/> BPT, MPT (Ortho)</div>
                        <div className="flex items-center justify-center gap-2"><Clock size={16} className="text-secondary"/> 8+ Years Experience</div>
                    </div>
                     <Button className="w-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white border-transparent">View Profile</Button>
                </div>
            </Card>

            {/* Expert 2 */}
            <Card className="text-center group p-0 overflow-hidden border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                 <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                     <img src={expert2} alt="Dr. Sarah Jones" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Sarah Jones</h3>
                    <p className="text-primary font-medium mb-4 uppercase text-sm tracking-wide">Clinical Director</p>
                    <div className="flex flex-col gap-2 text-gray-600 text-sm mb-6">
                        <div className="flex items-center justify-center gap-2"><Award size={16} className="text-secondary"/> BPT, MPT (Neuro)</div>
                        <div className="flex items-center justify-center gap-2"><Clock size={16} className="text-secondary"/> 6+ Years Experience</div>
                    </div>
                     <Button className="w-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white border-transparent">View Profile</Button>
                </div>
            </Card>

            {/* Expert 3 */}
            <Card className="text-center group p-0 overflow-hidden border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                 <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                     <img src={expert3} alt="Dr. Mike Chen" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Mike Chen</h3>
                    <p className="text-primary font-medium mb-4 uppercase text-sm tracking-wide">Head of Education</p>
                    <div className="flex flex-col gap-2 text-gray-600 text-sm mb-6">
                         <div className="flex items-center justify-center gap-2"><Award size={16} className="text-secondary"/> BPT, Sports Med</div>
                        <div className="flex items-center justify-center gap-2"><Clock size={16} className="text-secondary"/> 10+ Years Experience</div>
                    </div>
                     <Button className="w-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white border-transparent">View Profile</Button>
                </div>
            </Card>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Experts;
