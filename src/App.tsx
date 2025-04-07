
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ContactDetails from "./pages/ContactDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-details" element={<ContactDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
