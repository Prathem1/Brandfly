'use client';
import { Instagram, Facebook, YouTube, LinkedIn, Call, WhatsApp, MailOutline, Language, LocationOn } from '@mui/icons-material';

export default function Footer() {
    return (
        <footer className="bg-yellow-300 text-black px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold">BRAND FLY</h2>
                    <p className="mt-1 font-semibold">Rajinder Kumar</p>
                    <p>Founder</p>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1"><Call fontSize="small" /> +91 8427338137</span>
                        <span className="flex items-center gap-1"><WhatsApp fontSize="small" /> +91 8427338137</span>
                        <span className="flex items-center gap-1"><MailOutline fontSize="small" /> info.brandfly@gmail.com</span>
                        <span className="flex items-center gap-1"><Language fontSize="small" /> www.brandfly.shop</span>
                        <span className="flex items-center gap-1"><LocationOn fontSize="small" /> Opp. Dana Mandi Gate No.2, Near FCI Godown, Beside Diksha Bakery, Anaj Mandi Road, Barnala</span>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.instagram.com/brandflybnl/" aria-label="Instagram" className="hover:scale-110 transition-transform">
                            <Instagram fontSize="large" />
                        </a>
                        <a href="https://www.facebook.com/brandflybnl" aria-label="Facebook" className="hover:scale-110 transition-transform">
                            <Facebook fontSize="large" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCRtB4ZJn5BUirCgpMsJHm-A" aria-label="YouTube" className="hover:scale-110 transition-transform">
                            <YouTube fontSize="large" />
                        </a>
                        <a href="https://www.linkedin.com/company/brandflybnl/" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
                            <LinkedIn fontSize="large" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-8 text-center text-sm border-t border-black pt-4">
                © {new Date().getFullYear()} BRAND FLY. All rights reserved.
            </div>
        </footer>
    );
}
