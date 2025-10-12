// About.js - About section for CAXiE Technologies
// This section displays a profile image with orbiting tech icons, a bio, quick facts, a motto, and a resume download button.

import React from 'react';
import aboutData from '../data/aboutData.json'; // Centralized data for the About section
import ProfileImage from './common/ProfileImage'; // Reusable profile image component
import QuickFact from './common/QuickFact'; // Reusable quick fact pill component
import QuoteBlock from './common/QuoteBlock'; // Reusable quote/motto block
import '../App.css'; // Custom CSS (orbit animation no longer used)

// Map for quick fact icons (location, experience, etc.)
const iconMap = {
  location: (
    // Location pin icon
    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1112 20a7.963 7.963 0 01-4.243-1.243z" /></svg>
  ),
  experience: (
    // Experience icon
    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 6a9 9 0 110-18 9 9 0 010 18z" /></svg>
  ),
  clock: (
    // Clock icon
    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth="2"/><path d="M12 7v5l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  language: (
    // Language icon
    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m0 0H3" /></svg>
  ),
  education: (
    // Education icon
    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  ),
};

// Orbiting icons removed for a cleaner, professional header

const About = () => {
  return (
    <section id="about" className="w-full py-12 sm:py-16 px-2 sm:px-0 bg-gradient-to-b from-purple-900/80 to-black/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12 px-2 sm:px-4 md:px-12">
        {/* Profile Image */}
        <div className="relative flex-shrink-0 flex flex-col items-center w-full md:w-auto md:mr-12 mb-8 md:mb-0" style={{ width: 'min(90vw, 420px)' }}>
          <ProfileImage src={aboutData.profileImage} alt="Profile" size={280} />
          <div className="mt-4 text-center">
            <div className="text-white text-lg md:text-2xl font-medium">Ekechukwuemeka Charles Xavier</div>
            <div className="text-purple-300 text-sm">Founder and Chief Executive Officer</div>
            <div className="mx-auto mt-2 h-px w-20 md:w-24 bg-purple-400/40 rounded"></div>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 flex flex-col justify-center items-start w-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6">
            {aboutData.quickFacts.map((fact, idx) => (
              <QuickFact key={idx} icon={iconMap[fact.icon]} label={fact.label} />
            ))}
          </div>
          <div className="text-gray-200 text-base sm:text-lg mb-8 max-w-2xl space-y-4">
            {String(aboutData.bio)
              .split('\n\n')
              .filter(Boolean)
              .map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
          </div>
          <QuoteBlock>{aboutData.motto}</QuoteBlock>
          {/* Resume button intentionally hidden */}
        </div>
      </div>
    </section>
  );
};

export default About; 