'use client';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export default function ContactSection() {
  return (
        <section className="site-container">
    <div className="px-4 py-10 bg-white text-center md:text-left">
      {/* Contact Box */}
      <div className="max-w-6xl mx-auto bg-yellow-300 rounded-2xl p-6 md:p-10 shadow-md mb-10">
        <div className="flex flex-col md:flex-row justify-between text-black text-sm md:text-base">
          <div className="mb-6 md:mb-0">
            <h2 className="font-bold text-lg mb-2 flex items-center justify-center md:justify-start">
              <SupportAgentIcon className="mr-2" /> Contact Enquiry
            </h2>
            <p className="font-semibold">Membership Enquiry</p>
            <p>+91 8427338137</p>
            <p className="mt-2 text-black">(10:00 AM - 6:30 PM)</p>
          </div>

          <div className="mb-6 md:mb-0">
            <p className="font-semibold">Distributor Enquiry</p>
            <p>Mr. Mohneet Garg – +91 8427338137</p>
            <p className="mt-2 text-black">(10:00 AM - 7:00 PM)</p>
          </div>

          <div>
            <p className="font-semibold">Support Center</p>
            <p>+91 8427338137</p>
            <p className="mt-2 text-black">(9:30 AM - 6:30 PM)</p>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-gray-700">
        {/* Location with Map Link */}
        <a
          href="https://maps.app.goo.gl/Qz4Nck5WTu7Khtsa8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 rounded-xl border shadow-sm hover:bg-yellow-50 transition"
        >
          <LocationOnIcon className="text-yellow-300 text-3xl mb-2" />
          <p className="font-semibold text-sm text-black">OUR HEADQUARTERS</p>
          <p className="text-sm">Barnala, india</p>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/brandflybnl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 rounded-xl border shadow-sm hover:bg-yellow-50 transition"
        >
          <FacebookIcon className="text-yellow-400 text-3xl mb-2" />
          <p className="font-semibold text-sm text-black">FOLLOW ON</p>
          <p className="text-sm">FACEBOOK</p>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/brandflybnl/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 rounded-xl border shadow-sm hover:bg-yellow-50 transition"
        >
          <InstagramIcon className="text-yellow-400 text-3xl mb-2" />
          <p className="font-semibold text-sm text-black">FOLLOW US ON</p>
          <p className="text-sm">INSTAGRAM</p>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/channel/UCRtB4ZJn5BUirCgpMsJHm-A"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 rounded-xl border shadow-sm hover:bg-yellow-50 transition"
        >
          <YouTubeIcon className="text-yellow-400 text-3xl mb-2" />
          <p className="font-semibold text-sm text-black">FOLLOW ON</p>
          <p className="text-sm">YOUTUBE</p>
        </a>
      </div>
    </div>
    </section>
  );
}
