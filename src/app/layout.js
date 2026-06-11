import { Poppins, IM_Fell_English } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const imFellEnglish = IM_Fell_English({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-im-fell",
});

export const metadata = {
  title: "International Conference on Innovation and Sustainability in Civil Engineering: Shaping Tomorrow’s Infrastructure 2027",
  description: "INTERNATIONAL CONFERENCE ON TRADITIONAL KNOWLEDGE SYSTEM organized by Department of Architecture and Planning, National Institute of Technology Patna, Bihar, India",
  icons: {
    icon: [
      {
        url: "/img/ISCESTI_main.png",
        sizes: "any",
      },
    ],
    shortcut: "/img/ISCESTI_main.png",
    apple: "/img/ISCESTI_main.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/ISCESTI_main.png" type="image/png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} ${imFellEnglish.variable}`}>
        {children}
      </body>
    </html>
  );
}
