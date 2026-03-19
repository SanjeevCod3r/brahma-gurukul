import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import OmLoader from "@/components/ui/om-loader";

// Layout & UI
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Cbse from "@/pages/Cbse";
import Gurukul from "@/pages/Gurukul";
import Admissions from "@/pages/Admissions";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cbse" component={Cbse} />
        <Route path="/gurukul" component={Gurukul} />
        <Route path="/admissions" component={Admissions} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <OmLoader onComplete={handleLoaderComplete} duration={3600000} />}
      {!showLoader && (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      )}
    </>
  );
}

export default App;
