'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Medal, Star, CheckCircle, Hospital } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  const awards = [
    {
      title: 'Top Osteopathic Physician 2024',
      issuer: 'American Osteopathic Association (AOA)',
      description: 'Recognized for outstanding clinical excellence and innovative non-invasive rehabilitation methods.',
      year: '2024',
      icon: Medal,
    },
    {
      title: 'Excellence in Neuromusculoskeletal Medicine',
      issuer: 'National Board of Osteopathic Medical Examiners',
      description: 'Awarded for patient care standards and contributions to spinal biomechanics research.',
      year: '2023',
      icon: Award,
    },
    {
      title: 'Board Certified Specialty Fellow',
      issuer: 'American Academy of Osteopathy (AAO)',
      description: 'Certified in Osteopathic Manipulative Medicine (OMM) and Advanced Sports Rehabilitation.',
      year: 'Fellowship',
      icon: ShieldCheck,
    },
    {
      title: 'Patient Choice Medical Leadership Award',
      issuer: 'Regional Healthcare Excellence Council',
      description: 'Voted #1 Osteopathic Specialist for patient communication and mobility outcome satisfaction.',
      year: '2022 - 2025',
      icon: Star,
    },
  ];

  const affiliations = [
    'American Osteopathic Association (AOA)',
    'American Academy of Osteopathy (AAO)',
    'American Osteopathic Academy of Sports Medicine (AOASM)',
    'State Board of Osteopathic Medical Examiners',
  ];

  return (
    <section id="awards" className="w-full py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-900/60 border border-teal-700/60 text-teal-300 text-xs font-semibold uppercase tracking-wider rounded-full">
            <Award className="w-4 h-4 text-teal-400" />
            <span>Accreditations & Honors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-montserrat leading-tight">
            Awards & Board <span className="text-teal-400 font-semibold">Certifications</span>
          </h2>

          <p className="text-slate-300 font-inter text-base sm:text-lg">
            Rigorous medical training, ongoing clinical fellowship, and national leadership in osteopathic healthcare.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {awards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 border border-slate-700/70 hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal-950 text-teal-400 border border-teal-800/60 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold font-inter px-3 py-1 bg-slate-700/60 text-slate-300 rounded-full border border-slate-600/50">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-montserrat text-white mb-1 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold font-inter text-teal-400 mb-3">
                    {item.issuer}
                  </p>
                  <p className="text-slate-300 font-inter text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hospital Affiliations & Associations */}
        <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-teal-600/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                <Hospital className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-montserrat font-bold text-white text-base">Professional Affiliations</h4>
                <p className="text-slate-400 font-inter text-xs">Active member of recognized medical bodies</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full sm:w-auto">
              {affiliations.map((aff, aIdx) => (
                <div key={aIdx} className="flex items-center gap-2 text-xs font-inter text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>{aff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
