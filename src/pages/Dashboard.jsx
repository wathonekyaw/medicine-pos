import React from "react";
import { Typography, Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "16px",
        // boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h6">Aung Tha Bu Medicine</Typography>
    </Box>
  );
};

const MainContent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [33, 53, 85, 41, 44, 65, 67],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <Box sx={{ padding: "16px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: "16px" }}>
            <Link to="/pos" style={{ textDecoration: "none" }}>
              <Typography variant="h6">POS</Typography>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: "16px" }}>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <Typography variant="h6">Products</Typography>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: "16px" }}>
            <Link to="/sale" style={{ textDecoration: "none" }}>
              <Typography variant="h6">Sales</Typography>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: "16px" }}>
            <Link to="/reports" style={{ textDecoration: "none" }}>
              <Typography variant="h6">Reports</Typography>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ padding: "16px" }}>
            <Typography variant="h6">Sales Overview</Typography>
            <Line data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

const Dashboard = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Header />
      <MainContent />
    </Box>
  );
};

export default Dashboard;
