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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

const POS = () => {
  const [products, setProducts] = useState([]);
  const [posItems, setPosItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
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
    setPosItems((prevItems) =>
      prevItems.map((item, i) => (i === index ? { ...item, qty: value } : item))
    );
  };

  const handleAddToPOS = (product) => {
    setPosItems((prevItems) => [...prevItems, { ...product, qty: 1 }]);
  };

  const handleRemoveFromPOS = (index) => {
    setPosItems((prevItems) => prevItems.filter((item, i) => i !== index));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDiscountChange = (event) => {
    const enteredDiscount = parseFloat(event.target.value) || 0;
    const totalPrice = calculateTotalPrice(posItems);
    if (enteredDiscount > totalPrice) {
      setDiscount(totalPrice);
    } else {
      setDiscount(enteredDiscount);
    }
  };

  const handleDiscountFocus = (event) => {
    if (discount === 0) {
      setDiscount("");
    }
  };

  const handleDiscountBlur = (event) => {
    if (event.target.value === "") {
      setDiscount(0);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.productName &&
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const calculateTotalPrice = (items) => {
    return items.reduce(
      (sum, item) => sum + (item.productPrice || 0) * (item.qty || 0),
      0
    );
  };

  const totalQuantity = posItems.reduce(
    (sum, item) => sum + (item.qty || 0),
    0
  );
  const totalPrice = calculateTotalPrice(posItems);
  const finalPrice = Math.max(totalPrice - discount, 0);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

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
                <TableCell>လှည့်လည်</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedProducts.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{product.productName || "N/A"}</TableCell>
                  <TableCell>
                    {new Date(product.createdOn).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <TextField
                      select
                      SelectProps={{ native: true }}
                      value={product.unit || ""}
                      size="small"
                    >
                      <option value="Each">Each</option>
                      <option value="Box">Box</option>
                    </TextField>
                  </TableCell>
                  <TableCell>
                    {product.productPrice
                      ? product.productPrice.toLocaleString()
                      : "0"}{" "}
                    Ks
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToPOS(product)}
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="contained"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >
            Previous
          </Button>
          <Typography variant="body1">
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            variant="contained"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            Next
          </Button>
        </Box>
        <Box mt={2}>
          <Typography variant="h6">POS Items</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ကုန်ပစ္စည်း</TableCell>
                  <TableCell>ဈေးနှုန်း</TableCell>
                  <TableCell>အရေအတွက်</TableCell>
                  <TableCell>စုစုပေါင်း</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.productName || "N/A"}</TableCell>
                    <TableCell>
                      {item.productPrice
                        ? item.productPrice.toLocaleString()
                        : "0"}{" "}
                      Ks
                    </TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          handleQtyChange(index, parseInt(e.target.value) || 0)
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      {(item.productPrice * item.qty).toLocaleString()} Ks
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="secondary"
                        onClick={() => handleRemoveFromPOS(index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box mt={2} p={2} sx={{ backgroundColor: "#f5f5f5", borderRadius: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                စုစုပေါင်းအရေအတွက်: {totalQuantity} (
                {totalPrice.toLocaleString()} Ks)
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                Discount:{" "}
                <TextField
                  type="number"
                  value={discount}
                  onChange={handleDiscountChange}
                  onFocus={handleDiscountFocus}
                  onBlur={handleDiscountBlur}
                  size="small"
                  variant="outlined"
                  margin="normal"
                  inputProps={{ min: 0 }}
                />{" "}
                Ks
              </Typography>
            </Grid>
          </Grid>
          <Box
            mt={2}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ marginRight: 2 }}>
              စုစုပေါင်း: {finalPrice.toLocaleString()} Ks
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              အတည်ပြုသည်
            </Button>
          </Box>
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
            "&:hover": { backgroundColor: "#d32f2f" },
          }}
        >
          ပယ်ဖျက်
        </Button>
        <Button variant="contained" color="primary">
          အတည်ပြုသည်
        </Button>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order Confirmation</DialogTitle>
        <DialogContent>
          <Box component="form">
            <TextField
              label="ဖောက်သည်အမည်"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="ဖောက်သည်ဖုန်းနံပါတ်"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>ငွေပေးချေမည့်နည်းလမ်း</InputLabel>
              <Select>
                <MenuItem value={"cash"}>ငွေသား</MenuItem>
                <MenuItem value={"credit"}>Credit</MenuItem>
                <MenuItem value={"online"}>Online</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="မှတ်ချက်"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ပယ်ဖျက်
          </Button>
          <Button onClick={handleClose} color="primary">
            အတည်ပြုသည်
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default POS;
