
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/overview";

// Placeholder for pages under development
function Placeholder({ title }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        {title}
      </h1>

      <p className="text-gray-500 mt-2">
        This GreenOps module is under development.
      </p>
    </div>
  );
}

// Main application
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Overview />} />

          <Route
            path="/infrastructure"
            element={<Placeholder title="Infrastructure Monitoring" />}
          />

          <Route
            path="/ai-insights"
            element={<Placeholder title="AI Insights" />}
          />

          <Route
            path="/recommendations"
            element={<Placeholder title="Optimization Recommendations" />}
          />

          <Route
            path="/sustainability"
            element={<Placeholder title="Sustainability Analytics" />}
          />

          <Route
            path="/reports"
            element={<Placeholder title="Reports" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
