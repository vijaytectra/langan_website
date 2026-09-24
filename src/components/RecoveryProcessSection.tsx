'use client';

import React from 'react';

export const RecoveryProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Assess',
      line1: 'Understand your condition',
      line2: 'and functional needs.',
    },
    {
      number: '02',
      title: 'Plan',
      line1: 'Create a focused plan',
      line2: 'for your recovery.',
    },
    {
      number: '03',
      title: 'Restore',
      line1: 'Improve movement, strength,',
      line2: 'and everyday function.',
    },
    {
      number: '04',
      title: 'Progress',
      line1: 'Build confidence and',
      line2: 'greater independence.',
    },
  ];

  return (
    <section id="recovery-process" className="w-full bg-[#f4f6f8] flex justify-center pt-4 pb-8 sm:pt-6 sm:pb-12 lg:pt-[50px] lg:pb-[100px] overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 lg:px-24 bg-[#f4f6f8] inline-flex flex-col justify-end items-center gap-2.5">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-8">
          
          {/* Header */}
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch pt-1 flex flex-col justify-start items-start">
              <h2 className="self-stretch justify-center text-slate-900 text-3xl font-medium font-['Plus_Jakarta_Sans'] leading-[50px]">
                Assess first. Restore with purpose.
              </h2>
            </div>
            <p className="w-full max-w-[526px] justify-center text-slate-500 text-lg font-normal font-['Plus_Jakarta_Sans'] leading-7">
              &ldquo;A focused path from assessment to functional recovery.&rdquo;
            </p>
          </div>

          {/* Steps Timeline Container */}
          <div className="self-stretch pt-8 flex flex-col justify-start items-start">
            <div className="self-stretch relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              
              {/* Horizontal Connecting Line (Desktop) */}
              <div 
                aria-hidden="true" 
                className="hidden lg:block w-[78%] h-[1.5px] left-[11%] top-[41px] absolute bg-[#94e2d5] pointer-events-none z-0" 
              />

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="w-full p-6 bg-white rounded-[32px] flex flex-col justify-start items-start relative z-10 shadow-none hover:shadow-md transition-shadow"
                >
                  {/* Number Badge */}
                  <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="p-1.5 bg-[#f0f5fc] rounded-full inline-flex justify-center items-center shrink-0">
                      <div className="size-11 bg-white rounded-full border border-[#dbe7f8] flex justify-center items-center">
                        <span className="text-slate-900 text-base sm:text-lg font-normal font-['Plus_Jakarta_Sans']">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="w-full pt-6 flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-start">
                      <h3 className="text-gray-900 text-base font-medium font-['Inter'] leading-6">
                        {step.title}
                      </h3>
                    </div>
                    <div className="self-stretch pt-2 flex flex-col justify-start items-start">
                      <p className="w-full text-gray-500 text-sm font-normal font-['Inter'] leading-6">
                        {step.line1}
                        <br />
                        {step.line2}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

