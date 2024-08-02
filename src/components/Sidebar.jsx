import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  Store as ProductsIcon,
  Receipt as QuotationsIcon,
  SyncAlt as TransfersIcon,
  AttachMoney as ExpensesIcon,
  People as PeopleIcon,
  Security as RolesPermissionsIcon,
  LocalShipping as WarehouseIcon,
  Report as ReportsIcon,
  ExpandLess,
  ExpandMore,
  Category as CategoryIcon,
  BrandingWatermark as BrandIcon,
  ViewModule as UnitIcon,
  ViewComfy as BaseUnitIcon,
  Print as PrintIcon,
  LocalMall as SalesIcon,
  RestorePage as SalesReturnIcon,
  Group as SuppliersIcon,
  Person as CustomersIcon,
  PersonOutline as UsersIcon,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  PointOfSale as PosIcon, // Add POS Icon
} from "@mui/icons-material";
import "./Sidebar.css";

const Sidebar = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const [openPeople, setOpenPeople] = useState(false);
  const [openExpenses, setOpenExpenses] = useState(false);
  const [openSales, setOpenSales] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false); // Add state to control sidebar width

  const handleProductsClick = () => {
    setOpenProducts(!openProducts);
  };

  const handlePeopleClick = () => {
    setOpenPeople(!openPeople);
  };

  const handleExpensesClick = () => {
    setOpenExpenses(!openExpenses);
  };

  const handleSalesClick = () => {
    setOpenSales(!openSales);
  };

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`sidebar ${isMinimized ? "minimized" : ""}`}>
      <IconButton onClick={toggleSidebar} className="toggle-button">
        {isMinimized ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
      <div className="sidebar-content">
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Dashboard" />}
          </ListItem>

          {/* Add POS link here */}
          <ListItem button component={Link} to="/pos">
            <ListItemIcon>
              <PosIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="POS" />}
          </ListItem>

          <ListItem button onClick={handleProductsClick}>
            <ListItemIcon>
              <ProductsIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Products" />}
            {!isMinimized && (openProducts ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse
            in={openProducts && !isMinimized}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/products">
                <ListItemIcon>
                  <ProductsIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
              <ListItem button component={Link} to="/productCategories">
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Product Categories" />
              </ListItem>
              <ListItem button component={Link} to="/brands">
                <ListItemIcon>
                  <BrandIcon />
                </ListItemIcon>
                <ListItemText primary="Brands" />
              </ListItem>
              <ListItem button component={Link} to="/units">
                <ListItemIcon>
                  <UnitIcon />
                </ListItemIcon>
                <ListItemText primary="Units" />
              </ListItem>
              <ListItem button component={Link} to="/baseunits">
                <ListItemIcon>
                  <BaseUnitIcon />
                </ListItemIcon>
                <ListItemText primary="Base Units" />
              </ListItem>
              <ListItem button component={Link} to="/print-barcode">
                <ListItemIcon>
                  <PrintIcon />
                </ListItemIcon>
                <ListItemText primary="Print Barcode" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handlePeopleClick}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="People" />}
            {!isMinimized && (openPeople ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse
            in={openPeople && !isMinimized}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/suppliers">
                <ListItemIcon>
                  <SuppliersIcon />
                </ListItemIcon>
                <ListItemText primary="Suppliers" />
              </ListItem>
              <ListItem button component={Link} to="/customers">
                <ListItemIcon>
                  <CustomersIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
              </ListItem>
              <ListItem button component={Link} to="/users">
                <ListItemIcon>
                  <UsersIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleExpensesClick}>
            <ListItemIcon>
              <ExpensesIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Expenses" />}
            {!isMinimized && (openExpenses ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse
            in={openExpenses && !isMinimized}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/expenses">
                <ListItemIcon>
                  <ExpensesIcon />
                </ListItemIcon>
                <ListItemText primary="Expenses" />
              </ListItem>
              <ListItem button component={Link} to="/expense-categories">
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Expense Categories" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={handleSalesClick}>
            <ListItemIcon>
              <SalesIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Sales" />}
            {!isMinimized && (openSales ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          <Collapse in={openSales && !isMinimized} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/sale">
                <ListItemIcon>
                  <SalesIcon />
                </ListItemIcon>
                <ListItemText primary="Sales" />
              </ListItem>
              <ListItem button component={Link} to="/sales-returns">
                <ListItemIcon>
                  <SalesReturnIcon />
                </ListItemIcon>
                <ListItemText primary="Sales Returns" />
              </ListItem>
            </List>
          </Collapse>

          <ListItem button component={Link} to="/quotations">
            <ListItemIcon>
              <QuotationsIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Quotations" />}
          </ListItem>
          <ListItem button component={Link} to="/transfers">
            <ListItemIcon>
              <TransfersIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Transfers" />}
          </ListItem>
          <ListItem button component={Link} to="/roles-permissions">
            <ListItemIcon>
              <RolesPermissionsIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Roles/Permissions" />}
          </ListItem>
          <ListItem button component={Link} to="/warehouse">
            <ListItemIcon>
              <WarehouseIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Warehouse" />}
          </ListItem>
          <ListItem button component={Link} to="/reports">
            <ListItemIcon>
              <ReportsIcon />
            </ListItemIcon>
            {!isMinimized && <ListItemText primary="Reports" />}
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
