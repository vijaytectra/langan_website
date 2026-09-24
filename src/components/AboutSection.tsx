'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Stethoscope, HeartPulse, Activity, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    'Board Certified Doctor of Osteopathic Medicine (DO)',
    'Fellowship Trained in Neuromusculoskeletal Rehabilitation',
    'Customized Non-Invasive & Post-Surgical Recovery Plans',
    'Holistic Mind-Body Biomechanics Assessment',
  ];

  const stats = [
    { label: 'Years of Clinical Practice', value: '15+' },
    { label: 'Successful Patient Recoveries', value: '5,000+' },
    { label: 'Mobility Restoration Rate', value: '98.4%' },
    { label: 'Patient Satisfaction', value: '4.9/5.0' },
  ];

  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-white text-neutral-900 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Profile Card / Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="/images/doctor-scrubs.png"
                alt="Dr. Blaise Langan DO in surgical scrubs"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              {/* Overlay Doctor Card Info */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-neutral-900 text-lg">Dr. Blaise Langan, DO</h3>
                    <p className="text-teal-700 font-inter text-xs font-medium">Osteopathic Specialist & Medical Director</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-3 px-5 py-3.5 bg-neutral-900 text-white rounded-2xl shadow-xl border border-neutral-800">
              <HeartPulse className="w-6 h-6 text-teal-400 animate-pulse" />
              <div>
                <div className="text-sm font-bold font-montserrat">Patient-First Care</div>
                <div className="text-[11px] text-slate-400">Holistic Osteopathic Method</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Philosophy Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-xs font-semibold uppercase tracking-wider w-fit">
              <Activity className="w-4 h-4 text-teal-600" />
              <span>About Dr. Langan</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-montserrat text-neutral-900 leading-tight">
              Restoring Health Through <span className="text-teal-600 font-semibold">Precision Osteopathy</span>
            </h2>

            <p className="text-slate-600 font-inter text-base sm:text-lg leading-relaxed">
              Dr. Blaise Langan DO believes that true medical recovery requires addressing the root biomechanical causes of pain rather than just treating superficial symptoms. With over 15 years of dedicated practice, Dr. Langan combines osteopathic manipulative medicine with state-of-the-art restorative therapies.
            </p>

            <p className="text-slate-600 font-inter text-base leading-relaxed">
              Whether you are recovering from complex orthopedic surgery, an athletic injury, or managing chronic spine and joint issues, our personalized treatment pathways are engineered to accelerate tissue healing and restore optimal mobility.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-800 font-inter text-sm font-medium leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Clinical Metrics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold font-montserrat text-teal-600">{stat.value}</span>
                  <span className="text-xs font-medium font-inter text-slate-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
