import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { DISCORD_INVITE_URL } from "@/lib/constants";
const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our exchange services", link: "/services" },
  { label: "We're Hiring", ariaLabel: "View open roles", link: "/careers" },
];

const socialItems = [
  { label: "LinkedIn", link: "https://www.linkedin.com/in/charles-chow1/" },
  { label: "YouTube", link: "https://www.youtube.com/@Charles_Chow" },
  { label: "Discord", link: DISCORD_INVITE_URL },
];
export default function Nav() {
  return (
    <nav>
      <Link
        href="/"
        className="md:text-xl font-semibold fixed  top-[28px] md:top-[32px] left-[16px] md:left-[32px] text-white mix-blend-difference z-50"
      >
        HyperFocused
      </Link>
      <Menu
        className=""
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        colors={["#ff4500", "#1a1a1a"]}
        accentColor="#ff4500"
        // onMenuOpen={() => console.log("Menu opened")}
        // onMenuClose={() => console.log("Menu closed")}
      />
    </nav>
  );
}
