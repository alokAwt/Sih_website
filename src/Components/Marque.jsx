import React from 'react';
import './Marquee.css'; // Make sure to import your Tailwind CSS file

const Marquee = () => {
  return (
    <div className="marquee-container overflow-hidden">
      <div className="marquee-content flex space-x-4 animate-marquee">
        <img src="https://w7.pngwing.com/pngs/619/303/png-transparent-aadhaar-hd-logo-thumbnail.png" alt="Logo 1" className="logo" />
        <img src="https://bl-i.thgim.com/public/incoming/apu8e/article66026172.ece/alternates/FREE_1200/Digilocker%20app%20download%20%281%29.png" alt="Logo 2" className="logo" />
        <img src="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg" alt="Logo 3" className="logo" />
        <img src="https://t4.ftcdn.net/jpg/05/76/03/95/360_F_576039567_dNrcK76lhaCnoR7iFGCrK6YRECLjNKgv.png" alt="Logo 4" className="logo" />
      </div>
    </div>
  );
};

export default Marquee;