import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

import mellowImg from '../assets/project/mellow.png';
import deepdiveImg from '../assets/project/deepdive.png';
import rusticImg from '../assets/project/rustic.png';
import wandersphereImg from '../assets/project/wandersphere.png';
import mbsquareImg from '../assets/project/mbsquare.png';
import medxperiaImg from '../assets/project/medxperia.jpg';
import dischargeSummaryImg from '../assets/project/discharge_summary.png';

const imageMap = {
  mellow: mellowImg,
  deepdive: deepdiveImg,
  rustic: rusticImg,
  wandersphere: wandersphereImg,
  mbsquare: mbsquareImg,
  medxperia: medxperiaImg,
  discharge_summary: dischargeSummaryImg,
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projectsData.filter((p) => p.featured);
  const displayedProjects = showAll ? projectsData : featuredProjects;

  return (
    <section id="projects" className="relative w-full bg-gray-50 py-24 md:py-32 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs font-['Fjalla_One'] text-[#ff2a2a] uppercase tracking-[0.15em] px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
              Selected Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight font-['Fjalla_One'] uppercase">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-red-400">Projects</span>.
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-base md:text-lg font-['Gilroy'] leading-relaxed">
            Full-stack web applications, e-commerce stores, booking platforms, and AI-assisted healthcare systems.
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          <AnimatePresence>
            {displayedProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                viewport={{ once: true, margin: '-100px' }}
                className="group relative"
              >
                {/* Project Card */}
                <div className={`relative bg-white rounded-[2.5rem] p-6 md:p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] hover:border-gray-200 transition-all duration-500 flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
                  
                  {/* Image Section */}
                  <div className="w-full lg:w-[52%] relative rounded-[1.5rem] overflow-hidden shadow-lg bg-gray-100 aspect-video group-hover:shadow-2xl transition-all duration-500 border border-gray-200 flex items-center justify-center">
                    <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md text-white font-['Fjalla_One'] text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.id} — {project.category}
                    </div>

                    <img 
                      src={imageMap[project.imageKey]} 
                      alt={`${project.name} — ${project.category} by Mathubharathi A`} 
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-[48%] flex flex-col justify-center">
                    <div className="mb-4">
                      <h3 className="text-3xl md:text-4xl font-['Fjalla_One'] text-gray-900 mb-2 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300 uppercase">
                        {project.name}
                      </h3>
                      <p className="text-[#ff2a2a] font-['Gilroy'] text-base font-semibold tracking-wide">
                        {project.category}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 font-['Gilroy'] text-sm md:text-base leading-relaxed mb-6">
                      {project.detailedDesc}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-['Fjalla_One'] text-gray-400 uppercase tracking-widest mb-3">Key Features</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-4 h-4 text-[#ff2a2a] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 font-['Gilroy'] text-xs md:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-['Gilroy'] text-gray-600 bg-gray-50 border border-gray-200 rounded-lg group-hover:border-gray-300 group-hover:bg-white transition-all cursor-default shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-['Fjalla_One'] text-xs uppercase tracking-wider rounded-xl hover:bg-[#ff2a2a] hover:shadow-[0_10px_25px_rgba(255,42,42,0.3)] transition-all duration-300"
                      >
                        Explore Project
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>

                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-gray-800 font-['Fjalla_One'] text-xs uppercase tracking-wider rounded-xl hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 gap-2"
                      >
                        <i className="ri-github-fill text-base"></i> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects Toggle */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-4 bg-white border border-gray-300 text-gray-900 font-['Fjalla_One'] text-sm uppercase tracking-widest rounded-2xl hover:border-[#ff2a2a] hover:text-[#ff2a2a] hover:shadow-lg transition-all duration-300 inline-flex items-center gap-3"
          >
            {showAll ? 'Show Featured Projects Only' : 'View All Projects (7 Projects)'}
            <i className={`ri-arrow-${showAll ? 'up' : 'down'}-s-line text-lg`}></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
