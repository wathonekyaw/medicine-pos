import React from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";

const rows = [
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "AZIFAM 100 Susp (AZIFAM 100 Susp (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 3500.0,
    total: 3500.0,
  },
  {
    name: "Auritz 10 (Auritz 10 (A))",
    date: "2028-07-01",
    uom: "Each",
    qty: 1,
    price: 8400.0,
    total: 8400.0,
  },
];

const POS = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box p={2} flex="1">
        <Typography variant="h4" gutterBottom>
          POS စာမျက်နှာ
        </Typography>
        <Box mb={2}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="ထုတ်ကုန်များကိုရှာဖွေပါ..."
            InputProps={{
              endAdornment: (
                <Button variant="contained" sx={{ ml: 1 }}>
                  🔍
                </Button>
              ),
            }}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ကုန်ပစ္စည်း</TableCell>
                <TableCell>E Date</TableCell>
                <TableCell>UOM</TableCell>
                <TableCell>ဈေးနှုန်း</TableCell>
                <TableCell>အရေအတွက်</TableCell>
                <TableCell>စုစုပေါင်း</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <TextField
                      select
                      SelectProps={{ native: true }}
                      value={row.uom}
                      size="small"
                    >
                      <option value="Each">Each</option>
                      <option value="Box">Box</option>
                    </TextField>
                  </TableCell>
                  <TableCell>{row.price.toLocaleString()} Ks</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      defaultValue={row.qty}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.total.toLocaleString()} Ks</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} p={2} sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                စုစုပေါင်းအရေအတွက်: 2 (2.00Ks)
              </Typography>
              <Typography variant="body1">
                လျှော့စျေး: (0.00Ks) 0.00Ks
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Typography variant="h6" sx={{ marginRight: 2 }}>
                စုစုပေါင်း: 11,900.00Ks
              </Typography>
              <Button variant="contained" color="primary">
                အတည်ပြုသည်
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
          position: "sticky",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#f44336",
            color: "white",
            flex: 1,
            marginRight: 1,
          }}
        >
          ပယ်ဖျက်
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff9800",
            color: "white",
            flex: 1,
            marginRight: 1,
          }}
        >
          ဆက်လက်လုပ်ဆောင်ရန်
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#4caf50", color: "white", flex: 1 }}
        >
          အတည်ပြုသည်
        </Button>
      </Box>
    </Box>
  );
};

export default POS;
