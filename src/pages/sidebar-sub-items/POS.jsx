import React, { useState, useEffect } from "react";
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
import axios from "axios";

const POS = () => {
  const [rows, setRows] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setRows(response.data.map((row) => ({ ...row, qty: 1 })));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleQtyChange = (index, value) => {
    setRows((prevRows) =>
      prevRows.map((row, i) => (i === index ? { ...row, qty: value } : row))
    );
  };

  const filteredRows = rows.filter(
    (row) =>
      row.productName &&
      row.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalQuantity = filteredRows.reduce(
    (sum, row) => sum + (row.qty || 0),
    0
  );
  const totalPrice = filteredRows.reduce(
    (sum, row) => sum + (row.productPrice || 0) * (row.qty || 0),
    0
  );

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
            value={searchQuery}
            onChange={handleSearchChange}
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
              {filteredRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.productName || "N/A"}</TableCell>
                  <TableCell>
                    {new Date(row.createdOn).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <TextField
                      select
                      SelectProps={{ native: true }}
                      value={row.unit || ""}
                      size="small"
                    >
                      <option value="Each">Each</option>
                      <option value="Box">Box</option>
                    </TextField>
                  </TableCell>
                  <TableCell>
                    {row.productPrice ? row.productPrice.toLocaleString() : "0"}{" "}
                    Ks
                  </TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={row.qty}
                      onChange={(e) =>
                        handleQtyChange(index, parseInt(e.target.value) || 0)
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    {(row.productPrice * row.qty).toLocaleString()} Ks
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} p={2} sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                စုစုပေါင်းအရေအတွက်: {totalQuantity} (
                {totalPrice.toLocaleString()} Ks)
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
                စုစုပေါင်း: {totalPrice.toLocaleString()} Ks
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
