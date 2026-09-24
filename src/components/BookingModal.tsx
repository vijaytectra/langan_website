'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedService, setSelectedService] = useState('Orthopedic Rehabilitation');
  const [selectedDate, setSelectedDate] = useState('2026-09-28');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const services = [
    'Orthopedic Rehabilitation',
    'Osteopathic Manipulative Treatment (OMT)',
    'Sports Injury Recovery',
    'Post-Surgical Rehabilitation',
    'Spine & Chronic Pain Relief',
    'Initial Osteopathic Consultation',
  ];

  const availableTimes = [
    '09:00 AM',
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
  ];

  const availableDates = [
    { day: 'Mon', date: 'Sep 28' },
    { day: 'Tue', date: 'Sep 29' },
    { day: 'Wed', date: 'Sep 30' },
    { day: 'Thu', date: 'Oct 01' },
    { day: 'Fri', date: 'Oct 02' },
  ];

  const handleNext = () => {
    if (step < 4) setStep((prev) => (prev + 1) as any);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => (prev - 1) as any);
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-slate-100 bg-slate-50/80">
            <div>
              <h3 className="font-montserrat font-bold text-lg text-neutral-900">
                Book Appointment with Dr. Langan DO
              </h3>
              <p className="text-xs font-inter text-slate-500">
                Step {step} of 3 — Select your visit details
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-neutral-900 rounded-full hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-4">
                <label className="block text-sm font-semibold font-montserrat text-neutral-900">
                  Select Specialty / Reason for Visit
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setSelectedService(service)}
                      className={`w-full p-3.5 rounded-2xl border text-left font-inter text-sm font-medium transition-all flex items-center justify-between ${
                        selectedService === service
                          ? 'border-teal-600 bg-teal-50/70 text-teal-900 font-semibold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <span>{service}</span>
                      {selectedService === service && (
                        <CheckCircle2 className="w-5 h-5 text-teal-600" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-neutral-950 hover:bg-teal-600 text-white rounded-full font-montserrat text-sm font-semibold flex items-center gap-2 transition-colors"
                  >
                    <span>Next: Select Time</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Time Picker */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold font-montserrat text-neutral-900 mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-600" />
                    <span>Select Date</span>
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {availableDates.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedDate(item.date)}
                        className={`p-3 rounded-2xl border text-center transition-all ${
                          selectedDate === item.date
                            ? 'border-teal-600 bg-teal-600 text-white shadow-md'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        <div className="text-[10px] uppercase tracking-wider font-semibold opacity-80">{item.day}</div>
                        <div className="text-xs font-bold mt-0.5">{item.date}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold font-montserrat text-neutral-900 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Available Time Slots</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl border text-center text-xs font-semibold font-inter transition-all ${
                          selectedTime === time
                            ? 'border-teal-600 bg-teal-50 text-teal-800 ring-2 ring-teal-600'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={handleBack}
                    className="px-5 py-2.5 text-slate-600 hover:text-neutral-900 font-inter text-sm font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-neutral-950 hover:bg-teal-600 text-white rounded-full font-montserrat text-sm font-semibold flex items-center gap-2 transition-colors"
                  >
                    <span>Next: Patient Info</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info Form */}
            {step === 3 && (
              <form onSubmit={handleFinish} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold font-inter text-slate-700 mb-1">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="John Doe"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-inter text-neutral-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold font-inter text-slate-700 mb-1">Phone Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-inter text-neutral-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold font-inter text-slate-700 mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm font-inter text-neutral-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold font-inter text-slate-700 mb-1">Medical Symptoms / Insurance Notes (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Describe injury or symptoms..."
                    className="w-full p-3 rounded-xl border border-slate-200 text-sm font-inter text-neutral-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600"
                  />
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-2.5 text-slate-600 hover:text-neutral-900 font-inter text-sm font-medium"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-montserrat text-sm font-semibold flex items-center gap-2 transition-colors shadow-lg"
                  >
                    <span>Confirm Booking</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Success Confirmation */}
            {step === 4 && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold font-montserrat text-neutral-900">
                  Appointment Requested!
                </h4>
                <p className="text-slate-600 font-inter text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-neutral-900">{formData.fullName || 'Patient'}</span>. Your appointment request for <span className="font-semibold text-teal-700">{selectedService}</span> on <span className="font-semibold text-neutral-900">{selectedDate} at {selectedTime}</span> has been received.
                </p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs font-inter text-slate-600 max-w-sm mx-auto">
                  <span className="block font-bold text-neutral-800">Booking Reference: #BLD-{Math.floor(100000 + Math.random() * 900000)}</span>
                  Our clinical patient coordinator will call you within 2 business hours to verify insurance coverage.
                </div>

                <div className="pt-4">
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-neutral-950 text-white rounded-full font-montserrat text-sm font-semibold hover:bg-teal-600 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
