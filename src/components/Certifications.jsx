import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsData, educationData } from '../data/portfolioData';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="relative w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs font-['Fjalla_One'] text-gray-400 uppercase tracking-[0.2em] mb-4">
              Training & Education
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight font-['Fjalla_One'] uppercase">
              Certifications, <span className="text-[#ff2a2a] italic">Internships</span> & Education
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-base md:text-lg font-['Gilroy'] leading-relaxed">
            Professional qualifications, government committee internship, industry job simulations, and academic degree credentials.
          </p>
        </motion.div>

        {/* Education Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-red-50/50 border border-red-100 rounded-3xl p-8 md:p-10 mb-16 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <div className="flex items-center gap-3 text-xs font-['Fjalla_One'] text-[#ff2a2a] uppercase tracking-widest mb-2">
              <i className="ri-graduation-cap-line text-lg"></i> Degree Education ({educationData.period})
            </div>
            <h3 className="text-2xl md:text-3xl font-['Fjalla_One'] text-gray-900 uppercase">
              {educationData.degree}
            </h3>
            <p className="text-gray-600 font-['Gilroy'] text-sm md:text-base mt-1 m-0">
              {educationData.institution} • {educationData.location}
            </p>
          </div>
          <div className="bg-white border border-red-200 rounded-2xl px-6 py-3 shadow-sm text-center">
            <span className="text-xs font-['Gilroy'] text-gray-500 block uppercase tracking-wider">Cumulative GPA</span>
            <span className="text-2xl font-['Fjalla_One'] text-[#ff2a2a]">{educationData.cgpa} / 10</span>
          </div>
        </motion.div>

        {/* List View for Certifications & Internship */}
        <div className="border-t border-gray-200">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="group flex flex-col lg:flex-row lg:items-center justify-between py-8 md:py-10 border-b border-gray-200 hover:bg-red-50/30 transition-colors duration-500 px-4 -mx-4 rounded-2xl cursor-default relative overflow-hidden gap-4 lg:gap-6"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Title & Date Column */}
              <div className="w-full lg:w-[35%] pl-0 lg:pl-6 transition-all duration-300 group-hover:pl-4 lg:group-hover:pl-8">
                <span className="text-xs font-['GilroyTI'] text-[#ff2a2a] block mb-1">
                  ({cert.id}) {cert.date}
                </span>
                <h3 className="text-xl md:text-2xl font-['Fjalla_One'] text-gray-900 group-hover:text-[#ff2a2a] transition-colors duration-300 uppercase tracking-tight">
                  {cert.title}
                </h3>
              </div>
              
              {/* Issuer / Organization Column */}
              <div className="w-full lg:w-[20%] flex items-center">
                <span className="text-xs md:text-sm font-['Gilroy'] text-gray-500 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-gray-200 group-hover:bg-[#ff2a2a] transition-colors duration-300 hidden md:block"></span>
                  {cert.issuer || cert.organization}
                </span>
              </div>
              
              {/* Description Column */}
              <div className="w-full lg:w-[25%]">
                <p className="text-gray-600 font-['Gilroy'] text-xs md:text-sm leading-relaxed m-0">
                  {cert.description}
                </p>
              </div>

              {/* Action Column: VIEW CERTIFICATE Button */}
              <div className="w-full lg:w-[20%] flex flex-wrap items-center justify-start lg:justify-end gap-2 pt-2 lg:pt-0">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-[#ff2a2a] text-white font-['Fjalla_One'] text-xs tracking-wider uppercase rounded-xl transition-colors duration-300 shadow-sm cursor-pointer shrink-0"
                >
                  <i className="ri-eye-line text-sm"></i>
                  <span>VIEW CERTIFICATE</span>
                </button>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-red-50 text-[#ff2a2a] hover:bg-red-100 font-['Gilroy'] text-xs font-semibold rounded-xl transition-colors duration-300 shrink-0"
                    title="Verify on Credly"
                  >
                    <i className="ri-verified-badge-line text-sm"></i>
                    <span>Credly</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 md:p-8 pb-4 border-b border-gray-100 bg-white">
                <div>
                  <span className="inline-block text-xs font-['Fjalla_One'] text-[#ff2a2a] uppercase tracking-widest mb-1">
                    {selectedCert.issuer || selectedCert.organization} • {selectedCert.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-['Fjalla_One'] text-gray-900 uppercase tracking-tight m-0 pr-6">
                    {selectedCert.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-[#ff2a2a] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                  aria-label="Close modal"
                >
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>

              {/* Certificate Preview Image Area */}
              <div className="flex-1 overflow-auto p-4 md:p-6 bg-gray-900/5 flex items-center justify-center min-h-75 cert-preview-container scrollbar-none">
                <img
                  src={selectedCert.preview}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-2xl shadow-lg border border-gray-200/80 bg-white"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 md:p-6 bg-white border-t border-gray-100">
                <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-[#ff2a2a] text-white font-['Fjalla_One'] text-xs uppercase tracking-wider rounded-xl transition-colors duration-300 shadow-sm"
                >
                  <i className="ri-download-2-line text-base"></i>
                  <span>Download Original PDF</span>
                </a>

                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 text-[#ff2a2a] hover:bg-red-100 font-['Gilroy'] text-xs font-semibold rounded-xl transition-colors duration-300"
                  >
                    <i className="ri-verified-badge-line text-base"></i>
                    <span>Verify on Credly</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
