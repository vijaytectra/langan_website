'use client';

import React from 'react';
import Image from 'next/image';

export const ClinicalExperienceSection: React.FC = () => {
  return (
    <section id="clinical-experience" className="w-full bg-neutral-100 flex justify-center pt-8 pb-4 sm:pt-12 sm:pb-6 lg:pt-[100px] lg:pb-[50px] overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 lg:px-24 bg-neutral-100 inline-flex flex-col justify-end items-center gap-2.5">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-8">
          
          {/* Header */}
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch pt-1 flex flex-col justify-start items-start">
              <h2 className="self-stretch justify-center text-slate-900 text-3xl font-medium font-['Plus_Jakarta_Sans'] leading-[50px]">
                Clinical Experience
              </h2>
            </div>
            <p className="w-full max-w-[526px] justify-center text-slate-500 text-lg font-normal font-['Plus_Jakarta_Sans'] leading-7">
              A reflection of Dr. Langan&apos;s commitment to humanistic medicine and academic leadership.
            </p>
          </div>

          {/* Cards Grid / Row */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Card 1: Traumatic Brain Injury */}
            <div className="flex-1 self-stretch min-h-72 p-6 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-5 hover:shadow-md transition-shadow">
              <div className="self-stretch h-44 rounded-2xl flex flex-col justify-start items-start overflow-hidden relative">
                <Image
                  src="/images/clinical-tbi.png"
                  alt="Traumatic Brain Injury"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <h3 className="self-stretch justify-center text-slate-900 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-8">
                  Traumatic Brain Injury
                </h3>
                <p className="self-stretch justify-center text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Neurological rehabilitation focused on functional recovery and independence.
                </p>
              </div>
            </div>

            {/* Card 2: Spinal Cord Injury */}
            <div className="flex-1 self-stretch min-h-72 p-6 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-5 hover:shadow-md transition-shadow">
              <div className="self-stretch h-44 rounded-2xl flex flex-col justify-start items-start overflow-hidden relative">
                <Image
                  src="/images/clinical-spinal.png"
                  alt="Spinal Cord Injury"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <h3 className="self-stretch justify-center text-slate-900 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-8">
                  Spinal Cord Injury
                </h3>
                <p className="self-stretch justify-center text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Rehabilitation focused on mobility, strength, and functional recovery.
                </p>
              </div>
            </div>

            {/* Card 3: Transplant Rehabilitation */}
            <div className="flex-1 self-stretch min-h-72 p-6 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-start items-start gap-5 hover:shadow-md transition-shadow">
              <div className="self-stretch h-44 rounded-2xl flex flex-col justify-start items-start overflow-hidden relative">
                <Image
                  src="/images/clinical-transplant.png"
                  alt="Transplant Rehabilitation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <h3 className="self-stretch justify-center text-slate-900 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-8">
                  Transplant Rehabilitation
                </h3>
                <p className="self-stretch justify-center text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans'] leading-relaxed">
                  Rehabilitation supporting strength, mobility, and recovery after major illness and transplant.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

