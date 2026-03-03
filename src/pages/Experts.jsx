import React, { useState } from 'react';
import { Award, Clock } from 'lucide-react';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import SEO from '../components/SEO';
import ExpertBioModal from '../components/ExpertBioModal';
// import expert1 from '../assets/expert-1.png'; // Keeping for reference if needed
// import expert2 from '../assets/expert-2.png';
// import expert3 from '../assets/expert-3.png';
import expertMehul from '../assets/expert-mehul.jpeg';
import expertMani from '../assets/expert-mani.jpeg';
import expertNuman from '../assets/expert-numan.jpeg';


const Experts = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const expertData = [
    {
      id:'mehul',
      name: "Dr. Mehul Kumar",
      role: "Senior Physiotherapist",
      image: expertMehul,
      degree: "BPT",
      experience: "3+ Years Experience",
      bio: `Dr. Mehul Kumar is a senior physiotherapist with over 3 years of clinical experience in orthopedic and sports rehabilitation. He specializes in managing post-surgical recovery, musculoskeletal injuries, and movement dysfunction through structured and evidence-based rehabilitation protocols.

His expertise includes treating patients with knee and shoulder injuries, ligament rehabilitation, chronic back and neck pain, and post-fracture recovery. Dr. Mehul focuses on functional strengthening, mobility restoration, and long-term injury prevention to ensure sustainable outcomes for his patients.

With a strong emphasis on assessment-driven treatment planning, he combines manual therapy techniques with progressive exercise rehabilitation to optimize recovery and performance.`
    },
    {
      id: 'mani',
      name: "Dr. Mani Bhusan PT",
      role: "Physiotherapist",
      image: expertMani,
      degree: "BPT",
      experience: "2+ Years Experience",
      bio: `Dr. Mani Bhusan is a dedicated physiotherapist with over 2 years of hands-on clinical experience in musculoskeletal and neurological rehabilitation. He specializes in structured, evidence-based treatment planning focused on restoring mobility, reducing pain, and improving functional independence.

His clinical work includes managing patients with stroke, paralysis, post-operative conditions, chronic back and neck pain, and sports-related injuries. Dr. Mani emphasizes detailed assessment, movement correction, and progressive strengthening protocols tailored to each patient’s recovery goals.

With a patient-centered approach and commitment to continuous learning, he integrates modern rehabilitation techniques with practical home-based therapy models to deliver effective and measurable outcomes.`
    },
    {
       id: 'numan',
       name: "Dr. Mohammad Numan PT",
       role: "Physiotherapist",
       image: expertNuman,
       degree: "BPT",
       experience: "Experience in core rehabilitation",
       bio: `Dr. Mohammad Numan is a committed physiotherapist with clinical experience in patient-centered rehabilitation and functional recovery. His focus lies in neurological and post-operative rehabilitation, helping patients regain mobility, strength, and independence through structured treatment planning.

He has worked with individuals managing stroke, paralysis, post-surgical conditions, and chronic musculoskeletal disorders. Dr. Numan emphasizes thorough assessment, guided therapeutic exercises, and progressive rehabilitation tailored to each patient’s specific needs.

With a disciplined and evidence-based approach, he integrates modern physiotherapy techniques with practical home-visit rehabilitation models to deliver consistent and measurable outcomes.`
    }
  ];

  const handleViewProfile = (expert) => {
    setSelectedExpert(expert);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      <SEO 
        title="Our Experts - ZK Rehab Sphere" 
        description="Meet our team of experienced and compassionate physiotherapy professionals." 
      />
      <div className="bg-slate-50 pt-8 pb-12 lg:pt-12 lg:pb-20">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Experts" subtitle="Meet the team dedicated to your recovery." className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {expertData.map((expert) => (
                <Card key={expert.id} className="text-center group p-0 overflow-hidden border-none hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-72 overflow-hidden">
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                        <img src={expert.image} alt={expert.name} className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{expert.name}</h3>
                        <p className="text-primary font-medium mb-4 uppercase text-sm tracking-wide">{expert.role}</p>
                        <div className="flex flex-col gap-2 text-gray-600 text-sm mb-6">
                            <div className="flex items-center justify-center gap-2"><Award size={16} className="text-secondary"/> {expert.degree}</div>
                            <div className="flex items-center justify-center gap-2"><Clock size={16} className="text-secondary"/> {expert.experience}</div>
                        </div>
                        <Button onClick={() => handleViewProfile(expert)} className="w-full">View Profile</Button>
                    </div>
                </Card>
            ))}
          </div>
        </div>
      </div>
      
      <ExpertBioModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        expert={selectedExpert} 
      />
      
    </div>
  );
};

export default Experts;
