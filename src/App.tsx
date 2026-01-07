import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Auth from "./pages/Auth";
import ForProviders from "./pages/ForProviders";
import ForPartners from "./pages/ForPartners";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import Karriere from "./pages/Karriere";
import JobDetail from "./pages/JobDetail";
import BlogPost from "./pages/BlogPost";
import BookingResults from "./pages/BookingResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/buchen" element={<BookingResults />} />
          <Route path="/wir" element={<About />} />
          <Route path="/anmelden" element={<Auth />} />
          <Route path="/fuer-anbieter" element={<ForProviders />} />
          <Route path="/fuer-partner" element={<ForPartners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/hilfe" element={<HelpCenter />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/karriere" element={<Karriere />} />
          <Route path="/karriere/:slug" element={<JobDetail />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;