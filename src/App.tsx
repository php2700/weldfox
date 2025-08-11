import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";
import './App.css'
import { ManualRollingShutters } from "./components/services/mannual";
import { MotorizedShutters } from "./components/services/motorized-shutter";
import { MsRollingShutters } from "./components/services/ms-rolling-shuuter";
import { SsRollingShutters } from "./components/services/ss-rolling-shutter";
import { PerfortedRollingShutters } from "./components/services/perforted-rolling-shutter";
import { GrillShutters } from "./components/services/grill-rolling-shutter";
import { GalvanizedShutters } from "./components/services/galvanized-rolling-shutter";
import { AluminiumShutters } from "./components/services/aluminium-rolling-shutter";
import { TransparentRollingShutters } from "./components/services/transparent-shutter";
import { FireRatedShutters } from "./components/services/fire-rated-shutter";
import { AluminiumpuffShutters } from "./components/services/aluminium-puff";
import { PowderCoatedShutters } from "./components/services/powder-coated";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/blog' element={<Blog/>} /> 
          <Route path='/contact' element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />


          {/* services-rolling shutter */}
          <Route path="/mannual-rolling" element={<ManualRollingShutters/>} /> 
          <Route path="/rolling-shutter" element={<ManualRollingShutters/>} />  
          <Route path="/motorized-shutter" element={<MotorizedShutters/>} />  
          <Route path="/ms-rolling-shtter" element={<MsRollingShutters/>} />  
          <Route path="/ss-rolling-shtter" element={<SsRollingShutters/>} />  
          <Route path="/perforted-rolling-shutter" element={<PerfortedRollingShutters/>} />  
          <Route path="/grill-rolling-shutter" element={<GrillShutters/>} />  
          <Route path="/galvanized-rolling-shutter" element={<GalvanizedShutters/>} />  
          <Route path="/aluminium-rolling-shutter" element={<AluminiumShutters/>} />  
          <Route path="/transparent-rolling-shutter" element={<TransparentRollingShutters/>} />  
          <Route path="/fire-rated-shurtter" element={<FireRatedShutters/>} />  
          <Route path="/aluminium-puff-rolling-shutter" element={<AluminiumpuffShutters/>} />  
          <Route path="/powder-coated-rolling-shutter" element={<PowderCoatedShutters/>} />   

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
