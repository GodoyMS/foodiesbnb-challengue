import FoddieLayout from "@/layouts/FoddieLayout";
import RootLayout from "@/layouts/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-poppins",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  if (pageProps.layout === "foodies") {
    return (
      <RootLayout>
        <FoddieLayout>
          <Component {...pageProps} />
        </FoddieLayout>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
