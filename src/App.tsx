import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import MissionReadyRmf from './pages/MissionReadyRmf';
import ComplianceAssessment from './pages/ComplianceAssessment';
import MissionMetrics from './pages/MissionMetrics';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<MissionReadyRmf />} />
          <Route path="/compliance" element={<ComplianceAssessment />} />
          <Route path="/metrics" element={<MissionMetrics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
