'use client';

import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/service' },
    { label: 'Contact', href: '/contact' },
    { label: 'Payment', href: '/payment' },
  ];

  const isActive = (item) => {
    if (item.label.toLowerCase() === 'services') {
      return (
        pathname.startsWith('/service') ||
        pathname.startsWith('/AddOrder') ||
        pathname.startsWith('/categories')
      );
    }
    if (item.label === 'Home') return pathname === '/';
    return pathname === item.href || pathname.startsWith(item.href + '/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="w-full h-[1cm] bg-blue-300 flex items-center justify-center">
        <p className="text-center text-gray-800 text-sm">
          We are graphic designers from Barnala, offering expert Designing, Branding, and Printing services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between h-[1.7cm] md:h-[2.2cm]">
        {/* ✅ Fixed logo refresh */}
        <div
          onClick={() => window.location.assign('/')}
          className="cursor-pointer select-none"
        >
          <Image
            src="/ClientShowcase/logo1.png"
            alt="logo"
            width={80}
            height={80}
            priority
            className="h-[1.5cm] w-[1.5cm] md:w-[2cm] md:h-[2cm]"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4 items-center font-medium">
          {navItems.map((item) => {
            const itemActive = isActive(item);
            return (
              <li
                key={item.label}
                className={`relative rounded-lg px-[20px] py-[7px] transition-all duration-300 ${
                  itemActive
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black text-white'
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            );
          })}

          {/* Sign In / Sign Out */}
          {!session || !session.user?.isVerified ? (
            <li>
              <button
                onClick={() => signIn()}
                className="px-10 py-2 rounded-lg bg-blue-300 hover:bg-blue-400 text-black transition"
              >
                Sign In
              </button>
            </li>
          ) : (
            <li className="flex flex-col items-end gap-2">
              <span className="text-gray-700 font-medium">
                {session.user.email}
              </span>
              <button
                onClick={() => signOut()}
                style={{ backgroundColor: '#f60b5e' }}
                className="px-8 py-2 rounded-lg hover:bg-pink-700 text-white transition"
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          {/* ✅ Mobile logo refresh also fixed */}
          <div onClick={() => window.location.assign('/')} className="cursor-pointer">
            <Image
              src="/ClientShowcase/logo1.png"
              alt="logo"
              width={60}
              height={60}
              className="h-[1.5cm] w-[1.5cm]"
            />
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-800">
            <CloseIcon />
          </button>
        </div>
        <ul className="p-4 space-y-4 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Mobile Sign In / Sign Out */}
          {!session || !session.user?.isVerified ? (
            <li>
              <button
                onClick={() => signIn()}
                className="w-full px-4 py-2 rounded-lg bg-blue-300 hover:bg-blue-400 text-black transition"
              >
                Sign In
              </button>
            </li>
          ) : (
            <li className="flex flex-col gap-2">
              <span className="text-gray-700 font-medium break-words">
                {session.user.email}
              </span>
              <button
                onClick={() => signOut()}
                style={{ backgroundColor: '#f60b5e' }}
                className="w-full px-4 py-2 rounded-lg hover:bg-pink-700 text-white transition"
              >
                Sign Out
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
