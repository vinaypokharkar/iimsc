'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { PhoneInput } from '@/components/ui/phone-input';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

const POSITIONS = [
  'Senior Automotive Technician',
  'Industrial Welder (MIG/TIG)',
  'Registered Nurse',
  'Heavy Vehicle Driver',
  'Construction Site Supervisor',
  'General Application'
];

export default function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    position: '',
    resume: null as File | null,
    honeypot: '', // Hidden field for spam bots
    captchaAnswer: ''
  });
  
  const [captchaChallenge, setCaptchaChallenge] = useState({ n1: 0, n2: 0, answer: 0 });

  useEffect(() => {
    if (isOpen) {
      const n1 = Math.floor(Math.random() * 10) + 1;
      const n2 = Math.floor(Math.random() * 10) + 1;
      setCaptchaChallenge({ n1, n2, answer: n1 + n2 });
    }
  }, [isOpen]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update position when jobTitle prop changes
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        position: jobTitle === 'General Application' ? '' : jobTitle
      }));
    }
  }, [isOpen, jobTitle]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Validate file size (e.g., 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage('File size must be less than 2MB');
        return;
      }
      // Validate file type
      if (!['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
        setErrorMessage('Only PDF and Word documents are allowed');
        return;
      }
      setFormData({ ...formData, resume: file });
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Basic Client-side Validation
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.resume || !formData.position) {
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Phone Validation (Basic numeric check)
    const phoneRegex = /^\d{7,15}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/\D/g, ''))) {
      setErrorMessage('Please enter a valid phone number');
      return;
    }

    // 2. Captcha Validation
    if (parseInt(formData.captchaAnswer) !== captchaChallenge.answer) {
      setErrorMessage('Incorrect math answer. Please try again.');
      return;
    }

    // 3. Honeypot Validation (Client-side check, but also sent to server)
    if (formData.honeypot) {
      // Silently fail for bots
      onClose();
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const fullPhone = `${formData.countryCode} ${formData.phoneNumber}`;

    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phone', fullPhone);
    data.append('position', formData.position);
    data.append('resume', formData.resume);
    data.append('honeypot', formData.honeypot);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ 
          fullName: '', 
          email: '', 
          countryCode: '+91', 
          phoneNumber: '', 
          position: '', 
          resume: null, 
          honeypot: '', 
          captchaAnswer: '' 
        });
      }, 3000);

    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 relative">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-bold text-black">Apply Now</h2>
            <p className="text-sm text-gray-500 mt-1">Position: <span className="text-[#5C4DFF] font-medium">{jobTitle}</span></p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Application Sent!</h3>
              <p className="text-gray-600">We have received your details and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5C4DFF]/20 focus:border-[#5C4DFF] outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5C4DFF]/20 focus:border-[#5C4DFF] outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                  <PhoneInput
                    countryCode={formData.countryCode}
                    phoneNumber={formData.phoneNumber}
                    onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                    onPhoneNumberChange={(number) => setFormData({ ...formData, phoneNumber: number })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Position Applied For</label>
                  <select
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5C4DFF]/20 focus:border-[#5C4DFF] outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select a position</option>
                    {POSITIONS.map((pos) => (
                      <option key={pos} value={pos}>
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Resume (PDF/Word)</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-[#5C4DFF] hover:bg-[#5C4DFF]/5 transition-all group"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                    {formData.resume ? (
                      <div className="flex items-center justify-center gap-2 text-[#5C4DFF] font-medium">
                        <CheckCircle className="w-5 h-5" />
                        <span className="truncate max-w-[200px]">{formData.resume.name}</span>
                      </div>
                    ) : (
                      <div className="text-gray-500 group-hover:text-[#5C4DFF] transition-colors">
                        <Upload className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Click to upload or drag and drop</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Honeypot Field - Hidden from users */}
                <div className="hidden">
                  <input
                    type="text"
                    name="website"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Simple Math Captcha */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Security Check: What is {captchaChallenge.n1} + {captchaChallenge.n2}?
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.captchaAnswer}
                    onChange={(e) => setFormData({ ...formData, captchaAnswer: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#5C4DFF]/20 focus:border-[#5C4DFF] outline-none transition-all"
                    placeholder="Enter the sum"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#1E1E1E] text-white py-4 rounded-xl font-bold hover:bg-black transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
