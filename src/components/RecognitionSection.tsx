'use client';

import React from 'react';
import Image from 'next/image';

export const RecognitionSection: React.FC = () => {
  return (
    <section id="recognition" className="w-full bg-white flex justify-center py-8 sm:py-12 lg:py-[100px] overflow-hidden">
      {/* Centered 1440px Outer Frame */}
      <div className="w-full max-w-[1440px] px-8 lg:px-20 bg-white flex flex-col justify-start items-center">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-8 sm:gap-12 lg:gap-20">
          
          {/* Top Section: 3 Equal Columns (Title Left + Card 01 Middle + Card 02 Right) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Column 1 Top: Title & Description */}
            <div className="flex flex-col justify-center items-start gap-4 py-2">
              <div className="w-full pt-1 flex flex-col justify-start items-start">
                <h2 className="text-slate-900 text-3xl sm:text-4xl font-medium font-jakarta leading-[50px]">
                  Recognition &amp; <br />
                  Distinction
                </h2>
              </div>
              <p className="w-full text-slate-500 text-lg font-normal font-jakarta leading-7">
                A reflection of Dr. Langan&apos;s<br />
                commitment to humanistic medicine<br />
                and academic leadership.
              </p>
            </div>

            {/* Column 2 Top: Card 01 - Gold Medal */}
            <div className="p-6 relative bg-[#f2f8fa] flex flex-col justify-between items-start gap-6 rounded-2xl overflow-hidden h-full min-h-[230px]">
              <div className="size-14 bg-white/60 rounded-[60px] flex flex-col justify-center items-center shrink-0">
                <span className="text-teal-600 text-2xl font-medium font-jakarta leading-none">
                  01
                </span>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <div className="w-full flex flex-col justify-start items-start">
                  <h3 className="text-slate-900 text-2xl font-medium font-jakarta leading-snug">
                    Gold Humanism<br />
                    Honor Society
                  </h3>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <div className="text-slate-500 text-base font-medium font-jakarta leading-6">
                    2020 – Student Inductee
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm font-normal font-jakarta leading-5">
                    Texas College of Osteopathic Medicine
                  </div>
                </div>
              </div>

              {/* Gold Medal Badge (Top Right) */}
              <Image
                src="/images/gold-medal.png"
                alt="Gold Humanism Honor Society Medal"
                width={120}
                height={120}
                priority
                className="size-28 sm:size-32 right-2 top-2 absolute object-contain pointer-events-none opacity-90"
              />
            </div>

            {/* Column 3 Top: Card 02 - Laurel Wreath */}
            <div className="p-6 relative bg-[#f2f8fa] flex flex-col justify-between items-start gap-6 rounded-2xl overflow-hidden h-full min-h-[230px]">
              <div className="size-14 bg-white/60 rounded-[60px] flex flex-col justify-center items-center shrink-0">
                <span className="text-teal-600 text-2xl font-medium font-jakarta leading-none">
                  02
                </span>
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
                <div className="w-full flex flex-col justify-start items-start">
                  <h3 className="text-slate-900 text-2xl font-medium font-jakarta leading-snug">
                    Gold Humanism<br />
                    Honor Society
                  </h3>
                </div>
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <div className="text-slate-500 text-base font-medium font-jakarta leading-6">
                    Chapter President
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm font-normal font-jakarta leading-5">
                    Texas College of Osteopathic Medicine
                  </div>
                </div>
              </div>

              {/* Laurel Wreath Badge (Top Right) */}
              <Image
                src="/images/laurel-wreath.png"
                alt="Gold Humanism Honor Society Chapter President Laurel"
                width={120}
                height={120}
                priority
                className="size-28 sm:size-32 right-2 top-2 absolute object-contain pointer-events-none opacity-90"
              />
            </div>

          </div>

          {/* Bottom Traumatic Brain Injury Section: 3 Equal Columns */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <h3 className="w-full text-slate-900 text-xl font-normal font-jakarta leading-8">
              Traumatic Brain Injury
            </h3>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* Column 1 Bottom: Card 1 (Medical Director) */}
              <div className="p-5 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-4 shadow-none h-full">
                <div className="size-16 bg-white rounded-full flex justify-center items-center shrink-0">
                  <Image
                    src="/images/icon-hospital.png"
                    alt="Medical Director Icon"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="w-full text-slate-900 text-xl font-normal font-jakarta leading-8">
                    Medical Director
                  </div>
                  <div className="w-full text-slate-500 text-sm font-normal font-jakarta">
                    Reeves Rehabilitation Center
                  </div>
                </div>
              </div>

              {/* Column 2 Bottom: Card 2 (Assistant Professor) */}
              <div className="p-5 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-4 shadow-none h-full">
                <div className="size-16 bg-white rounded-full flex justify-center items-center shrink-0">
                  <Image
                    src="/images/icon-gradcap.png"
                    alt="Assistant Professor Icon"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="w-full text-slate-900 text-xl font-normal font-jakarta leading-8">
                    Assistant Professor
                  </div>
                  <div className="w-full text-slate-500 text-sm font-normal font-jakarta">
                    UT Health San Fransisco
                  </div>
                </div>
              </div>

              {/* Column 3 Bottom: Card 3 (Academic Speaker) */}
              <div className="p-5 bg-[#f2f8fa] rounded-3xl outline outline-1 outline-offset-[-1px] outline-slate-200 flex items-center gap-4 shadow-none h-full">
                <div className="size-16 bg-white rounded-full flex justify-center items-center shrink-0">
                  <Image
                    src="/images/icon-speaker.png"
                    alt="Academic Speaker Icon"
                    width={24}
                    height={24}
                    className="size-6 object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="w-full text-slate-900 text-xl font-normal font-jakarta leading-8">
                    Academic Speaker
                  </div>
                  <div className="w-full text-slate-500 text-sm font-normal font-jakarta">
                    TEXMED 25
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

