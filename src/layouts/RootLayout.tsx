import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose weights you need
  variable: "--font-poppins",
  display: "swap",
});
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={poppins.className}>
      <div>
        <Toaster duration={5000} />
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
