import React from 'react';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
const VIDEO_URL = supabaseUrl
  ? `${supabaseUrl}/storage/v1/object/public/preloader/Turquoise%20and%20Monochrome%20Photo%20Heading%20Website%20Facebook%20Cover.mp4`
  : '';

const Preloader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
    <video
      src={VIDEO_URL}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-contain bg-black"
      style={{ zIndex: 1, opacity: 0.85 }}
    />
    <div className="relative z-10 flex flex-col items-center">
      <span className="text-white text-2xl font-bold drop-shadow-lg">Loading...</span>
    </div>
  </div>
);

export default Preloader; 