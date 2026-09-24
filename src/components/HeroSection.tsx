'use client';

import React, { useState } from 'react';
import { Star, Menu, X } from 'lucide-react';

interface HeroSectionProps {
  onBookClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <section className="w-full bg-radial-custom overflow-hidden flex justify-center items-center">
      
      {/* ========================================== */}
      {/* DESKTOP VIEW (≥1024px) - EXACT FIXED CANVAS */}
      {/* ========================================== */}
      <div className="hidden lg:block relative w-[1440px] h-[810px] bg-radial-custom shrink-0 overflow-hidden">
        
        {/* 1. Watermarked Background "Langan" */}
        <div 
          aria-hidden="true"
          className="absolute left-[74px] top-[59.39px] text-[#cbece6] text-[357.83px] font-bold font-jakarta leading-none select-none pointer-events-none z-0 tracking-tight"
        >
          Langan
        </div>

        {/* 2. Top Navigation Header Bar */}
        <header className="absolute w-[1240px] h-11 left-[100px] top-[32px] flex justify-between items-center z-30">
          {/* Logo */}
          <div className="h-10 flex justify-center items-center gap-2.5">
            <a 
              href="#" 
              className="text-neutral-900 text-xl font-normal font-alegreya uppercase leading-5 tracking-wide hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              BLAISE LANGAN DO
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="absolute left-[378.16px] top-[2.20px] h-10 flex justify-center items-center gap-2">
            <a 
              href="#about" 
              className="w-24 h-10 px-4 py-2.5 flex items-center justify-center text-neutral-900 text-sm font-medium font-inter leading-5 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              About
            </a>
            <a 
              href="#expertise" 
              className="w-40 h-10 px-4 py-2.5 flex items-center justify-center text-neutral-900 text-sm font-medium font-inter leading-5 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              Area of Expertise
            </a>
            <a 
              href="#recovery-process" 
              className="h-10 px-4 py-2.5 flex items-center justify-center text-neutral-900 text-sm font-medium font-inter leading-5 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              Recovery Process
            </a>
            <a 
              href="#faq" 
              className="h-10 px-4 py-2.5 flex items-center justify-center text-neutral-900 text-sm font-medium font-inter leading-5 hover:text-teal-600 transition-colors whitespace-nowrap"
            >
              FAQ
            </a>
          </nav>

          {/* Top Right CTA Button */}
          <button
            onClick={onBookClick}
            className="w-48 h-12 px-5 py-[5px] bg-black hover:bg-neutral-800 rounded-[40px] flex justify-center items-center gap-2.5 transition-transform active:scale-95 shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span className="text-white text-base font-medium font-montserrat leading-5 whitespace-nowrap">
              Book Appointment
            </span>
          </button>
        </header>

        {/* 3. Central Doctor Cutout Image */}
        <div className="absolute w-[533px] h-[746px] left-[454px] top-[111px] z-10 pointer-events-none">
          <img
            src="/images/doctor-hero.png"
            alt="Dr. Blaise Langan DO"
            className="w-[533px] h-[746px] object-contain object-top"
          />
        </div>

        {/* 4. Bottom Content Row */}
        <div className="absolute w-[1240px] left-[100px] bottom-[44px] flex justify-between items-end z-20">
          
          {/* Left Block: Headline & Bottom CTA Button */}
          <div className="w-[456.93px] flex flex-col justify-start items-start gap-8">
            <div className="w-[456.93px] flex flex-col justify-start items-start">
              <h1 className="w-[457px] text-[52px] font-medium font-montserrat leading-[58px] tracking-tight">
                <span className="text-neutral-900">Specialized Care<br />for </span>
                <span className="text-teal-600">Recovery</span>
              </h1>
            </div>

