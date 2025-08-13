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
import "./App.css";
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
import { Msgates } from "./components/services/gates/ms-gates";
import { Ssgates } from "./components/services/gates/ss-gates";
import { Automaticgates } from "./components/services/gates/automatic-gates";
import { Swinggates } from "./components/services/gates/swing-gates";
import { Slidegates } from "./components/services/gates/slide-gates";
import { Telescopic } from "./components/services/gates/telescopic";
import { CurveSliding } from "./components/services/gates/curve-sliding";
import { CurveGarage } from "./components/services/gates/curve-garage";
import { Bifolding } from "./components/services/gates/bi-folding-gate";
import { Trifolding } from "./components/services/gates/tri-folding-gate";
import { Collapsible } from "./components/services/gates/collapsible-gate";
import { Highspeeddoor } from "./components/services/gates/high-speed-door";
import { Automaticgarage } from "./components/services/gates/automatic-garage-door";
import { Automaticsensorglass } from "./components/services/gates/automatic-sensor-glass-door";
import { Automaticbarrier } from "./components/services/gates/automatic-barrier";
import { Docklevers } from "./components/services/gates/dock-levers";
import { Dockshelter } from "./components/services/gates/dock-sehelter";
import { Turnstile } from "./components/services/gates/turnstile";
import { Msrailing } from "./components/services/railings/ms-railing";
import { Ssrailing } from "./components/services/railings/ss-railing";
import { Structural } from "./components/services/railings/structural-railing";
import { Staircase } from "./components/services/railings/staircase";
import { Pargola } from "./components/services/railings/pargola";
import { Windowgrill } from "./components/services/railings/window-grill";
import { Compoundgrill } from "./components/services/railings/compound-grill";
import { Elevation } from "./components/services/railings/elevation";
import { Roofingwork } from "./components/services/railings/roofing-work";
import { Collapsable } from "./components/services/railings/collapsible-gate";
import { Safety } from "./components/services/railings/safety-grill";
import { RollingShutters } from "./components/services/rolling-shutter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />

          {/* services-rolling shutter */}
          <Route path="/mannual-rolling" element={<ManualRollingShutters />} />
          <Route path="/rolling-shutter" element={<RollingShutters />} />
          <Route path="/motorized-shutter" element={<MotorizedShutters />} />
          <Route path="/ms-rolling-shtter" element={<MsRollingShutters />} />
          <Route path="/ss-rolling-shtter" element={<SsRollingShutters />} />
          <Route
            path="/perforted-rolling-shutter"
            element={<PerfortedRollingShutters />}
          />
          <Route path="/grill-rolling-shutter" element={<GrillShutters />} />
          <Route
            path="/galvanized-rolling-shutter"
            element={<GalvanizedShutters />}
          />
          <Route
            path="/aluminium-rolling-shutter"
            element={<AluminiumShutters />}
          />
          <Route
            path="/transparent-rolling-shutter"
            element={<TransparentRollingShutters />}
          />
          <Route path="/fire-rated-shurtter" element={<FireRatedShutters />} />
          <Route
            path="/aluminium-puff-rolling-shutter"
            element={<AluminiumpuffShutters />}
          />
          <Route
            path="/powder-coated-rolling-shutter"
            element={<PowderCoatedShutters />}
          />

          {/* services-ms gates */}
          <Route path="/ms-gates" element={<Msgates />} />
          <Route path="/ss-gates" element={<Ssgates />} />
          <Route path="/automatic-gates" element={<Automaticgates />} />
          <Route path="/swing-gates" element={<Swinggates />} />
          <Route path="/sliding-gates" element={<Slidegates />} />
          <Route path="/telescopic-gate" element={<Telescopic />} />
          <Route path="/curve-slide-gate" element={<CurveSliding />} />
          <Route path="/curve-garage-gate" element={<CurveGarage />} />
          <Route path="/bi-folding-gate" element={<Bifolding />} />
          <Route path="/tri-folding-gate" element={<Trifolding />} />
          <Route path="/collapsible-gate" element={<Collapsible />} />
          <Route path="/high-speed-door" element={<Highspeeddoor />} />
          <Route path="/automatic-garage-door" element={<Automaticgarage />} />
          <Route
            path="/automatic-sensor-glass-door"
            element={<Automaticsensorglass />}
          />
          <Route path="/automatic-barries" element={<Automaticbarrier />} />
          <Route path="/dock-levers" element={<Docklevers />} />
          <Route path="/dock-shelters" element={<Dockshelter />} />
          <Route path="/turnstile" element={<Turnstile />} />

          {/* services-railing */}
          <Route path="/ms-railing" element={<Msrailing />} />
          <Route path="/ss-railing" element={<Ssrailing />} />
          <Route path="/structural-fabrication" element={<Structural />} />
          <Route path="/staircase" element={<Staircase />} />
          <Route path="/pergola" element={<Pargola />} />
          <Route path="/window-grill" element={<Windowgrill />} />
          <Route path="/compound-grill" element={<Compoundgrill />} />
          <Route path="/elevation" element={<Elevation />} />
          <Route path="/roofing" element={<Roofingwork />} />
          <Route path="/collapsible" element={<Collapsable />} />
          <Route path="/safety-grill" element={<Safety />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
