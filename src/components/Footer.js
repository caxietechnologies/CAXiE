// Footer.js - Site footer for CAXiE Technologies

import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-gray-900 text-gray-300 py-6 flex flex-col items-center mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-[90%] max-w-6xl mx-auto px-4 gap-4">
        <div className="text-center md:text-left text-sm md:text-base font-medium">&copy; {new Date().getFullYear()} CAXiE Technologies. All rights reserved.</div>
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0 text-sm md:text-base">
          <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Terms of Use</a>
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Privacy Policy</a>
          <a href="/cookies.html" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Cookie Policy</a>
          <a href="/do-not-sell.html" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">Do Not Sell My Personal Information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


