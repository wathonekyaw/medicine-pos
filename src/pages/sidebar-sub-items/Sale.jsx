import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "ရက်စွဲ", width: 150 },
  { field: "employee", headerName: "ဝန်ထမ်း", width: 150 },
  { field: "total", headerName: "စုစုပေါင်း", width: 150 },
  { field: "discount", headerName: "လျှော့စျေး", width: 150 },
  { field: "netTotal", headerName: "အသားတင်", width: 150 },
  { field: "tax", headerName: "အခွန်", width: 150 },
  { field: "grandTotal", headerName: "စုစုပေါင်း", width: 150 },
  { field: "status", headerName: "အခြေအနေ", width: 150 },
  {
    field: "actions",
    headerName: "လုပ်ဆောင်ချက်များ",
    width: 200,
    renderCell: () => (
      <>
        <button>ပြပါ</button>
        <button>တည်းဖြတ်</button>
        <button>ဖျက်ပစ်ပါ</button>
      </>
    ),
  },
];

const rows = [
  {
    id: 1,
    date: "22/07/2024 10:41 AM",
    employee: "ခိုင်မလွှာ",
    total: "67,400.00Ks",
    discount: "0.00Ks",
    netTotal: "67,400.00Ks",
    tax: "0.00Ks",
    grandTotal: "67,400.00Ks",
    status: "အောင်မြင်သည်",
    actions: "",
  },
];

const POS = () => {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          အရောင်း
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} pageSize={10} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default POS;
