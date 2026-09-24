'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: 'What does a Physical Medicine & Rehabilitation physician do?',
      answer:
        'A Physical Medicine & Rehabilitation (PM&R) physician, or physiatrist, specializes in diagnosing, treating, and managing musculoskeletal and neurological conditions to restore optimal function, mobility, and independence.',
    },
    {
      question: 'What conditions does Dr. Langan treat?',
      answer:
        'Dr. Langan treats traumatic brain injuries, spinal cord injuries, complex neurological conditions, musculoskeletal pain, post-surgical recovery, and transplant rehabilitation.',
    },
    {
      question: 'When should I consider rehabilitation care?',
      answer:
        'You should consider rehabilitation care if you are recovering from surgery, an injury, or managing chronic mobility challenges that affect your daily functional independence.',
    },
    {
      question: 'What can I expect during my evaluation?',
      answer:
        'During your evaluation, Dr. Langan will conduct a comprehensive biomechanical assessment, review your medical history, and outline an individualized functional recovery plan.',
    },
    {
      question: 'Does rehabilitation only involve physical therapy?',
      answer:
        'No. Rehabilitation involves a holistic approach including osteopathic manipulative medicine, targeted exercise therapy, medical management, and functional restoration protocols.',
    },
    {
      question: 'How can I request an appointment?',
      answer:
        'You can request an appointment by clicking the "Book Appointment" button at the top of the page or contacting our clinical office directly.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white flex justify-center py-8 sm:py-12 lg:py-[100px] overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 lg:px-24 bg-white inline-flex flex-col justify-center items-center">
        <div className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-5 flex flex-col justify-start items-start pt-2">
            <h2 className="text-[#0F172A] text-3xl sm:text-4xl font-medium font-['Plus_Jakarta_Sans'] leading-[1.25] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Right Accordion Column */}
          <div className="lg:col-span-7 flex flex-col justify-start items-start gap-4 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="w-full bg-[#f2f2f2] hover:bg-[#eaeaea] transition-colors rounded-[20px] overflow-hidden group"
                >
                  {/* Question Row */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 sm:py-6 flex justify-between items-center gap-4 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="flex-1 text-[#0F172A] text-base sm:text-[17px] font-medium font-['Plus_Jakarta_Sans'] leading-snug lg:whitespace-nowrap">
                      {faq.question}
                    </span>
                    <div className="size-8 bg-[#dcdcdc] group-hover:bg-[#d0d0d0] rounded-lg flex justify-center items-center shrink-0 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#0F172A]" strokeWidth={2.5} />
                      ) : (
                        <Plus className="w-4 h-4 text-[#0F172A]" strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {/* Answer Box */}
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base font-normal font-['Plus_Jakarta_Sans'] leading-relaxed border-t border-neutral-300/50 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
