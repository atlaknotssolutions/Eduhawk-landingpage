import React from "react";
import Eduhawk from "./assets/icon.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const COUNTRIES = [
    {
      name: "Russia",
      flag: "🇷🇺",
      path: "https://eduhawk.in/mbbs-abroad/russia",
    },
    {
      name: "Georgia",
      flag: "🇬🇪",
      path: "https://eduhawk.in/mbbs-abroad/georgia",
    },
    {
      name: "Uzbekistan",
      flag: "🇺🇿",
      path: "https://eduhawk.in/mbbs-abroad/uzbekistan",
    },
    {
      name: "Kazakhstan",
      flag: "🇰🇿",
      path: "https://eduhawk.in/mbbs-abroad/kazakhstan",
    },
    {
      name: "Kyrgyzstan",
      flag: "🇰🇬",
      path: "https://eduhawk.in/mbbs-abroad/kyrgyzstan",
    },
    {
      name: "Nepal",
      flag: "🇳🇵",
      path: "https://eduhawk.in/mbbs-abroad/nepal",
    },
    {
      name: "Bangladesh",
      flag: "🇧🇩",
      path: "https://eduhawk.in/mbbs-abroad/bangladesh",
    },
    {
      name: "Vietnam",
      flag: "🇻🇳",
      path: "https://eduhawk.in/mbbs-abroad/vietnam",
    },
  ];

  const quickLinks = [
    { label: "Home", path: "https://eduhawk.in/" },
    { label: "About", path: "https://eduhawk.in/about" },
    { label: "Services", path: "https://eduhawk.in/services" },
    { label: "Contact", path: "https://eduhawk.in/contact" },
    { label: "Blog", path: "https://eduhawk.in/blog" },
  ];

  return (
    <footer className="mt-6 bg-gradient-to-b from-[#0a1b2e] to-[#060f1a] text-gray-300 sm:mt-8">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8 sm:pt-12 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div className="lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <img
                src={Eduhawk}
                alt="Edu-Hawk Logo"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  Edu-Hawk Worldwide
                </h3>
                <p className="mt-0.5 text-xs uppercase tracking-widest text-amber-400">
                  Overseas Medical Education
                </p>
              </div>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-400">
              Trusted & ethical counselling for MBBS abroad — helping 2000+
              Indian students since inception.
            </p>

            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/eduhawkglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-amber-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@Eduhawkteam"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-amber-400"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/eduhawk_global/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-amber-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/edu-hawk-worldwide/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-amber-400"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Popular Destinations
            </h4>
            <div className="space-y-2 text-sm">
              {COUNTRIES.map((c) => (
                <a
                  key={c.name}
                  href={c.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-300"
                >
                  <span className="text-lg">{c.flag}</span>
                  <span>{c.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors duration-200 hover:text-amber-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
              Stay Updated
            </h4>

            <div className="mt-2 text-sm">
              <div className="mb-1.5 text-gray-400">Contact Us</div>
              <div className="text-white">+91 9630736070</div>
              <div className="mt-1 text-white">admin@eduhawk.in</div>
              <div className="mt-3 text-xs text-gray-400">
                <a
                  href="https://www.google.com/maps/place/Edu+Hawk+Worldwide+-+MBBS+Abroad+Consultants+in+Delhi/@28.5686707,77.0719455,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors duration-200 hover:text-gray-200"
                >
                  N-5, South Extension Part-1, New Delhi-110049
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Edu-Hawk Worldwide • All Rights Reserved
          </p>
          <p className="mt-1">
            Powered By{' '}
            <a
              href="https://aiknotsit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors duration-200 hover:text-gray-200"
            >
              AI Knots IT Solution Pvt. Ltd.
            </a>{' '}
            • version 3.0.0 • Trusted by 2000+ Indian Students
          </p>

          <div className="mt-4 flex flex-col justify-center gap-3 text-xs sm:flex-row sm:gap-6">
            <a
              href="https://www.eduhawk.in/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-amber-400"
            >
              Privacy Policy
            </a>
            <a
              href="https://eduhawk.in/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-amber-400"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
