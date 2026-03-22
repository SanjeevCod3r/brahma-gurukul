import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow min-w-0 overflow-x-hidden pt-0">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
