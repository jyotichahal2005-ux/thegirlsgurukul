import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import ChatBot from "@/components/ChatBot";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Admissions from "@/pages/Admissions";
import Academics from "@/pages/Academics";
import Faculty from "@/pages/Faculty";
import Gallery from "@/pages/Gallery";
import Documents from "@/pages/Documents";
import FeeStructure from "@/pages/FeeStructure";
import NewsEvents from "@/pages/NewsEvents";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/academics" component={Academics} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/documents" component={Documents} />
          <Route path="/fee-structure" component={FeeStructure} />
          <Route path="/news-events" component={NewsEvents} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <ChatBot />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
