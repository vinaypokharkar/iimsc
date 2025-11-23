'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { PhoneInput } from '@/components/ui/phone-input';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
    honeypot: '', // Anti-spam hidden field
    captchaAnswer: '' // Math captcha
  });
  
  // Simple Math Captcha
  const [captchaChallenge, setCaptchaChallenge] = useState({ n1: 0, n2: 0, answer: 0 });

  useEffect(() => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaChallenge({ n1, n2, answer: n1 + n2 });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Honeypot Check (Client-side pre-check)
    if (formData.honeypot) {
      // Silently fail or pretend success
      setStatus('success');
      return;
    }

    // 2. Captcha Check
    if (parseInt(formData.captchaAnswer) !== captchaChallenge.answer) {
      setErrorMessage('Incorrect math answer. Please try again.');
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      // Combine country code and phone number
      const fullPhone = `${formData.countryCode} ${formData.phone}`;
      
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: fullPhone,
          message: formData.message,
          honeypot: formData.honeypot
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        countryCode: '+91', 
        phone: '', 
        message: '', 
        honeypot: '',
        captchaAnswer: ''
      });
    } catch (error: any) {
      setStatus('error');
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
          <p className="text-gray-600 mt-2 max-w-xs mx-auto">Thank you for reaching out. We'll get back to you shortly.</p>
          <Button 
            onClick={() => setStatus('idle')} 
            className="mt-6 bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-900">Name</label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Carter" 
                className="bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] h-12 rounded-xl transition-all duration-300" 
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-900">Phone</label>
              <PhoneInput
                countryCode={formData.countryCode}
                phoneNumber={formData.phone}
                onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                onPhoneNumberChange={(number) => setFormData({ ...formData, phone: number })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-900">Email</label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com" 
              className="bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] h-12 rounded-xl transition-all duration-300" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-900">Message</label>
            <Textarea 
              id="message" 
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your requirements..." 
              className="bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] min-h-[160px] rounded-xl resize-none transition-all duration-300" 
            />
          </div>

          {/* Security Fields */}
          <div className="space-y-2">
            <label htmlFor="captchaAnswer" className="text-sm font-semibold text-gray-900">
              Security Question: What is {captchaChallenge.n1} + {captchaChallenge.n2}?
            </label>
            <Input 
              id="captchaAnswer" 
              type="number" 
              value={formData.captchaAnswer}
              onChange={handleChange}
              required
              placeholder="Enter the sum" 
              className="bg-gray-50 border-gray-200 focus:border-[#5C4DFF] focus:ring-[#5C4DFF] h-12 rounded-xl transition-all duration-300 w-full sm:w-1/2" 
            />
          </div>
          
          {/* Honeypot Field (Hidden) */}
          <div className="hidden">
            <label htmlFor="honeypot">Do not fill this field</label>
            <input
              id="honeypot"
              type="text"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === 'error' && (
            <div className="flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
              <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
              <span className="font-medium">Error:</span> {errorMessage}
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#5C4DFF] to-[#33348D] hover:from-[#4A3BE6] hover:to-[#2A2B7A] text-white py-7 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
