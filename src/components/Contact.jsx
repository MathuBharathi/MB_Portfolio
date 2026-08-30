import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { personalData } from '../data/portfolioData';

// Google Apps Script Web App Endpoint Configuration
// Paste your deployed Google Apps Script Web App URL below
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyWLnrQ9AGPuh4MH4x79_m8ydvYAxDCaGl98iYR59jXPWixftp2pveaHeQIoxAmpfO7og/exec';

const Contact = () => {
  const ref = useRef(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    permission: false
  });

  const [status, setStatus] = useState('IDLE'); // 'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'
  const [statusMessage, setStatusMessage] = useState('');

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));

    // Reset error state on edit
    if (status === 'ERROR') {
      setStatus('IDLE');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      setStatus('ERROR');
      setStatusMessage("Please accept the contact permission checkbox.");
      return;
    }

    const name = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
    if (!name || !formData.email.trim() || !formData.message.trim()) {
      setStatus('ERROR');
      setStatusMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setStatus('SUBMITTING');
    setStatusMessage('');

    try {
      const payload = new URLSearchParams();
      payload.append('name', name);
      payload.append('email', formData.email.trim());
      payload.append('phone', formData.phone.trim());
      payload.append('message', formData.message.trim());
      payload.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

      if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
        console.warn("GOOGLE_SCRIPT_URL is not set yet. Please follow setup instructions to deploy your Apps Script Web App URL.");
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: payload.toString(),
        mode: 'no-cors',
      });

      setStatus('SUCCESS');
      setStatusMessage(`Thanks ${formData.firstName}! Your message was sent successfully to Mathu Bharathi A.`);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        permission: false
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus('ERROR');
      setStatusMessage("Something went wrong. Please try again or email directly.");
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex flex-col justify-between pt-24 pb-0 border-t border-gray-900">
      
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 className="text-[15vw] md:text-[12vw] leading-[0.8] text-white/10 uppercase tracking-tighter select-none origin-top font-['Fjalla_One']">
          Contact
        </h1>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Direct Info & Links */}
          <div className="text-white">
            <span className="inline-block text-xs font-['Fjalla_One'] text-[#ff2a2a] uppercase tracking-[0.2em] px-4 py-1.5 bg-red-950/40 border border-red-800/40 rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Fjalla_One'] uppercase leading-tight mb-6">
              Let's Build Something <span className="text-[#ff2a2a]">Great</span>.
            </h2>
            <p className="text-gray-400 font-['Gilroy'] text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Have an idea, project or opportunity in mind? Let's connect and turn it into a meaningful digital experience.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <a 
                href={`mailto:${personalData.email}`} 
                className="flex items-center gap-4 text-gray-300 hover:text-white font-['Gilroy'] text-base md:text-lg transition-colors"
              >
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-[#ff2a2a]">
                  <i className="ri-mail-send-line text-xl"></i>
                </div>
                <div>
                  <span className="text-xs text-gray-500 block font-['Fjalla_One'] uppercase">Email</span>
                  {personalData.email}
                </div>
              </a>

              <a 
                href={`tel:+91${personalData.phone}`} 
                className="flex items-center gap-4 text-gray-300 hover:text-white font-['Gilroy'] text-base md:text-lg transition-colors"
              >
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-[#ff2a2a]">
                  <i className="ri-phone-line text-xl"></i>
                </div>
                <div>
                  <span className="text-xs text-gray-500 block font-['Fjalla_One'] uppercase">Phone</span>
                  {personalData.phoneDisplay}
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300 font-['Gilroy'] text-base md:text-lg">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-[#ff2a2a]">
                  <i className="ri-map-pin-2-line text-xl"></i>
                </div>
                <div>
                  <span className="text-xs text-gray-500 block font-['Fjalla_One'] uppercase">Location</span>
                  {personalData.location}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href={personalData.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gray-900 border border-gray-800 text-white font-['Fjalla_One'] text-xs uppercase tracking-widest hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-all rounded-xl inline-flex items-center gap-2"
              >
                <i className="ri-github-fill text-lg"></i> GitHub
              </a>
              <a 
                href={personalData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gray-900 border border-gray-800 text-white font-['Fjalla_One'] text-xs uppercase tracking-widest hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-all rounded-xl inline-flex items-center gap-2"
              >
                <i className="ri-linkedin-box-fill text-lg"></i> LinkedIn
              </a>
            </div>
          </div>

          {/* Form Card Overlay */}
          <div className="bg-[#ff2a2a] w-full p-8 md:p-12 text-white rounded-[2rem] shadow-2xl">
            <div className="text-xs font-['Fjalla_One'] tracking-[0.2em] mb-8 uppercase opacity-90">
              Send Message
            </div>

            {statusMessage && (
              <div 
                className={`mb-6 p-4 rounded-xl text-xs md:text-sm font-['Gilroy'] flex items-center gap-3 transition-all ${
                  status === 'SUCCESS' 
                    ? 'bg-white/20 border border-white/40 text-white' 
                    : 'bg-black/30 border border-black/40 text-white'
                }`}
              >
                <i className={`text-lg ${status === 'SUCCESS' ? 'ri-checkbox-circle-fill text-white' : 'ri-error-warning-fill text-amber-300'}`}></i>
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name" 
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-2 text-base font-['Gilroy'] text-white focus:outline-none focus:border-white transition-colors placeholder-white/70"
                />
                <input 
                  type="text" 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name" 
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-2 text-base font-['Gilroy'] text-white focus:outline-none focus:border-white transition-colors placeholder-white/70"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-2 text-base font-['Gilroy'] text-white focus:outline-none focus:border-white transition-colors placeholder-white/70"
                />
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile No (10 digits)" 
                  pattern="[0-9]{10}"
                  maxLength="10"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-2 text-base font-['Gilroy'] text-white focus:outline-none focus:border-white transition-colors placeholder-white/70"
                />
              </div>

              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here" 
                required
                rows={4}
                className="w-full bg-transparent border-b border-white/40 pb-2 text-base font-['Gilroy'] text-white focus:outline-none focus:border-white transition-colors placeholder-white/70 resize-none"
              ></textarea>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
                <div 
                  className="flex items-center gap-3 text-xs font-['Gilroy'] text-white/90 cursor-pointer select-none"
                  onClick={() => setFormData(prev => ({ ...prev, permission: !prev.permission }))}
                >
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${formData.permission ? 'bg-white border-white' : 'border-white/60 bg-transparent'}`}>
                    {formData.permission && (
                      <svg className="w-3.5 h-3.5 text-[#ff2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span>I give permission to contact me at this email.</span>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'SUBMITTING'}
                  className="px-8 py-3 rounded-full border border-white/50 text-white font-['Fjalla_One'] uppercase text-xs tracking-wider flex items-center gap-2 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 self-stretch sm:self-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'SUBMITTING' ? (
                    <>
                      SENDING...
                      <i className="ri-loader-4-line animate-spin"></i>
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="ri-send-plane-fill"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;