'use client';

import React from 'react';
import Image from 'next/image';

interface ExpertiseSectionProps {
  onBookClick?: () => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = () => {
  return (
    <section id="expertise" className="w-full bg-white flex justify-center py-8 sm:py-12 lg:py-[100px] overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 lg:px-24 bg-white inline-flex flex-col justify-end items-center gap-2.5">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-8">
          
          {/* Header */}
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch pt-1 flex flex-col justify-start items-start">
              <div className="self-stretch justify-center text-slate-900 text-3xl font-medium font-['Plus_Jakarta_Sans'] leading-[50px]">
                Areas of Expertise
              </div>
            </div>
            <div className="w-full max-w-[526px] justify-center text-slate-500 text-lg font-normal font-['Plus_Jakarta_Sans'] leading-7">
              A reflection of Dr. Langan&apos;s commitment to humanistic medicine and academic leadership.
            </div>
          </div>

          {/* Cards Row / Grid */}
          <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Neurological Rehabilitation */}
            <div className="flex-1 self-stretch min-h-72 p-8 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-between items-start">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="size-16 bg-[#e6f7f4] rounded-full inline-flex justify-center items-center">
                  <div className="size-8 relative flex items-center justify-center">
                    <Image
                      src="/images/icon-neurological.png"
                      alt="Neurological Rehabilitation"
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-8">
                    Neurological<br />Rehabilitation
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans']">
                  Care focused on restoring function and independence after neurological conditions.
                </div>
              </div>
            </div>

            {/* Card 2: Spinal Cord Rehabilitation */}
            <div className="flex-1 self-stretch min-h-72 p-8 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-between items-start">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="size-16 bg-[#e6f7f4] rounded-full inline-flex justify-center items-center">
                  <div className="size-8 relative flex items-center justify-center">
                    <Image
                      src="/images/icon-spinal.png"
                      alt="Spinal Cord Rehabilitation"
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-8">
                    Spinal Cord<br />Rehabilitation
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans']">
                  Rehabilitation focused on mobility, strength, and functional recovery after spinal cord injury.
                </div>
              </div>
            </div>

            {/* Card 3: Complex Rehabilitation */}
            <div className="flex-1 self-stretch min-h-72 p-8 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-between items-start">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="size-16 bg-[#e6f7f4] rounded-full inline-flex justify-center items-center">
                  <div className="size-8 relative flex items-center justify-center">
                    <Image
                      src="/images/icon-complex.png"
                      alt="Complex Rehabilitation"
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-8">
                    Complex<br />Rehabilitation
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans']">
                  Specialized care for complex conditions, injuries, and functional challenges.
                </div>
              </div>
            </div>

            {/* Card 4: Transplant Rehabilitation */}
            <div className="flex-1 self-stretch min-h-72 p-8 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex flex-col justify-between items-start">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="size-16 bg-[#e6f7f4] rounded-full inline-flex justify-center items-center">
                  <div className="size-8 relative flex items-center justify-center">
                    <Image
                      src="/images/icon-transplant.png"
                      alt="Transplant Rehabilitation"
                      width={32}
                      height={32}
                      className="size-8 object-contain"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start">
                  <div className="self-stretch justify-center text-slate-900 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-8">
                    Transplant<br />Rehabilitation
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans']">
                  Rehabilitation focused on restoring strength, mobility, and function after transplantation.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};






