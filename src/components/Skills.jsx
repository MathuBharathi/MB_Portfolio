import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const bentoSkills = [
    {
      id: '01',
      category: 'Frontend Development',
      description: 'Building fluid, responsive, animated, and interactive user interfaces.',
      skills: skillsData.frontend,
      colSpan: 'col-span-1',
      bgColor: 'bg-red-50/60',
      borderColor: 'border-red-100',
    },
    {
      id: '02',
      category: 'Backend & Database',
      description: 'Server APIs, databases, authentication, and role-based access control.',
      skills: skillsData.backend,
      colSpan: 'col-span-1',
      bgColor: 'bg-blue-50/60',
      borderColor: 'border-blue-100',
    },
    {
      id: '03',
      category: 'Programming Languages',
      description: 'Core software development and query languages.',
      skills: skillsData.languages,
      colSpan: 'col-span-1',
      bgColor: 'bg-amber-50/60',
      borderColor: 'border-amber-100',
    },
    {
      id: '04',
      category: 'Cloud & Deployment',
      description: 'Cloud hosting platforms, edge functions, serverless infrastructure, and media management.',
      skills: skillsData.cloudDeployment,
      colSpan: 'col-span-1',
      bgColor: 'bg-purple-50/60',
      borderColor: 'border-purple-100',
    },
    {
      id: '05',
      category: 'Tools & Design',
      description: 'Version control, deployment platforms, UI/UX, and graphic design software.',
      skills: skillsData.tools,
      colSpan: 'col-span-1 md:col-span-2',
      bgColor: 'bg-emerald-50/60',
      borderColor: 'border-emerald-100',
    },
  ];

  return (
    <section id="skills" className="relative w-full bg-white pt-8 md:pt-12 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="inline-block text-xs font-['Fjalla_One'] text-[#ff2a2a] uppercase tracking-[0.15em] px-4 py-2 bg-red-50 rounded-full mb-6 border border-red-100 shadow-sm">
              Technical Stack
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight font-['Fjalla_One'] uppercase">
              Skills & <span className="text-[#ff2a2a]">Technologies</span>.
            </h2>
          </div>
          <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed font-['Gilroy']">
            Core web development frameworks, database systems, cloud infrastructure, and design applications I leverage to craft digital products.
          </p>
        </motion.div>

        {/* 5-Card Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {bentoSkills.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, margin: '-50px' }}
              className={`group relative ${group.colSpan} ${group.bgColor} border ${group.borderColor} rounded-[2rem] p-6 md:p-8 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-['Fjalla_One'] text-gray-400 tracking-wider">({group.id})</span>
                </div>
                <h3 className="text-2xl md:text-3xl text-gray-900 mb-2 font-['Fjalla_One'] uppercase tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {group.category}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-['Gilroy'] m-0">
                  {group.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 text-xs text-gray-800 bg-white border border-black/5 shadow-sm rounded-xl font-['Gilroy'] hover:shadow-md hover:-translate-y-0.5 hover:text-[#ff2a2a] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;