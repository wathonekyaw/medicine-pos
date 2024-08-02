// src/components/Sidebar.jsx
import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
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
} from "@mui/icons-material";
import "./Sidebar.css";

const Sidebar = () => {
  const [openProducts, setOpenProducts] = useState(false);
  const [openPeople, setOpenPeople] = useState(false);
  const [openExpenses, setOpenExpenses] = useState(false);
  const [openSales, setOpenSales] = useState(false);

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

  return (
    <List>
      <ListItem button component={Link} to="/dashboard">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button onClick={handleProductsClick}>
        <ListItemIcon>
          <ProductsIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
        {openProducts ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openProducts} timeout="auto" unmountOnExit>
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
        <ListItemText primary="People" />
        {openPeople ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openPeople} timeout="auto" unmountOnExit>
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
        <ListItemText primary="Expenses" />
        {openExpenses ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openExpenses} timeout="auto" unmountOnExit>
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
        <ListItemText primary="Sales" />
        {openSales ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSales} timeout="auto" unmountOnExit>
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
        <ListItemText primary="Quotations" />
      </ListItem>
      <ListItem button component={Link} to="/transfers">
        <ListItemIcon>
          <TransfersIcon />
        </ListItemIcon>
        <ListItemText primary="Transfers" />
      </ListItem>
      <ListItem button component={Link} to="/roles-permissions">
        <ListItemIcon>
          <RolesPermissionsIcon />
        </ListItemIcon>
        <ListItemText primary="Roles/Permissions" />
      </ListItem>
      <ListItem button component={Link} to="/warehouse">
        <ListItemIcon>
          <WarehouseIcon />
        </ListItemIcon>
        <ListItemText primary="Warehouse" />
      </ListItem>
      <ListItem button component={Link} to="/reports">
        <ListItemIcon>
          <ReportsIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
