import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import MissionReadyRmf from './pages/MissionReadyRmf';
import ComplianceAssessment from './pages/ComplianceAssessment';
import MissionMetrics from './pages/MissionMetrics';
import RequestBriefing from './pages/RequestBriefing';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MissionReadyRmf />} />
          <Route path="/compliance" element={<ComplianceAssessment />} />
          <Route path="/metrics" element={<MissionMetrics />} />
          <Route path="/request-briefing" element={<RequestBriefing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
