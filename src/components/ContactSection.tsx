'use client';

import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight, Lock, ChevronDown, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTime: 'Morning — 8:30 am to 12:00 pm',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#f4f4f4] flex justify-center py-8 sm:py-12 lg:py-[100px] overflow-hidden">
      <div className="w-full max-w-[1440px] px-6 lg:px-24 flex flex-col justify-center items-center">
        <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Heading + Direct Contact Card */}
          <div className="lg:col-span-5 flex flex-col justify-between items-start gap-8">
            {/* Heading & Subtitle */}
            <div className="flex flex-col justify-start items-start gap-4">
              <h2 className="text-slate-900 text-3xl sm:text-4xl font-medium font-['Plus_Jakarta_Sans'] leading-[1.25] tracking-tight">
                Begin Your Recovery
              </h2>
              <p className="text-slate-500 text-base sm:text-lg font-normal font-['Plus_Jakarta_Sans'] leading-relaxed max-w-[500px]">
                Connect with Dr. Langan’s office to discuss an<br className="hidden sm:inline" /> appointment or rehabilitation care.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="w-full max-w-[420px] p-6 bg-white rounded-[20px] border border-slate-200/70 shadow-sm flex flex-col justify-start items-start gap-6 mt-auto">
              <span className="text-slate-500 text-xs font-semibold font-['Plus_Jakarta_Sans'] uppercase tracking-wider">
                DIRECT CONTACT
              </span>

              <div className="flex flex-col justify-start items-start gap-6 w-full">
                {/* Location */}
                <div className="flex justify-start items-center gap-4">
                  <div className="size-11 bg-emerald-50 rounded-full flex justify-center items-center shrink-0">
                    <img src="/images/contact-location.png" alt="Location" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <span className="text-slate-900 text-base font-semibold font-['Plus_Jakarta_Sans'] leading-snug">
                      San Antonio, Texas
                    </span>
                    <span className="text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans']">
                      Serving patients in Texas and beyond.
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex justify-start items-center gap-4">
                  <div className="size-11 bg-emerald-50 rounded-full flex justify-center items-center shrink-0">
                    <img src="/images/contact-phone.png" alt="Phone" className="w-5 h-5 object-contain" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <a
                      href="tel:2106447902"
                      className="text-slate-900 text-base font-semibold font-['Plus_Jakarta_Sans'] leading-snug hover:text-teal-600 transition-colors"
                    >
                      210-644-7902
                    </a>
                    <span className="text-slate-500 text-sm font-normal font-['Plus_Jakarta_Sans']">
                      Call our office for assistance.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-11 shadow-[0px_4px_24px_-2px_rgba(16,27,58,0.04)] flex flex-col justify-start items-start gap-8 h-full">
              
              {/* Form Title */}
              <div className="flex flex-col justify-start items-start gap-1.5">
                <h3 className="text-slate-900 text-2xl sm:text-3xl font-semibold font-['Plus_Jakarta_Sans'] leading-snug">
                  Send a Message
                </h3>
                <p className="text-slate-500 text-base font-normal font-['Plus_Jakarta_Sans']">
                  We’ll get back to you as soon as possible.
                </p>
              </div>

              {isSubmitted ? (
                <div className="w-full py-12 flex flex-col justify-center items-center text-center gap-4 bg-teal-50/50 rounded-xl border border-teal-100">
                  <CheckCircle2 className="w-12 h-12 text-teal-600" />
                  <h4 className="text-slate-900 text-xl font-semibold font-['Plus_Jakarta_Sans']">
                    Thank you! Your message has been sent.
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md font-['Plus_Jakarta_Sans']">
                    Dr. Langan’s clinical team will review your message and reach out to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 text-teal-600 font-medium text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans']">
                        First Name <span className="text-teal-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full h-12 px-4 bg-white rounded-lg border border-slate-200 text-slate-900 text-sm font-['Plus_Jakarta_Sans'] placeholder:text-gray-400 focus:outline-none focus:border-teal-600 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans']">
                        Last Name <span className="text-teal-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full h-12 px-4 bg-white rounded-lg border border-slate-200 text-slate-900 text-sm font-['Plus_Jakarta_Sans'] placeholder:text-gray-400 focus:outline-none focus:border-teal-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                    <div className="flex flex-col gap-2">
                      <label className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans']">
                        Email <span className="text-teal-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 bg-white rounded-lg border border-slate-200 text-slate-900 text-sm font-['Plus_Jakarta_Sans'] placeholder:text-gray-400 focus:outline-none focus:border-teal-600 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans']">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 bg-white rounded-lg border border-slate-200 text-slate-900 text-sm font-['Plus_Jakarta_Sans'] placeholder:text-gray-400 focus:outline-none focus:border-teal-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Best Time to Call Dropdown */}
                  <div className="flex flex-col gap-2 w-full">
                    <label className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans']">
                      Best Time to Call
                    </label>
                    <div className="relative w-full">
                      <select
                        value={formData.bestTime}
                        onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                        className="w-full h-12 px-4 pr-10 bg-white rounded-lg border border-slate-200 text-slate-900 text-sm font-['Plus_Jakarta_Sans'] appearance-none focus:outline-none focus:border-teal-600 transition-colors cursor-pointer"
                      >
                        <option value="Morning — 8:30 am to 12:00 pm">Morning — 8:30 am to 12:00 pm</option>
                        <option value="Afternoon — 12:00 pm to 4:00 pm">Afternoon — 12:00 pm to 4:00 pm</option>
                        <option value="Evening — 4:00 pm to 7:00 pm">Evening — 4:00 pm to 7:00 pm</option>
                      </select>
                      <img src="/images/contact-chevron.png" alt="Select" className="w-4 h-4 object-contain absolute right-4 top-4 pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="flex flex-col gap-2 w-full pb-2">
                    <label className="text-slate-900 text-sm font-medium font-['Plus_Jakarta_Sans']">
                      Message <span className="text-teal-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-lg border border-slate-200 text-slate-900 text-sm font-['Plus_Jakarta_Sans'] placeholder:text-gray-400 focus:outline-none focus:border-teal-600 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full h-12 bg-black hover:bg-neutral-800 active:scale-[0.99] text-white text-base font-semibold font-['Plus_Jakarta_Sans'] rounded-[41px] flex justify-center items-center gap-2.5 transition-all cursor-pointer shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  >
                    <span>Send Message</span>
                    <img src="/images/contact-arrow.png" alt="Arrow" className="w-4 h-4 object-contain" />
                  </button>

                  {/* Security Note */}
                  <div className="pt-2 flex justify-center items-center gap-2 text-slate-500 text-xs font-normal font-['Plus_Jakarta_Sans'] text-center">
                    <img src="/images/contact-lock.png" alt="Lock" className="w-3.5 h-3.5 object-contain shrink-0" />
                    <span>Your information is secure and will only be used to respond to your inquiry.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
