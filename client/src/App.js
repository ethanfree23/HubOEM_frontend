import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


import Shell from './layout/Shell.js'

// Admin
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


// CPG
import CpgDashboard from './pages/cpg/Dashboard.js'
import CpgSettings from './pages/cpg/Settings.js'
import CpgOrdersList from './pages/cpg/OrdersList.js'
import CpgOrderDetails from './pages/cpg/OrderDetails.js'
import CpgOrderInvoice from './pages/cpg/OrderInvoice.js'
import CpgQuotesList from './pages/cpg/QuotesList.js'
import CpgPartsList from './pages/cpg/PartsList.js'
import CpgPartDetails from './pages/cpg/PartDetails.js'
import CpgMachineModelsList from './pages/cpg/MachineModelsList.js'
import CpgInstallBaseList from './pages/cpg/InstallBaseList.js'
import CpgOnboardingsList from './pages/cpg/OnboardingsList.js'
// import CpgDocumentsList from './pages/cpg/DocumentsList.js'
import CpgDocumentDetail from './pages/cpg/DocumentDetail.js'
import CpgLoginStatisticsList from './pages/cpg/LoginStatisticsList.js'
import CpgUsersList from './pages/cpg/UsersList.js'
import CpgUserGroupsList from './pages/cpg/UserGroupsList.js'


// Distributor
import DistributorDashboard from './pages/distributor/Dashboard.js'
import DistributorSettings from './pages/distributor/Settings.js'
import DistributorOrdersList from './pages/distributor/OrdersList.js'
import DistributorOrderDetails from './pages/distributor/OrderDetails.js'
import DistributorOrderInvoice from './pages/distributor/OrderInvoice.js'
import DistributorQuotesList from './pages/distributor/QuotesList.js'
import DistributorPartsList from './pages/distributor/PartsList.js'
import DistributorPartDetails from './pages/distributor/PartDetails.js'
import DistributorMachineModelsList from './pages/distributor/MachineModelsList.js'
import DistributorInstallBaseList from './pages/distributor/InstallBaseList.js'
import DistributorOnboardingsList from './pages/distributor/OnboardingsList.js'
import DistributorDocumentsList from './pages/distributor/DocumentsList.js'
import DistributorDocumentDetail from './pages/distributor/DocumentDetail.js'
import DistributorLoginStatisticsList from './pages/distributor/LoginStatisticsList.js'
import DistributorUsersList from './pages/distributor/UsersList.js'
import DistributorUserGroupsList from './pages/distributor/UserGroupsList.js'


// OEM
import OemDashboard from './pages/oem/Dashboard.js'
import OemSettings from './pages/oem/Settings.js'
import OemOrdersList from './pages/oem/OrdersList.js'
import OemOrderDetails from './pages/oem/OrderDetails.js'
import OemOrderInvoice from './pages/oem/OrderInvoice.js'
import OemQuotesList from './pages/oem/QuotesList.js'
import OemPartsList from './pages/oem/PartsList.js'
import OemPartDetails from './pages/oem/PartDetails.js'
import OemMachineModelsList from './pages/oem/MachineModelsList.js'
import OemInstallBaseList from './pages/oem/InstallBaseList.js'
import OemOnboardingsList from './pages/oem/OnboardingsList.js'
import OemDocumentsList from './pages/oem/DocumentsList.js'
import OemDocumentDetail from './pages/oem/DocumentDetail.js'
import OemLoginStatisticsList from './pages/oem/LoginStatisticsList.js'
import OemUsersList from './pages/oem/UsersList.js'
import OemUserGroupsList from './pages/oem/UserGroupsList.js'


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



        {/* CPG */}
        <Route path="/cpg_dashboard" element={<CpgDashboard />} />
        <Route path="/cpg_settings" element={<CpgSettings />} />


        <Route path="/cpg_orders" element={<CpgOrdersList />} />
        <Route path="/cpg_order_{}_details" element={<CpgOrderDetails />} />
        <Route path="/cpg_order_invoice" element={<CpgOrderInvoice />} />

        <Route path="/cpg_quotes" element={<CpgQuotesList />} />

        <Route path="/cpg_parts" element={<CpgPartsList />} />
        <Route path="/cpg_part_details" element={<CpgPartDetails />} />

        <Route path="/cpg_machine_models" element={<CpgMachineModelsList />} />
        <Route path="/cpg_install_base" element={<CpgInstallBaseList />} />
        <Route path="/cpg_onboardings" element={<CpgOnboardingsList />} />

        {/* <Route path="/cpg_documents" element={<CpgDocumentsList />} /> */}
        <Route path="/cpg_document_{}" element={<CpgDocumentDetail />} />


        <Route path="/cpg_login_statistics" element={<CpgLoginStatisticsList />} />
        <Route path="/cpg_users" element={<CpgUsersList />} />
        <Route path="/cpg_user_groups" element={<CpgUserGroupsList />} />
     
     
     
        {/* OEM */}
        <Route path="/oem_dashboard" element={<OemDashboard />} />
        <Route path="/oem_settings" element={<OemSettings />} />


        <Route path="/oem_orders" element={<OemOrdersList />} />
        <Route path="/oem_order_{}_details" element={<OemOrderDetails />} />
        <Route path="/oem_order_invoice" element={<OemOrderInvoice />} />

        <Route path="/oem_quotes" element={<OemQuotesList />} />

        <Route path="/oem_parts" element={<OemPartsList />} />
        <Route path="/oem_part_details" element={<OemPartDetails />} />

        <Route path="/oem_machine_models" element={<OemMachineModelsList />} />
        <Route path="/oem_install_base" element={<OemInstallBaseList />} />
        <Route path="/oem_onboardings" element={<OemOnboardingsList />} />

        <Route path="/oem_documents" element={<OemDocumentsList />} />
        <Route path="/oem_document_{}" element={<OemDocumentDetail />} />


        <Route path="/oem_login_statistics" element={<OemLoginStatisticsList />} />
        <Route path="/oem_users" element={<OemUsersList />} />
        <Route path="/oem_user_groups" element={<OemUserGroupsList />} />
     


        {/* Distributor */}
        <Route path="/distributor_dashboard" element={<DistributorDashboard />} />
        <Route path="/distributor_settings" element={<DistributorSettings />} />


        <Route path="/distributor_orders" element={<DistributorOrdersList />} />
        <Route path="/distributor_order_{}_details" element={<DistributorOrderDetails />} />
        <Route path="/distributor_order_invoice" element={<DistributorOrderInvoice />} />

        <Route path="/distributor_quotes" element={<DistributorQuotesList />} />

        <Route path="/distributor_parts" element={<DistributorPartsList />} />
        <Route path="/distributor_part_details" element={<DistributorPartDetails />} />

        <Route path="/distributor_machine_models" element={<DistributorMachineModelsList />} />
        <Route path="/distributor_install_base" element={<DistributorInstallBaseList />} />
        <Route path="/distributor_onboardings" element={<DistributorOnboardingsList />} />

        <Route path="/distributor_documents" element={<DistributorDocumentsList />} />
        <Route path="/distributor_document_{}" element={<DistributorDocumentDetail />} />


        <Route path="/distributor_login_statistics" element={<DistributorLoginStatisticsList />} />
        <Route path="/distributor_users" element={<DistributorUsersList />} />
        <Route path="/distributor_user_groups" element={<DistributorUserGroupsList />} />


      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
