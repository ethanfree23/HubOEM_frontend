import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// import Header from './layout/Header.js'
// import Footer from './layout/Footer.js'
import Shell from './layout/Shell.js'
import AdminDashboard from './pages/admin/Dashboard.js'
import AdminSettings from './pages/admin/Settings.js'

const App = () => {

  return (
    <Router>
      {/* <Header /> */}
      <Shell />
      <Routes>
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/admin_settings" element={<AdminSettings />} />
        <Route path="/admin_settings" element={<AdminSettings />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
