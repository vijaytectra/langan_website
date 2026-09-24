'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { RecognitionSection } from '@/components/RecognitionSection';
import { ProfileCardSection } from '@/components/ProfileCardSection';
import { ExpertiseSection } from '@/components/ExpertiseSection';
import { ClinicalExperienceSection } from '@/components/ClinicalExperienceSection';
import { RecoveryProcessSection } from '@/components/RecoveryProcessSection';
import { FaqSection } from '@/components/FaqSection';
import { ContactSection } from '@/components/ContactSection';
import { BookingModal } from '@/components/BookingModal';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col justify-between bg-white overflow-hidden">
      {/* 1. Hero Section matching user design template */}
      <HeroSection onBookClick={handleOpenBooking} />

      {/* 2. Recognition & Distinction Section */}
      <RecognitionSection />

      {/* 3. Dr. Blaise Langan DO Profile Card Section */}
      <ProfileCardSection />

      {/* 4. Areas of Clinical Expertise */}
      <ExpertiseSection onBookClick={handleOpenBooking} />

      {/* 5. Clinical Experience Section */}
      <ClinicalExperienceSection />

      {/* 6. Recovery Process Section */}
      <RecoveryProcessSection />

      {/* 7. Frequently Asked Questions Section */}
      <FaqSection />

      {/* 8. Begin Your Recovery Contact Section */}
      <ContactSection />

      {/* 9. Footer */}
      <Footer onBookClick={handleOpenBooking} />

      {/* Interactive Appointment Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}



