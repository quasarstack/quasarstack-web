import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import QuasarRetail from "@/pages/Projects/QuasarRetail";
import GreenOrbit from "@/pages/Projects/GreenOrbit";
import QuasarForge from "@/pages/Projects/QuasarForge";
import QuasarLearn from "@/pages/Projects/QuasarLearn";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/QuasarRetail" element={<QuasarRetail />} />
          <Route path="/QuasarLearn" element={<QuasarLearn />} />
          <Route path="/QuasarForge" element={<QuasarForge />} />
          <Route path="/GreenOrbit" element={<GreenOrbit />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
