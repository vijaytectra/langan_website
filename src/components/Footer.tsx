'use client';

import React from 'react';

interface FooterProps {
  onBookClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookClick }) => {
  return (
    <footer className="w-full bg-black text-white flex justify-center py-8 sm:py-12 lg:pt-[100px] lg:pb-[100px] overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-24 flex flex-col justify-between items-center gap-16">
        
        {/* Main Footer Content */}
        <div className="w-full max-w-[1240px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Brand Info & Tagline */}
          <div className="lg:col-span-5 flex flex-col justify-start items-start gap-6 pr-4">
            <div className="flex flex-col justify-start items-start gap-1">
              <h3 className="text-white text-2xl font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-[3.22px]">
                BLAISE LANGAN, DO
              </h3>
              <p className="text-white text-xs font-semibold font-['Plus_Jakarta_Sans'] uppercase tracking-widest leading-5">
                PHYSICAL MEDICINE &amp;<br />REHABILITATION
              </p>
            </div>

            {/* Cyan Accent Bar */}
            <div className="w-8 h-px bg-[#06b6d4] rounded-sm my-1" />

            {/* Tagline list */}
            <div className="flex flex-col justify-start items-start gap-1 text-white text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">
              <p>Restoring function.</p>
              <p>Expanding possibilities.</p>
              <p>Improving lives.</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col justify-start items-start gap-3.5 pt-1">
            <a href="#about" className="text-white text-base font-medium font-['Plus_Jakarta_Sans'] leading-6 hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#expertise" className="text-white text-base font-medium font-['Plus_Jakarta_Sans'] leading-6 hover:text-cyan-400 transition-colors">
              Expertise
            </a>
            <a href="#clinical-experience" className="text-white text-base font-medium font-['Plus_Jakarta_Sans'] leading-6 hover:text-cyan-400 transition-colors">
              Complex Recovery
            </a>
            <a href="#recognition" className="text-white text-base font-medium font-['Plus_Jakarta_Sans'] leading-6 hover:text-cyan-400 transition-colors">
              Recognition
            </a>
            <a href="#contact" className="text-white text-base font-medium font-['Plus_Jakarta_Sans'] leading-6 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Column 3: Location, Phone & CTA (with left vertical divider line) */}
          <div className="lg:col-span-4 flex flex-col justify-start items-start gap-8 lg:pl-10 lg:border-l border-[#696b6e] relative">
            {/* Location */}
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-white text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-widest">
                LOCATION
              </span>
              <span className="text-white text-xl font-semibold font-['Plus_Jakarta_Sans'] leading-8">
                San Antonio, Texas
              </span>
              <span className="text-white/80 text-sm font-normal font-['Plus_Jakarta_Sans']">
                Serving patients in Texas and beyond.
              </span>
            </div>

            {/* Phone */}
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-white text-xs font-bold font-['Plus_Jakarta_Sans'] uppercase tracking-widest">
                PHONE
              </span>
              <a
                href="tel:2106447902"
                className="text-white text-xl font-semibold font-['Plus_Jakarta_Sans'] leading-8 hover:text-cyan-400 transition-colors"
              >
                210-644-7902
              </a>
              <span className="text-white/80 text-sm font-normal font-['Plus_Jakarta_Sans']">
                Call our office for assistance.
              </span>
            </div>

            {/* Contact Us Button */}
            <button
              onClick={onBookClick}
              className="w-full sm:w-80 h-12 bg-white hover:bg-neutral-200 active:scale-[0.99] text-black text-base font-semibold font-['Plus_Jakarta_Sans'] rounded-[41px] flex justify-center items-center cursor-pointer transition-all shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
            >
              Contact Us
            </button>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="w-full max-w-[1240px] pt-6 border-t border-[#696b6e] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-white/70 text-[11px] sm:text-xs font-normal font-['Plus_Jakarta_Sans']">
            © 2026 Blaise Langan, DO. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-['Plus_Jakarta_Sans']">
            <a href="#" className="text-white/80 hover:text-white font-medium uppercase tracking-wider sm:tracking-widest whitespace-nowrap transition-colors">
              PRIVACY POLICY
            </a>
            <span className="text-slate-500 font-light select-none">|</span>
            <a href="#" className="text-white/80 hover:text-white font-medium uppercase tracking-wider sm:tracking-widest whitespace-nowrap transition-colors">
              ACCESSIBILITY
            </a>
            <span className="text-slate-500 font-light select-none">|</span>
            <a href="#" className="text-white/80 hover:text-white font-medium uppercase tracking-wider sm:tracking-widest whitespace-nowrap transition-colors">
              TERMS OF SERVICE
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
