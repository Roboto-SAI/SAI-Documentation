import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Philosophy from "./pages/Philosophy";
import Architecture from "./pages/Architecture";
import Memory from "./pages/Memory";
import Safety from "./pages/Safety";
import Workflows from "./pages/Workflows";
import Licensing from "./pages/Licensing";
import Manifest from "./pages/Manifest";
import Notice from "./pages/Notice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/workflows" element={<Workflows />} />
            <Route path="/licensing" element={<Licensing />} />
            <Route path="/manifest" element={<Manifest />} />
            <Route path="/notice" element={<Notice />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
