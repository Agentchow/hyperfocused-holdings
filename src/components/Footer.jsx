import React from "react";
import Link from "next/link";
import { DISCORD_INVITE_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <div className="grid-system bg-white relative">
      <footer className=" col-span-full md:col-start-2 md:col-span-4 py-12 md:py-16 border-t border-[rgba(0,0,0,0.1)]">
        <div className="container-grid">
          <div className="col-span-6 md:col-start-2 md:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-base text-[#0b0b0b]">Strategy</p>
                </div>
                <div className="space-y-2 text-sm text-[rgba(11,11,11,0.6)]">
                  <p>HyperFocused Market Making</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-base text-[#0b0b0b]">Navigation</p>
                </div>
                <ul className="space-y-2 text-sm text:[rgba(11,11,11,0.6)]">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/careers">We&apos;re Hiring</Link></li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-base text-[#0b0b0b]">Follow</p>
                </div>
                <div className="space-y-2 text-sm text-[rgba(11,11,11,0.6)]">
                  <p><a href="https://www.youtube.com/@Charles_Chow" target="_blank" rel="noopener noreferrer" className="hover:underline">Youtube</a></p>
                  <p><a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Discord</a></p>
                  <p><a href="https://www.linkedin.com/in/charles-chow1/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <p className="text-base text-[#0b0b0b]">Connect</p>
                </div>
                <ul className="space-y-2 text-sm text-[rgba(11,11,11,0.6)]">
                  <li><Link href="#">Privacy Policy</Link></li>
                  <li><Link href="#">Disclosures</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-[rgba(0,0,0,0.1)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[rgba(0,0,0,0.2)]">
              <p>
                © 2025-Present HyperFocused Holdings, LLC. All rights reserved.
              </p>
              <p>
                Developed by{" "}
                <a
                  href="https://gaussjordan.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Gaussjordan
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