            <button
              onClick={onBookClick}
              className="w-56 h-12 px-5 py-[5px] bg-black hover:bg-neutral-800 rounded-[40px] flex justify-center items-center gap-2.5 transition-transform active:scale-95 shadow-md whitespace-nowrap cursor-pointer"
            >
              <span className="text-white text-base font-medium font-montserrat leading-5 whitespace-nowrap">
                Book Appointment
              </span>
            </button>
          </div>

          {/* Right Block: Overlapping Circle Avatars & 5 Rating Stars */}
          <div className="w-[208px] flex flex-col justify-center items-end gap-3 shrink-0">
            {/* 4 Overlapping Avatars */}
            <img
              src="/images/hero-avatars-trimmed.png"
              alt="Doctor Ratings"
              className="w-[208px] h-auto object-contain shrink-0"
            />

            {/* 5 Rating Stars - shifted slightly left */}
            <div className="w-[208px] flex justify-end items-center gap-[5px] pr-6 overflow-hidden">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <Star key={starIndex} className="w-5 h-5 fill-[#ff9500] text-[#ff9500] shrink-0" />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ========================================== */}
      {/* MOBILE / TABLET VIEW (<1024px) - RESPONSIVE */}
      {/* ========================================== */}
      <div className="block lg:hidden w-full bg-radial-custom py-6 sm:py-10 px-4 flex flex-col items-center gap-5 sm:gap-6 relative overflow-hidden">
        
        {/* Mobile Header */}
        <div className="w-full flex justify-between items-center z-30 pt-2">
          <a href="#" className="text-neutral-900 text-lg font-normal font-alegreya uppercase tracking-wide">
            BLAISE LANGAN DO
          </a>
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className="px-4 py-2 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium rounded-full shadow-sm"
            >
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMobileMenuOpen && (
          <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl flex flex-col gap-4 z-40 border border-slate-200/80">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-900 text-base font-medium py-2 border-b border-slate-100"
            >
              About
            </a>
            <a
              href="#expertise"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-900 text-base font-medium py-2 border-b border-slate-100"
            >
              Area of Expertise
            </a>
            <a
              href="#recovery-process"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-900 text-base font-medium py-2 border-b border-slate-100"
            >
              Recovery Process
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-slate-900 text-base font-medium py-2"
            >
              FAQ
            </a>
          </div>
        )}

        {/* Mobile Top Content Block */}
        <div className="w-full flex flex-col items-center text-center gap-5 z-20 pt-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium font-montserrat leading-tight text-neutral-900 max-w-xs sm:max-w-md tracking-tight">
            Specialized Care for <span className="text-teal-600">Recovery</span>
          </h1>

          <button
            onClick={onBookClick}
            className="w-full max-w-xs sm:max-w-sm h-12 bg-black hover:bg-neutral-800 text-white text-base font-medium font-montserrat rounded-full shadow-md cursor-pointer transition-transform active:scale-95 z-30"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Doctor Cutout with Watermark "Langan" DIRECTLY BEHIND IT */}
        <div className="relative w-full max-w-sm sm:max-w-md flex justify-center items-center my-2">
          {/* Watermark text positioned behind doctor image */}
          <div 
            aria-hidden="true" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#cbece6] text-[100px] sm:text-[140px] md:text-[180px] font-bold font-jakarta leading-none select-none pointer-events-none z-0 tracking-tight whitespace-nowrap opacity-90"
          >
            Langan
          </div>

          {/* Doctor Cutout in front of watermark */}
          <img
            src="/images/doctor-hero.png"
            alt="Dr. Blaise Langan DO"
            className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] h-auto object-contain object-top drop-shadow-sm"
          />
        </div>

        {/* Mobile Ratings & Avatars */}
        <div className="w-full flex flex-col items-center gap-2.5 z-20 pb-4">
          <img
            src="/images/hero-avatars-trimmed.png"
            alt="Doctor Ratings"
            className="w-48 sm:w-56 h-auto object-contain"
          />
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((starIndex) => (
              <Star key={starIndex} className="w-4 h-4 fill-[#ff9500] text-[#ff9500]" />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
