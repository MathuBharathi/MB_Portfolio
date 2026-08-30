import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData, educationData } from '../data/portfolioData';

const Certifications = () => {
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

        {/* List View for Certifications, Internship & Training */}
        <div className="border-t border-gray-200">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="group flex flex-col lg:flex-row lg:items-center justify-between py-8 md:py-10 border-b border-gray-200 hover:bg-red-50/30 transition-colors duration-500 px-4 -mx-4 rounded-2xl cursor-default relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-full lg:w-[45%] mb-3 lg:mb-0 pl-0 lg:pl-6 transition-all duration-300 group-hover:pl-4 lg:group-hover:pl-10">
                <span className="text-xs font-['GilroyTI'] text-[#ff2a2a] block mb-1">({cert.id}) {cert.date}</span>
                <h3 className="text-xl md:text-2xl font-['Fjalla_One'] text-gray-900 group-hover:text-[#ff2a2a] transition-colors duration-300 uppercase tracking-tight">
                  {cert.title}
                </h3>
              </div>
              
              <div className="w-full lg:w-[25%] mb-3 lg:mb-0 flex items-center">
                <span className="text-xs md:text-sm font-['Gilroy'] text-gray-500 uppercase tracking-wider flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-gray-200 group-hover:bg-[#ff2a2a] transition-colors duration-300 hidden md:block"></span>
                  {cert.organization}
                </span>
              </div>
              
              <div className="w-full lg:w-[30%]">
                <p className="text-gray-600 font-['Gilroy'] text-xs md:text-sm leading-relaxed m-0">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
