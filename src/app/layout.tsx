import "@/assets/styles/styles.scss";
import Default from "@/components/layout/default";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Facilitation Portal",
  description: "The Investor Facilitation Portal (IFP) is the online single point interface of the Government of Gujarat to facilitate Investors. This portal is being administered by the Industries and Mines Department, Govt. of Gujarat. This portal will facilitate the single window clearance of Applications which are through approval route.",
  keywords: "Investor Facilitation Portal, SWP, IFP, GUJARAT, Investor, Industry, Approvals, NOC, Cleranace, Industries Department, Incentives, BtoG, iNDEXTb, Industries Commissioner",
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Default>{children}</Default>
      </body>
    </html>
  );

}
