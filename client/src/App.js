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

import AdminOrdersList from './pages/admin/OrdersList.js'
import AdminOrderDetails from './pages/admin/OrderDetails.js'
import AdminOrderInvoice from './pages/admin/OrderInvoice.js'

import AdminQuotesList from './pages/admin/QuotesList.js'

import AdminPartsList from './pages/admin/PartsList.js'
import AdminPartDetails from './pages/admin/PartDetails.js'

import AdminMachineModelsList from './pages/admin/MachineModelsList.js'
import AdminInstallBaseList from './pages/admin/InstallBaseList.js'
import AdminOnboardingsList from './pages/admin/OnboardingsList.js'

import AdminDocumentsList from './pages/admin/DocumentsList.js'
import AdminDocumentDetail from './pages/admin/DocumentDetail.js'

import AdminLoginStatisticsList from './pages/admin/LoginStatisticsList.js'
import AdminUsersList from './pages/admin/UsersList.js'
import AdminUserGroupsList from './pages/admin/UserGroupsList.js'


const App = () => {

  return (
    <Router>
      {/* <Header /> */}
      <Shell />
      <Routes>

        {/* Admin */}
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/admin_settings" element={<AdminSettings />} />


        <Route path="/admin_orders" element={<AdminOrdersList />} />
        <Route path="/admin_order_{}_details" element={<AdminOrderDetails />} />
        <Route path="/admin_order_invoice" element={<AdminOrderInvoice />} />

        <Route path="/admin_quotes" element={<AdminQuotesList />} />

        <Route path="/admin_parts" element={<AdminPartsList />} />
        <Route path="/admin_part_details" element={<AdminPartDetails />} />

        <Route path="/admin_machine_models" element={<AdminMachineModelsList />} />
        <Route path="/admin_install_base" element={<AdminInstallBaseList />} />
        <Route path="/admin_onboardings" element={<AdminOnboardingsList />} />

        <Route path="/admin_documents" element={<AdminDocumentsList />} />
        <Route path="/admin_document_{}" element={<AdminDocumentDetail />} />


        <Route path="/admin_login_statistics" element={<AdminLoginStatisticsList />} />
        <Route path="/admin_users" element={<AdminUsersList />} />
        <Route path="/admin_user_groups" element={<AdminUserGroupsList />} />


      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
