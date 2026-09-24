'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, CheckCircle, TrendingUp, Star, Quote, Clock, Activity } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const cases = [
    {
      patient: 'Marcus Vance, 42',
      condition: 'Post-ACL Reconstruction & Knee Biomechanics Restoration',
      timeline: '8 Weeks Recovery Pathway',
      outcome: 'Full 100% Mobility Restored & Returned to Marathon Training',
      quote: "Dr. Langan's osteopathic approach freed my joint restrictions when traditional physical therapy plateaued. I was able to run my first half-marathon 5 months post-surgery.",
      stats: [
        { label: 'Range of Motion', before: '45°', after: '140°' },
        { label: 'Pain Score', before: '8/10', after: '0/10' },
      ],
      avatar: '/images/avatar-1.png',
      tag: 'Sports Injury',
    },
    {
      patient: 'Elena Rostova, 56',
      condition: 'Chronic Lumbar Disc Herniation & Sciatic Nerve Impingement',
      timeline: '6 Weeks OMT Protocol',
      outcome: 'Avoided Spinal Fusion Surgery & Complete Relief of Nerve Pain',
      quote: "I was told surgery was my only option. Dr. Langan carefully diagnosed my spinal alignment and created a gentle non-surgical treatment plan that changed my life.",
      stats: [
        { label: 'Spinal Alignment', before: 'Impaired', after: 'Optimal' },
        { label: 'Daily Mobility', before: 'Restricted', after: 'Unrestricted' },
      ],
      avatar: '/images/avatar-2.png',
      tag: 'Spine & Nerve',
    },
    {
      patient: 'David K., 61',
      condition: 'Total Hip Arthroplasty (Replacement) Rehabilitation',
      timeline: '10 Weeks Post-Op Program',
      outcome: 'Accelerated Gait Recovery & Zero Assistive Devices Needed',
      quote: "Dr. Langan guided me step by step through my post-op recovery. His hands-on OMT techniques eliminated hip flexor tightness and allowed me to walk comfortably.",
      stats: [
        { label: 'Walking Velocity', before: '0.4 m/s', after: '1.3 m/s' },
        { label: 'Muscle Strength', before: '2/5', after: '5/5' },
      ],
      avatar: '/images/avatar-3.png',
      tag: 'Post-Surgical',
    },
  ];

  return (
    <section id="case-studies" className="w-full py-20 lg:py-28 bg-white relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold uppercase tracking-wider rounded-full">
            <TrendingUp className="w-4 h-4 text-teal-600" />
            <span>Proven Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-montserrat text-neutral-900 leading-tight">
            Patient Recovery <span className="text-teal-600 font-semibold">Case Studies</span>
          </h2>

          <p className="text-slate-600 font-inter text-base sm:text-lg">
            Real patient journeys demonstrating functional mobility restoration and measurable clinical success.
          </p>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.patient}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <div>
                {/* Header Tag & Timeline */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold font-inter px-3 py-1 bg-teal-100 text-teal-800 rounded-full">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-inter font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.timeline}</span>
                  </div>
                </div>

                {/* Patient Profile */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0">
                    <Image src={item.avatar} alt={item.patient} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-neutral-900 text-base">{item.patient}</h3>
                    <p className="text-teal-700 font-inter text-xs font-medium line-clamp-1">{item.condition}</p>
                  </div>
                </div>

                {/* Quote Box */}
                <div className="bg-white rounded-2xl p-4 border border-slate-200/60 mb-6 relative">
                  <Quote className="w-6 h-6 text-teal-600/20 absolute top-2 right-2" />
                  <p className="text-slate-700 font-inter text-xs sm:text-sm italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Quantitative Metric Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {item.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="bg-white p-3 rounded-xl border border-slate-200/50 text-center">
                      <span className="block text-[10px] uppercase tracking-wider font-semibold font-inter text-slate-400">
                        {stat.label}
                      </span>
                      <div className="flex items-center justify-center gap-1.5 mt-1">
                        <span className="text-xs line-through text-slate-400 font-inter">{stat.before}</span>
                        <span className="text-xs font-bold text-teal-600 font-inter">&rarr; {stat.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Outcome Banner */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span className="text-xs font-semibold font-inter text-neutral-900">
                  {item.outcome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
