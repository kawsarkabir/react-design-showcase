import React from "react";
import { FaBeer } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" bg-gray-100 mt-20">
      <footer className="footer full-website py-20 px-10">
        <aside>
          <img src="https://i.ibb.co/Hrqsk3m/new-redx-logo.png" alt="" />
          <p>
          দ্রুততম সল্যুশনের জন্য রেডএক্স অ্যাপটি ডাউনলোড করুন
          </p>
          <img src="https://i.ibb.co/fC8HKcX/google-play-badge-1.png" alt="" />
        </aside>
        <nav>
          <header className="font-semibold text-lg">গুরুত্বপূর্ণ লিংক</header>
          <a className="text-base">কুরিয়ার</a>
          <a className="text-base">এন্টারপ্রাইজ</a>
          <a className="text-base">কভারেজ এরিয়া</a>
          <a className="text-base">প্রাইভেসী পলিসি</a>
          <a className="text-base">FAQs</a>
        </nav>
        <nav>
          <header className="font-semibold text-lg">যোগাযোগ</header>
          <a className="text-base">শপআপ, ৪র্থ তলা, এসকেএস টাওয়ার, ৭ ভিআইপি রোড, মহাখালী, ঢাকা</a>
          <a className="text-lg">০৯৬১০০০৭৩৩৯</a>
          <a className="text-lg">contact@redx.com.bd</a>
          
        </nav>
        <nav>
          <header className="font-semibold text-lg">সংযুক্ত হন</header>
           <div className="flex gap-2">
           <a href="#"> <img className="w-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" /> </a>
           <a href="#"><img className="w-6" src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png" alt="" /> </a>
           <a href="#"><img className="w-6" src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="" /> </a>
           </div>
          <small>© Redx 2023. All rights reserved</small>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
