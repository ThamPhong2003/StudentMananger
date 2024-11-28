import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'src/styles/global.scss';
import 'src/styles/variable.scss';
import DashboardLayout from './components/Layout/DashboardLayout/DashboardLayout';
import OverView from './pages/OverView';
import Category from './pages/Category';
import CampaignInforPage from './pages/CampaignInfor';
function App() {
  return (
    <Router>
      <Routes>
        {/* Route mặc định '/' sẽ chuyển hướng tới '/campaign_manager' */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* Route cho campaign_manager */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="home" element={<OverView />} />
          <Route path="category" element={<Category />} />
          <Route path="campaign" element={<CampaignInforPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
