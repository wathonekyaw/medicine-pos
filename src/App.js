import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import { auth } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/sidebar-sub-items/Products";
import ProductCategories from "./pages/sidebar-sub-items/ProductCategories";
import Brands from "./pages/sidebar-sub-items/Brands";
import Units from "./pages/sidebar-sub-items/Units";
import BaseUnits from "./pages/sidebar-sub-items/BaseUnits";
import PrintBarcode from "./pages/sidebar-sub-items/PrintBarcode";
import Suppliers from "./pages/sidebar-sub-items/Suppliers";
import Customers from "./pages/sidebar-sub-items/Customers";
import Users from "./pages/sidebar-sub-items/Users";
import Expense from "./pages/sidebar-sub-items/Expense";
import ExpenseCategories from "./pages/sidebar-sub-items/ExpenseCategories";
import Sale from "./pages/sidebar-sub-items/Sale";
import SalesReturns from "./pages/sidebar-sub-items/SalesReturns";
import Quotations from "./pages/Quotations";
import Transfers from "./pages/Transfers";
import Expenses from "./pages/Expenses";
import RolesPermissions from "./pages/RolesPermissions";
import Warehouse from "./pages/Warehouse";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import POS from "./pages/sidebar-sub-items/POS.jsx";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <CssBaseline />
      {user ? (
        <>
          <Navbar />
          <Box display="flex">
            <Box width="240px">
              <Sidebar />
            </Box>
            <Box flexGrow={1} p={3}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/productCategories"
                  element={<ProductCategories />}
                />
                <Route path="/brands" element={<Brands />} />
                <Route path="/units" element={<Units />} />
                <Route path="/baseunits" element={<BaseUnits />} />
                <Route path="/print-barcode" element={<PrintBarcode />} />
                <Route path="/suppliers" element={<Suppliers />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/users" element={<Users />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/expense" element={<Expense />} />
                <Route
                  path="/expense-categories"
                  element={<ExpenseCategories />}
                />
                <Route path="/sale" element={<Sale />} />
                <Route path="/sales-returns" element={<SalesReturns />} />
                <Route path="/quotations" element={<Quotations />} />
                <Route path="/transfers" element={<Transfers />} />
                <Route
                  path="/roles-permissions"
                  element={<RolesPermissions />}
                />
                <Route path="/warehouse" element={<Warehouse />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/pos" element={<POS />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
              </Routes>
            </Box>
          </Box>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
