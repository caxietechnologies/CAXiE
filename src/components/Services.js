// Services.js - Services section for the organization website
// Displays categories of services offered

import React from 'react';

const Services = () => {
  // Example service categories and items
  const serviceCategories = [
    {
      title: 'Cybersecurity & Identity Protection',
      icon: (
        <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11a7 7 0 0014 0v-1H5v1z"/></svg>
      ),
      services: [
        'Threat protection & awareness',
        'Digital identity & access management',
        'Security audits and hardening',
        'Vulnerability scanning & remediation',
        'Professional training & awareness',
      ],
    },
    {
      title: 'ICT Infrastructure',
      icon: (
        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8M12 18v2"/></svg>
      ),
      services: [
        'Network instsllation, design and deployment',
        'Systems setup and maintenance',
        'Cloud integration',
        'Security and Support',
      ],
    },
    {
      title: 'Data & Intelligence',
      icon: (
        <svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3v18h18"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 15l4-6 3 4 4-7"/></svg>
      ),
      services: [
        'Data analysis & dashboards',
        'Business intelligence reporting',
        'Decision support',
      ],
    },
    {
      title: 'Web, Brand & Marketing',
      icon: (
        <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
      ),
      services: [
        'Web development & support',
        'Branding and design',
        'SEO, Site Verification and Profiling',
        'Media support & Social media management',
        'Bootcamps, seminars & upskilling',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-purple-900 mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceCategories.map((category, idx) => (
          <div key={idx} className="bg-purple-50 rounded-2xl shadow p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col gap-2">
            <div className="flex items-center gap-3 mb-2">
              {category.icon}
              <h3 className="text-xl font-semibold text-purple-800">{category.title}</h3>
            </div>
            <ul className="space-y-3 list-disc list-inside text-purple-700">
              {category.services.map((svc, i) => (
                <li key={i} className="text-sm">{svc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;


