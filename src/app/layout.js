import { Poppins } from "next/font/google";
import "./globals.css";
import Grid from "../../helpers/Grid";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "HyperFocused",
  description:
    "Private equity and institutional market making. Acquiring and scaling founder-led businesses. Kalshi market maker powering liquidity on the largest U.S. prediction exchange.",
  openGraph: {
    title: "HyperFocused Holdings",
    description:
      "Private equity and institutional market making. Acquiring and scaling founder-led businesses. Kalshi market maker powering liquidity on the largest U.S. prediction exchange.",
    url: "https://www.hyperfocusedholdings.com/",
    siteName: "HyperFocused Holdings",
    images: [
      {
        url: "https://www.hyperfocusedholdings.com/hflogo.webp",
        width: 500,
        height: 500,
        alt: "HyperFocused Holdings logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HyperFocused Holdings",
    description:
      "Private equity and institutional market making. Acquiring and scaling founder-led businesses. Kalshi market maker.",
    images: ["/hflogo.webp"],
  },
  icons: {
    icon: [
      { url: "/hflogo.webp", sizes: "any" },
      { url: "/hflogo.webp", type: "image/webp", sizes: "32x32" },
      { url: "/hflogo.webp", type: "image/webp", sizes: "16x16" },
    ],
    apple: "/hflogo.webp",
    shortcut: "/hflogo.webp",
  },
};
export const dynamic = "force-static";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} antialiased bg-white text-c-black`}
      >
        {children}
        {/* <Grid /> */}
      </body>
    </html>
  );
}
