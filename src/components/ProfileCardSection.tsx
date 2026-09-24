'use client';

import React from 'react';
import Image from 'next/image';

export const ProfileCardSection: React.FC = () => {
  return (
    <section id="profile-card" className="w-full bg-neutral-100 flex justify-center py-8 sm:py-12 lg:py-[100px] overflow-hidden">
      {/* 1440px Outer Container */}
      <div className="w-full max-w-[1440px] px-8 lg:px-24 bg-neutral-100 inline-flex flex-col justify-end items-center gap-2.5">
        
        {/* Main White Card Container */}
        <div className="w-full max-w-[1280px] p-8 lg:p-10 bg-white rounded-[40px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-slate-200 flex flex-col justify-start items-start">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-10 lg:gap-14">
            
            {/* Left Image Frame */}
            <div className="w-full lg:w-[480px] min-h-[440px] lg:min-h-[520px] relative bg-slate-100 rounded-[20px] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)] flex justify-center items-center overflow-hidden shrink-0">
              <Image
                src="/images/doctor-profile-card.png"
                alt="Dr. Blaise Langan, DO"
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Right Details Block */}
            <div className="w-full lg:w-[621px] flex flex-col justify-between items-start gap-6">
              
              {/* Header & Bio Text */}
              <div className="w-full flex flex-col justify-start items-start gap-3">
                <div className="w-full pb-2">
                  <h2 className="text-slate-900 text-4xl lg:text-5xl font-medium font-['Plus_Jakarta_Sans'] leading-[1.15]">
                    Dr. Blaise Langan, DO
                  </h2>
                </div>
                <div className="w-full max-w-[576px] pb-4">
                  <p className="text-slate-500 text-base lg:text-lg font-normal font-['Plus_Jakarta_Sans'] leading-7">
                    A Physical Medicine &amp; Rehabilitation physician specializing in complex rehabilitation and functional recovery, with a focus on restoring mobility, improving function, and helping patients regain greater independence throughout their recovery.
                  </p>
                </div>
              </div>

              {/* 4 Info Cards Grid (2x2) */}
              <div className="w-full flex flex-col gap-4">
                
                {/* Row 1: Education & Training */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                  
                  {/* Education */}
                  <div className="w-full sm:w-72 p-4 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(241,245,249,1.00)] outline outline-1 outline-offset-[-1px] outline-slate-200/70 flex flex-col justify-start items-start gap-2">
                    <div className="text-teal-600 text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase leading-4 tracking-wide">
                      EDUCATION
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                      <div className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-5">
                        Texas College of Osteopathicc Medicine
                      </div>
                      <div className="text-slate-500 text-xs font-normal font-['Plus_Jakarta_Sans'] leading-4">
                        Doctor of Osteopathic Medicine (DO)
                      </div>
                    </div>
                  </div>

                  {/* Training */}
                  <div className="w-full sm:w-72 p-4 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(241,245,249,1.00)] outline outline-1 outline-offset-[-1px] outline-slate-200/70 flex flex-col justify-start items-start gap-2">
                    <div className="text-teal-600 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                      TRAINING
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                      <div className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-5">
                        UT Health San Antonio
                      </div>
                      <div className="text-slate-500 text-xs font-normal font-['Inter'] leading-4">
                        PM&amp;R Residency Program
                      </div>
                    </div>
                  </div>

                </div>

                {/* Row 2: Specialty & Approach */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                  
                  {/* Specialty */}
                  <div className="w-full sm:w-72 p-4 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(241,245,249,1.00)] outline outline-1 outline-offset-[-1px] outline-slate-200/70 flex flex-col justify-start items-start gap-2">
                    <div className="text-teal-600 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                      SPECIALTY
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                      <div className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-5">
                        Physical Medicine &amp; Rehab
                      </div>
                      <div className="text-slate-500 text-xs font-normal font-['Inter'] leading-4">
                        Musculoskeletal &amp; Neurologic Care
                      </div>
                    </div>
                  </div>

                  {/* Approach */}
                  <div className="w-full sm:w-72 p-4 bg-white rounded-xl shadow-[0px_1px_2px_0px_rgba(241,245,249,1.00)] outline outline-1 outline-offset-[-1px] outline-slate-200/70 flex flex-col justify-start items-start gap-2">
                    <div className="text-teal-600 text-xs font-bold font-['Inter'] uppercase leading-4 tracking-wide">
                      APPROACH
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-1">
                      <div className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-5">
                        Biomechanics &amp; Function
                      </div>
                      <div className="text-slate-500 text-xs font-normal font-['Inter'] leading-4">
                        Patient-Centered Recovery Plans
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Social Link Circular Buttons */}
              <div className="pt-4 flex items-center gap-3">
                <a
                  href="#"
                  className="size-12 bg-gray-100 hover:bg-slate-200 rounded-full outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Image
                    src="/images/icon-linkedin.png"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className="size-4 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="size-12 bg-gray-100 hover:bg-slate-200 rounded-full outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center transition-colors"
                  aria-label="Email Contact"
                >
                  <Image
                    src="/images/icon-email.png"
                    alt="Email"
                    width={18}
                    height={18}
                    className="size-4 object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="size-12 bg-gray-100 hover:bg-slate-200 rounded-full outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center transition-colors"
                  aria-label="CV Document"
                >
                  <Image
                    src="/images/icon-document.png"
                    alt="Document"
                    width={18}
                    height={18}
                    className="size-4 object-contain"
                  />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
